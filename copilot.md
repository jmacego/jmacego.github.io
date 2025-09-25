GitHub Copilot Guide for jmaclabs.com

Project Tech Stack & Structure
	•	Static Site with Jekyll: This website is built using Jekyll and hosted via GitHub Pages ￼. The site’s configuration (_config.yml) specifies the use of the “jekyll-theme-modernist” theme ￼, though the layout has been customized. Content is written in Markdown and processed by Jekyll into static HTML pages.
	•	Bootstrap 4 Integration: The site uses Bootstrap 4.3.1 for styling and layout. The default HTML layout includes the Bootstrap CSS and JS via CDN links ￼. In addition to the theme’s base styles, some custom CSS (adapted from Bootstrap’s blog example) is included inline in the HTML template ￼ to style headers, navigation, and other components. This provides a responsive layout (see the meta viewport tag) and consistent typography for headings ￼ ￼.
	•	Project Structure: Content is organized into Jekyll collections:
	•	Posts: Blog posts live in the _posts/ directory and follow the naming convention YYYY-MM-DD-title.md. They use the post layout (with YAML front matter specifying layout: post). Blog posts are accessible under the /blog/ path per the permalink settings ￼.
	•	Pages: Static pages (e.g. About, Resume) are Markdown files at the project root (e.g. about.md, resume.md) with front matter specifying layout: page. These are linked in the top navigation bar.
	•	Projects: There is a Jekyll collection for projects (configured in _config.yml) with content possibly in a _projects/ folder ￼. Like posts, project pages use the post layout by default ￼ and appear under /projects/.
	•	Assets: Static assets like images are under the assets/ directory. For example, blog post images are stored in subfolders (e.g. assets/images/posts/...). Favicons and other static files (like the GPG public key under keys/) are also in the assets folder ￼.
	•	Plugins and Extensions: The site relies on the GitHub Pages gem (see Gemfile) which bundles many Jekyll plugins ￼. Notable plugins enabled in _config.yml include jekyll-sitemap, jekyll-seo-tag, jekyll-feed (RSS generation), jekyll-paginate (for blog pagination), jekyll-redirect-from, jekyll-mentions (for @mentions), jemoji (GitHub emoji support), and jekyll-compose among others ￼ ￼. These are mostly standard and require no extra setup. In particular, jekyll-compose is installed to streamline creating new posts/pages (see Tools below for usage).

Local Development Setup

Follow these instructions to run and test the site locally before pushing changes:
	1.	Install Prerequisites: Ensure you have a current Ruby environment (Ruby 2.7+ or 3.x) and Bundler installed ￼. You will also need ImageMagick if you plan to use the image resizing tool (see the Image Resizer section).
	2.	Clone the Repository: Clone the jmacego/jmacego.github.io repository to your machine. If you want the image optimization tool to work, clone with submodules:

git clone --recurse-submodules https://github.com/jmacego/jmacego.github.io.git

This ensures the resmushit-cli submodule is pulled in. If you already cloned normally, you can fetch submodules later with git submodule update --init ￼.

	3.	Install Dependencies: In the project root, run Bundler to install Jekyll and all required gems:

bundle install

This will install the GitHub Pages gem (which includes Jekyll 3.10 and plugins) and any other gems specified ￼.

	4.	Run the Site Locally: Use Jekyll via Bundler to serve the site:

bundle exec jekyll serve

