---
title: From DVD Mail to Streaming
date: '2026-04-27T00:00:00.000Z'
published: false
description: >-
  Netflix launched the same month I was deploying servers and building DNS
  tools. We were on the same internet, making very different bets. The story of
  how one of those bets eventually consumed the other is a better guide to AI
  adoption than most people realise.
tags:
  - streaming
  - netflix
  - technology strategy
  - market cycles
  - internet history
  - ai
categories:
  - Leadership
  - Technology
image:
  src: /assets/images/dvd-mail-to-streaming-transition-1536x864.png
  alt: >-
    A split image showing a bright red Netflix DVD mailer envelope on the left
    and a modern streaming interface on a flat-screen television on the right,
    representing the transition from physical to digital media delivery.
---
Netflix launched in April 1998. I was running PowerSurge at the time, deploying dedicated servers and trying to make DNS manageable for people who should not have to love raw BIND configuration. We were on the same internet, building entirely different things. They were betting the network was good enough to manage the logistics of physical media. I was betting the network was good enough to run a hosting business. We were both right, and both bets worked for a while.

Neither of us was betting the network was good enough to deliver video. Because in April 1998, it was not.

*Part of a series on what the dot-com era can teach us about AI. [← First: Bubbles Can Build Foundations](/blog/ai-vs-dot-com-bubbles-can-build-foundations/) · [← Previous: Amazon, E-Commerce, and the Rewiring of Retail](/blog/amazon-ecommerce-rewiring-of-retail/)*

That gap between what the internet could manage and what it could actually deliver is the whole story of how streaming happened. Most accounts skip it. They run a straight line from "internet existed" to "Netflix killed Blockbuster" and miss the twenty years of conditions that had to close in between. Those conditions, and the order in which they closed, are worth understanding carefully. Not for nostalgia. Because the same sequence is playing out with AI, and most of the coverage is making the same mistake of drawing the line too straight.

## The Red Envelope Was the Prototype

<figure class="post-image post-image-inline post-image-right">
  <img src="/assets/images/netflix-envelope-person-1536x864.png" alt="A person pulling a bright red DVD mailer envelope from a residential mailbox, representing the days when watching a film required choosing from an online queue and waiting days for physical delivery." loading="lazy" />
</figure>

Netflix spent its first nine years as a postal service.

By April 2007 it had 6.8 million subscribers, and that business was almost entirely physical. A large catalogue, a queue system, no late fees, and a fulfilment network that could reach most U.S. subscribers with one-business-day disc delivery. What the internet had contributed to that model was not video delivery. It had made the logistics of physical media dramatically better than a rental store ever could. You browsed online, managed a queue, received mail, returned mail. The discovery and fulfilment were digital. The content moved on polycarbonate.

Streaming launched quietly inside that business in January 2007, as a bonus feature. Netflix's own 2009 filings still described the DVD-and-streaming bundle as the core product, whilst roughly 2 million discs shipped daily. The service ran alongside physical for years, because streaming was real but not ready to carry the full weight.

That sequencing is undervalued in most retrospective accounts. The internet did not replace physical video in one move. It first made physical video radically more convenient, built a subscriber base and a recommendation engine on that convenience, and only later became reliable enough to replace the disc itself. The red envelope was not a primitive version of something that streaming improved. It was a different product that solved a different problem, and its success built the base from which streaming grew.

AI is in the red envelope era right now.

Current AI tools are genuinely useful. They solve real friction. For a meaningful range of tasks, they are clearly better than what preceded them. But the chat interface, the browser tab you switch to, the API you call separately from everything else you are doing, these are the queue management and postal fulfilment of the AI story. The underlying capability is real. The delivery mechanism is provisional.

The internet managed disc logistics in 2007 not because that was the ideal answer, but because it was the best answer available given the infrastructure. Current AI interfaces are roughly the same: the best available answer given current infrastructure, and almost certainly not the final form.

## What Had to Become True

<figure class="post-image post-image-inline post-image-left">
  <img src="/assets/images/streaming-conditions-diagram-1536x1024.png" alt="An editorial infographic listing the conditions that had to align before streaming displaced physical media: broadband coverage, adaptive compression, connected TV adoption, delivery infrastructure, licensing stability, subscription pricing, and behavioural shift, with arrows converging toward a television screen." loading="lazy" />
</figure>

