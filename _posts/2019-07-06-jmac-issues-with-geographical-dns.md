---
title: Issues Presented by Geographical DNS
layout: post
image:
  path: /assets/images/posts/learning_series/map-standing-on-map-2048x1367.jpg
  alt: CDN Graphic
  credit_text: Slon Pics
  credit_link: "https://www.slon.pics/"
categories: [Learning Series, DNS, firewalls]
tags: []
---
DNS, the Domain Name System, has become something of a Swiss Army Knife of networking and systems engineering. One of the tools in this set is to determine a user's location, and then send an IP address of a nearby server that can service the request.

On the surface this seems like a great idea. Lets dig deeper and see what it can break.
<!--more-->

First off, this is not a discussion on what we should or should not do with any protocol. I'm not going to stand on a soap box and say that using DNS for geographic targeting is bad (or good) or discuss any of the other ways that DNS has been used, extended, or twisted from what some consider its pure beginnings.

## What GeoDNS is
<img src="/assets/images/posts/learning_series/cdn-regional-dns.png" alt="CDN Illustration, Servers at either side and DNS queries leading toward them, with a link between the users for an alternate global DNS path." title="CDN DNS Illustration" width="75%">


[LinkedIn ](https://www.linkedin.com/in/jmacego) is effectively the only Social Media platform I'm on, but you can try to [tweet at me](https://www.twitter.com/jmacego) and I reply to [Keybase](https://keybase.io/jmacego) quite quickly.