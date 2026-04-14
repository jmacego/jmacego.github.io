---
title: "Staying Hands-On: Keeping Your Technical Edge in Leadership"
date: 2026-03-30
description: "Why senior technology leaders should stay close enough to the work to judge tradeoffs well, ask better questions, and keep credibility with technical teams."
categories: [Leadership, Technology]
tags: [technical leadership, engineering management, technical credibility, architecture, executive leadership, hands-on learning]
image:
  src: /assets/images/posts/staying-hands-on-hero-1536x1024.webp
  alt: A working desk with a laptop showing code and system diagrams, surrounded by travel documents, manuscript pages, notebooks, coffee, and small electronics components, representing personal technical projects outside of work.
published: true
---

I have spent enough time in leadership to know the standard story.

In that version, you start technical. You move into management. You become strategic. If all goes well, you eventually stop touching the technical work except at a safe rhetorical distance. Your value is supposed to migrate upward into vision, people, budgets, and influence.

I understand why that story exists. At some level it is true. An executive who insists on writing production code to prove relevance is usually solving the wrong problem.

<!--more-->

I lean toward leaders should be people-focused first and technology-focused second, but I do not find a clean separation especially believable. The technical side does, and should, creep in.

The leaders I trust most in technical environments are not the ones trying to out-engineer the engineers. They are the ones who understand the work well enough to lead people through it. They can evaluate tradeoffs, ask good questions, recognize nonsense when it enters the room, and make decisions that reflect current technical reality rather than a stale memory of it.

I have tried to stay that kind of leader.

## Why It Matters

At multiple points in my career, I was close enough to the technical work to serve as a primary escalation point while also carrying leadership responsibility. The context-switching was brutal, and I would not recommend that exact arrangement as a model. But it left me with one durable conviction: technical credibility changes the quality of leadership conversations.

Teams know when their leader understands the shape of the work and when that understanding is secondhand. They know it in architecture reviews, in planning meetings, in staffing conversations, and especially when something starts to go wrong.

That does not mean a CTO should be the best engineer in the room. Usually they should not be. A mixed-method study from Microsoft, included in the Further Reading below, found that technical skill, by itself, was not the defining marker of a great software engineering manager. That matches my experience. Leadership is still about people, clarity, judgment, and accountability. The point is that senior leaders in technical organizations need enough current understanding to participate meaningfully in the conversation instead of merely refereeing it.

That affects trust.

It also affects decision quality. Vendors sound different when you have touched the technology class they are selling. Architectural tradeoffs sound different when you have built enough to recognize where the sharp edges live. Risk assessments sound different when your understanding is experiential rather than entirely translated through other people. Research on software project management, also linked in the Further Reading, has argued for a competence-oriented view rather than a purely tools-and-techniques view, including what it calls the ability to manage in a technical software environment. That distinction matters. Leaders do not need to be the deepest specialist in the room, but they do need enough firsthand orientation to understand what they are managing.

## What Staying Hands-On Is Not

For me, staying hands-on has never meant owning production features or pretending my leadership job should turn back into day-to-day IC work.

It does not mean being on-call for the ego of it. It does not mean rewriting a team's work because I can. It does not mean competing with specialists on their own ground.

That path goes bad quickly. It confuses authority with contribution and usually degrades both.

What it means instead is maintaining a deliberate practice of technical contact.

