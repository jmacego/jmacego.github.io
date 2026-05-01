---
title: "AI vs. DotCom, Part 2: Amazon, E-Commerce, and the Rewiring of Retail"
date: '2026-04-26T00:00:00.000Z'
description: "Companion talk to the AI vs. DotCom series, part 2: how Amazon's multi-decade build through search, payments, and logistics is the cleanest available template for what AI is actually doing right now."
relatedPosts:
  - amazon-ecommerce-rewiring-of-retail
seriesLabel: "AI vs. DotCom"
# deck: { embedUrl, shareUrl, downloadUrl, filename } once produced
# video: { youtubeId, durationMinutes } once recorded
categories:
  - Talks
tags:
  - ai-vs-dotcom
  - keynote
published: false
---

Working talk version of part 2 of the AI vs. DotCom series. Talking-head + PowerPoint, target ~15 minutes for YouTube. Draft 1, for read-aloud practice.

<!--more-->

## Script Conventions

Same as part 1. `[SLIDE NN — label]` for slide changes. `(beat)` short pause, `(longer beat)` clear breath. `*word*` is a lean-in. `(warmer)`, `(drier)`, `(flat)` are tone cues. Line breaks roughly mark spoken phrasing.

## Script

### Cold Open

`[SLIDE 01 — black slide]`

(quiet, conversational)

There's a sentence one of my clients said to me in nineteen ninety-nine
that I have spent the last twenty-six years thinking about.

(beat)

I was running a company called 5GuysTech.
We had a real office.
Real staff.
A real pitch.

We sat across the table from a small business owner.
We walked them through what a website could do for them.
And we waited for the moment they understood why it mattered.

(beat)

Most of them heard us out.
Almost none of them signed.

`[SLIDE 02 — pull-quote: "My customers know where I am. They come in through the door. This is expensive."]`

(slowly, deliberately)

The objection that stuck with me
was not hostile.

It was calm.
And it was *accurate*.

(reading the slide)

*My customers know where I am.
They come in through the door.
This is expensive.*

(beat)

That was not denial.
That was an honest description
of how those businesses had operated
for the entire length of their existence.

They were right about the present.

(longer beat)

They were wrong about the direction.

`[SLIDE 03 — title card: "AI vs. DotCom, Part 2: The Rewiring of Retail"]`

I want to talk about how that direction actually played out.
And about why I think
the people who are reasoning about AI right now
are making the exact same mistake
my clients made,
in both directions.

---

### Setup (about 60 seconds)

`[SLIDE 04 — short bio strip: Fractional CTO · DotCom-era operator · Network ops background]`

If you're new to this series:
I'm John MacDonald. Fractional CTO, AI advisor.
I lived inside the DotCom run-up as an operator,
including the company that taught me this lesson the expensive way.

In the last episode I argued that bubbles can build foundations.
A market can massively misprice a technology wave
and still leave behind rails that change everything later.

(beat)

This episode pushes on the question that follows from that.

If you accept the rails get built, *then what*?
What does the actual rewiring look like?
How long does it take?
And which of the things people say about Amazon and the mall
are *true*,
versus which are convenient stories
that fall apart as soon as you look at the data?

That's where we're going.

---

### Part One: Why Early E-Commerce Looked Narrow (about 2 minutes)

`[SLIDE 05 — stat callout: "1999: <1% of U.S. retail was online"]`

In nineteen ninety-nine,
online sales were less than one percent
of total U.S. retail spending.

(drier)

One.

Payment felt risky.
Shipping was expensive and slow.
Most consumers had real experience with real problems.
Orders that arrived wrong.
Items that looked nothing like the photo.
Return processes that cost more than the purchase.

For most categories of goods,
going to the store was *strictly better*.

(beat)

`[SLIDE 06 — image: late-90s desk, dial-up modem, early Amazon books page]`

Books were the exception.
Which is why Amazon started there.

A book does not need fitting.
You don't need to see it in person to know if it's right.
The long tail of titles in print
exceeded what any physical bookstore could stock.

Amazon could offer a reader something their local store didn't have,
deliver it in a week,
and charge less.

(beat)

That worked
*even before payment trust was solved.*

Because the downside of a wrong order was minor.
And the upside was real.
Access to a catalogue
no physical store could match.

(beat)

Early e-commerce did not win everywhere at once.
It won in *one* category
where the friction math already worked,
built logistics and trust in that narrow space,
and then stepped out from it.

(lean in)

`[SLIDE 07 — pull-quote: "Most executives weren't fighting a company that had beaten them everywhere. They were fighting one that had beaten them in one category, built infrastructure there, and then stepped out."]`

