---
title: GitHub - Forking a repository you've already cloned
date: 2018-07-08 18:26 -0700
author: jmacego
image:
	path: /assets/images/posts/github-forking-illustration.png
	alt: |
		Minimalist editorial illustration of a developer forking a repository on
		GitHub, with a clear upstream-to-fork branching diagram on a large screen
		in a calm modern workspace. Neutral tones with a single blue accent, clean
		shapes, and no text.
---

I find that most of the time, when I am forking a respository to do a pull request, I've already cloned the respository. I don't do it often enough that I have it memorized, so I go looking for guides... and find that they all are for cloning a new repository, making changes, then doing the pull request. Then I go look up the actual commands that I want and proceed.

This is here for me, and, presumably, you to follow step by step those rare times that you need it.

<!--more-->

Start off by forking the repository, and copying the new URL (within your github). The following commands assume you know what files you changed. If not, you'll want to stash everything, do a git checkout, make your changes, and then git stash apply (merging as needed) when you're done.

```
git remote -v

git remote rename origin upstream

git remote add <forked github url>

#optional git stash # store anything you've been working on that's unrelated, redo the work, then git stash apply to get back to where you were.

git pull # Make sure you are up to date.

git checkout -b <new branch name>

git add <changed files you want to pull request for)

git commit # -m "reason" or long reason in text editor

git push --set-upstream origin <branch name>
```

Now go to the respository on your and you should see something like this:
![JMac At Jefferson Airport](/assets/images/github-compare-and-pull-request.png "Compare & Pull Request")

Go ahead and `compare & pull request` - if you've followed good Git procedures on your commit message, this next page is all filled out and you can just check for typos and review the diff. If not... you really should have, do so next time, and right now fill out the title and comments.

![JMac At Jefferson Airport](/assets/images/github-open-a-pull-request.png "Open a pull request")

When you're done, click the `create pull request` buttom - and it'll go to the original owner to see if she or he wants to merge it in.

If you've done a good pull it should have no conflicts

![JMac At Jefferson Airport](/assets/images/github-no-conflicts.png "No Conflicts!")

And is more likely to get merged in, because the easier you can make it, the more likely people are to do it.

TADA! You've made the internet a better place.

Also, yes, this website is hosted on github and you ~~~can~~~ do pull requests on this website to fix typos. Pleeeeease do =)