For me that has meant continuing to build real systems, just at a scale and scope that fit this stage of my life. [PlotThing](https://plotthing.com) started because I wanted a writing tool that could handle the way I actually work: long-running worldbuilding, unfinished manuscripts, scene shuffling, character tagging, plain-text templates, and no vendor lock-in around my content. It began as a browser app backed by my own GitHub repository. Later, once I was working with Equivalent, I moved it toward a fuller AWS stack similar to what we were using there so I could understand the architecture more fundamentally. It now has automatic cloud saving, cross-device support, and enough polish that I decided to offer it for $5 a month.

That project alone has taught me a great deal about modern application design, delivery, and operations. But it is not the only one. My wife wanted to blog our travels and eventually publish educational videos, so I built an Astro-based publishing platform around GitHub, GitHub Actions, AWS deployment, scheduled publishing, and a Git-aware CMS. More recently I added a REST API for the ChatGPT app and MCP support for tools like Codex and Claude Cowork because I have found AI to be a poor writing tool but an excellent editing tool when it is scaffolded well.

<figure class="inline-photo inline-photo-right" style="width:50%;">
  <img src="/assets/images/posts/staying-hands-on-inline-1536x1024.webp"
       alt="A thoughtful technology leader at a desk with code on a laptop, system diagrams on a whiteboard, and notes spread across the workspace, emphasizing reflective technical judgment rather than performative busyness." />
</figure>

Alongside that, I still maintain the kind of private technical infrastructure that probably says too much about my temperament. I have a personal global VPN because I want my laptops, phones, cloud instances, home systems, and assorted experimental devices to be able to talk securely on terms I control. I route through different environments when it suits me, terminate SSL internally, and generally maintain a more complicated network than any reasonable person needs while traveling internationally.

And underneath all of it is the same older impulse that first pulled me into embedded work. I still tinker with MicroPython on microcontrollers, still think in terms of constraints, and still find myself drawing on the habits I learned back when RAM budgets and board layouts forced harder choices earlier. I have even spent time on satisfyingly impractical detours like vacuum tube electronics, because physics remains interesting whether or not it improves the quarterly plan.

None of that makes me special. It keeps me honest.

## The Real Benefit

The biggest benefit is not that I can occasionally spot a bad technical argument. It is that staying technically engaged keeps my leadership from drifting into abstraction.

Executives spend a lot of time around summary language. Roadmaps. Resourcing. Capacity. Alignment. Innovation. Transformation. Some of that language is necessary. Too much of it and you start losing contact with what the organization is actually asking people to do.

Touching the work, even indirectly, is an antidote.

You remember what an unclear requirement feels like when you are the one trying to implement it. You remember how quickly context fragmentation destroys quality. You remember that "just add this" is rarely just that. You remember that tools have learning curves, interfaces have friction, and technical debt is not an accounting metaphor but a daily tax paid by specific people.

That memory makes leadership better. A 2022 systematic mapping study on software engineering competencies, linked in the Further Reading, is useful here because it argues two things at once: software engineering competence remains central, and the competencies required in modern environments keep changing. Agile, DevOps, platform shifts, and now AI all alter what current technical reality looks like. A leader who stops engaging with that reality is not standing still. They are aging into an older version of the field.

It also changes what you notice. Building PlotThing forced me to stay current on the application and infrastructure side in a way that old network instincts alone would not have done. Running my own travel-publishing stack keeps me honest about deployment friction, content workflows, and all the little ways "simple" publishing systems become less simple once they have to work repeatedly. Maintaining a private global VPN reminds me that reliability is never abstract when the user is also the operator and downtime means you may not have what you need at a border crossing. Even Microsoft 365, which now holds our travel records, medical information, budget spreadsheets, and planning documents, has become part of that same lesson. If the systems that support your real life matter, then uptime, recoverability, and ease of use matter too.

## How I Keep It Practical

What has worked for me is light but consistent engagement rather than heroic bursts.

A side project. A technical deep dive on something relevant to current decisions. Sitting in on architecture conversations and asking questions that sharpen the tradeoffs instead of hijacking them. Reading primary technical material instead of only vendor summaries. Following engineers who write honestly about implementation rather than people who only write about inevitability.

That level of contact is enough to preserve fluency without pretending I am still a full-time builder. It is one reason I am comfortable with a project mix that looks slightly odd from the outside: a creative-writing SaaS product, a travel publishing platform, a private network, a retirement-planning app fed by Excel, and occasional dives back into embedded hardware and software. The point is not coherence as branding. The point is sustained exposure to real systems, real tradeoffs, and real failure modes.

It also creates better relationships with technical teams, if handled properly. "Handled properly" matters. If you show up in a code review or design session as a leader looking to dominate, you are a problem. If you show up to understand, pressure-test assumptions, and stay current, you can be useful. The practical challenge is restraint. Staying hands-on should improve your questions, not increase your need to win them.

Curiosity is the key variable here. Leaders who stop being technically current often stop being curious first. The work gets delegated. The schedule fills. The interesting problems move elsewhere. One day they realize they are now dependent on others not only for expertise, which is normal, but for basic orientation, which is riskier.

I have tried hard not to let that happen.

## The Time Objection

The obvious objection is time, and it is a fair one.

Leadership work expands to fill available space. There is always another meeting that could be taken, another relationship that could be tended, another planning exercise that could absorb the afternoon. Technical engagement has to compete with all of that.

My view is that the time cost is real, but so is the cost of losing touch.

A leader whose technical understanding is entirely secondhand is more likely to make bad investment calls, more likely to be bluffed by confidence, and more likely to lose credibility with the people doing the work. Those are expensive failures, even if they are harder to measure than calendar hours. Kate Matsudaira's writing on operational excellence, also in the Further Reading, makes a related point from the manager's side: senior leaders need enough visibility into systems, launch discipline, and operational signals to ask the right questions at the right time. That kind of oversight is hard to fake if all of your understanding is abstract.

In my case, the time has been worth it partly because I care about the projects themselves and partly because they preserve optionality. I am traveling and mostly retired. I am not looking for more work right now beyond what I am already doing. But I have always preferred to live in a way that leaves room for the next chapter. If I decide I want to stop somewhere for a year and help a few companies through an infrastructure transition, or take on a small number of consulting clients, I do not want to discover that the conversations have moved on without me.

The answer is not to become a part-time engineer again. The answer is to preserve enough direct contact with the craft that your judgment stays connected to reality.

For me that has been worth the time every single time.

## Why I Still Care

Part of this is practical. Part of it is temperamental.

I still like understanding how things work. I still enjoy the moment when a technical system becomes legible from the inside. I still find it grounding to build something, even something small, and remember that behind every slide deck about "execution" there is actual execution being done by actual people.

That grounding matters to me. It keeps the leadership work from floating away into pure abstraction.

I do not think every executive needs to express this the same way. But in technology, I do think leaders make better decisions when they remain genuinely interested in the substance of the field they lead.

People come first. They should. But in technical leadership, the technology still has a way of making itself felt, and I think that is healthy.

## Further Reading

These are the sources I found most useful while sharpening this piece. They are worth reading directly if the question interests you.

- Eirini Kalliamvakou, Christian Bird, Tom Zimmermann, Andrew Begel, Robert DeLine, and Daniel German, ["What Makes a Great Manager of Software Engineers?"](https://www.microsoft.com/en-us/research/publication/what-makes-a-great-manager-of-software-engineers/)
- Nana Assyne, Hadi Ghanbari, and Mirja Pulkkinen, ["The State of Research on Software Engineering Competencies: A Systematic Mapping Study"](https://doi.org/10.1016/j.jss.2021.111183)
- Jeremy Rose, Keld Pedersen, Jens Henrik Hosbond, and Pernille Kræmmergaard, ["Management Competences, Not Tools and Techniques: A Grounded Examination of Software Project Management at WM-data"](https://doi.org/10.1016/j.infsof.2007.02.005)
- Kate Matsudaira, ["Software Managers' Guide to Operational Excellence"](https://queue.acm.org/detail.cfm?id=3631176)
