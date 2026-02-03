---
title: 'Raspberry Pi: Huawei USB Modem e397u-53'
description: "Getting a Raspberry Pi online with a USB Modem Dongle"
categories: [raspberry pi, cellular, python]
date: 2018-06-16 11:02 -0700
---
You're here for one of two reasons:
1. You have an e97u-53 modem beacuse you got it cheap.
1. You have (or are considering getting) FreedomPop SIM cards.

Either way you've likely already found, like I did, that there isn't much documentation out there for either and what documentation there is for similar modems and SIMs doesn't apply to you.

I picked up the modem on Amazon for $22: [Unlocked e397u-53 Cricket Wireless](https://amzn.to/2yj3Mz3 "Yes, this is an affiliate link, feel free to not use it if you prefer") which works on 700/1700/2100 MHz and covers most of AT&T (the actual carrier for FreedomPOP) - 700Mhz is primary and the bands are for additional bandwidth or market. It was the cheapest unlocked modem I could find that covered the LTE bands. I figured I could probably get it working.

FreedomPOP I have mixed feelings about. I am certainly under no circumstance going to recommend them. Their web interface is designed to trick you, repeatedly, into giving them more money. However, so far, after getting through all of the hoops the service seems fine, and really does have 200MB free with additional at $0.025 per MB which is significantly less than I have found anywhere else.

<!--more-->
## FreedomPOP
Jump to: [Top of Page](#top-of-page) \| [Huawei Modem Section](#huawei-e397u-57-usb-modem)

If you've ordered your SIM card with the claimed "free" service and are somewhere in the process just skim through to find where you are at and then continue from there. If you are committed to trying it, or considering, you'll want to read all the way through and decide if it's really for you. I ended up managing to get 2 SIM cards with 200MB of LTE data for $22 and have not yet paid any more than that.

### Buying your SIM
You want to buy the card directly from FreedomPOP, even if you can find it elsewhere. Activation is included when purchasing on their site, but not if you get it at Target, or Amazon, or elsewhere.

Start at [FreedomPOP's shop website](https://fpop.co/lxp5 "Yes, this is an affiliate link, feel free to not use it if you prefer"). They didn't have any USB modems for sale when I bought my SIM cards, but do as of this writing, but the guide below only covers Huawei and may or may not be applicable. To get to the SIM cards click `Get Free Internet` which will take you to where the nightmares can begin.

To even get to pricing you have to enter contact details. I couldn't find any way around this. After entering details you are taken to a page to select your product, for the modem you want `3-in-1 SIM card` which will then let you pick your trial plan. Regardless of whether you pick the voice + text + data plan or the data only plan... you get a data only plan. If you were to think "Wow, this is so cool, I really want to use this on my phone!" ... don't. Calling or texting with FreedomPOP uses their proprietary VoIP app.

Continue forward to the checkout screen, and here, pause to check the total. FreedomPOP's pricing and shipping seem fairly random. If it is not already a low enough number search the web. "Freedompop sim deals" got me a working $2.99 w/free shipping link in short order. The links change regularly, and pricing varies between $0.01 and $20. You will have to enter all of your information to check each link, even if it gives you a number before that it may change it when you reach checkout.

`WARNING:` During checkout I was offered an additional SIM for $0.01 - as I had two devices that I'm tinkering with, I took this offer. This will lead to other charges further down in this article.

### Your SIM arrives
My SIM arrived in about 4 business days. While I was waiting I managed to get the website to let me access [https://my.freedompop.com/plan](https://my.freedompop.com/plan) and downgrade my plans using these instructions... but it was reset when my SIM cards actually arrived and I had to do it again. Give it a try, though, as it didn't hit me with downgrade fees at that time.

Your SIM arrives in a plain white business envelope with a FreedomPOP sticker on it, clearly the $6 shipping they sometimes charge is excessive.

If you are really confident in your calendaring skills, you can leave the plans in place and use your 2GB of trial data and still downgrade before you get billed. Completely up to you. I didn't beacuse I am **not** confident in my ability to do that with my busy schedule.

The SIM card pops out of the creditcard-sized plastic and then slides into the difficult-to-open SIM slot on the side of your modem. Once in the device you can pop USB connector out by sliding up on the slider in the middle and plugging it into your Raspberry Pi.

I *think* this table is accurate, if a bit vague:

| Color | Blinking | Meaning |
|:-----:|:--------:|:-------:|
| Green | Twice every 3s | Powered on, idle |
| Green | Once every 3s  | Registering with non-LTE network |
| Green | Solid  | Connected to non-LTE network |
| Blue | Once every 3s | Registering with LTE network |
| Blue | Solid | Connected to LTE Network |

I haven't gotten the green blinks fully investigated, I'm making some assumptions based on documentation for other models. Where I am at I go straight from Green double-blinks to blue single-blinks and then to and from blue solid.

### Downgrading to free plan
You are going to get some unexpected charges. I've tried to set that expectation from the beginning. Failing to remember to downgrade may end up with charges up to and in excess of $200 for an annual or semi-annual plan. I **strongly** encourage you to downgrade immediately after getting your SIM cards.

Go to [my.freedompop.com](https://my.freedompop.com) and click on `PLAN` from the top menu. Your active plan is on the left, click on it. In the bottom right you should now see a small, light text on light background `downgrade` link. This will cause at least one pop-up add for additional services, read them carefully and generally it will be the least obvious button to continue on your downgrade path. I accidentally clicked one of these incorrectly and was charged $3.99 and had to start the downgrade process again.

You will reach a very confusing pop-up that says you need to top-up your account to downgrade. This appears to be unavoidable and is per-SIM. At the time of writing the fee is $15 to downgrade to the free account. Once you have successfully downloaded your plan will show as `Basic LTE 200 US$0.00 monthly`. Congratulations!

If you have multiple SIM cards there is a dropdown in the top menu, on the right side. Click each of them and downgrade them. Despite the top-up being listed per SIM, I was only charged $15 once, however this may or may not be what you experience.

You can now manage your account just like any other cell provider, see usage, buy data, etc. There is, I kid you not, a monthly fee to disable auto-top-up of your account so if you want to make your $15 the last you spend on it you will need to mind your data usage and keep under the 200MB. If you are planning to use an extra 1GB / month you may be better off switching to a higher tier plan or a better provider. Less than 1GB / month and their prices seem reasonable if you manage not to buy any of the add-ons.

## Huawei e397u-57 USB Modem
Jump to: [Top of Page](#top-of-page) \| [FreedomPOP Section](#freedompop)

Now that we've got the SIM card sorted, lets get down to business. I have not yet tried the modem with other vendors SIM cards. I plan to try some of the IoT specific ones in the future, but that whole professional network guy thing I do sometimes leads to long hours and severe interruptions to my blog writing because one of our biggest customers texts me at 7:31pm while in the middle of this post. Yeah, that's a thing.

### Software
`sudo apt install usb-modeswitch`
Do **NOT** follow any of the other guides out there for USB Modems and usb-modeswitch. If you have followed them, please undo your changes - Raspbian Jesse at least includes usb-modeswitch version 2.5.0 which supports this modem out of the box.

Without it I see the modem connect as a mass storage device with id `12d1:1505` and with usb-modeswitch and no config changes it converts it to `12d1:1506` a USB modem, complete with multiple serial ttys (/dev/ttyUSB0-3 for me) and a wwan0 interface.

To see the USB device ID use the command `lsusb` which will tell you what device number on which bus and then give you the ID and manufacturer of each device. This is the output of `lsusb` on my Raspberry Pi 3B running Raspbian Jesse with kernal `4.14.48-v7+ #1118 SMP Thu Jun 7 16:40:27 BST 2018`

Without usb-modeswitch:
```
Bus 001 Device 006: ID 12d1:1505 Huawei Technologies Co., Ltd. E398 LTE/UMTS/GSM Modem/Networkcard
Bus 001 Device 003: ID 0424:ec00 Standard Microsystems Corp. SMSC9512/9514 Fast Ethernet Adapter
Bus 001 Device 002: ID 0424:9514 Standard Microsystems Corp. SMC9514 Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
With usb-modeswitch, note that the ID has changed:
```
Bus 001 Device 008: ID 12d1:1506 Huawei Technologies Co., Ltd. Modem/Networkcard
Bus 001 Device 003: ID 0424:ec00 Standard Microsystems Corp. SMSC9512/9514 Fast Ethernet Adapter
Bus 001 Device 002: ID 0424:9514 Standard Microsystems Corp. SMC9514 Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
You can also check `dmesg | tail -n 30` which will show you the different GSM Modem devices and a USB WDM device in addition to the storage now.

Now you can connect to the modem with your preferred serial program. For instance screen, minicom, pycom, etc. The modem will register 3 different serial ports, the first is for 2-way communication, the second is for errors, and the third is for GPS output. I haven't yet gotten anything but 2-way communication going. If you have no other serial ports, this will most likely be `/dev/ttyUSB0` however in the future we will set up the Raspberry Pi to detect the modem and give it a unique port.

Connect to the modem:
```screen /dev/ttyUSB0```
You'll just get a blank screen, you can test connectivity by sending `AT<enter>` and the modem will respond `OK`
```
AT
OK
```

Send the following to connect, and then check the connection.
```
ATZ
AT^NDISDUP=1,1,"fp.com.attz"
AT^DHCP?
```

The modem should respond with `OK` to each of the first commands, and then a hex string such as this:
```^DHCP:0100000a,fcffffff,0200000a,0200000a,8080808,4040808,100000000,50000000```

This is the IP address that your modem has received for you... encoded as hex... backwards.

The first block is the IP address, the net block is the subnet mask, and the third block is the gateway. You can probably just look at the 5th and 6th and see Google's DNS in my example, which is literally what I received. (8.8.8.8 and 8.8.4.4 respectively).

For now you can use the below Python script, save it as huawei-dhcp-decode.py or similar.

<script src="https://gist.github.com/342c13f9275c9124c34208b9486d8eea.js"></script>

Usage: `python huawei-dhcp-decode.py ^DHCP:0100000a,fcffffff,0200000a,0200000a,8080808,4040808,100000000,50000000` with your DHCP string of course and it will give you a list of the IP addresses contained.

You can statically assign these to your interface using your preferred tool, I recommend `ip` as you'll need to set address as well as gateway and it can do both. The script gives you the output that you can use. You will need sudo.

After that you can print out the route with `route -n` and you should see a default gateway listed in the top IPv4 section, and if you `traceroute 8.8.8.8` you should see a different route than you get over ethernet or wifi, possibly including the gateway as the first hop (although mine did not respond to ping so just had `***` there.)

I'm working on a script or set of scripts that you can call for instance with `ifup` and `ifdown` with a `crontab` script to poll the connection from time to time. These could be integrated in `/etc/network/interfaces` or called by some type of measurement script before sending an MQTT message or similar.

Watch this space.