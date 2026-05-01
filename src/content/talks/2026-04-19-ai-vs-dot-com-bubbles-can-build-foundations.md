---
title: "AI vs. DotCom: Bubbles Can Build Foundations"
date: '2026-04-19T00:00:00.000Z'
description: "Companion talk to the AI vs. DotCom series, part 1: how a bubble's wreckage can still leave durable infrastructure behind."
relatedPosts:
  - ai-vs-dot-com-bubbles-can-build-foundations
seriesLabel: "AI vs. DotCom"
# Deck and video URLs are filled in once the assets exist:
# deck:
#   embedUrl: "https://onedrive.live.com/embed?..."
#   shareUrl: "https://1drv.ms/p/s!..."
#   downloadUrl: "https://onedrive.live.com/download?..."
#   filename: "ai-vs-dot-com-p1.pptx"
# video:
#   youtubeId: "abcdEFGhijk"
#   durationMinutes: 22
categories:
  - Talks
tags:
  - ai-vs-dotcom
  - keynote
published: false
---

Working talk version of part 1 of the AI vs. DotCom series. Talking-head + PowerPoint, target ~15 minutes for YouTube. Draft 1, for read-aloud practice.

<!--more-->

## Script Conventions

- `[SLIDE NN — label]` is a slide change cue.
- `(beat)` is a short pause. `(longer beat)` is a clear breath.
- `*word*` means lean on that word.
- `(warmer)`, `(drier)`, `(flat)`, `(grin)` etc. are tone notes.
- `// breath` is just a breath mark inside a long sentence.
- Lines are broken roughly where I'd actually break them speaking. Don't read past the line break without a tiny pause.

Target word count: ~2,150 words (about 14 minutes at 150 wpm, leaves cushion for natural slowdown and the cold open).

## Script

### Cold Open

`[SLIDE 01 — black slide, no text]`

