---
title: Github Pages - Moving Jekyll to Bootstrap4
image:
  path: /assets/images/posts/bootstrap-logo.png
  alt: Bootstrap4 Logo
  credit_text: Bootstrap Project
  credit_link: "http://www.getbootstrap.com"
categories: []
published: false
---
Looking for more flexiblity in my layout for this website, which runs on GitHub Pages I started looking into adding Bootstrap for theming. I'd already changed most things pretty drastically, so there really wasn't a lot to do.
<!--more-->

This post, I'll admit is mostly just a demo post with the page image feature that I can tweak, but I thought this might be useful to some other folks.

First off I added ```<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">``` into the CSS section (I'm just using the basic Bootstrap CSS with a little but of custom stuff inline).

Then I added ```<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>``` just above `</body>`.

Beyond that, there's just some custom CSS (based on the Bootstrap Blog example) inline in `default.html` and some time spent customizing the HTML, deploying the image cover code, etc.

And that was pretty much it. Took a few weeks of a minute here and a minute there but was nowhere near as large an undertaking as I expected. I've used Bootstrap for a number of other websites so I'll have an easy time tinkering with this one now that the base is in place.