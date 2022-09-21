# Lav din egen pinball maskine

Short url: **shorturl.at/fnu56**

## Kom i gang med websiden til scoreboardet

For at komme i gang skal du  
1. [Downloade og installere VS code](https://code.visualstudio.com/)
1. Starte VS code
1. Installere extension 'liveserver'
1. Downloade og unzippe koden
1. Åbne den unzippede kode i VS code: File -> Open folder
1. Find filen web-interface/index.html, højreklik, vælg 'Open with Live Server'

Så er du klar til at kode :-)

## Protokol for at overføre beskeder fra Microbit (din pinball maskine) til websiden (dit scoreboard)

- Bolden er skudt afsted: STATUS=enter#
- Bolden er blev tabt: STATUS=out#
- Der skal gives point: POINT=1000# (eller hvor mange point der skal gives)
- Der skal afspilles en lyd: LYD=A# (eller B, C, D)
