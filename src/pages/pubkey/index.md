---
layout: ../../layouts/BaseLayout.astro
title: Public Key
description: Public key import instructions for John MacDonald.
---
## Installing My Public Key

### Linux or Mac CLI:
##### From the default keyserver:  
`gpg --recv-key 0x3C54E750`

##### From the keyserver of your choice:  
`gpg --keyserver <KEYSERVER> --recv-key 0x3C54E750`

##### From my website in one step:  
`curl https://www.jmaclabs.com/keys/jmac.gpg | gpg --import`

##### From my website in two steps:  
[Download my key](https://www.jmaclabs.com/keys/jmac.gpg) and then,   
`gpg --import jmac.gpg`

### Mac GUI
On a Mac with `GPG Keychain` you can either `Lookup Key` and put in `0x3C54E750`, or [download my key](https://www.jmaclabs.com/keys/jmac.gpg) and import the file.

### Windows
#### Enigmail
##### You have three options:  
`Select Keyserver → Search for keys` and enter `0x3C54E750` to find it on a public keyserver.  
[Download my key.asc](https://www.jmaclabs.com/keys/jmac.asc) and then use `File → Import keys from file`.  
Copy the key below, including the `---BEGIN` and `---END` lines and then use `Edit → Import keys from Clipboard`.

#### Other Windows Software
[Download my key.asc](https://www.jmaclabs.com/keys/jmac.asc) - many of the windows tools will associate the .asc file extension for you. If not associated, look for similar menu items to the ones for Enigmail above.

### Other OS or Tools
For any other tools, please check your documentation. Failing that, feel free to reach out to me by e-mail, john@ this website domain, or on LinkedIn.

---

If you have need for a secure exchange of keys for some reason, please follow procedures for reaching me for the exchange that fit your security needs. If you really do have need of that you understand the implications of this website being hosted with a simple letsencrypt ssl certificate on a 3rd party controlled publically hosted website. At the time of this writing I can't imagine why you would need this information, but I will do my best to follow any reasonable security requirements for exchange.

---

If you just want to paste it in somewhere, here it is:
```
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
