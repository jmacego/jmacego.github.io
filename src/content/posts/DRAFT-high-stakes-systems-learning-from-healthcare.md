---
title: "High-Stakes Systems: Learning from Healthcare for IT Reliability"
date: 2026-02-19
description: "What patient-safety thinking taught me about diagnosis, error reduction, and building more reliable technology operations."
categories: [Leadership, Technology]
tags: [healthcare, patient safety, reliability, root cause analysis, systems thinking, incident response]
published: false
---

I grew up around medicine. My family background is medical, I studied biology, and long before I had a career in technology I had already absorbed a way of thinking that medicine takes seriously: when the stakes are high, human skill is necessary but insufficient.

That idea has followed me for decades.

I do not mean that technology is the same as healthcare. It is not. The moral stakes are different, the timelines are different, and the costs of failure are different. But the systems problem is similar enough to be useful. In both domains, skilled people work inside complex environments, under uncertainty, with incomplete information, while small mistakes can combine into large failures.

Some of the most useful things I know about reliability did not come from technology at all. They came from how medicine thinks about diagnosis, error, and system design.

<!--more-->

## Diagnosis Before Action

One of medicine's great strengths is diagnostic discipline.

When a patient presents with a confusing set of symptoms, a serious clinician does not simply seize the first plausible answer and charge ahead. They build a differential. What are the likely explanations? What are the dangerous explanations? What evidence would separate them?

Technology teams often say they do this. Under stress, many do not.

A service goes sideways, an alert fires, and the team rushes toward the last thing that looked similar. Sometimes that works. Sometimes it burns an hour while the real problem deepens.

The medical mindset is useful here because it forces explicit uncertainty. Name the top hypotheses. State what evidence would confirm or disprove them. Be willing to say, "we do not know yet."

The teams I have seen debug well operate this way even if they do not call it a differential diagnosis. They behave less like people trying random fixes and more like people investigating a system with discipline.

## Human Error Is a Design Constraint

Medicine also takes human fallibility more seriously than technology often does.

That is not because medical professionals are less capable. It is because the profession learned, often painfully, that highly trained people still make predictable mistakes under fatigue, time pressure, interruption, and overload. The response was not to become sentimental about error. It was to design systems that assume it.

Technology understands this unevenly.

At the infrastructure layer, we are comfortable with redundancy, failover, and graceful degradation. At the human layer, we still sometimes talk as though the right senior engineer should be able to think their way cleanly through any situation in real time. That is a flattering story. It is not a serious operating model.

The better question is the one medicine asks constantly in different forms: what about this environment makes error more likely?

Poor labeling has a software equivalent. So does ambiguous handoff. So does unsafe default timing. So does requiring a person to remember too many conditionals in the middle of an incident.

## Root Cause Means Going Further Upstream

I have always liked medicine's distinction between immediate cause and systemic cause.

A patient receives the wrong medication dose. That is the event. But the event is not the whole explanation. Were similarly labeled medications stored together? Was the handoff poor? Was the double-check missing? Was the staffing ratio unsafe? Did the workflow make the mistake easy?

Technology postmortems often stop too close to the event.

"The deployment caused the outage" is not a root cause. It is barely a sentence. The more useful question is what made that deployment so fragile. Missing rollback? Weak review? Excessive change size? A culture that prized speed and quietly discounted operational risk?

The deeper you push the analysis, the more likely you are to fix a class of failures instead of memorializing one. That is also why I continue to like the way [AHRQ teaches root cause analysis](https://psnet.ahrq.gov/primer/root-cause-analysis): it keeps pushing the discussion away from the last human touchpoint and back toward the system that made the touchpoint consequential.

## The Human Aftermath Matters Too

Healthcare has a phrase for something technology still names awkwardly, if at all: the second victim problem.

When a medical professional makes a serious mistake, the harm does not end with the immediate event. The person involved often carries guilt, fear, and a loss of confidence that can impair them long after the formal incident has closed.

Technology has the same phenomenon. Engineers who trigger a large outage rarely forget it quickly. Sometimes that memory makes them better. Sometimes it makes them hesitant, brittle, or privately miserable. The healthcare literature on the [second victim phenomenon](https://pubmed.ncbi.nlm.nih.gov/30872062/) is useful here not because the domains are identical, but because it names the cost clearly: serious incidents do not only damage the system and the customer. They can also damage the operator involved.

Blameless culture is supposed to help here, but it only helps if it is real. Real means the organization learns aggressively without pretending the humans involved are unaffected. Real means distinguishing between reckless disregard and normal human error inside an imperfect system.

That distinction matters because teams do not become safer by terrorizing the people closest to the failure. They become safer by learning more honestly from what the failure exposed.

## Why I Keep Returning to This Frame

The most durable lesson I borrowed from medicine is not a checklist or a slogan. It is a habit of mind.

When something goes wrong, resist the satisfying simplicity of a culprit. Ask what conditions made the mistake possible. Ask what the operators knew at the time. Ask what the system rewarded, tolerated, obscured, or made unnecessarily difficult.

That way of thinking is slower at the beginning and much more useful in the long run.

Technology likes precision, and rightly so. But in reliability work, precision without systems thinking easily turns into very detailed blame.

Medicine learned a long time ago that safety depends on respecting both complexity and fallibility. Technology would benefit from learning the same lesson more completely than it has.

## Further Reading

- James Reason, *Human Error*
- Sidney Dekker, *Drift into Failure*
- Agency for Healthcare Research and Quality, *Root Cause Analysis and Actions*
- Atul Gawande, *Better*
