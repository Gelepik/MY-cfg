#!/bin/bash
cat <<EOF
Hyprland Binds:
$mainMod + Q -> Терминал
$mainMod + C -> Закрыть активное окно
$mainMod + E -> Файловый менеджер
$mainMod + R -> Меню
$mainMod + B -> Firefox
$mainMod + T -> Telegram
$mainMod + 8 -> Osu
$mainMod + 9 -> Steam
$mainMod + D -> Движение окна
$mainMod + P -> Скриншот области (в буфер)
$mainMod + F -> Fullscreen
EOF

read -p "Press Enter to close..."
