#!/bin/sh

ajustar_volumen() {
  if [ "$1" = "up" ]; then
    pactl set-sink-volume @DEFAULT_SINK@ +2%
  elif [ "$1" = "down" ]; then
    pactl set-sink-volume @DEFAULT_SINK@ -2%
  else
    echo "Comando no reconocido. Usa 'up' para subir el volumen o 'down' para bajarlo."
  fi
}

ajustar_volumen $1