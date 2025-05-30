#!/usr/bin/bash

# Make desktop file
cp zvuker-template.desktop zvuker.desktop
DIR=$(pwd)
echo $DIR
sed --in-place "s|repw|$DIR|g" zvuker.desktop

# Add to apps
cp zvuker.desktop ~/.local/share/applications/zvuker.desktop
xdg-mime default zvukgrabber.desktop x-scheme-handler/zvukgrab  # requres qtpath, from qt5-tools
update-desktop-database ~/.local/share/applications/
