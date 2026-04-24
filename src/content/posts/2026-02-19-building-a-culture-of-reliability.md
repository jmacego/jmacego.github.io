---
title: "Building a Culture of Reliability: Lessons from 97% Fewer Outages"
date: 2026-02-19
description: "How disciplined change management and a culture shift, not better technology, drove a 97% reduction in outage hours and changed how I think about reliability leadership."
categories: [Leadership, Technology]
tags: [reliability, change management, incident management, outage reduction, operations leadership, change control]
published: false
---

I have spent enough time in technology to know the seduction of tool-based explanations. When reliability is poor, the first instinct is often to look for better monitoring, better dashboards, better automation, better platforms, better something.

In one large enterprise environment I led, that instinct would have missed the actual problem almost completely.

The environment I inherited had frequent outages, weak change discipline, and a culture that rewarded heroics more than prevention. Within a year, outage hours had dropped by 97%. That result was real, but the interesting part was not the number. It was what caused it.

We did not get there by changing the stack. We got there by changing the operating culture around the stack.

<!--more-->

## The Pattern We Found

Once we stopped treating each outage as an isolated event, the pattern was hard to miss. The majority of our pain came from change. Not from aging hardware giving up the ghost in the middle of the night. Not from exotic edge cases. From changes.

Configuration edits. Cutovers. "Simple" maintenance. Good intentions plus incomplete context.

That lines up with what operations research and [DORA's delivery-performance work](https://dora.dev/research/) have made easier to talk about in concrete terms: change is where a large share of operational instability enters the system. The point is not that change is bad. The point is that unmanaged change is expensive.

In our case, the technical environment mattered, but it was not the deciding variable. The deeper problem was that the organization had no shared discipline around risk. Documentation was inconsistent. Review was inconsistent. Escalation was inconsistent. Engineers were often relying on memory and personal heroics where the environment really needed procedure and group judgment.

## What We Actually Changed

The fix was not glamorous.

We made significant changes slower, more visible, and more reviewable. Every meaningful production change had to be written down, reviewed, and approved before execution. That added friction, but it was the right kind of friction. Writing a change plan forces a level of thinking that confidence alone does not.

We also tiered change risk. Not every change deserves the same ceremony. Some are reversible and low impact. Some are neither. Treating those as equivalent is how organizations get both bureaucracy and outages. Risk tiering let us keep routine work moving while raising the bar where the downside was real.

We established blackout windows around periods when the business impact of mistakes was unusually high. That sounds obvious. It is also one of those things organizations violate the first time an impatient stakeholder wants an exception. It worked only because leadership backed the line publicly.

Postmortems changed too. We made them structured, blameless in the useful sense, and specific. Not "everyone be more careful next time." Instead: what happened, what conditions made it likely, what would have detected it sooner, and what exactly changes now.

The hardest shift was cultural. We had to move recognition away from heroics alone. Firefighting still mattered. But catching a bad change before it shipped had to count. Improving documentation had to count. Saying, "this is not ready," had to count. If the reward system only celebrates dramatic recoveries, people will unconsciously optimize for drama.

## Where Leadership Actually Mattered

This is the part that gets flattened in a lot of reliability writing.

The technical controls were not self-executing. They worked because leadership kept reinforcing them when they were inconvenient.

Saying no to risky timing required executive air cover. Keeping engineers inside the process required consistency from managers and technical leads. If leadership made private exceptions, the discipline would have died almost immediately.

This is why I increasingly distrust the framing of reliability as mainly a tooling problem. Tools help. Monitoring helps. Automation helps. But none of them substitute for leadership that is willing to absorb friction in order to reduce preventable damage.

Speed came back, but in a better form. At first, the process felt slower. Then the environment stabilized, incidents dropped, rework dropped, and decision quality improved. That is one of the most durable leadership lessons I know: speed built on ambiguity is fake speed. It merely delays the bill.

## Why "Boring" Matters

My background in aviation shaped how I thought about this long before I had the language for it.

In aviation, boring is good. A boring flight means the system, the crew, and the procedures all did what they were supposed to do. Nobody serious in aviation wants to prove how good they are at managing emergencies. They want a system in which emergencies are rare.

Operations should feel similar. Calm is not evidence that the team lacks skill. Often it is evidence that the team has finally built enough discipline that skill is being applied before the crisis instead of during it.

I do not mean that every environment can be made quiet. Some are inherently volatile. But even in volatile systems, you can reduce preventable drama. That is leadership work.

## What the 97% Actually Meant

I am proud of the 97% number, but the number is not the real story.

The real story is that the same engineers, working on essentially the same systems, produced radically different outcomes once the operating culture changed. Expectations changed. Review changed. Accountability changed. The definition of careful work changed.

That experience reinforced something I now believe very strongly: reliability is not just a technical property of systems. It is a behavioral property of organizations.

When leaders treat reliability as a culture to be built rather than a tool to be purchased, results get much better.

## Further Reading

- Gene Kim, Jez Humble, Patrick Debois, and John Willis, *The DevOps Handbook*
- Nicole Forsgren, Jez Humble, and Gene Kim, *Accelerate*
- Google, *Site Reliability Engineering*
- John Allspaw, "Blameless PostMortems and a Just Culture"
