#!/bin/sh

# Este script cuenta el número de actualizaciones disponibles y elimina espacios vacíos
conteo=$(dnf check-update --quiet | grep '^[A-Za-z0-9]' | awk 'NF' | wc -l)

echo "󰏔 $conteo"
