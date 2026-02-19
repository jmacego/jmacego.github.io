---
title: "Checklist Manifesto for Tech: What Aviation Taught Me About Process"
date: 2026-02-19
description: "As a licensed pilot, I've seen how checklists and standard procedures save lives. The same principles can dramatically reduce errors in software operations — if you're willing to let go of the ego that resists them."
categories: [Leadership, Technology]
tags: [aviation, checklists, process, operations, reliability, safety culture, software deployment]
published: false
---

I've held a pilot's license for most of my adult life. Aviation is not just a professional interest for me — it's shaped how I think about risk, process, and operational reliability in ways that have influenced every technology leadership role I've held.

Here is the central lesson aviation offers: experts need checklists more than novices do.

This sounds backwards. The intuition is that checklists are for people who don't know what they're doing — that an experienced pilot (or engineer, or surgeon) doesn't need to be reminded of basic steps. That intuition is wrong, and understanding why it's wrong is one of the most practically useful things a technology leader can absorb.

<!--more-->

## Why Experts Need Checklists

The reason experts are particularly susceptible to checklist-preventable errors is exactly their expertise. When you've done something hundreds of times, the steps become automatic — which means they also become invisible to conscious attention. Your hands are doing the right things, mostly, while your mind has moved on to the next problem.

This works fine until something breaks the automatic pattern. An interruption. An unusual situation. A distraction at a critical moment. When you're operating on autopilot, the recovery mechanism isn't "go back to the procedure" — it's "assume you did the thing you normally do." That assumption is exactly what checklists are designed to counter.

Aviation recognized this decades ago. The checklist is not a training document. It's an operational tool that experienced, competent pilots use on every flight because the consequences of skipping a step are too serious to rely on memory alone.

In technology, we largely haven't absorbed this lesson. We tend to treat detailed procedures and checklists as bureaucratic overhead — something for junior engineers, or for compliance documentation, or for contexts where you don't fully trust the people doing the work. That framing is exactly backwards.

## What This Looks Like in Practice

**Deployment checklists.** Every production deployment should have a checklist — not a mental model of what should happen, but a written list of steps that gets checked off in real time. Pre-deployment verification: have all tests passed? Has the change been reviewed? Is there a rollback plan? Is the deployment window appropriate? Post-deployment verification: are the key metrics healthy? Are there any error spikes? Is the rollback procedure ready if needed?

This takes time. That time is less than the time required to diagnose and recover from a deployment that went wrong because someone skipped a step.

**Incident response runbooks.** When something is on fire is the worst time to improvise the response. A structured runbook that walks the responder through diagnosis steps, escalation criteria, and recovery procedures doesn't eliminate judgment — it creates a scaffolding that supports good judgment under stress. Aviation calls these "emergency checklists," and they are deliberately designed to be simple enough to execute correctly when your hands are shaking.

**Release readiness reviews.** Before a major release — not a routine deployment, but a significant new capability — a structured review that covers security, performance, operational readiness, communication plans, and rollback capability catches the things that fall through the gaps of distributed development. Not as a gatekeeping exercise, but as a shared discipline.

**On-call onboarding and handoff procedures.** The information needed to effectively handle on-call duties should be captured explicitly, not transmitted verbally and incompletely during a handoff. What are the most common alerts? What are the first steps for the most common incidents? Who are the escalation contacts? Written, maintained, and reviewed regularly.

## The Ego Problem

Here's the honest challenge: checklists require a kind of humility that engineering culture often resists.

The implicit message of a checklist is that you might forget something, that your memory is not sufficient on its own, that a procedure written down is more reliable than your expertise in the moment. For people who have strong professional identities built around technical competence, this can feel like an indictment.

It isn't. It's an accurate description of how human cognition works under the specific conditions of complex, high-stakes operations. The pilots with the best safety records are not the ones who trust themselves to remember everything — they're the ones who trust the checklist.

The same shift in mindset applies in technology. The senior engineer who uses the deployment checklist is not demonstrating weakness. They're demonstrating exactly the kind of operational discipline that makes them trustworthy with the most critical systems.

## Blameless Culture: Aviation's Other Gift

Aviation's other major contribution to operational thinking is the concept of no-fault incident investigation.

In aviation, when something goes wrong — even when someone makes a mistake — the investigation is structured to understand the systemic causes that made that mistake possible. What about the environment, the procedure, the information available, made this error likely? This is explicitly not about assigning blame, because blame doesn't prevent future accidents. System improvement does.

The technology industry has been developing its own version of this through the "blameless post-mortem" culture, and it's broadly correct. When engineers fear punishment for surfacing problems, they hide problems. When they can surface problems without fear, the organization learns. The learning is the goal.

This doesn't mean there are never consequences for behavior. Repeated disregard for safety procedures is a different matter. But honest mistakes, made by competent people working within imperfect systems, should generate learning — not blame.

## The Payoff

Atul Gawande documented in "The Checklist Manifesto" that a simple surgical checklist, implemented across hospitals in multiple countries, cut complication rates by more than a third. The steps in the checklist were things that surgical teams already knew. The checklist worked because knowing and reliably doing are different things.

The same dynamic operates in technology operations. The steps in a deployment checklist are things your engineers already know. The value of the checklist isn't the information — it's the reliable execution.

Boring is good. In aviation, a boring flight is a safe flight. In technology operations, a boring deployment is a successful deployment. Build the culture and the processes that make boring the norm, and you'll spend far less energy recovering from the exciting ones.
