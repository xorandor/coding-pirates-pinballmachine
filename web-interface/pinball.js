let points = 0;
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
function init() {
  if (config.debug) {
    const ta = document.createElement("textarea");
    ta.id = "output";
    document.body.appendChild(ta);
    console.log("tests");
  }
  dispatch("STATUS=Press start to play");
  setupEventListeners();
}
function setupEventListeners() {
  document.querySelector(config.output.start).addEventListener("click", (e) => {
    document.querySelector(config.output.start).getElementsByClassName.display =
      "none";
    points = 0;
    config.numberOfBalls = 3;
    updateBallDisplay();
    dispatch("LYD=A");
    dispatch("POINT=0");
    dispatch("STATUS= ");
    setUpMicroBit();
  });
  navigator.usb.addEventListener("disconnect", function (event) {
    console.log("device disconnect");
    console.log(event);
  });
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
function dispatch(input) {
  const [key, value] = input.split("=");

  if(typeof key !== 'string' || typeof value !== 'string')
    return;

  if (config.debug) {
    logDebugCommand(input);
  }
  if (value.includes("<")) {
    return;
  }
  switch (key) {
    case "POINT":

      if(isNaN(value))
        break;

      points += Number(value);
      document.querySelector("#point").textContent = points;
      break;
    case "STATUS":
      if (value === "out") {
        config.numberOfBalls--;
        updateBallDisplay();
        if (config.numberOfBalls < 1) {
          gameOver();
        }
      } else if (value === "enter") {
        document.querySelector("#status").textContent = "Lad os spille";
        setTimeout(() => {
          document.querySelector("#status").textContent = "";
        }, 2000);
      } else {
        document.querySelector("#status").textContent = value;
      }
      break;
    case "LYD":
      playSound(value);
      break;
  }
}
async function setUpMicroBit() {
  const device = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x0d28, productId: 0x0204 }],
  });
  const transport = new DAPjs.WebUSB(device);
  const daplink = new DAPjs.DAPLink(transport);
  try {
    await daplink.connect();
  } catch (error) {
    console.error(error.message || error);
    alert(error);
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
function gameOver() {
  document.querySelector(config.output.start).getElementsByClassName.display =
    "initial";
  dispatch("STATUS=Game Over");
}
