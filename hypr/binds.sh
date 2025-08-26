#!/bin/bash

mainMod="SUPER"  # WIN/Meta key

cat <<EOF
Hyprland Binds:
$mainMod + Q -> Terminal (Терминал)
$mainMod + C -> Close active window (Закрыть активное окно)
$mainMod + E -> File manager (Файловый менеджер)
$mainMod + R -> App menu (Меню)
$mainMod + B -> Firefox (Браузер)
$mainMod + T -> Telegram (Телеграм)
$mainMod + 8 -> Osu (Осu)
$mainMod + 9 -> Steam (Стим)
$mainMod + D -> Toggle floating window (Движение окна)
$mainMod + P -> Screenshot area to clipboard (Скриншот области в буфер)
$mainMod + F -> Fullscreen (Фуллскрин)
EOF

read -p "Press Enter to close... (Нажми Enter чтобы закрыть...)"
