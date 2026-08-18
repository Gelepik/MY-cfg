#!/bin/bash

cava -p ~/.config/cava/waybar | while IFS=';' read -ra bars; do
    output=""

    for value in "${bars[@]}"; do
        case $value in
            0) output+="▁" ;;
            1) output+="▂" ;;
            2) output+="▃" ;;
            3) output+="▄" ;;
            4) output+="▅" ;;
            5) output+="▆" ;;
            6) output+="▇" ;;
            *) output+="█" ;;
        esac
    done

    printf '%s\n' "$output"
done

