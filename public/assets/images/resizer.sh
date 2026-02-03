#!/bin/bash
#image resizer in place

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
RESMUSHIT="$DIR/resmushit-cli/resmushit-cli.sh"

if [[ "$(pwd)" = "$DIR" ]]; then
    echo "Refusing to run from assets/images. Run from a subfolder only."
    exit 1
fi

HAS_IMAGEMAGICK=0
HAS_SIPS=0

if command -v identify >/dev/null 2>&1 && command -v convert >/dev/null 2>&1; then
    HAS_IMAGEMAGICK=1
fi

if command -v sips >/dev/null 2>&1; then
    HAS_SIPS=1
fi

if [[ "$HAS_IMAGEMAGICK" -eq 0 && "$HAS_SIPS" -eq 0 ]]; then
    echo "Neither ImageMagick nor sips is available. Install ImageMagick or use macOS sips."
    exit 1
fi

find . -maxdepth 1 -type f -print0 | while IFS= read -r -d '' i; do
    if [[ "$i" = "./resizer.sh" ]]; then
        continue
    fi
    if [[ "$i" = "./resmushit-cli" || "$i" = "./resmushit-cli"/* ]]; then
        continue
    fi
    FILE=$(echo "$i" | perl -pe 's/^\.(\/)?(.*)\.....?$/\2/')
    SUFFIX=$(echo "$i" | perl -pe 's/^.*(\.....?$)/\1/')
    FILESIZE=$(echo "$i" | perl -pe 's/^.*-(.*)\.....?$/\1/')
    if [[ "$HAS_IMAGEMAGICK" -eq 1 ]]; then
        SIZE=$(identify -format "%wx%h" "$i")
    else
        WIDTH=$(sips -g pixelWidth "$i" | awk '/pixelWidth/ {print $2}')
        HEIGHT=$(sips -g pixelHeight "$i" | awk '/pixelHeight/ {print $2}')
        if [[ -z "$WIDTH" || -z "$HEIGHT" ]]; then
            echo "Could not read size for $i; skipping."
            continue
        fi
        SIZE="${WIDTH}x${HEIGHT}"
    fi
    if [[ "$SIZE" = "$FILESIZE" ]]; then # This file already has the size in it
        echo "$SIZE already in filename"
        continue
    fi
    FILENAME="$FILE-$SIZE$SUFFIX"
    if [[ -f "$FILENAME" ]]; then # Already did this file
        echo "$FILENAME already exists"
        continue
    fi
    echo "$FILENAME"
    mv "$i" "$FILENAME"
    if [[ "$HAS_IMAGEMAGICK" -eq 1 ]]; then
        convert "$FILENAME" -resize 2048x2048\> "$i"
    else
        cp "$FILENAME" "$i"
        sips -Z 2048 "$i" >/dev/null
    fi
    if [[ -f "$RESMUSHIT" ]]; then # Only smush if the submodule exists
        "$RESMUSHIT" --preserve-filename --quiet --preserve-exif "$i"
    fi
done