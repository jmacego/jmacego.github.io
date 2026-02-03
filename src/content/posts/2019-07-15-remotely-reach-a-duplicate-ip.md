---
title: Help! I have a duplicate IP at a remote site!
layout: post
image:
  path: /assets/images/posts/learning_series/man-person-people-emotions-2048x1192.jpg
  alt: Man with to faces
  credit_text: Gratisography
  credit_link: "https://www.pexels.com/@gratisography"
categories: [Learning Series, quick-fix, duplicate ip, troubleshooting, arp]
tags: []
---
Duplicate IPs on the same network are one of those things that are never supposed to happen but they never seem to go away. Usually, they are pretty much a non-event, someone can go shout at the user who assigned a static IP to their workstation on a DHCP subnet, the snapshot VM that was just spun up can be shut down, etc.

<!--more-->

But sometimes they mean an entire remote site is essentially down and you are quickly working out how big a hit it will be to your budget to fly someone out there.

Before you do that, let us perform some troubleshooting.

## What is a duplicate IP?

A duplicate IP situation occurs any time there are two hosts sharing the same IP address.

## Symptoms of a duplicate IP

Often the first symptom you get is simply that you can't log in:
```
jmac@spacecommand:~$ ssh launchpad39a
ssh: connect to host launchpad39a port 22: Operation timed out
```
Your monitoring may show high packet loss to the device. Often it will show up as fairly close to 50%.

If you then ping it yourself, you will see something like this:

```
jmac@spacecommand:~$ ping launchpad39a
PING launchpad39a (203.0.113.1): 56 data bytes
64 bytes from 203.0.113.1: icmp_seq=0 ttl=64 time=16.452 ms
64 bytes from 203.0.113.1: icmp_seq=1 ttl=64 time=15.675 ms
64 bytes from 203.0.113.1: icmp_seq=2 ttl=64 time=12.006 ms
64 bytes from 203.0.113.1: icmp_seq=3 ttl=64 time=15.220 ms
64 bytes from 203.0.113.1: icmp_seq=4 ttl=64 time=14.443 ms
64 bytes from 203.0.113.1: icmp_seq=5 ttl=64 time=15.571 ms
64 bytes from 203.0.113.1: icmp_seq=6 ttl=64 time=12.701 ms
64 bytes from 203.0.113.1: icmp_seq=7 ttl=64 time=15.761 ms
64 bytes from 203.0.113.1: icmp_seq=8 ttl=64 time=15.150 ms
64 bytes from 203.0.113.1: icmp_seq=9 ttl=64 time=13.056 ms
64 bytes from 203.0.113.1: icmp_seq=10 ttl=64 time=12.465 ms
64 bytes from 203.0.113.1: icmp_seq=11 ttl=64 time=13.331 ms
64 bytes from 203.0.113.1: icmp_seq=12 ttl=64 time=12.710 ms
64 bytes from 203.0.113.1: icmp_seq=13 ttl=64 time=12.505 ms
64 bytes from 203.0.113.1: icmp_seq=14 ttl=64 time=12.355 ms
64 bytes from 203.0.113.1: icmp_seq=15 ttl=64 time=12.590 ms
64 bytes from 203.0.113.1: icmp_seq=16 ttl=64 time=13.012 ms
64 bytes from 203.0.113.1: icmp_seq=17 ttl=64 time=11.470 ms
64 bytes from 203.0.113.1: icmp_seq=18 ttl=64 time=13.099 ms
64 bytes from 203.0.113.1: icmp_seq=19 ttl=64 time=14.487 ms
Request timeout for icmp_seq 20
Request timeout for icmp_seq 21
Request timeout for icmp_seq 22
Request timeout for icmp_seq 23
Request timeout for icmp_seq 24
Request timeout for icmp_seq 25
Request timeout for icmp_seq 26
Request timeout for icmp_seq 27
Request timeout for icmp_seq 28
Request timeout for icmp_seq 29
Request timeout for icmp_seq 30
Request timeout for icmp_seq 31
Request timeout for icmp_seq 32
Request timeout for icmp_seq 33
Request timeout for icmp_seq 34
Request timeout for icmp_seq 35
Request timeout for icmp_seq 36
Request timeout for icmp_seq 37
Request timeout for icmp_seq 38
Request timeout for icmp_seq 39
64 bytes from 203.0.113.1: icmp_seq=40 ttl=64 time=12.316 ms
64 bytes from 203.0.113.1: icmp_seq=41 ttl=64 time=12.318 ms
64 bytes from 203.0.113.1: icmp_seq=42 ttl=64 time=12.794 ms
64 bytes from 203.0.113.1: icmp_seq=43 ttl=64 time=11.291 ms
64 bytes from 203.0.113.1: icmp_seq=44 ttl=64 time=11.542 ms
64 bytes from 203.0.113.1: icmp_seq=45 ttl=64 time=11.616 ms
64 bytes from 203.0.113.1: icmp_seq=46 ttl=64 time=12.929 ms
64 bytes from 203.0.113.1: icmp_seq=47 ttl=64 time=14.111 ms
64 bytes from 203.0.113.1: icmp_seq=48 ttl=64 time=12.203 ms
64 bytes from 203.0.113.1: icmp_seq=49 ttl=64 time=11.702 ms
64 bytes from 203.0.113.1: icmp_seq=50 ttl=64 time=12.012 ms
64 bytes from 203.0.113.1: icmp_seq=51 ttl=64 time=14.734 ms
64 bytes from 203.0.113.1: icmp_seq=52 ttl=64 time=12.521 ms
64 bytes from 203.0.113.1: icmp_seq=53 ttl=64 time=13.231 ms
64 bytes from 203.0.113.1: icmp_seq=54 ttl=64 time=13.722 ms
64 bytes from 203.0.113.1: icmp_seq=55 ttl=64 time=12.705 ms
64 bytes from 203.0.113.1: icmp_seq=56 ttl=64 time=11.788 ms
64 bytes from 203.0.113.1: icmp_seq=57 ttl=64 time=12.510 ms
64 bytes from 203.0.113.1: icmp_seq=58 ttl=64 time=11.481 ms
64 bytes from 203.0.113.1: icmp_seq=59 ttl=64 time=12.188 ms
64 bytes from 203.0.113.1: icmp_seq=60 ttl=64 time=12.622 ms
64 bytes from 203.0.113.1: icmp_seq=61 ttl=64 time=13.060 ms
64 bytes from 203.0.113.1: icmp_seq=62 ttl=64 time=12.791 ms
64 bytes from 203.0.113.1: icmp_seq=63 ttl=64 time=12.643 ms
64 bytes from 203.0.113.1: icmp_seq=64 ttl=64 time=12.961 ms
64 bytes from 203.0.113.1: icmp_seq=65 ttl=64 time=13.512 ms
64 bytes from 203.0.113.1: icmp_seq=66 ttl=64 time=13.200 ms
64 bytes from 203.0.113.1: icmp_seq=67 ttl=64 time=12.809 ms
64 bytes from 203.0.113.1: icmp_seq=68 ttl=64 time=12.183 ms
64 bytes from 203.0.113.1: icmp_seq=69 ttl=64 time=13.276 ms
```

