# Eksempel på "protokol"

pt afviklet fra https://python.microbit.org/v/2

```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
        print("POINT=3")
    elif button_b.is_pressed():
        display.show(Image.SAD)
        print("LYD=A")
    display.clear()

#eller

from microbit import *

while True:
    display.scroll('A')
    #display.show(Image.HEART)
    sleep(1000)
    print("POINT=3")
    print("STATUS=enter")
    print("STATUS=out")
    print("LYD=A")
```