Most of the executives who later failed to adapt
were not fighting a company
that had beaten them everywhere.

They were fighting a company that had beaten them in *one* category,
built the infrastructure in that category,
and then stepped out from it.

By the time the full shape of the threat was visible,
the underlying machine was already in place.

(beat)

`[SLIDE 08 — split: "Amazon: Books → Everything" / "AI: Code → ?"]`

AI is following the same pattern.

The current beachhead is coding assistance.
GitHub Copilot passed one point eight million paid subscribers by twenty twenty-four.

The friction math works for the same reasons it worked in books.
Output is verifiable.
Errors are recoverable.
Pattern depth across a vast corpus
beats what any individual practitioner can hold in memory.

After coding, the categories where AI is winning
are document review in legal,
imaging analysis in radiology,
financial document processing.

All the same profile.
Bounded output. Checkable results. Depth beats recall.

(flat)

AI is not trying to win in criminal defence
or complex surgery
*first*.

That's not Amazon starting with clothing.

---

### Part Two: The Build Behind the Storefront (about 2 minutes)

`[SLIDE 09 — image: aerial fulfilment centre at dusk]`

Here's the part that's harder to see from the outside.

What Amazon actually built
was not a better store.

It was a fulfilment and logistics infrastructure
that *happened to be fronted*
by a retail interface.

(beat, build)

`[SLIDE 10 — timeline build: 2005: 13 fulfilment centres · 2014: 109 · 2005: Prime · 2006: AWS · 2012: Kiva · 2015: Amazon > Walmart by market cap]`

The numbers track the build.

Thirteen fulfilment centres in two thousand five.
A hundred and nine by twenty fourteen.
Prime launched in two thousand five
and rewired customer expectations around delivery time.

Two-day shipping went from a premium
to a default.

Kiva Robotics in twenty twelve
brought warehouse automation to a scale
that changed what per-package handling cost.

AWS launched in two thousand six
as a *direct byproduct* of the infrastructure
Amazon had to build to run its own operations.

(beat)

By twenty fifteen,
Amazon had surpassed Walmart in market capitalisation.
Even though Walmart was still doing many times more
total retail revenue.

(longer beat)

`[SLIDE 11 — pull-quote: "Amazon was not competing on price or selection. It was competing on expectation."]`

(slow this down)

Here is the line I want you to actually keep.

Amazon was not competing on price or selection alone.

It was competing on *expectation*.

It was training customers
to expect a standard of service
that physical retail, in most categories,
could not cost-effectively match.

(beat)

Once that expectation was set
across a large enough base,
the competitive position of every other retailer shifted.
Whether or not they had done anything wrong.

That's how infrastructure-level behaviour shifts work.

They change the *baseline*.
Everything else gets judged
against the new one.

(beat)

`[SLIDE 12 — split: ChatGPT/Claude logos under "Storefront" · Microsoft/Google/AWS hyperscaler stack under "Investment"]`

The same build is happening behind today's AI interfaces.
And it's easy to miss
if you're staring at the storefronts.

ChatGPT and Claude
are the retail websites.

The real investment
is in GPU clusters,
data centres,
networking,
and the power infrastructure
required to run them.

Microsoft announced more than eighty billion dollars
in AI infrastructure spending
for twenty twenty-five alone.

Some of that will prove excessive.
Some companies will overbuild.
Some business cases will not survive contact with real margins.

(beat)

That doesn't make the infrastructure unimportant.
It makes the bubble *harder to reason about*.
Because the speculative layer
is sitting on top of a real buildout.

And the AWS pattern is repeating.
Microsoft built it and shipped it as Copilot.
Google built it and shipped it as Gemini Workspace.
Salesforce built it and shipped it as Einstein.

The storefront is not the investment.
The storefront is how the investment
finds customers.

---

### Part Three: What Actually Rewired Retail (about 2 minutes)

`[SLIDE 13 — title: "What Actually Rewired Retail"]`

The easy story is that Amazon killed the mall.

That story is convenient,
widely repeated,
and *wrong*
in ways that matter.

(beat)

`[SLIDE 14 — stat: "U.S. e-commerce: <1% in 1999 → ~16% in 2025"]`

The scale is different than the headlines suggest.

U.S. e-commerce went from under one percent of retail in nineteen ninety-nine
to about sixteen percent by twenty twenty-five.

That is a significant change.
Over a long period of time.

It is not the sudden displacement
that "retail apocalypse" language suggests.
The shift happened across two decades,
with a COVID acceleration in twenty twenty
that then *stabilised*
rather than continuing upward.

(beat)

And Amazon was not the only force.

`[SLIDE 15 — list: Search · Payments · Fulfilment · Generational habit shift]`