You'll want to get logged in to the nearest L3 switch / Router / Gateway / Uplink Device and you'll see the same effect:

```
launchcomplex39#ping launchpad39a 
Type escape sequence to abort. 
Sending 100, 100-byte ICMP Echos to 203.0.113.1, timeout is 2 seconds: 
!!!!!!!!!!!!!!!!!!!!....................!!!!!!!!!!!!!!!!!!!!..................
...!!!!!!!!!!!!!!!!!!
Success rate is 68 percent (68/100), round-trip min/avg/max = 1/2/3 ms
```

These are the telltale signs of some sort of cyclical issue. Generally, I find it to be a case of L2 swapping, either MACs moving between ports or swapping in the ARP table.

On the nearest router to your device, you'll want to look at these tables. I look at ARP first, because it will give me the MAC address to copy and paste into the next command.

```
launchcomplex39#show arp 203.0.113.1
Address         Age (min)  Hardware Addr   Interface
203.0.113.1           N/A  0000.5e11.1111  Vlan3633, Port-Channel53
```

To verify that we are dealing with a duplicate IP, and not a deeper Layer 2 issue (such as a physical loop) start by doing a command similar to:

```
launchcomplex39#show log |include 0000.5e11.1111
launchcomplex39#show log |include 00:00:5e:11:11:11
```

Run it with both the Cisco- and the Juniper-style notation, because this is the log message I found currently on the Arista switch I'm renaming to launchcomplex39 to protect the guilty. It gives the Cisco-style xxxx.xxxx.xxxx but appears to log in XX:XX:XX:XX:XX:XX.

