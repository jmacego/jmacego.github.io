---
layout: post
title: 'Zerotier - Quick setup secure SDWAN soliution'
description: "Connect to all of your Linux, Mac, Windows, Android, and iOS devices wherever they are"
categories: [sdwan, crypto, raspberry pi]
date: 2018-06-20 11:02 -1000
---
I have devices scattered about, mostly Raspberry Pis as well as my laptop, phone, GCE and AWS instances, and instances with various VM providers.

I needed a way to connect to all of these with a minimum of effort, and [another engineer at work](http://menari.eu) suggested I try Zerotier.

You can get started with minimal effort, but you can also create amazing and wonderful complexity to meet a variety of needs.

<!--more-->
## Basic Configuration
Jump to: [Top of Page](#top-of-page) \| [Advanced Configuration](#advanced-configuration)

Basic configuration is pretty simple. Go to [https://www.zerotier.com](https://www.zerotier.com) and register for an account. This should set up your first network, which is a 15 character hexidecimal string that you will need to give each of the clients.

After creating a network you can download the client for each of your devices, ensuring whatever level of security of the signatures provided that you feel is necessary to you. Follow the directions for each client to enter the network.

When the clients are set up go back to the Zerotier network page and you should see an entry, most of the way down, for each device that you have attempted to register on the network. Confirm the details and approve them. Their new local IP will now be listed here and each of them can reach all of the other devices that you have connected.

Congratulations, you now have your own private, secure SDWAN that is connecting all of your devices.

## Advanced Configuration
Jump to: [Top of Page](#top-of-page) \| [Basic Configuration](#basic-configuration)

Coming soon!