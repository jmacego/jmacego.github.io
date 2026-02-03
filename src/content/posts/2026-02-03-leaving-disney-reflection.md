---
title: "Leaving Disney: What I Learned, What Changed, and What I'd Do Again"
date: 2026-02-03 09:00
categories: [Leadership, Operations, Career]
tags: [Disney, Leadership, Reliability, Org Design]
published: true
image:
  path: /assets/images/posts/leaving-disney-1200.png
  alt: |
    Wide, minimalist editorial illustration of an executive presenting a global
    strategy in a calm, modern environment. A leader stands before a large
    world map with subtle connection markers, while two colleagues observe
    from a stepped platform. Surrounding elements suggest a corporate campus,
    discreet data-center infrastructure, and distant network facilities, all
    rendered in neutral tones with restrained purple and green accents,
    conveying global enterprise leadership and stability.
---
Last week was my last at The Walt Disney Company. It was a meaningful chapter—full of complex systems, high creative standards, and people who cared about getting difficult things right.

This is what I learned, what it changed in me, and what I'd do again.

<!--more-->

## Structure Changes Everything

One of the most consequential changes I helped lead wasn’t technical at all—it was organizational.

Before the change, almost everything was fighting everything else. Poor documentation and missing procedures meant routine issues escalated immediately. Senior engineers were pulled into junior work because there was no clear “right way” written down, while junior engineers made understandable but costly mistakes because supervision and standards were inconsistent. Projects slipped quietly, or worse, shipped half-finished and were treated as “good enough.”

When things broke, the network was usually blamed—and often, that blame was justified. The deeper problem was that we couldn’t reliably explain *why* the network was at fault, *when* it wasn’t, or what “normal” even looked like in measurable terms.

The structural shift we made—strongly supported by my director—was to separate work by **context-switching pressure**, not by technology. We created one team optimized for fast-moving user support and short-run tactical work, and another built for long-term growth: PM-led, deliberately paced, and accountable for doing things correctly the first time, documenting them, and explaining how to use them.

The change had real costs. Communication paths became stricter. We had to retrain project management and partner teams on how to engage us. Tactical work went to the tactical team; strategic work only entered through quarterly planning with full PM ownership. The old pattern—finding a favorite engineer and bypassing review, cost tracking, or design checks—stopped working, and not everyone liked that.

What told us the model was working wasn’t a single win, but a shift in behavior. Metrics improved, but more importantly, expectations changed. Engineers protected focus. Escalations became rarer and more meaningful. That behavior didn’t sustain itself automatically—it required continuous reinforcement from executives, managers, and technical leads—but once established, it created space for both responsiveness *and* quality.

It’s a structure I would use again anywhere urgent support and long-term architecture are competing for the same attention.

## Reliability Isn’t a Mystery, It’s a Discipline

We achieved a **97% reduction in outage hours**, but not through any single system or tool. It came from a set of compounding changes that made reliability a habit rather than an aspiration.

Most outages weren’t caused by exotic failures. They came from risky changes with poorly understood impact. Engineers made changes that would have been “simple” in other environments, without fully accounting for our specific network architecture or how its risk profile had evolved. Postmortems existed, but without solid documentation and procedures, they didn’t reliably change behavior. In practice, the procedures had to grow out of better root-cause analysis, not the other way around.

The hardest part wasn’t technical—it was cultural. We had to say no to “just this once” changes, pull authority away from heroic individuals, and replace it with group accountability and review. That slowed things down and made the work less exciting. But that was the point. Outside of the lab and the whiteboard, networking *should* be boring.

My personal intervention was most visible in change management. I forced change reviews early, then helped build out a structured set of change types and reporting requirements that eventually became the foundation of Studios’ broader change discipline. Executive support—both from engineering leadership and project management—was essential. Without that air cover, the discipline would not have survived first contact with deadlines.

There was resistance at first: frustration about constraints, impatience with process, and discomfort with losing individual autonomy. Most of that faded as reliability became visible. When outages dropped, we could increasingly assume that a problem wasn’t the network—or at least not *automatically* the network. That shift in mindset mattered as much as the reduction in incidents.

What finally told me the discipline was real was when team leads took ownership and started enforcing it themselves. At that point, it stopped being a mandate and became part of how the organization thought. Networking is a stats-driven field, and once the numbers were there, the argument largely took care of itself.

## The Deep Lessons I’m Keeping

### 1. Craft Matters at Scale
When the bar isn’t high, failure doesn’t show up as a single catastrophe—it shows up as fragmentation. Sloppy designs, inconsistent standards, and “good enough” decisions compound until the organization is maintaining dozens or hundreds of slightly different systems that all require special handling.

