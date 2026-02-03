---
layout: post
title: 'Keybase - Identity Verification and Encrypted Communications for the Masses'
description: "Easy to use, relatively secure, open-source encryption"
categories: [instant messaging, crypto, security, fileshare]
date: 2018-06-27 19:13 -700
image:
  path: /assets/images/posts/1920px-Keybase_logo_official.svg.png
  alt: Keybase Logo
  credit_text: Keybase
  credit_link: "https://github.com/keybase/client/blob/master/media/logos/keybase_logo_official.ai"
---
How do you know that that person you need to message on Slack, Facebook, LinkedIn, Twitter, etc. is who they say they are? How do you know who is sending you that file and if you should trust them? How do you guarantee that the message you send is not being intercepted in transit?

By meeting in a dark alley, exchanging information that only you and the other person know, then tatooing their public key on your arm and manually typing it in to a computer that has never touched the internet, and then passing the messages onto this computer, signing (and potentially encrypting) them, and then passing them back to the internet using the IPoAC protocol.

Er, yeah, no. Well, if you have something that is that important, you know you do, and are already doing some variation of the above. If you need to get such messages to or from me, I guess you can check out my [Public Key Page](/pubkey) and we can arrange something.

For everyone else, there's [Keybase.io - Crypto for everyone!](https://keybase.io).

<!--more-->
## Basic Usage
Jump to: [Top of Page](#top-of-page) \| [Advanced Usage](#advanced-usage)

### Installing
Lets dive right in. [Download Keybase](https://keybase.io/download) - unfortunately there's not a great validation method. You can check the SSL certificate - it should be green, but that only verifies the domain name itself. Windows and Mac have built in verification of developers signatures signed by Microsoft and Apple, however Linux is going to require more work. If you generally verify your Linux packages, do so in the normal method (importing the .sig file with gpg) but where this always breaks down is can you trust the source of the .sig file? That's both an entirely separate topic and the topic of this article...

You can also install it for iPhone, Chrome, etc. That's a level of trust up to you, but most of the instructions basically match, however there will be some additional steps as well as some that you can not perform on those platforms.

### Setup

Once installed you go through the normal account creation steps of any other instant messenger-like software. Pick a username, set up a profile, etc.

The difference here, though is that entire section under your profile of `proofs`. This is where Keybase answers the questions of how do you verify who you are talking to. Each of them has instructions on how to accomplish it, but they all work out to publicly posting a cryptographically signed document that any other user can read (the Keybase app does it automatically) and then they know that it is you, and if they have proven themselves you know that they are who you expect.

You can also find people based on the proof. Click `Search People` and then select, for instance, `Twitter` and you can then look people up by their twitter handle. If you desparately want to send a message just to the person with access to that account, you can now do so.

### Using

If someone has looked you up and sent you a message, you can also view all of their proofs. For instance if you search for "jmacego" (There aren't any other JMacs with an ego like me, so I have that username pretty much everywhere) you'll find me. You can do it right now at [keybase.io/jmacego](https://keybase.io/jmacego) and it'll show you that I have proven 3 devices, it lists my GPG public keys, twitter, facebook, github, reddit, hackernews, and this website. Plus! If you want to send me a donation it lists public BTC and ZCash wallets that all of those proofs pretty much guarantee are mine. (No obligation, but I do love to get money ;-)

All of the clandestine meetings, webs of trust, etc. are taken over by our wide footprints on the internet. You can now exchange messages with a level of confidence far beyond what most people need and know both the recipient (because of proofs) and the message (because of signatures) are exactly what you expect. End-to-end encryption is just a useful side benefit.

## Advanced Usage
Jump to: [Top of Page](#top-of-page) \| [Basic Usage](#basic-usage)

Wow, where to start for advanced...

### Revoking Proofs

This is actually fairly important. If you stop using a device, or if a social media profile is compromised, or you stop using a domain name... you need to revoke that proof. The entire concept is based on proofs being current and accurate. Keybase will detect if you delete a proof object, such as the DNS record on the domain name, the facebook or twitter post, the gist on github, but it has no way to detect if you've had a device stolen.

Best practice is to manually go in and revoke the proof. It's simple and quick, and ***absolutely vital***.

### KBFS
KBFS is an entire encrypted filesystem hosted on AWS. It's alpha, and free, so don't trust it for anything you can't afford to lose. I imagine the cloud-based services are where keybase will charge and make money in the future. Also note that this is broken into Private (just available to you), Team (just available to people in teams you select), and Public (exactly what it says, Keybase even publishes it online at [keybase.pub](https://keybase.pub)).

### Git Storage
Encrypted Git storage - Yup. Exactly what it says on the tin. Again, this is alpha and I expect them to charge at some point, but since Git is decentralized there is less risk of loss. This also is a heck of a lot better than git over KBFS or dropbox or any other automatically synced filesystems as it won'd do weird things if, say, you commit at the same time as someone else. ~~~shudder~~~

### Public Websites
Alluded to above, the public folder is published online by keybase. Pretty cool is that you can do `https://<username>.keybase.pub` and it will render Markdown files as html for you. I don't have anything up as an example yet, but it's on my to do list.

### Teams
You can set up an unlimited number of teams and add whomever you like to them. The teams get team chat, team git repositories, and team file storage. All of the cloud stuff I expect will go paid some day, but it's free and unlimited right now.

### Keybase Web-of-Trust - The follow system
You can also follow people who's identities you trust, and you can see who the people you trust follow. It's kinda a web-of-trust in a way, and probably good enough given the general identity proofs, but that the system just randomly encourages you to follow people kinda bugs me and defeats the web-of-trust aspect. But, on the other hand, it's a lot easier than key-signing parties.

### Command Line Client
Keybase's GUI apps are really hiding a lot of cool functionality that you can get to from the command line, and I don't think there is anything you have to use the gui for - you can even chat from the cli. The docs are here, and worth a read: [keybase.io/docs/command_line](https://keybase.io/docs/command_line)

### Final Thoughts
Keybase doesn't solve every problem, absolutely prove any identities, etc. Despite being open-source it's also run by a centralized company that is VC backed. There's also that looming "Will it always be free?" aspect. I'd like to see it some day get foundation backing, or even a decentralized system like keyservers are today. I don't think that would preclude charging for the file hosting service.

I think it fills a niche... if only I knew anyone who was active on it besides myself, so follow me [keybase.io/jmacego](https://keybase.io/jmacego)!