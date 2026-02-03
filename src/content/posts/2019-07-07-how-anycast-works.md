---
title: What is Anycast?
image:
  path: /assets/images/posts/learning_series/cloudflare-cdn-network.png
  alt: Cloudflare CDN Graphic
  credit_text: CloudFlare
  credit_link: "https://www.cloudflare.com/"
categories: [Learning Series, DNS, Anycast, Redundancy]
tags: []
---
Do you have multiple servers with the same content or purpose? Do you want every client to always take the best path to the closest one?

Anycast is for you!
<!--more-->

I'm making an effort to not get too opinionated in these articles, but I just have to start by saying that Anycast is awesome and I love it.

## What Anycast is
<img src="/assets/images/posts/learning_series/anycast.png" alt="Anycast Illustration - 4 routers with the same IP" title="Anycast Illustration" width="75%" style="width:75%;height:auto;display:block">

Anycast is, at its heart, very simple. Every server offering the same function simply advertises the same IP address to the network. Regardless of how you attempt to reach it, routing protocols always ensure that the closest, lowest cost server is reached.

This gives faster response times and increases redundancy.

In the graphic above each of the routers at the edge are advertising 198.51.100.75 and provide some service, such as DNS. Clients outside of the cloud that is shown will reach the nearest or lowest cost device that is advertising 198.51.100.75 and providing the service.

## How to implement Anycast networking

The network implementation of Anycast is where it is truly simple. Routing protocols are designed to allow for multiple paths to the same destination. Anycast takes advantage of this by advertising the same destination at multiple points and the routing protocol just seems these points as paths to a common destination.

### Picking a routing protocol

This in many ways comes down to what your network is running to begin with and where your anycast server resides on the network and in relation to the wider internet.

#### IGP (OSPF, IS-IS, EIGRP)

If the service is being provided to the local, or perhaps regional, network then it might make sense to advertise the route using an IGP and taking advantage of faster failover times. If, though, the traffic is from outside the network and arriving via BGP peerings then it may take a more sub-optimal path by entering your network at the previous lowest-cost point and then traversing to the nearest anycast provider within your network.

This is more commonly done for network services that run on a router, such as the RP for a PIM-SM network. IGP support in Linux or Windows servers tends at the time of writing to be more limited. [BIRD](https://bird.network.cz/) and [Quagga](https://quaggaproject.org/) have at least some IGP support. I've used BIRD only for BGP, but I use Quagga for IS-IS on my own network.

#### BGP

BGP is one of the more common protocols for setting up anycast providers. It is well supported on networking gear as well as on Linux and Windows servers. In fact, many Virtual Server providers will allow you to advertise a /24 (or in some cases today even smaller) of provider-independent space directly from your VM using BGP. This allows you to get started with a global anycast service for as little as a handful of units of your local currency per month.

### IPv4 vs IPv6

Anycast as a concept came into being after IPv4 was designed, so there is nothing specific to configure or understand for it. All (non-multicast) addresses are assumed to be unicast and can be also be used for Anycast.

IPv6, on the other hand, has set aside specific space within each subnet for Anycast. [RFC 2526](https://tools.ietf.org/html/rfc2526) reserves the highest 127 values of a subnet prefix Interface Identifier for anycast addresses:

```
   |              64 bits            |      57 bits     |   7 bits   |
   +---------------------------------+------------------+------------+
   |           subnet prefix         | 1111110111...111 | anycast ID |
   +---------------------------------+------------------+------------+
                                     |   interface identifier field  |
```

Additionally, any unicast IPv6 address can be anycast in the same way that any unicast IPv4 address can be used.

(RFC4291, RFC7723, RFC8155 [and likely others] also specify anycast addresses, but not for general use so are outside the scope of this article).


## Useful applications of Anycast

### DNS Servers

This is the most popular use of Anycast providers by leaps and bounds. Moving DNS to be anycast is among the lowest hanging fruit to speed up website access as every single interaction starts with a DNS query and a failed query may result in a 60-second timeout penalty.

Having geographically dispersed DNS servers also allows you to configure them to provide local server IP addresses when queried, without having to change anything on the client. [My article on GeoDNS](/blog/jmac-issues-with-geographical-dns) goes into that in more detail.

### Directory Infrastructure

LDAP and Active Directory are also prime candidates for conversion to anycast. Domain-joined laptops and computers accessing Single Sign-On (SSO) often move around your network. If you have a global private network, this can even be to destinations that may be 200ms away from headquarters or over very slow WAN links such as satellites.

Using anycast providers for directory services allows users to roam more freely and may simplify the provisioning of initial network gear deployments.

### VPN Concentrators

Software-Defined Wide Area Network (SDWAN) how I ~~loathe~~ love thee. Initial VPN tunnels can come up facing anycast concentrators to download config. These tunnels can be used for out of band access, or even for general access (but be careful of the pitfall of state).

### Rendezvous Points (RPs) for Protocol Independent Multicast (PIM)

If you are deploying multicast on your network you are most likely using PIM in Sparse Mode which has no built-in method for redundancy, load balancing, or anything similar. Please use anycast to solve this. A message from your friendly network engineer.

At lower levels of certification, the tests will talk about bootstrap routers and similar. Study them for the test, but implement anycast in practice. Higher levels of certification will instruct you to do so, so you'll even be ready for the next tests!

## Pitfalls

### Loss of State

The ideal uses of Anycast are for stateless services. The network makes no guarantee that any two requests will reach the same server, and in fact, because of Equal Cost Multipathing (ECMP), load balancing, load sharing, network changes, and more, they quite often will not reach the same server.

TCP itself inherently requires stateful interaction. If you thought that maintaining TCP state behind a load balancer was hard, Anycast is an entirely new level.

If you are hosting an application that needs state to be maintained you'll need to come up with some way to do it. I'll leave that to the systems folks, but here are some quick ideas:

* Encode any necessary state information in every packet
* Use Anycast only for initiation, forward to a local address to continue
* Share state between the entire server cluster (harder to do across regions)
* Reduce the amount of state necessary for the application
    * Reduce it in total
    * Hold all necessary state on the client

### Loss of service without loss of reachability

There is a failure mode where the server or router is up, but the service that is being reached has failed. The routing protocol does not have any visibility into this, so it keeps sending traffic to the nearest destination. This traffic fails and is blackholed.

To get around this some time of heartbeat tracker needs to be in a place where if the service becomes unavailable the route to it is withdrawn and the network diverts traffic to the next nearest/lowest cost anycast provider. The actual failover time is the worst of the timers between the heartbeat and the actual routing convergence.

Want to know more about Anycast? [Read my article on Anycast.](/blog/how-anycast-works)

Want to discuss it? Head over to [LinkedIn ](https://www.linkedin.com/in/jmacego)

This is my second full-length article in years, I'd welcome all feedback:
[LinkedIn ](https://www.linkedin.com/in/jmacego) is effectively the only Social Media platform I'm on, but you can try to [tweet at me](https://www.twitter.com/jmacego) and I reply to [Keybase](https://keybase.io/jmacego) quite quickly.