I learned that at scale, craft is how you enforce compartmentalization. It's how you prevent local decisions from leaking complexity everywhere else. Quality and rigor aren't aesthetic preferences; they're how you keep the system from collapsing under its own exceptions.

### 2. Speed Comes From Clarity
I’ve always believed that speed and procedure aren’t opposites, but Disney reinforced what it feels like when that belief is actually applied.

Before clarity, teams built bespoke solutions that felt great to customers in the moment. Everyone got exactly what they asked for. Over time, that turned into hundreds of inefficient designs, each slightly different, each expensive to operate. It looked like speed. It wasn’t.

Real speed came from deeply understanding what the customer actually needed, building the right thing once, and then repeating it. Fewer designs, clearer ownership, predictable outcomes. The work became less flashy—and dramatically more effective.

### 3. High-Context Work Needs Protection
When high-context work isn’t protected, everything becomes tactical. Strategy quietly disappears because no one ever gets uninterrupted time to think.

Architecture doesn’t get done when architects are firefighting. Engineering quality degrades when senior engineers spend their time on operations calls simply to identify which custom system is deployed and how to troubleshoot it. Without documentation, incidents often required pulling in the original builder, because normal operations had no usable path forward.

I came to see that complex systems require space for thought. Sometimes that looks like someone staring out a window or getting coffee. Without that space, the organization survives—but it stops evolving.

### 4. Reliability Is Cultural
I learned that firefighting should be praised—but the absence of fires has to be praised too. If the only dopamine comes from incidents, people will unconsciously optimize for them.

We had to stop tolerating repeat incidents. That meant making patterns visible and, at times, uncomfortable. When someone looped a “do not touch” environment, the corrective action wasn’t private—it was peer-visible and specific, down to requiring the engineer to add *“DO NOT MAKE VLAN CHANGES ON THIS SWITCH”* to the MOTD themselves.

You still need firefighters. You don’t get rid of them. But some of that energy can be redirected toward prevention, documentation, and discipline—if the culture actually rewards it.

## What Changed in Me

I left Disney with a clearer understanding of what effective leadership actually requires at enterprise scale.

My path into this role was unusual. I'd spent most of my career in leadership—over two decades—before this chapter, but almost none of it in large-enterprise operations. Disney was the first time I worked as an IC at that scale, and it reshaped how I think about the foundation beneath leadership decisions.

I've always been deeply technical, and early on that meant heavy over-engagement. I was one of the top engineers and later became a primary escalation point even after moving into direct supervision. The context switching was brutal—but living through it reshaped how I thought about protecting focus, not just for myself, but for the teams I was responsible for. Calm turned out to be a force multiplier. Staying steady let me think clearly and gave teams room to do the same.

This role required a harder persona than I'd needed before. I had to say no repeatedly, and bluntly, to designs that would have extended systems in unsupportable ways. Those designs were often attractive to customers and teams in the moment, which made the refusals harder. For a natural introvert who'd built up an essentially extroverted executive presence, maintaining that firmness took real effort. But clarity turned out to be kinder than ambiguity. Once a position was set, I held it, changing only when the facts demanded reconsideration.

We ran more projects than nearly any peer team and still maintained reasonable quarterly metrics. That only worked because decisions were clear and consistently enforced. The structure was demanding, but it was fair, and people could rely on it.

The Campus Redesign made something else unavoidable: team design matters as much as system design. The technical issues we faced were real, but they were downstream of organizational problems. We couldn't consistently assign the right people at the right time, with the right cross-team structure, to fully understand customer needs, support requirements, and cost tradeoffs. That work depended heavily on middle management acting as information routers—translating across teams, surfacing constraints, and aligning execution. Organizing people mattered as much as any architectural decision.

I also had to recalibrate my technical instincts. I'm naturally inclined to chase additional reliability—extra nines, marginal gains, perfect systems. Sometimes that's exactly what's needed. But those efforts only make sense when they're driven by organizational context. Learning to translate ambiguous, shifting business needs into the right technical posture came from spending real time boots-on-the-ground inside a large enterprise. It filled in gaps I didn't fully realize I had.

## Closing Thought

This chapter sharpened how I think about the interaction between technology, leadership, and organizational design under pressure. The biggest lesson wasn't a fixed rule—it was learning to recognize what stage an organization is in, and whether the right move is building technical debt or deliberately paying it down.

That judgment—balancing posture, timing, and constraints—is the mark I'm taking with me.

