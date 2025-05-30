#!/bin/bash

# Extract the URL passed to the script
url="$1"

# Launch Konsole and execute the zvuk-grabber command
konsole -e /home/lev73/Builds/zvuk-grabber-1.0.4/bin/zvuk-grabber --config '/home/lev73/Builds/zvuk-grabber-1.0.4/.zvuk-grabber.yaml' $url
