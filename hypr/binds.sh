#!/bin/bash

mainMod="Win"  # Клавиша WIN

cat <<EOF
Hyprland Binds:
$mainMod + Q -> Kitty
$mainMod + C -> Close active window
$mainMod + E -> Yazi
$mainMod + R -> Wofi
$mainMod + B -> Zen 
$mainMod + T -> Telegram

$mainMod + NumPad 1 -> Steam
$mainMod + NumPad 2 -> Heroic Games Launcher
$mainMod + NumPad 3 -> Osu
$mainMod + NumPad 5 -> Discord
$mainMod + = -> play/stop
$mainMod + \ -> volume control
$mainMod + D -> Toggle floating window 
$mainMod + P -> Screenshot area to clipboard 
$mainMod + F -> Fullscreen 
EOF

read -p "Press Enter to close...