Jekyll will build the site and start a local web server (by default at http://127.0.0.1:4000/) ￼ ￼. Auto-regeneration is enabled, so any edits to files will trigger a rebuild. Leave this running and refresh your browser to preview changes.
	•	Tip: If you have issues running jekyll serve with Ruby 3 (e.g. a webrick missing error), run bundle add webrick to install the server dependency, then retry the serve command ￼.

	5.	Preview and Test: Navigate to http://localhost:4000 in your browser to view the site. Test your changes here. For example, new blog posts will appear under http://localhost:4000/blog/. Ensure formatting, links, and images look correct. No additional build steps are required; GitHub Pages will use the same Jekyll process when you push changes.

Content Formatting & Contribution Guidelines

When adding or editing content (whether blog posts, pages, or HTML templates), please follow these style guidelines to maintain consistency and readability across the site:
	•	Write in Markdown, Enhance with HTML if Needed: Author pages and posts primarily in Markdown for simplicity. Use Markdown syntax for headings, lists, links, and code blocks. For example, use triple backticks for code snippets or console commands to ensure they are properly formatted (you can specify a language after the backticks for syntax highlighting). Only use raw HTML within Markdown when necessary – for instance, to insert images with custom attributes or to center content. In those cases, prefer semantic HTML elements and Bootstrap classes. Example: to center a block of text or an image, wrap it in a <div class="text-center">...</div> or use utility classes (instead of deprecated attributes like align="center").
	•	Semantic HTML & Headings: Maintain a logical heading hierarchy and semantic structure in content:
	•	Use # for the page title (usually handled by the layout or the title in front matter) and ##, ###, etc. for subsections in descending order. Do not skip levels (e.g. don’t jump from ## to ####). This ensures clarity and is better for SEO and accessibility.
	•	Use appropriate semantic tags: e.g. use <strong> and <em> for bold/italics (or Markdown ** ** and _ _), instead of simply making text bold without meaning. Use lists for lists, headings for section titles, and <code> or fenced code blocks for code. This keeps the content structured and accessible.
	•	Consistent Heading Style: Match the capitalization style of existing content for titles and headings. Generally, use Title Case for page/post titles and major headings (capitalize principal words, lowercase minor words like “and”, “of”, etc.). For example, a blog post title in front matter might be “What is Anycast?” ￼ or “JMac’s Learning Series” – each significant word is capitalized. Within content, section headings should also follow this convention for a professional look. Keep headings concise and descriptive.
	•	Tone and Voice: The writing style on the site is professional yet personal and conversational. It’s okay to write in first person for blog posts and include a bit of personality, but avoid slang or overly informal language that might detract from clarity. Use complete sentences and proper grammar. Keep paragraphs relatively short (3-5 sentences) for readability, especially on the web. When appropriate, break up long explanations into bulleted lists or subheadings (as done in many posts) to aid scanning.
	•	Links and References: When adding hyperlinks, use descriptive link text rather than raw URLs or “click here.” For example, in blog posts, link relevant terms – e.g., “as described in [RFC 2526]…” – so readers know what to expect. If referencing external documentation or articles, ensure the URL is correct and the content is relevant/up-to-date. All internal links (to other posts or pages) should be relative and preferably use the Jekyll link syntax or the site base URL so they work in development and production. For instance, use [](/blog/your-post) or {% post_url 2019-07-07-how-anycast-works %} for linking to other posts.
	•	Images: Optimize and annotate images properly:
	•	File Placement: Store images under assets/images/, organized in subfolders if appropriate (e.g. blog post images under assets/images/posts/your_topic/). Reference them with the absolute path starting from /assets/... in Markdown or HTML. Example in front matter: image.path: /assets/images/posts/learning_series/learn-scrabble.jpg ￼.
	•	Alt Text: Always include descriptive alt text for images, whether in Markdown or HTML. Alt text should convey the content or purpose of the image for accessibility. For instance, in front matter or HTML tags, provide a succinct description: alt: "LEARN in Scrabble Letters" ￼. In HTML <img> tags, use the alt="..." attribute. This not only aids visually impaired readers but also improves SEO.
	•	Title/Captions: If an image needs a caption or credit, include that. The site’s posts often provide image credits in the front matter (e.g., credit_text and credit_link) ￼. Follow this practice for featured images: add credit info in front matter if the image is not original. For inline images in content, you can add a brief caption below the image if needed (in italic, smaller text).
	•	Sizing and Responsiveness: Ensure images don’t break the layout. Use Markdown image syntax for simplicity, which by default will display at native size constrained by the container. If you need to explicitly size an image or make it responsive, use HTML: include width (percentage or pixels) and height="auto", or better, use Bootstrap’s .img-fluid class to make the image scale with the viewport. For example, the Anycast post inserts an image with a relative width of 75% and centers it by setting it as a block element ￼. You could achieve the same by adding class="img-fluid d-block mx-auto w-75" to the <img> tag (Bootstrap 4 utility classes for responsive image and centering).
	•	No Emojis in Text: Do not use Unicode emojis or HTML emoticons in content. Even though the Jekyll jemoji plugin is enabled (which could convert :smile: style codes to images), the site aims for a consistent, professional appearance – so avoid using emojis in posts or page text. Instead, convey tone through words. :smile:
	•	Front Matter Conventions: Each Markdown file (post or page) should begin with a YAML front matter block. Follow existing examples for consistency:
	•	Title: Set a descriptive title in title case. This will be used as the page/post heading and HTML <title> text.
	•	Layout: Specify the appropriate layout (post, page, or custom if applicable). Blog posts should use layout: post and pages like About/Resume use layout: page.
	•	Date: (For posts) Ensure the date in the filename and front matter is correct. Jekyll will auto-fill date from the filename for posts, but if you create a draft or backdate a post, adjust the date: field accordingly.
	•	Categories/Tags: Include relevant categories and tags in lists. For example:

categories: [Learning Series, DNS]  
tags: [Anycast, Redundancy]  

Categories and tags help organize content (even if not heavily used in navigation).

	•	Excerpt Separator: For blog posts, include an excerpt break after the first introductory paragraph or two. Use the <!--more--> marker in your Markdown where you want to cut off ￼. This is used on listing pages to show a snippet of the post. Keep the excerpt concise (a few sentences) to entice readers to click through.
	•	Featured Image: If the post has a banner/featured image, add an image: section in the front matter with path, alt, and credit info ￼. The layout will typically display this image at the top of the post. If no featured image is provided, the post will simply start with text. (For pages, usually no featured image is used.)

	•	Coding Style (HTML/CSS/JS): If you need to modify or add any HTML/JS in the layouts or includes (for example, adding a new component or script):
	•	Follow the existing coding style: indent nested HTML by 2 spaces for readability (consistent with the current templates).
	•	Keep HTML markup semantic and lean—use Bootstrap components/classes instead of writing large custom styles when possible. The site largely avoids a separate CSS file by leveraging Bootstrap and a small inline style block ￼ ￼, so continue that approach for consistency (unless a significant custom style is needed).
	•	For any custom CSS, consider adding it to the inline <style> in the layout (group with existing styles) or a new section, and comment it for clarity. Ensure it doesn’t conflict with the theme or Bootstrap.
	•	If writing scripts, use vanilla JavaScript (no external libraries) and place scripts just before </body> (as done with the Bootstrap and cookie consent script ￼ ￼). Keep JS minimal and performant, since this is a static site. For example, the cookie notice script in the footer is in plain JS to handle a simple UI state ￼ ￼. Aim for similar simplicity in any new script.
	•	No Binary or Unoptimized Assets in Repo: Do not commit very large files or unoptimized images/videos. All images should be run through the optimization process (see below). Other asset types (PDFs, etc.) should be reasonably sized. This keeps repository bloat down and pages loading fast.
	•	Testing and Proofreading: Before committing, preview your changes (as described in Local Dev Setup) and read through the content. Check that all Markdown renders correctly to HTML, links are working, and there are no typos or formatting issues. It can help to use a Markdown linter or the VS Code Front Matter extension (configured in this repo via frontmatter.json) to validate your front matter and content structure. The Front Matter VSCode plugin will recognize fields like title, date, tags, etc., and provides a GUI – feel free to use it for consistency, but it’s optional.
	•	Security & Dependency Checks: As part of regular testing, scan dependencies for known vulnerabilities. This repo includes bundler-audit (development dependency), so after bundle install run:

```zsh
bundle exec bundler-audit check --update
```

If advisories are reported, prefer updating within GitHub Pages constraints (e.g., `bundle update github-pages`). If a fix isn’t available due to meta-gem pinning, open an issue to track and revisit later.

By adhering to these guidelines, you’ll ensure that GitHub Copilot (and any contributor) generates suggestions that fit the site’s style and that all new content blends in seamlessly with the existing pages.

Tools & Workflow for Contributors

This project includes a couple of helper tools to streamline development and content creation. Make sure to use these for efficient and consistent contributions.

Jekyll Compose – Quick Content Creation

We have the jekyll-compose plugin installed ￼, which adds convenient commands for creating new posts, pages, and drafts from the command line. Instead of manually creating files, you can run these commands to generate files with proper front matter automatically:
	•	New Post: To create a blog post with today’s date and given title, run:

bundle exec jekyll post "My New Post"

This will create a file in _posts/ named something like YYYY-MM-DD-my-new-post.md with the title set in the YAML front matter ￼. Edit that file to add your content. (You can customize the date or slug if needed – see jekyll-compose docs.)

	•	New Page: For a standalone page, run:

bundle exec jekyll page "Page Name"

This creates a new Markdown file (e.g. page-name.md) with the title and layout front matter set up ￼.

	•	Drafts: You can also create a draft (unpublished post in _drafts/ directory) by using jekyll draft "Draft Title". Drafts won’t appear on the live site until published. You can later publish it with jekyll publish.

Using jekyll-compose ensures your new files have the correct format and reduces errors in front matter. Copilot can also benefit from this by recognizing the standard front matter template in newly generated files.

Image Resizer & Optimizer (resizer.sh)

When adding new images to the site, it’s highly recommended to run the image through our resizing/optimization script before committing. This ensures images are web-friendly (reasonable dimensions and file size). The tool is located at assets/images/resizer.sh.

What it does: The resizer.sh script will process all image files in a directory, append the image’s dimensions to the filename, and create a resized version of the image (if it’s above a certain size):
	•	It uses ImageMagick to identify image dimensions and then limits the maximum width/height to 2048px (scaling down larger images) ￼. The original file is renamed with its dimensions. For example, an image diagram.png that’s 3000x1500 will be renamed to diagram-3000x1500.png, and a new diagram.png (the resized one, max 2048px) is saved in its place.
	•	It can then further compress the image using the reSmush.it API via the resmushit-cli submodule ￼. This will losslessly optimize the image file size. The script checks for the resmushit-cli.sh tool (included as a git submodule in assets/images/resmushit-cli/ ￼) and uses it if available. The optimization preserves the filename and EXIF data and runs quietly in the background.

Setup Requirements: Before running resizer.sh, make sure:
	•	ImageMagick is installed on your system (the script depends on the identify and convert commands). Do not run the script without ImageMagick present, as it will malfunction and possibly delete files (a known bug) ￼. To install ImageMagick:
	•	On macOS: brew install imagemagick (or port install imagemagick if using MacPorts)
	•	On Debian/Ubuntu: sudo apt-get install imagemagick
Verify that running convert -version in your terminal works.
	•	The resmushit submodule is initialized (if you intend to compress images). If you cloned with --recurse-submodules, you’re all set. Otherwise run:

git submodule update --init assets/images/resmushit-cli

This will pull the optimizer script. No additional install is required for it (it’s a shell script that uses cURL to call the reSmush.it API). Ensure you have internet access when running it, since it sends the image to the API for optimization.

How to use the resizer:
	1.	Add your new images into an appropriate folder under assets/images/. For example, if you are writing a post in the “learning_series” category and you have a diagram image, place it in assets/images/posts/learning_series/ (or create a new subfolder if needed).
	2.	Navigate to that directory in your terminal:

cd assets/images/posts/learning_series/

(Replace with the path where your images are.)

	3.	Run the script from that directory:

../../resizer.sh

This calls the script located two levels up (in assets/images/). Running it from inside the image folder ensures it processes only the images in that folder, and avoids touching the script itself. The example in the repository’s README shows this usage ￼.

	4.	Wait for the script to finish. It will output the new filenames as it processes. For each image, you should see it print the new filename with dimensions, and possibly messages from reSmush.it. If an image already has dimensions in its name or has been processed before, it will skip with a message (to prevent duplicate work).
	5.	Check the results: After running, your image directory will contain the optimized images. For each original image foo.jpg you added, there should now be a foo-WxH.jpg (original file renamed with its original width x height) and a new foo.jpg which is the resized/compressed version. The site should reference foo.jpg in the content (since that remains the final image). You can open the image to confirm quality is acceptable. Typically, the visual difference is negligible, but file size will be much smaller.
	6.	Commit both the original and resized images: It’s a good idea to commit the *-WxH.* originals as well (as an archive of full-res versions), but ensure that the content pages are linking to the regular foo.jpg (optimized one). Usually, you will already have written the Markdown/HTML to use foo.jpg; that remains correct.

Important: Always run this before pushing images. Unoptimized images can be very large and slow down the site. The script prevents that by capping dimensions and compressing. Again, do not run the script in the wrong location. Only run it in directories containing the images to process. Running it in the base assets/images/ folder (which contains the script itself and other special files) without ImageMagick could cause the script to rename or remove files incorrectly ￼. Follow the usage example above and you’ll be safe.

By using the image resizer tool, you ensure all graphics on the site are web-optimized. This yields faster page loads and a better user experience. It also saves repository space. GitHub Copilot will be aware of this workflow, so it may even suggest using the tool or adding the <!--more--> tag and proper front matter for images when you start writing an image-heavy post.