Broadband is the explanation most people reach for when explaining why streaming took until around 2010 to become the dominant delivery model. Broadband is not wrong. It is incomplete to the point of misleading.

U.S. household broadband moved from 47 percent of adults in early 2007 to 66 percent in 2010 and 70 percent in 2013. Those numbers mattered. But raw broadband subscription figures were not the binding constraint even by the mid-2000s. What mattered was whether the service was reliably good enough, on real consumer connections at real evening peak times, to sustain a watching session rather than an experiment.

Several things had to become true at roughly the same time.

Compression and adaptive delivery had to improve. H.264 encoding materially raised the quality ceiling at a given bitrate. HTTP-based adaptive streaming made video resilient on fluctuating consumer connections, adjusting resolution dynamically rather than stopping to buffer. These were not consumer-visible features. They were infrastructure changes that made the consumer experience possible.

The television had to become internet-connected. This is the step most accounts treat as incidental. It was the hinge. Connected-TV penetration in U.S. households was 24 percent in 2010, 38 percent in 2012, and 49 percent in 2014. By 2014, nearly 80 percent of Netflix streaming was happening on a TV set. Before that threshold, streaming was something you did at a desk. After it, streaming was what you did on the couch. The behaviour did not change because the technology got better in the abstract. It changed because the technology reached the right room.

The delivery infrastructure had to scale to the actual demand. Netflix launched its Open Connect programme in October 2012, placing servers directly inside ISPs and internet exchange points. By spring 2011, Netflix represented roughly 30 percent of North American peak downstream traffic. You cannot serve that share of peak traffic from a central cloud without very deliberate decisions about where the bits physically live. The network had to be re-engineered around the demand, not just the capacity.

Rights licensing had to evolve, or rather be forced to. Netflix's 2008 annual report included a direct warning that streaming content was not protected by the first-sale doctrine and depended entirely on revocable licences. A DVD could be purchased, owned, and lent. A stream could be recalled overnight. The Starz deal expiring in early 2012, removing a meaningful content chunk immediately, illustrated what that leverage meant in practice. The streaming catalogue was structurally less stable than the disc library, and everyone inside the business knew it.

Then there was the psychology of the pricing. The $7.99 streaming-only plan launched in November 2010 reframed the question. Not: DVDs with a bonus feature. Instead: unlimited instant access for the price of a modest monthly utility. By January 2011, more than a third of new Netflix subscribers were choosing the streaming-only option. The framing change mattered as much as the price point.

Now run the same checklist against AI.

Reliable inference at reasonable cost is the broadband equivalent. At the commodity layer, costs are falling. At the frontier, they are not. This is the same split broadband had in 2007: technically accessible to many, reliably usable for the purpose at hand by fewer.

Workflow integration is the connected TV. AI is still largely a separate thing you go to. The behavioural shift will come when it is embedded in the tools where work actually happens: the IDE, the document editor, the CRM, the hospital records system. Not a new tab to open. The same environment where the work already lives. Before that integration, AI is something you use at the desk. After it, AI is something you use without noticing the switch.

Resilience under real conditions is the adaptive streaming equivalent. AI tools that perform well on benchmarks and degrade badly at the edges of real tasks are still in the pre-H.264 era. The performance on controlled demonstrations is impressive. The performance when a real user pushes a real workflow to its edges is still the story the benchmarks are not telling.

Regulatory and trust frameworks are the rights licensing. There is no settled model for IP in training data, liability for AI-generated output, or sector-specific constraints in medicine and law. These are not administrative delays. They are structural conditions that will determine what the AI catalogue can contain and how stable it will be.

Subscription psychology for AI has not fully arrived. Most people still experience AI tools as something they pay for separately, access separately, and evaluate separately from everything else they do. The interface that makes AI feel like a utility rather than a product, present by default instead of fetched on request, has not reached mainstream deployment.

Tracking broadband adoption was the wrong single variable for predicting when streaming would win. Tracking model quality is probably the wrong single variable for predicting when AI becomes embedded behaviour. The checklist matters more than any single item on it.

## Blockbuster Tried

<figure class="post-image post-image-inline post-image-right">
  <img src="/assets/images/blockbuster-store-closing-1536x1024.png" alt="A Blockbuster Video store in its final months, blue and yellow signage intact but shelves visibly sparse inside, a closing sale sign partially visible through the window, and a nearly empty car park under overcast daylight." loading="lazy" />
</figure>