(quiet, conversational, like you're telling a story to one person)

In nineteen ninety-six,
I bought an ad in my high school yearbook.

(beat)

Not for a band. Not for a car wash.

For a website.

(beat, slight grin)

It said, *JMac's CGI Archive*. *JMacLabs dot com*.

I was sixteen. I was the CEO of a small web hosting company.
And I genuinely could not understand why everyone else around me
was not also doing this.

(longer beat)

`[SLIDE 02 — title card: "AI vs. DotCom: Bubbles Can Build Foundations"]`

I want to talk about why that matters now.
Because I think we are living through something that looks a lot like that period again.
And I think most of the takes you're hearing about it,
on both sides,
are wrong in roughly the same ways they were wrong the first time.

---

### Setup: Who's Talking, and Why You Should Care (about 90 seconds)

`[SLIDE 03 — short bio bullets: Fractional CTO · Former web hosting CEO 1996–2001 · AI advisor]`

Quick context on me, and then we'll get to it.

I'm John MacDonald. I'm a fractional CTO and an AI advisor now.
But from nineteen ninety-five to two thousand one,
I lived inside the DotCom run-up as an operator.
First running a web hosting and dedicated server company that actually worked.
Then a self-funded company that *didn't*.
I wasn't a venture capitalist. I wasn't an analyst.
I was the guy on a shoestring budget,
deploying servers, writing CGI scripts,
building a frontend to BIND because normal people were never going to love DNS.

(drier)

By the end of two thousand one,
I was so tired of the internet
that I went and helped start a media company and an aviation business
just to get away from it.

(beat)

That vantage point matters for what I'm about to say.
Because I'm not telling you this from the outside looking back.
I'm telling you from the inside looking forward,
the second time.

---

### Part One: The Mania Arrives in Layers (about 2 minutes)

`[SLIDE 04 — timeline: "Builder mania ~1995–1997" / "Aggregate market bubble ~1998–2000"]`

Here's the first thing I want to be careful about.
Historical analogies get stupid quickly when people flatten the timeline.

The aggregate DotCom bubble,
the one in the stock charts that everyone remembers,
really shows up around nineteen ninety-eight through early two thousand.
That's the data.

But if you were inside the early technical subculture,
the *feeling* of mania started years before that.

(beat)

When I first got online in any meaningful way,
it didn't feel like a normal product category slowly maturing.
It felt like a door had opened in the wall.

`[SLIDE 05 — image: 1990s desk: Netscape, link exchanges, domain registration form]`

A small ISP called Silverlink came along
and suddenly there was a local path
into this strange emerging world.
People were building BBS systems.
Maintaining link directories.
Trading traffic.
Reviewing each other's websites and handing out little web awards
that doubled as marketing loops.
I became *jmac*, all lower case,
because that was the world I entered.

(warmer)

We were trying to make the internet
more usable, more visible, more obviously valuable.
We were builders.
We were also evangelists.
And honestly, those two categories
are not as separable as people pretend in hindsight.

(beat)

I was absolutely one of those people who thought
the internet was going to change *everything*.
Not a lot of things.
Everything.

And I could not understand
why everyone around me did not immediately see it.

(longer beat)

`[SLIDE 06 — pull-quote: "Long before the spending wave, there were already true believers who had touched something real."]`

(slowing down, a touch heavier)

That emotional structure is one of the clearest parallels to AI right now.

Long before the current spending wave.
Long before enterprise buyers started putting "AI strategy" on slides.
There was already a set of true believers
who had touched something real
and concluded, not irrationally,
that this was going to alter the shape of work.

They were not wrong.

But being right at *that* stage
does not protect you
from getting the business timing,
the market structure,
or the investment economics
badly wrong.

---

### Part Two: I Built Real Things (about 2 minutes)

`[SLIDE 07 — image: scrappy server rack / hosting startup, late 90s aesthetic]`

I was not somebody venture capital threw money at.
I was somebody local news picked up
as the scrappy teenager who was ahead of the curve.

That's actually a useful place to stand
if you want to understand a technology shift.
You're close enough to the work to see what *actually helps*.
But you're not so insulated by capital
that you can mistake scale theatre for traction.

(beat)

Some of what we built then
sounds ordinary now.

That's the point.

I built a frontend to BIND
because normal people were never going to love raw DNS configuration.
I built portals and automation
that tied billing to self-service hosting account provisioning.

(drier)

Today that sounds banal.
At the time it was part of making internet infrastructure
*legible*
to people who were not going to become sysadmins.

This was the era when registering a domain name
meant filling out a form online
and waiting for InterNIC
to mail you a paper invoice for seventy dollars.

(beat, lean in)

`[SLIDE 08 — split screen: 1996 BIND frontend mockup ↔ 2022 ChatGPT screenshot]`

This is one reason I keep thinking about the current AI interfaces.

ChatGPT did not invent machine learning.
It certainly did not invent intelligence.
What it did,
very effectively,
was *remove a large amount of friction*
between ordinary people
and a capability they were never going to access
through research papers,
APIs,
or a command line.

That is structurally similar
to what a lot of us were doing in the early internet era.

The first durable value
often does not come from the deepest underlying system.
It comes from the layer
that lets ordinary people finally touch it.

---

### Part Three: Operators and Hype Machines (about 90 seconds)

`[SLIDE 09 — split illustration: server-room operators ↔ champagne party hype crowd]`

The DotCom years are remembered
as if everyone inside them was either a visionary or a fraud.

Reality was more crowded than that.

There were people building real operating businesses.
Some succeeded.
Some failed honourably.
Some were too early.
Some were undercapitalised.
Some were great at the work and bad at the financing story.

And then there were people
who mostly learned to talk wealthy friends
into bankrolling an idea
long enough to make it look larger than life,
attract venture backing,
and aim at public markets
with massively negative earnings.

(flat)

That also sounds familiar.

(beat)

I don't want to over-moralise this.
Some of those people were cynics.
Most genuinely believed their own story.
Markets do not require corruption to behave badly.
They only require enough people to believe
that someone else will buy the story
at a higher price.

(warmer, slightly self-deprecating)

I was a real operating believer.
That had advantages. I built things I thought were useful.
I scoped reasonably.
I came through in better shape
than the people who believed every fantasy around them.

It also had disadvantages.

I did not position myself
to capture the most absurd upside.
I was one of the people the larger fortunes were built *on*
without ever receiving them.

That's not a complaint. It's a lesson.
Being closer to reality
does not automatically mean you win the financial cycle.

---

### Part Four: A Useful Failure (about 90 seconds)

`[SLIDE 10 — title: "5GuysTech.com, LLC — A Useful Failure"]`

I learned at least as much
from a company called 5GuysTech
as I did from any of the more successful ventures around it.

The premise was not insane.
A lot of businesses *should* have been using the internet.
Most weren't.
I thought the gap was obvious.

So we tried to bridge it
in a way that, in retrospect,
tells on the period beautifully.

(beat, drier)

A real brick-and-mortar office
for an internet company.
Where people could come in,
sit down,
explain their web needs,
and get help becoming part of this new world.

(beat)

That was one of the biggest wastes of money
of my early career.

The core problem was timing.
We were too late for the first wave of technical enthusiasts,
the people already piecing things together themselves.
And too early for the second wave,
the mainstream users
who would eventually absorb the internet
into ordinary commercial life.

`[SLIDE 11 — pull-quote: "Being right too early is still a way of being wrong in business."]`

(land this clean)

There's a broader lesson there
that applies very much to AI.

*Being right too early
is still a way of being wrong
in business.*

(beat)

When people look back from a world
the internet already transformed,
they imagine that anyone who saw the future clearly should have done well.
That is not how technological transitions work.
They are full of good ideas
that arrive before demand,
before trust,
before habit,
before the surrounding economics are ready.

Directionally right is not the same thing as economically right.

---

### Part Five: What the Bubble Built Anyway (about 2 minutes)

`[SLIDE 12 — visual: fiber lines, server racks, payment icons, search bar, all framed inside a money bubble]`

(shift, more confident, this is the heart of the talk)

So given all of that,
here is the part I want you to actually leave with.

I do not think the right lesson from the DotCom bust
is that the whole thing was fake.
And I believe the same is, ultimately, going to be true of AI.

It was a bubble.
A lot of money was misallocated.
A lot of investors got crushed.
A lot of workers got hurt.
A lot of companies disappeared for good reason.

(beat)

And society still got something out of it.

What it got
was not a magical guarantee
that every internet business deserved to exist.

What it got
was infrastructure,
interface layers,
and eventually consumer behaviour
that would have taken much longer to emerge
under a tidier, more disciplined capital cycle.

`[SLIDE 13 — list builds in: 1) Search 2) Online payments 3) Dark fibre & datacenter capacity 4) E-commerce habits]`

(crisp, build-by-build)

*Search.*
Before search became good,
the internet was directory-driven, artisanal, awkward.
Discovery was a real constraint.
Search changed what the internet was *for*
because it changed what the internet was *like to use*.

*Online payments.*
E-commerce does not become ordinary
until paying online becomes boring.
Once payment trust becomes infrastructure
instead of an event,
entire categories of commerce
stop feeling weird.

*Dark fibre. Network overbuild. Datacenter capacity.*
I have spent enough years in network operations
to know this territory from the inside.
A lot of investor capital
went into capacity that looked absurdly excessive at the time.
Some of it *was*.
But later optical advances
people had not fully priced in
changed the value of that buildout.
The bubble didn't simply finance websites with bad earnings.
It also financed transport capacity, hosting, datacenter habits
that later industries inherited far more cheaply
than they otherwise would have.

(beat)

`[SLIDE 14 — pull-quote: "Public benefit and investor return are not the same thing."]`

What it did *not* do
was create mainstream consumer behaviour overnight.
That part took longer.
Gen X, then Millennials, had to grow up inside the change
and become the spending base for it.

(slow down here)

And this is the line I want you to hold onto.

*Public benefit and investor return
are not the same thing.*

A market can massively misprice a technology wave
and still leave behind rails
that change everything later.

---

### Part Six: That Is Why AI Feels Familiar (about 90 seconds)

`[SLIDE 15 — title: "Why AI Feels Familiar"]`

This is the narrow sense in which AI reminds me of the DotCom era.

Not because every detail matches. It doesn't.
AI is arriving through existing cloud platforms,
existing devices,
existing distribution channels
in a way the early commercial internet did not.
Adoption is faster.
Interfaces are simpler.
The starting base is much larger.

But the structure repeats.

There are true believers.
There are opportunists.
There is an enormous amount of money
rushing toward whatever looks like the next defensible layer.
There are serious capabilities
sitting next to unserious business models.
There are people insisting this changes everything tomorrow,
and people insisting it changes nothing at all.

(flat, even)

I do not buy either position.

(beat)

`[SLIDE 16 — pull-quote: "This may not be the worst AI we will ever have. It may be the cheapest most of us will see for years."]`

I think AI is here.
I think it already does many useful things.
I think it is going to alter how work gets done
across a wide range of fields.

I also think a lot of current spending will prove undisciplined.
A lot of current products
will turn out to be expensive ways to produce mediocre output.
And a lot of people are mistaking
subsidised usage
for durable economics.

(lean in, this is the line)

People keep saying
*this is the worst AI will ever be.*

Maybe.

But that is not the same
as saying it will keep getting cheaper
in every meaningful sense.

This may not be the worst AI we will ever have.

(beat)

But there is a good chance
it is the *cheapest AI*
many of us will see for years.

Once subsidy of free capital departs.
Once scarcity and real operating costs settle into view.

---

### Part Seven: What Both Sides Miss (about 60 seconds)

`[SLIDE 17 — two columns: "Skeptics miss…" / "Evangelists miss…"]`

Sceptics who dismiss AI entirely
are making the same mistake
many people made about the internet.
They are reacting against bad claims
by deciding the underlying capability does not matter.

That's almost always the wrong move.

AI is not going away.
Some jobs are going to be compressed, reshaped, or eliminated.
We should not lie about that.
It will hurt people. It already is.

(beat)

But the evangelists are also wrong
when they speak as if every improvement in model quality
automatically translates into lower cost
and broad human replacement.

That doesn't follow from the evidence we have now.

AI is often better than an *average* person
at bounded knowledge work.
It is rarely better than a *true expert*
in a narrow domain.

What it does well, often extremely well,
is synergise with experts.

A strong developer can direct multiple agents and get more done.
A good doctor can use AI as a second opinion.
A capable analyst can interrogate data faster.

(warmer)

The near-term effect is less
*AI replaces the expert.*
And more
*AI gives more people partial access to expert-shaped assistance.*

That is a major change.
It is also not the same thing
as saying expertise no longer matters.

---

### Close: The Question Leaders Have to Answer (about 90 seconds)

`[SLIDE 18 — image: man looking out over Singapore at dusk, AI face reflected in glass]`

(slower, more grounded, this is the landing)

The most expensive delusion I see right now
is not believing AI matters.

It is forcing expensive AI solutions
on customers who do not like them
and employees who are not using them.
Even though they cost more,
produce lower-quality results,
and take more time.

(flat)

That is not transformation.
That is executive theatre with a compute bill attached.

(beat)

The practical question is much less glamorous.

Where does AI actually improve cost,
quality,
speed,
or decision support
all at once?
Where does it fit the workflow
instead of insulting it?
Where does it make strong people stronger
rather than creating a second-rate substitute for judgment?

Those are operating questions.
Not branding questions.

(beat)

`[SLIDE 19 — pull-quote: "Bubbles are stories about sequencing, not just stories about greed."]`

That is also the real lesson I took
from living through DotCom from the inside.

Bubbles are not just stories about greed.
They are stories about *sequencing*.

Real capability arrives.
Believers overinterpret it.
Capital overreacts to it.
A lot of bad businesses get built around it.
Some good infrastructure gets financed anyway.
Then the bill comes due,
and the serious work begins.

I think we are somewhere in that cycle right now.

(longer beat, then the closer, slow and clean)

`[SLIDE 20 — final card: closing line]`

If I have one sentence
I want an executive viewer to keep,
it is this.

*Every revolution
has huge winners and huge losers.
The path is not to chase either extreme.
It is to make the changes that keep you,
and your company,
relevant,
useful,
and profitable
after the mania burns off.*

(beat)

That was true of the internet.

I believe it is about to be true of AI.

`[SLIDE 21 — outro card: jmaclabs.com / link to written essay / next in series]`

(warmer, normal speaking voice)

This is the first in a five-part series
adapting essays I'm publishing on jmaclabs dot com.
Link to the written version is in the description,
along with the rest of the series as it lands.

Thanks for watching.

`[END]`

---

## Production Notes

- Word count is roughly 2,150. Read at a normal pace, this should land between 14 and 15 minutes. If your natural rate is slower, trim Part Three (operators / hype machines) first; it carries the least unique-to-this-talk argument.
- The two lines that have to land cleanly:
  1. *Being right too early is still a way of being wrong in business.*
  2. *This may not be the worst AI we will ever have, but there is a good chance it is the cheapest AI many of us will see for years.*
  Mark these in the deck as separate slides so the cut hides any retake.
- The cold open has no slide on purpose. Black slide, just your face. Don't drop the title card until after "and I think most of the takes you're hearing are wrong in roughly the same ways they were wrong the first time."
- Avoid em-dashes in any on-screen text per the editorial standard for this series; the deck pull-quotes should use the same punctuation style as the script lines they're drawn from.

## Production checklist

- [ ] Draft deck in PowerPoint
- [ ] Save to `OneDrive/JMacLabs/Talks/ai-vs-dot-com-bubbles-can-build-foundations/deck.pptx`
- [ ] Generate OneDrive embed URL, paste into `deck.embedUrl`
- [ ] Generate OneDrive share URL, paste into `deck.shareUrl`
- [ ] Construct download URL (share URL with `?download=1`), paste into `deck.downloadUrl`
- [ ] Set `deck.filename` to the human-readable file name
- [ ] Record talk
- [ ] Upload to YouTube as unlisted, paste video ID into `video.youtubeId`
- [ ] Flip `published: true`