What rewired retail
was the combination of cheap search,
normalised payments,
fulfilment infrastructure,
and a *generational* shift in consumer habits.

NBER research on pricing makes the point with specificity.
Retailers exposed to Amazon competition
roughly doubled their monthly price-adjustment rate
between two thousand eight and twenty seventeen.
And many moved to uniform national pricing
because their customers were now comparing prices in real time
from anywhere.

(beat)

That is not one company hurting stores.

That is *search transparency*
changing competitive behaviour
across entire categories of retail.

(beat)

`[SLIDE 16 — pull-quote: "AI is starting to do something structurally similar to expertise pricing."]`

(careful here, this lands)

AI is beginning to do something structurally similar
to *expertise* pricing.

A small business owner
who needs a standard contract reviewed
can now get a competent first pass from an AI tool
without paying for a junior associate's hourly rate.

A founder working through an employment question
can get oriented before engaging a lawyer at all.

The floor on certain categories of billable time
is starting to move.

For the same structural reason that search moved retail pricing.

Clients can now compare.

(beat, drier)

This does not threaten the senior practitioner
with genuine judgment and distinctive expertise.
Any more than Amazon threatened Costco.

But the *opacity*
that let inefficiency hide,
the billing model
that bundled high-value judgment
with routine document assembly
and called it one service,
that's starting to look like a vulnerability.

---

### Part Four: The Overbuilding No One Talks About (about 90 seconds)

`[SLIDE 17 — stat: "Peak: ~23 sq ft of retail space per capita in the U.S. — more than double comparable economies."]`

Here's the piece almost no one tells correctly.

The U.S. was *catastrophically over-retailed*
before e-commerce reached the mainstream.

At the peak, the U.S. had roughly twenty-three square feet
of retail space per capita.
More than double most comparable economies.

That baseline was fragile
*regardless of Amazon*.

(beat)

`[SLIDE 18 — three logos: Sears · Toys R Us · JCPenney]`

The anchor failures of the twenty-tens illustrate this.

Sears filed for bankruptcy in twenty eighteen.
Toys R Us liquidated in twenty seventeen.
JCPenney was in distress for years before formal bankruptcy.

In each case,
the real story was internal.

Sears had spent years underinvesting in stores
while managing difficult debt loads.
Toys R Us had been taken private in a leveraged buyout
that left it structurally compromised
well before Amazon was the dominant force in its categories.

(beat)

These were businesses
with capital structure problems
and strategic failures
that would have been serious
in any competitive retail environment.

(land)

E-commerce *accelerated* the pressure.

It did not create the underlying weakness.

(longer beat)

`[SLIDE 19 — pull-quote: "AI will do to over-leveraged professional services what e-commerce did to over-leveraged retailers."]`

The professional services equivalent
is not hard to find.

Consulting, legal, financial services firms
built on high-utilisation models,
where leverage depends on junior staff
handling research, drafting, and routine analysis.

Many of those models
were already questionable as efficiency propositions.

The Toys R Us parallel is pointed.

Firms that have been through ownership changes,
run on borrowed capacity,
and under-invested in genuinely distinctive capability
are going to find the adjustment harder
than firms that stayed lean
and built real differentiation.

E-commerce did not create the weakness in over-leveraged retailers.
It exposed it.

AI will do the same
to over-leveraged professional service models.

---

### Part Five: What the Good Operators Did (about 90 seconds)

`[SLIDE 20 — Costco logo and warehouse photo]`

The retailers that navigated the transition most effectively
were not the ones that tried to *out-Amazon Amazon*.

They were the ones that identified
what their format could do
that fulfilment centres genuinely cannot,
and built from there.

(beat)

Costco is the example I come back to.

Bulk purchasing.
Treasure-hunt merchandising.
High membership renewal.
The warehouse experience.

All format features that online fulfilment has not fully neutralised.

Costco invested in logistics and e-commerce capabilities
without trying to become a different company.

Its format held
because it was actually *distinctive*.

Not because e-commerce had not yet arrived.

(beat)

`[SLIDE 21 — pull-quote: "The org chart moves. The customer experience does not."]`

The retailers that fared *worst*
were the ones who added digital presence as a symbolic gesture.

A website that performed worse than the store experience.
An app nobody used.
An omnichannel strategy that reorganised the org chart
without changing what customers encountered.

(slow, deliberate)

The AI equivalent is already visible.

Firms mandating AI tools
that employees quietly route around.
Executives announcing AI strategies
that amount to adding a chatbot to the website.
Organisations creating AI centres of excellence
that produce internal slide decks
rather than changed workflows.

(flat)

The tell is always the same.

