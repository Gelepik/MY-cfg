#!/bin/bash

WALLPAPER_DIR="$HOME/Pictures/Wallpapers"
WALLPAPERS=($WALLPAPER_DIR/*)

# Проверяем, запущен ли swww
if ! pgrep -x swww-daemon >/dev/null; then
    swww init
    sleep 0.5   # небольшая пауза, чтобы демон успел стартовать
fi

CHOICE=$(printf '%s\n' "${WALLPAPERS[@]}" | rofi -dmenu -i -p "Выберите обои:")

if [ -n "$CHOICE" ]; then
    swww img "$CHOICE" --transition-type fade --transition-duration 0.7
fi
