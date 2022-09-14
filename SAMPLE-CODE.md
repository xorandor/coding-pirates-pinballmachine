# Eksempel på "protokol"

pt afviklet fra https://python.microbit.org/v/2

```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
        print("LYD=A")
        print("STATUS=enter")
        sleep(500)
    elif button_b.is_pressed():
        display.show(Image.SAD)
        print("LYD=B")
        print("STATUS=out")
        sleep(500)
    elif pin0.is_touched():
        display.show(Image.SAD)
        print("POINT=1000")
        print("LYD=C")
        sleep(500)
    elif pin1.is_touched():
        display.show(Image.SAD)
        print("POINT=1500")
        print("LYD=D")
        sleep(500)
    elif pin2.is_touched():
        display.show(Image.SAD)
        print("POINT=1500")
        print("LYD=D")
        sleep(500)

    display.clear()

#eller

from microbit import *

while True:
    #display.scroll('A')
    #display.show(Image.HEART)
    sleep(1000)
    print("POINT=3") # 1-xxxxxxx
    print("STATUS=enter")
    print("STATUS=out")
    print("LYD=A") # A,B,C eller D
```