Blockbuster had 4,855 U.S. stores as of January 2008. It also had a by-mail service, digital downloading partnerships, on-demand deals with device manufacturers, and a programme that let mail subscribers exchange discs at physical locations. It was not doing nothing.

It was doing things from the wrong cost base.

The store network that had been a competitive moat became a fixed liability when the traffic moved online. The debt load, over $900 million at the time of its September 2010 bankruptcy filing, was carried by a business that needed sustained store-level revenue to service it. Netflix was building fulfilment infrastructure for physical media whilst simultaneously investing in streaming delivery, without a legacy estate consuming the margin.

Blockbuster's shareholder communications from that period include a line worth keeping: "What we misjudged was how quickly to move there." They saw the direction. They misjudged the pace and misunderstood what their cost structure could absorb.

That failure pattern recurs reliably. The incumbent is not usually blind. It is usually trapped. Trapped by infrastructure that was a moat yesterday and is overhead today. Trapped by a customer base that still wants the old thing, until suddenly it does not. Trapped by the financial commitments made to sustain the old model whilst trying to fund the new one.

The parallel for AI is not abstract. A professional services firm whose billing model depends on junior staff hours, a consulting practice built on research that capable AI can now do in minutes, a law firm whose leverage ratio requires first-year associates doing document review, these are organisations approaching AI from something close to Blockbuster's position. Not because they are ignorant of the direction. Because their cost structure and financial commitments constrain how fast they can actually move, regardless of what they put on slides.

The question is not whether those organisations see what is coming. It is whether their overhead can absorb the transition before the transition decides for them.

## From Schedule to Control

The consumer behaviour shift that made streaming irreversible was not primarily about convenience. It was about a different relationship with time.

Store rental had a return window. DVD-by-mail had a queue cycle measured in days. Early streaming still carried a mental frame of watching as something you planned. What changed between roughly 2010 and 2013 was that watching something on your own schedule, pausing across evenings, starting the next episode immediately because it was already there, stopped feeling like indulgence and started feeling like normal.

By 2013, survey data found 88 percent of Netflix users reporting they had watched three or more episodes of the same show in a single day. Netflix's decision to release all thirteen episodes of House of Cards at once in February 2013 was not only a marketing choice. It was an argument that control of schedule was itself a product feature. The algorithm stopped being a discovery tool and started being a relationship.

The shift from schedule to control is the behavioural precedent most relevant to AI.

Most AI usage today is transactional and deliberate. You identify a need, switch to an AI tool, make a request, take the output back to whatever you were doing. That is roughly equivalent to using a DVD rental store in 1999: functional, somewhat better than the alternative, but requiring a mode switch and a conscious decision each time.

The embedded version is different. When AI is present in the tool you are already using, when it can see the context of the work you are doing without being explicitly fed it, when its suggestions appear without a trip to a separate interface, the relationship shifts from tool to environment. That is the connected TV moment. That is the shift from schedule to control. Parts of software development are approaching that threshold now. Most professional domains are not there yet.

We do not know when the rest of the checklist closes. But the AI tools building daily active usage now, in the current transactional era, are building the subscriber base that the next form will inherit. Netflix's DVD users were not a legacy problem that streaming had to overcome. They were the base from which streaming adoption grew. The distinction matters for thinking about which current AI products are building something compounding.

## The Originals Problem

Streaming had a structural fragility that the DVD business did not.

A disc could be purchased under the first-sale doctrine, owned, and monetised across many rentals without further payment to the studio. A stream required a licence, and that licence could be withdrawn. When the Starz deal expired in early 2012, the content disappeared from Netflix's catalogue overnight. What that illustrated was that a streaming service dependent entirely on third-party rights was always one negotiation away from a depleted library.

Original programming was not primarily a prestige move. It was a response to structural vulnerability. Content Netflix created was content Netflix owned. The subscriber relationships, the recommendation engine, the viewing habits built on that content, all of it was more defensible when the underlying material could not be recalled by a licensor. By 2013, Netflix was using originals not only for brand formation but as a direct test of a licensing model the company could actually control.

Most organisations using AI right now are renting catalogue.

They are calling APIs from providers who built their capability on training data those providers controlled, at pricing those providers set and can change, under terms that can be revised. That is the streaming rights model. The capability is real. The control is not.

