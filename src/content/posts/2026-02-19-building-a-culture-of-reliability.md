---
title: "Building a Culture of Reliability: Lessons from 97% Fewer Outages"
date: 2026-02-19
description: "How disciplined change management and a culture shift — not better technology — drove a 97% reduction in outage hours. What reliability actually requires from a leadership perspective."
categories: [Leadership, Technology]
tags: [reliability, SRE, change management, culture, outages, operations, incident management, blameless postmortem]
published: false
---

When I took over technology operations for a large organization, the environment I inherited had a reliability problem. Outages were frequent, often stemmed from changes made without adequate review, and the team had developed a firefighting culture — people were recognized for heroic incident response rather than for preventing incidents from happening in the first place.

Within a year of implementing a disciplined change management culture, outage hours had dropped by 97%.

I want to be precise about what that sentence means, because I've seen similar statistics misused. We didn't achieve this by deploying new monitoring tools. We didn't achieve it by migrating to a new cloud provider. We didn't achieve it by hiring better engineers. We achieved it by changing the culture of how the team operated — how decisions were made, how risks were assessed, how accountability was distributed.

Here's what that actually looked like.

<!--more-->

## The Diagnosis

The first step was understanding what was actually causing outages. Not at the technical level — what specific system failed — but at the causal level: what human or process factors allowed that failure to happen.

What we found was consistent: the vast majority of outages were caused by changes. Not failures of existing, stable systems — but changes made to those systems. Software deployments, configuration updates, maintenance operations. Things that were supposed to make the environment better were routinely making it worse.

This is actually a well-documented pattern in operations research. Changes are the primary source of instability in complex systems. But knowing this intellectually is different from building an organization that acts on it.

## What We Changed

**Formal change management, without apology.** Every significant change to production systems required documentation, peer review, and approval before implementation. This created friction — intentional, valuable friction. The discipline of writing down what you were about to do, why, and what you would do if it went wrong forced engineers to think more carefully before acting. It also created a paper trail that made post-incident analysis much more useful.

**Risk tiered by impact and reversibility.** Not all changes carry equal risk. A configuration change to a customer-facing system during peak hours is different from a backend library update on a Saturday morning. We built a tiered system: low-risk changes could be reviewed and approved by peers; higher-risk changes required additional sign-off; the highest-risk changes required explicit leadership awareness. This let us maintain velocity for routine work while applying appropriate caution where it mattered.

**Blackout windows.** We established periods — around major business events, holidays, quarter-end — when the bar for changes was significantly higher. Not zero changes, but changes requiring exceptional justification. This required saying no to business stakeholders sometimes, which required leadership backing. We had it, and it made a concrete difference.

**Blameless post-mortems, with genuine accountability.** "Blameless" is a term that gets misunderstood. It doesn't mean "no consequences." It means that the goal of post-incident analysis is learning, not punishment. When people fear blame, they hide information. When they can surface problems honestly, the organization learns faster and the same mistake is less likely to repeat.

We ran structured post-mortems after every significant incident. The template had specific questions: What happened? What was the timeline? What triggered the failure? What made it worse? What could have detected it sooner? What would prevent recurrence? The output was specific action items with owners and timelines, not vague commitments to "be more careful."

**Rewarding prevention, not just heroics.** This was perhaps the most culturally significant change. In a firefighting culture, the people who get recognition are the ones who work through the night to restore service. That's understandable — they deserve recognition. But it creates a perverse incentive structure where preventing fires is invisible and fighting them is celebrated.

We explicitly started recognizing prevention. When an engineer caught a risky change before it went out, when a team implemented monitoring that detected an emerging problem before it became an outage, when someone raised a concern that led to a rollback — these became visible and valued. The culture followed the recognition.

## The Aviation Analogy

I'm a licensed pilot, and aviation's safety culture has always influenced how I think about reliability in technology.

In aviation, "boring is good." A boring flight is a safe flight. The goal isn't to demonstrate your ability to handle emergencies — it's to execute procedures so reliably that emergencies rarely happen, and when they do, you handle them without drama. Checklists aren't a sign of distrust in pilots' competence; they're an acknowledgment that human memory is fallible and that consistent execution matters more than individual performance.

Technology operations can learn a great deal from this. The goal of operations isn't to showcase individual expertise in crisis response. It's to build systems and processes so reliable that crisis response is rarely required, and when it is, the response is calm and systematic rather than heroic.

Heroism in operations is often a sign of failure, not success. It means something went wrong that procedures should have prevented.

## The Leadership Requirements

Implementing this kind of change requires specific things from leadership.

**Willingness to slow down before you speed up.** Adding process friction initially reduces velocity. Engineers who were used to deploying quickly now had to document, review, get approval. That's slower in the short term. You have to hold the line on the long-term benefit while absorbing the short-term pain.

**Backbone with business stakeholders.** "We can't make that change right now" is not a popular sentence. Business stakeholders under pressure want their changes deployed. Saying no — or "not yet, not without proper review" — requires leadership support for the operations team to feel safe making that call.

**Consistent modeling of the behavior you want.** If leadership bypasses the process when it's inconvenient, the process is effectively optional. Engineers watch what leaders do more than what they say. A CTO who routes around change management sends a clear signal about what actually matters.

**Patience.** Culture change is slow. The 97% reduction took a year, not a quarter. There were setbacks — outages that felt like evidence the approach wasn't working, stakeholders who pushed back on the friction, team members who resented the new constraints. Staying consistent through that period, continuing to believe in the approach, and continuing to communicate why it mattered was part of the work.

## The Result

The number — 97% reduction in outage hours — is real and I'm proud of it. But I'm more interested in what it revealed.

It revealed that reliability is primarily a cultural and process problem, not a technology problem. The same engineers, the same systems, the same basic tooling — with different processes and a different culture — produced dramatically different outcomes.

It revealed that investment in prevention is almost always higher-leverage than investment in recovery. The post-mortem processes we implemented prevented far more outages than our monitoring improvements detected.

And it revealed that teams generally want to do good work. The engineers didn't want to cause outages. They wanted the processes and clarity that would let them avoid causing them. When we gave them that, they delivered.

Reliability isn't a technical outcome. It's a cultural one. And cultures can be changed, deliberately, by leadership that understands what it's actually trying to build.
