#!/bin/bash
#image resizer in place

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
RESMUSHIT=$DIR/resmushit-cli.sh

for i in *; do
    if [[ -f $i ]]; then
        FILE=$(echo $i | perl -pe 's/^(.*)\.....?$/\1/')
        SUFFIX=$(echo $i | perl -pe 's/^.*(\.....?$)/\1/')
        FILESIZE=$(echo $i | perl -pe 's/^.*-(.*)\.....?$/\1/')
        SIZE=$(identify -format "%wx%h" $i)
        if [[ $SIZE = $FILESIZE ]]; then # This file already has the size in it
            echo "$SIZE already in filename"
            continue
        fi
        FILENAME=$FILE-$SIZE$SUFFIX
        if [[ -f $FILENAME ]]; then # Already did this file
            echo "$FILENAME already exists"
            continue
        fi
        echo $FILENAME
        mv $i $FILENAME
        convert $FILENAME -resize 2048x2048\> $i
        if [[ -f $RESMUSHIT ]]; then # Only smush if the submodule exists
            $RESMUSHIT --preserve-filename --quiet --preserve-exif $identify
        fi
    fi
done