# Image Assets

This repo’s standard is the **CMS-managed asset workflow**.

## Standard Workflow

1. Start with the original source image.
2. Rename it to the intended canonical stem if needed.
3. Upload it through the CMS workflow.
4. Let the CMS create and track:
   - the web asset in `public/assets/images/`
   - the preserved original in `public/assets/images/originals/`
   - the thumbnail in `public/assets/images/thumbnails/`
   - the metadata entry in `public/assets/images/image-assets.json`

## Non-Negotiable Rules

- Do not manually run `resizer.sh` for normal asset work.
- Do not manually move image files between `public/assets/images/`, `originals/`, and `thumbnails/`.
- Do not manually edit `image-assets.json`.
- Do not convert, resize, deduplicate, or otherwise alter the original source file before upload.
- The only default manual file operation allowed before upload is renaming the source file.
- In content, reference the CMS-generated web asset, never the file in `originals/`.

## Legacy Tool

`resizer.sh` exists for legacy/manual repair scenarios only. It is **not** the default workflow for this repo.

## DO NOT RUN WITHOUT INSTALLING IMAGEMAGICK FIRST
It will delete a bunch of your files, including resizer.sh

This is a bug and should be fixed.

## Installing Image Magick

### On Mac
```
brew install imagemagick
```

### On Debian/Ubuntu
```
sudo apt-get install imagemagick
```

## Running Resizer.sh
```
cd assets/images/posts/learning_series/
../../resizer.sh
```

Do not run the script without ImageMagick installed. Do not run it from `assets/images/` itself.
