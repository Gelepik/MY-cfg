#!/bin/bash

# Получаем ID активного окна
win_id=$(hyprctl activewindow | awk '{print $1}')

# Получаем состояние окна (0 - нет, 1 - свернуто)
minimized=$(hyprctl clients | grep "$win_id" | grep -o "Tiled" | wc -l)

if [ "$minimized" -eq 1 ]; then
    # Разворачиваем окно
    hyprctl dispatch windowfocus "$win_id"
else
    # Сворачиваем окно
    hyprctl dispatch windowminimize "$win_id"
fi
