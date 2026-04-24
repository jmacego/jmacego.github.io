---
title: "Checklist Manifesto for Tech: What Aviation Taught Me About Process"
date: 2026-02-19
description: "As a licensed pilot, I've seen how checklists and standard procedures save lives. The same principles can dramatically reduce errors in software operations — if you're willing to let go of the ego that resists them."
categories: [Leadership, Technology]
tags: [aviation, checklists, reliability, safety culture, runbooks, change management]
published: false
---

The outage did not begin with incompetence. It began with routine.

An experienced engineer was making a change that, on paper, was straightforward. The plan was familiar. The environment was not completely calm, but it was calm enough to create false confidence. Someone interrupted with a question midway through the work, the engineer resumed from memory, and one skipped verification step turned into a much larger problem than it had any right to be.

I have seen versions of that story enough times that I no longer find it surprising. I also do not think the fix is "hire better people." The fix is to build operating habits that assume competent people are still human.

That is where aviation has influenced me most. I have held a pilot's license for most of my adult life, and one of aviation's deepest lessons is this: experts need checklists more than novices do.

<!--more-->

## Why Expertise Increases the Risk

This feels backwards to people the first time they hear it. Surely novices need checklists more than experts.

For training, yes. For operations, often no.

The reason is simple. Once a task becomes familiar, the steps stop feeling like steps. They compress into instinct. That is efficient, right up until the environment changes, an interruption lands at the wrong moment, or one assumption turns out not to be true this time.

Pilots understand this at a very deep level. The checklist is not there because the pilot is underqualified. It is there because memory is unreliable under routine, interruption, and stress. Technology operations contain all three.

I have seen highly capable engineers skip steps not because they were careless, but because they were experienced enough to feel safe. That is exactly when written procedure becomes most valuable.

The healthcare literature arrived at a similar conclusion from a different direction. The [WHO surgical safety checklist](https://iris.who.int/items/d4d4327e-8a91-4ed9-9dd2-cf09d8ac1857) did not spread because surgeons suddenly became less skilled. It spread because complex, interrupt-driven work benefits from simple shared controls that make the critical steps harder to skip.

## What a Useful Checklist Actually Does

A useful checklist does not replace judgment. It protects judgment from predictable human failure modes.

In technology, the most obvious use is deployment. Before a production change, the checklist should force confirmation of a few things that too often remain assumptions: review is complete, rollback is real, timing is acceptable, dependencies are understood, and someone is explicitly watching the post-change signals that matter.

Runbooks serve the same function during incidents. Under pressure, people narrow cognitively. They forget options, skip diagnostics, and reach too quickly for the explanation they saw last time. A good runbook does not make the responder robotic. It keeps them from improvising badly in the first five minutes.

I also like checklists for handoffs, on-call preparation, and major release readiness. Anywhere an organization currently depends on memory, hallway conversation, or "the senior person just knows," there is usually a checklist opportunity hiding in plain sight.

## The Resistance Is Usually Ego

The technical objection to checklists is rarely technical.

It is cultural. Checklists imply that memory is not enough, experience is not enough, and even very competent people benefit from discipline outside themselves. For some engineers, that feels insulting.

I do not see it that way at all. I see checklists as a mark of seriousness.

In aviation, nobody worth learning from argues that the checklist is beneath them. In fact, the pilot who skips it casually is telling you something unflattering about how they think risk works. The same applies in operations. The engineer who uses a checklist for consequential work is not less expert. They are usually more trustworthy.

## The Leadership Part

This is not just an individual habit. Leaders have to create the environment in which checklists are normal, maintained, and respected.

That means a few things.

First, the checklist has to be short enough to be used. Bloated procedure manuals are a different problem disguised as a solution.

Second, the checklist has to be reviewed after reality breaks it. If it misses a recurrent failure mode, that is feedback.

Third, leaders have to model that using a checklist is not a sign of weak engineering. If the culture quietly celebrates the person who "doesn't need all that," the checklist will become theater.

That is why I separate checklist culture from bureaucracy. Bureaucracy protects itself. A real checklist protects the work.

## Why I Keep Coming Back to It

Atul Gawande's writing on surgical checklists made this visible to a wider audience, but I had already seen the principle elsewhere. In every high-consequence environment I have trusted, the pattern is the same: competent people use simple tools to keep routine work from becoming unnecessarily dramatic.

Technology still resists this more than it should.

We like the identity of the brilliant engineer who holds the whole system in their head. Sometimes that engineer exists. Even then, memory is still memory, interruption is still interruption, and fatigue is still fatigue.

The point of a checklist is not to compensate for bad people. It is to make good people more reliable.

That is a trade I will take every time.

## Further Reading

- Atul Gawande, *The Checklist Manifesto*
- James Reason, *Human Error*
- FAA, *Risk Management Handbook*
- Google, *Site Reliability Engineering*
