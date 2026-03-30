#!/bin/bash
# image resizer in place
# preserves the original with dimensions in the filename
# creates a resized web copy as WebP using the original basename

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
	    FILE=$(echo "$i" | perl -pe 's/^\.(\/)?(.*)\.[^.]+$/\2/')
	    SUFFIX=$(echo "$i" | perl -pe 's/^.*(\.[^.]+)$/\1/')
	    WEB_SUFFIX=".webp"
	    if [[ "$SUFFIX" = "$WEB_SUFFIX" ]] && find . -maxdepth 1 -type f -name "${FILE}-*x*.*" | grep -q .; then
	        echo "$i appears to be an existing web copy"
	        continue
	    fi
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
	    ORIGINAL_FILENAME="$FILE-$SIZE$SUFFIX"
	    WEB_FILENAME="$FILE$WEB_SUFFIX"
	    if [[ -f "$ORIGINAL_FILENAME" ]]; then # Already did this file
	        echo "$ORIGINAL_FILENAME already exists"
	        continue
	    fi
	    echo "$ORIGINAL_FILENAME"
	    mv "$i" "$ORIGINAL_FILENAME"
	    if [[ "$HAS_IMAGEMAGICK" -eq 1 ]]; then
	        convert "$ORIGINAL_FILENAME" -resize 1536x1536\> -quality 82 "$WEB_FILENAME"
	    else
	        echo "WebP output requires ImageMagick. Install ImageMagick and re-run."
	        exit 1
	    fi
	    if [[ -f "$RESMUSHIT" && "$WEB_SUFFIX" != ".webp" ]]; then # Only smush if the submodule exists
	        "$RESMUSHIT" --preserve-filename --quiet --preserve-exif "$WEB_FILENAME"
	    fi
done
