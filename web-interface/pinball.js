let points = 0;
let gameRunning = false;
let connected = false;

const config = {
  numberOfBalls: 3,
  output: {
    points: "#point",
    status: "#status",
    start: "#start",
    lives: "#lives",
  },
  sounds: {
    A: "./audio/airhorn.mp3",
    B: "./audio/darth-vader-power.mp3",
    C: "./audio/ding.mp3",
    D: "./audio/explosion.mp3",
  },
  debug: true,
};

init();

window.dispatch = dispatch;

function startGame() {
  config.numberOfBalls = 3;
  points = 0;
  gameRunning = true;
  dispatch("STATUS=nyt spil startet");
}

function gameOver() {
  document.querySelector(config.output.start).display = "initial";
  dispatch("STATUS=Game Over");
  gameRunning = false;
}

function init() {
  if (config.debug) {
    const ta = document.createElement("textarea");
    ta.id = "output";
    ta.rows = 10;
    document.body.appendChild(ta);
    console.log("tests");
  }
  dispatch("STATUS=Press start to play");
  setupEventListeners();
}

function setupEventListeners() {
  document.querySelector(config.output.start).addEventListener("click", (e) => {
    document.querySelector(config.output.start).display = "none";

    if (!connected) setUpMicroBit();

    startGame();

    //dispatch("LYD=A");
    dispatch("POINT=0");
    dispatch("STATUS= ");

    updateScreen();
  });

  navigator.usb.addEventListener("disconnect", function (event) {
    console.log("device disconnect");
    console.log(event);
    alert(event);
    connected = false;
  });
}

function dispatch(input) {
  const [key, value] = input.split("=");

  if (typeof key !== "string" || typeof value !== "string") return;

  if (config.debug) {
    logDebugCommand(input);
  }

  if (!gameRunning) {
    console.log("Ignoreret kommando, da spillet ikke kører: " + input);
    return;
  }

  if (value.includes("<")) {
    return;
  }

  switch (key) {
    case "POINT":
      if (isNaN(value)) break;

      points += Number(value);

      break;
    case "STATUS":
      if (value === "out") {
        config.numberOfBalls--;

        if (config.numberOfBalls < 1) {
          gameOver();
        }
      } else if (value === "enter") {
        updateStatus("Lad os spille");
      } else {
        updateStatus(value);
      }
      break;
    case "LYD":
      playSound(value);
      break;
  }

  updateScreen();
}

function updateStatus(text) {
  document.querySelector(config.output.status).textContent = text;
  setTimeout(() => {
    document.querySelector(config.output.status).textContent = "";
  }, 2000);
}

function updateScreen() {
  updateBallDisplay();
  document.querySelector(config.output.points).textContent = points;
}

function playSound(value) {
  const audio = new Audio(config.sounds[value]);
  audio.play();
}

function updateBallDisplay() {
  const element = document.querySelector(config.output.lives);
  element.innerHTML = "";
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < config.numberOfBalls; i++) {
    const li = document.createElement("li");
    fragment.appendChild(li);
  }
  element.appendChild(fragment);
}

async function setUpMicroBit() {
  const device = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x0d28, productId: 0x0204 }],
  });
  const transport = new DAPjs.WebUSB(device);
  const daplink = new DAPjs.DAPLink(transport);
  try {
    await daplink.connect();
    connected = true;
  } catch (error) {
    console.error(error.message || error);
    alert(error);
    return;
  }

  daplink.setSerialBaudrate(115200);
  daplink.startSerialRead();

  var buffer = "";

  daplink.on(DAPjs.DAPLink.EVENT_SERIAL_DATA, function (data) {
    buffer += data;

    while (true) {
      var datarowEnd = buffer.indexOf("#");
      if (datarowEnd == -1) {
        break;
      }

      var datarow = buffer.substring(0, datarowEnd).trim();

      dispatch(datarow);
      buffer = buffer.substring(datarowEnd + 1);
    }
  });
}

function logDebugCommand(command) {
  console.log(command); // first byte of data is length
  const outputElement = document.getElementById("output");
  outputElement.innerHTML += command + "\n";
  outputElement.scrollTop = outputElement.scrollHeight;
}
