---
title: GPG Symmetric Encryption of Disk Image
layout: post
date: 2018-06-29 19:20 -0700
permalink: /blog/:title
author: jmacego
---
I like to tinker with encryption, not because I have any real use-case for it, but because I find the entire subject enjoyable.

Just thought I'd take a moment to share with you the bit I was working on tonight: A symmetric (passphrase) encrypted disk image usable on Mac, Linux, and Windows.

***WARNING: I am in no way responsible if you do something to break your data or your computer. Make sure passphrases you use are accurate and you can remember them, there is no way to recover an encrypted file without them.***

First up: Create the disk image, I chose ExFAT as the filesystem as it is reasonably portable and standardized on as the filesystem for SDCards means out of the box support on most systems (including Raspberry Pi). I'm using `.dmg` as the file extension because Mac requires it on creation. Feel free to use whatever suits you.

<!--more-->

## Creating the disk image

Creating the disk image on Mac:
![MacOSX ExFAT Image Creation]({{ "/assets/images/mac-osx-create-exfat-image.png" | absolute_url }} "MacOSX ExFAT Image Creation")

Creating the disk image on Linux:
```
truncate -s 100MB image-to-encrypt.dmg
mkfs.exfat image-to-encrypt.dmg
```

Creating the disk image on Windows:
```
ssh pi@raspberry
<follow linux instructions>
aka I have no idea, sorry
```

On Mac you can double-click the file, or type `open <filename>` or open disk utility and use `file -> open`. On Linux you may be able to double-click in some desktop applications, but you can always mount it with `mount -t exfat -o loop <filename> <mount directory>`

## Encrypting the disk image

I use GPG Keychain on Mac, which allows me to simply right click the file and then use `Services -> OpenPGP: Encrypt File` and then uncheck any keys in the main section and check the `Encrypt with password` box in the lower left.

![Services -> OpenPGP: Encrypt File]({{ "/assets/images/gpg-keychain-encrypt-file.png" | absolute_url }} "Services -> OpenPGP: Encrypt File")

The commandline option will work under Mac or Linux with GPG installed. I'll do an article on getting GPG installed at some point in the future and try to remember to link it in here.

```
gpg -s -c -o encrypted-image.gpg image-to-encrypt.dmg
```

This will prompt you to enter a passphrase, which will be converted to an appropriately sized key. The `-s` is optional, it will also sign it with your private key so that it can be verified during decryption. If you get the following error, you don't have a private key set up for signing and can not use `-s`.

```
gpg: directory '/home/jmacego/.gnupg' created
gpg: keybox '/home/jmacego/.gnupg/pubring.kbx' created
gpg: no default secret key: No secret key
gpg: image-to-encrypt.dmg: sign+symmetric failed: No secret key
```

On Windows... right click and hope your GUI has an encrypt function? I've got a Windows computer around here somewhere... I'll try to figure it out later.

Once encrypted you can share it as needed. Depending on your goal you may want to additionally delete the original (non-encrypted file) after you've done some verification. How much verification you do will depend on how paranoid you are, this is a good step, though `gpg -d encrypted-file.gpg | cmp - original-file.dmg`

## Decrypting the disk image

This is the easy part, on Mac and Windows and many Linux Desktops: Simply double-click and you will be presented with a box asking for a password. After decryption is complete, if you signed the file with `-s`, it will pop up a notice telling you that the signature has been verified and you know that the contents were extracted correctly.

The command line method is:
```
gpg -d -o decrypted-image.dmg encrypted-image.gpg
```

If all goes well you'll get output like:
```
gpg: AES encrypted data
gpg: encrypted with 1 passphrase
gpg: Signature made Wed Jun 27 19:41:55 2018 PDT
gpg:                using RSA key <key fingerprint>
gpg: Good signature from "<Your Name> <your@email>" [ultimate]
```

You can now mount the disk image just like in the [Creating the Disk Image](#creating-the-disk-image) section.

## Final Words

These [encryption](#encrypting-the-disk-image) and [decryption](#decrypting-the-disk-image) instructions will also work with any individual file. For small files you can even do fun things like not use `--armor` instead of `-o <output filename>`and get output to the terminal in ASCII text, suitable for including in e-mail or the like.

However, I really actually recommend just encrypting the files with your own key as a recipient in general. As long as you have your private key, then you can access the disk image, file, or whatever. If you are sending the file to someone else you should encrypt it using their public key as the recipient so that they can easily decrypt it. Symmetric encryption is for the times that you are encrypting it for your own use in a case where you will have access to GPG, but potentially not to your own private key.