The organisations building something more defensible are investing in proprietary data, domain-specific fine-tuning, and workflows that encode institutional knowledge in systems they own. That is the originals model. Not every organisation needs it, just as not every streaming service needed to produce prestige drama. But organisations whose AI strategy consists entirely of routing requests to someone else's model are making a bet on licensor stability that the streaming era should prompt them to examine.

There is a related point worth naming separately. The interview notes for this series describe what the author calls "the harnesses" as becoming more interesting than the raw models. Tooling layers, workflow frameworks, agent orchestration, the systems that determine how AI capability gets applied to real work, these have characteristics closer to originals than to licensed catalogue. They compound. They encode what an organisation has learned about how to use AI effectively. Foundation model tokens may commoditise. The harness built on top of them is harder to replicate, and stickier when it works.

## The Buffering Era

In 2007 and 2008, streaming worked badly often enough that using it for anything important felt unwise. The picture would drop to a low resolution. The spinner would appear mid-scene. Some evenings it simply did not work. People used it anyway, because imperfect streaming was still genuinely useful for a lot of content. They kept the DVD subscription alongside it, because the disc still won on reliability for anything that mattered.

This is AI in 2026, rendered almost exactly.

The hallucinations are frequent enough to be normal. Context limitations cause real problems at the edges of real tasks. The model confidently produces something wrong often enough that handing output to anyone without checking carries real risk. People use it anyway, because it is genuinely useful for a wide range of work. They keep the human process running alongside it, because for anything that matters, the human still wins on reliability.

The buffering era ends. It always does. The question it leaves behind is not about the technology. The question is which applications become embedded habits before the buffering ends, and which are still waiting for a reliability threshold they have not yet hit.

Netflix's streaming usage habits were built during the unreliable years on a base of DVD subscribers. The users who had learned to navigate the service, trained the recommendation algorithm with their viewing history, and figured out which content worked and which did not, those users had a compounding advantage when quality improved. They did not start over when streaming got good. They continued.

The organisations and practitioners building systematic workflows around current AI tools, figuring out which tasks reliably deliver value, encoding what works and what does not into repeatable processes, those are the people building on the right side of the buffering era. Not because the current tools are definitive. Because the process knowledge and workflow design built now carry forward.

## The Next Interface Is Not This One

The streaming story's clearest contribution to thinking about AI is this: the first winning interface is rarely the form a technology takes when it actually reshapes behaviour.

DVD-by-mail was not a primitive version of streaming. It was a genuinely distinct product that solved a genuinely distinct problem. Its success built the infrastructure, the subscriber base, the recommendation capability, and the consumer relationship that streaming later inherited. When streaming matured, it was not starting fresh.

The chat interface for AI may follow the same path. Not a degraded form of what comes next, but a distinct product that is building real familiarity with AI assistance, establishing which tasks AI handles reliably, and creating the institutional momentum the next form will inherit. When ambient, workflow-integrated AI matures, it will not start fresh either.

What that next form looks like is genuinely uncertain. The most plausible direction, watching what is already happening at the edges of developer tooling and enterprise software integration, looks more like the connected TV than like the current chat window: present in the environment where work already happens, requiring no mode switch to access, able to see context without being explicitly given it. That is the couch equivalent. That is where the behaviour becomes ambient rather than deliberate.

That shift, when it comes, will feel sudden to anyone not watching the checklist close. It will feel like an obvious continuation to anyone who was.

Organisations that dismissed streaming in 2008 on the grounds that it was genuinely not yet reliable for most of what their customers wanted were making an accurate near-term assessment. They were wrong about the pace at which the checklist would close and wrong about what their cost structure could absorb once it did.

The internet did not change how people watch things when streaming launched. It changed how people watch things when the stream reliably reached the couch. The question worth asking now is what AI's couch is, and how far away it actually is.

## Further Reading

- Netflix 2008 Annual Report (SEC EDGAR) — primary source on the first-sale doctrine problem and why DVD and streaming remained complementary for longer than the retrospective accounts suggest
- Netflix 2010 Form 10-K — the clearest primary evidence of the viewing crossover, when a majority of subscribers were watching more through streaming than DVD
- Pew Research Center, Home Broadband Adoption Reports (2007, 2010, 2013) — the most reliable independent baseline on household connectivity readiness through the transition
- Leichtman Research Group, Connected TV Report (2014) — the best compact source on the connected-TV penetration timeline that tracks the behavioural hinge more accurately than raw broadband figures