The org chart moves.
The customer experience does not.

That's not transformation.

That's the symbolic gesture
with a compute bill attached.

---

### Part Six: The Costco Question, Applied to You (about 60 seconds)

`[SLIDE 22 — title: "The Costco Question"]`

The Costco question applies directly
to any knowledge worker
or any firm
thinking about AI right now.

*What do you do
that AI genuinely cannot replicate.
And are you building your value proposition
from there?*

(beat)

For a lawyer that might be
judgment in genuinely ambiguous situations.
Accountability to the client.
What happens in a courtroom.

For a consultant it might be
the political navigation
no model can learn from a briefing document.
The trust built by having been through the hard part of a change programme
alongside a client.

(beat)

Those capabilities are not nothing.

But they have to be the *actual* basis of your value.
Not a rhetorical shield
around work
that AI can already do adequately.

(beat)

`[SLIDE 23 — pull-quote: "Technology does not solve the underlying strategic question. It sharpens the consequences of getting it wrong."]`

The technology does not solve the underlying strategic question.

It sharpens the consequences of getting it wrong.

Organisations that were using physical retail
as a comfortable moat
against having to think clearly about their actual customer relationships
found out
that the moat was less deep than they had assumed.

---

### Close (about 90 seconds)

`[SLIDE 24 — title: "Where We Are Now"]`

(grounded, this is the landing)

I went through the retail history in this much detail
because I think it's the *clearest* available illustration
of something getting obscured in current AI coverage.

Technology-driven market shifts
do not happen because a new tool is better than the old one.

They happen
when a new tool is better,
*reliable enough*,
*affordable enough*,
and *embedded* in enough workflows and habits
that the old approach starts feeling like a cost
rather than a standard.

Amazon reached that position
through a multi-decade build
across logistics, payments, customer trust, and interface convenience.

The capability was real from the early years.

The embedded behaviour change took the better part of a generation.

(beat)

`[SLIDE 25 — stat: "By late 2024: ~40% of U.S. working-age adults had tried generative AI. ~23% had used it for work in the prior week."]`

AI adoption is at roughly the stage where e-commerce was
in the early two thousands.

The capability is clearly real.
By late twenty twenty-four,
roughly forty percent of the U.S. working-age population
had tried generative AI.
Twenty-three percent had used it for work in the previous week.

That is meaningful adoption.

It is not yet embedded habit.

(beat)

`[SLIDE 26 — pull-quote: "Calling everything a bubble is too easy. So is treating every demo as destiny."]`

The retail executives who looked at early Amazon
and concluded internet retail did not matter yet
were right about the near term
and *catastrophically* wrong about the direction.

The retail executives who looked at early Amazon
and immediately declared the physical store dead
were wrong about the timeline,
the mechanism,
and which parts of their business were actually exposed.

There is a version of that same error
available to every executive and professional thinking about AI today.

Calling everything a bubble is too easy.

So is treating every demo as destiny.

(longer beat, then the final line, slow)

`[SLIDE 27 — closing card]`

I spent years at 5GuysTech
learning what it costs
to be directionally right
but structurally wrong
about timing,
mechanism,
and market.

The technology does not owe you
a return on your conviction.

It just keeps building the infrastructure underneath you.

Whether you are paying attention
or not.

`[SLIDE 28 — outro: jmaclabs.com / next in series]`

(warmer, normal)

Next in the series:
*From DVD Mail to Streaming.*
What the streaming transition tells us
about which AI products are building durable habits
and which ones are still buffering.

Link to the written version of this essay
is in the description.

Thanks for watching.

`[END]`

---

## Production Notes

- The 5GuysTech client quote on slide 2 is the cold open's payload. Hold for a beat before reading the slide; let viewers read it before you speak it.
- The build-list on slide 10 (Amazon's infrastructure timeline) should animate item by item to match the rhythm of the spoken list.
- The "competing on expectation" line (slide 11) is the spine of the talk. If you only get one sentence right on takeoff, that's the one.
- Costco section relies on the audience knowing the brand. If presenting to a non-U.S. audience, swap to a comparable brand or add a one-line gloss.

## Production checklist

- [ ] Draft deck in PowerPoint
- [ ] Save to `OneDrive/JMacLabs/Talks/amazon-ecommerce-rewiring-of-retail/deck.pptx`
- [ ] OneDrive embed URL → `deck.embedUrl`
- [ ] OneDrive share URL → `deck.shareUrl`
- [ ] Force-download URL → `deck.downloadUrl`
- [ ] Record talk
- [ ] Upload to YouTube unlisted, paste video ID → `video.youtubeId`
- [ ] Flip `published: true`
