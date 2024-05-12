#!/bin/sh

ajustar_volumen() {
  if [ "$1" = "up" ]; then
    brightnessctl set 1%+
  elif [ "$1" = "down" ]; then
    brightnessctl set 1%-
  else
    echo "Comando no reconocido. Usa 'up' para subir el volumen o 'down' para bajarlo."
  fi
}

ajustar_volumen $1