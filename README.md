sudo pacman -Syu
reboot
sudo pacman -S --needed \
btop \
cava \
fastfetch \
kitty \
waybar \
wlogout \
wofi \
yazi \
playerctl \
bluez \
bluez-utils \
networkmanager \
waypaper \
pavucontrol

sudo pacman -S --needed \
pipewire \
pipewire-alsa \
pipewire-pulse \
wireplumber

pacman -Ss pwvucontrol
sudo pacman -S pwvucontrol

yay -S pwvucontrol

sudo pacman -S --needed bluez bluez-utils
sudo systemctl enable --now bluetooth
systemctl status bluetooth

sudo pacman -S --needed networkmanager
sudo systemctl enable --now NetworkManager
sudo pacman -S --needed network-manager-applet

sudo pacman -S --needed \
wl-clipboard \
cliphist \
grim \
slurp \
libnotify \
xdg-utils

sudo pacman -S --needed waypaper
sudo pacman -S --needed swww
sudo pacman -S --needed hyprpaper

sudo pacman -S --needed yazi

sudo pacman -S --needed \
ffmpeg \
imagemagick \
poppler \
fd \
ripgrep \
fzf \
7zip

sudo pacman -S --needed playerctl

sudo pacman -S --needed cava

sudo pacman -S --needed fastfetch

sudo pacman -S --needed kitty

sudo pacman -S --needed wofi

sudo pacman -S --needed waybar

sudo pacman -S --needed wlogout

sudo pacman -S --needed btop

sudo pacman -S --needed \
ttf-jetbrains-mono-nerd \
ttf-font-awesome \
noto-fonts \
noto-fonts-emoji


sudo pacman -S --needed \
btop \
cava \
fastfetch \
kitty \
waybar \
wlogout \
wofi \
yazi \
playerctl \
bluez \
bluez-utils \
networkmanager \
network-manager-applet \
waypaper \
pavucontrol \
pipewire \
pipewire-alsa \
pipewire-pulse \
wireplumber \
wl-clipboard \
cliphist \
grim \
slurp \
libnotify \
xdg-utils \
swww \
ffmpeg \
imagemagick \
poppler \
fd \
ripgrep \
fzf \
7zip \
ttf-jetbrains-mono-nerd \
ttf-font-awesome \
noto-fonts \
noto-fonts-emoji

yay -S pwvucontrol


sudo systemctl enable --now NetworkManager
sudo systemctl enable --now bluetooth

systemctl --user enable --now pipewire
systemctl --user enable --now pipewire-pulse
systemctl --user enable --now wireplumber
