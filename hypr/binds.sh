#!/bin/bash

mainMod="SUPER"  # Клавиша WIN/Meta

cat <<EOF
Hyprland Binds:
$mainMod + Q -> Terminal (Терминал)
$mainMod + C -> Close active window (Закрыть активное окно)
$mainMod + E -> File manager (Файловый менеджер)
$mainMod + R -> App menu (Меню)
$mainMod + B -> Firefox (Браузер)
$mainMod + T -> Telegram (Телеграм)

$mainMod + NumPad 1 -> Steam (Стим)
$mainMod + NumPad 2 -> Heroic Games Launcher
$mainMod + NumPad 3 -> Osu (Осу)
$mainMod + NumPad 5 -> Discord (Дискорд)

$mainMod + D -> Toggle floating window (Переключение плавающего режима)
$mainMod + P -> Screenshot area to clipboard (Скриншот области в буфер)
$mainMod + F -> Fullscreen (Полноэкранный режим)
EOF

read -p "Press Enter to close... (Нажми Enter чтобы закрыть...)"