```
Jul 10 01:59:56 launchcomplex39 PortSec: %ETH-4-HOST_FLAPPING: Host 00:00:5E:11:11:11 in VLAN 3633 is flapping between interface Ethernet39 and interface Port-Channel53 (message repeated 2 times in 6.13858 secs)
```

Most vendors have the ability to turn on the above logging. I'm only including it because dumb luck meant I was on a switch had looped a few days ago on the interface I was looking at.

If mac move notification is not on, you can do it this way:

``` Cisco
launchcomplex39# show mac address-table  notification mac-move 
MAC Move Notify Triggers: 1
    Number of MAC Addresses added: 612336 
    Number of MAC Addresses moved: 612328 
    Number of MAC Addresses removed: 0 
```

Watch for the moved counter increasing, potentially very rapidly.

``` Cisco
launchcomplex39# show mac address-table address 0000.5e11.1111
Legend:
        * - primary entry, G - Gateway MAC, (R) - Routed MAC, O - Overlay MAC
        age - seconds since last seen,+ - primary entry using vPC Peer-Link
   VLAN     MAC Address      Type      age     Secure NTFY    Ports
---------+-----------------+--------+---------+------+----+------------------
+ 3633      0000.5e11.1111    dynamic   0          F    F  Po53
```

Run the show command multiple times, looking for a change to the Ports column. I usually manage to catch it swapping in 15-20 seconds, but your results may vary.

Other vendors may include a Moves and Last Move column (or similar). If Moves is high and incrementing and Last Move is very recent, then, congratulations you have a layer 2 mac swapping issue and need to troubleshoot it. I haven't written that article yet (Sorry!)

``` Arista

SWC01-00801-UKM#show mac address-table address 00:0c:29:81:54:57
          Mac Address Table
------------------------------------------------------------------

Vlan    Mac Address       Type        Ports      Moves   Last Move
----    -----------       ----        -----      -----   ---------
3633    0000.5e11.1111    DYNAMIC     Po53       453641  3 days, 22:24:55 ago
Total Mac Addresses for this criterion: 1
```

To see if the ARP is changing, 

I like to have a window with my intermittent pings up when I do this - the change will correspond to the changes in the ping response and the MAC you want will be the one that is there when you have ping replies.


## Solution

Once you've identified that you have an ARP swapping situation, caused by a duplicate IP address, you need to start work on fixing it.

First, keep track of the swapping MAC addresses, you will likely only see two. You'll need to determine which is the device you are trying to reach. A tool for Mac OSX such as [Xraystyle's mac_format](https://github.com/xraystyle/mac_format) or [Wireshark's OUI Lookup](https://www.wireshark.org/tools/oui-lookup.html) can help you determine the vendor.

If both are the same, or it is an unknown vendor (this could be a fake VM MAC or a 3rd party network card) all is not lost. Pick one at random and follow the next steps, if that doesn't work, then change it to the other and repeat.

### Port Shutdown

At this point, you do have enough information that you can start tracing the MAC address across the network. If the duplicate is being caused by a system that has been connected improperly, you may be able to simply shut down the port facing the rogue. This is a fairly aggressive response to the issue but may meet your needs or security goals. A technician or other on-site personnel will need to physically reach the device after networking is shut off and implement a permanent solution.

### Static ARP
To stop the ARP swapping you need to statically assign the ARP table for one of the MAC addresses.

You have two options here, if this is just a temporary triage for remote access, then you can set it to the proper device. Once that is done you can connect to it and perform any needed works. This will **not** help any devices that are on the same subnet which are likely experiencing slower swapping issues, possibly minutes or hours between swaps due to the timing on traffic patterns or broadcast ARP such as gratuitous ARP.

To solve the problem once and for all, though, you will need to set the static ARP entry for the rogue device. This will let you reach it and, hopefully, reconfigure it or shut it down safely. Once that has been done you can remove the static ARP entry and go about your merry way.

Setting (and removing) a static ARP entry tends to follow one of these forms:

``` Juniper
user@switch# set arp <ip-address> mac <mac-address>
user@switch# delete arp <ip-address> mac <mac-address>

```

```Mac/PC
> arp -s <ip-address> <mac-address>
> arp -d <ip-address>

```

``` Cisco
# arp <ip-address> <mac-address> arpa
# no arp <ip-address>
```

## Closing

The only real answer to duplicate IPs is never to have them, and IPv6 makes a lot of effort on that matter. For IPv4 I'm personally a strong advocate of using DHCP and static reservations for nearly everything and only setting static assignments on devices required to bootstrap a site. This requires very careful planning to apply to network gear, but can generally be done easily for any systems gear.
