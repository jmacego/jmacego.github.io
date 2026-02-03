#!/bin/bash
#image resizer in place

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
RESMUSHIT="$DIR/resmushit-cli/resmushit-cli.sh"

if [[ "$(pwd)" = "$DIR" ]]; then
    echo "Refusing to run from assets/images. Run from a subfolder only."
    exit 1
fi

if ! command -v identify >/dev/null 2>&1 || ! command -v convert >/dev/null 2>&1; then
    echo "ImageMagick not found. Install it before running this script."
    exit 1
fi

find . -maxdepth 1 -type f -print0 | while IFS= read -r -d '' i; do
    if [[ "$i" = "./resizer.sh" ]]; then
        continue
    fi
    FILE=$(echo "$i" | perl -pe 's/^\.(\/)?(.*)\.....?$/\2/')
    SUFFIX=$(echo "$i" | perl -pe 's/^.*(\.....?$)/\1/')
    FILESIZE=$(echo "$i" | perl -pe 's/^.*-(.*)\.....?$/\1/')
    SIZE=$(identify -format "%wx%h" "$i")
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
    convert "$FILENAME" -resize 2048x2048\> "$i"
    if [[ -f "$RESMUSHIT" ]]; then # Only smush if the submodule exists
        "$RESMUSHIT" --preserve-filename --quiet --preserve-exif "$i"
    fi
done