---
title: "The AI-Augmented Leader: Where AI Actually Helps Operations"
date: 2026-02-19
description: "I've worked with machine learning in operational environments long enough to have seen both the value and the failure modes. This is where AI genuinely helps, where it does not, and what leadership still owns."
categories: [Leadership, Technology]
tags: [ai operations, machine learning, anomaly detection, incident triage, decision support, ai governance]
published: false
---

Years before the current AI wave, I worked on machine learning for cloud networking.

The problem was not glamorous. It was operational. Networks generate more telemetry than humans can reason through in real time, and some of the patterns that precede trouble are visible only in retrospect unless you have help finding them. The work made sense because the problem was bounded, the feedback loop was real, and the success criteria were not vague. We were not trying to make the network intelligent in some abstract way. We were trying to detect emerging trouble earlier and respond better.

That experience has made me more optimistic about AI than some people expect, and more skeptical than current market rhetoric would prefer.

<!--more-->

I am not skeptical that AI has real value. I am skeptical of how casually people slide from "this tool is useful in narrow, measurable contexts" to "this changes management, engineering, and operations from top to bottom."

Those are different claims.

## Where I Trust It

I trust AI most where the work has four characteristics.

First, the problem is specific. "Improve operations" is not a problem definition. "Reduce alert noise," "classify incidents faster," "forecast demand more accurately," and "surface likely root causes sooner" are.

Second, the environment generates enough data to learn from. Operational systems usually do. Logs, metrics, traces, event streams, ticket histories, and change records are all fertile ground if they are reasonably clean and the labels are good enough.

Third, the cost of a wrong answer is manageable. I am much more comfortable using models to prioritize, classify, summarize, and recommend than I am using them to take consequential autonomous action in production.

Fourth, the feedback loop is short enough to improve the system. If you can tell reasonably quickly whether the model helped, hurt, or hallucinated, you have a chance to build something durable.

This is why I take AI seriously in anomaly detection, incident triage, demand forecasting, knowledge retrieval, and support workflows. Those are real operating problems. They are measurable. They are often ugly enough that incremental improvement matters.

## Where I Do Not Trust It

I do not trust AI when the organization is using it as a substitute for thinking.

I have seen teams try to apply machine learning to problems they had not actually defined, with data they had not examined, to workflows they had not stabilized. The result is usually an expensive layer of complexity on top of an already fuzzy process.

I also do not trust the common managerial fantasy that AI will let leaders skip the hard human parts of the job.

It will not build trust for you.

It will not decide which tradeoff matters more when a system is under pressure and multiple stakeholders want incompatible outcomes.

It will not create accountability in an organization that avoids it.

It will not rescue a weak operating model.

The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is useful because it treats AI as a socio-technical system rather than just a model. That matches what I have seen. Most real failures in operational AI are not only model failures. They are failures of governance, bad process design, weak oversight, poor incentives, or wishful thinking about what the system was doing. Google's long-running [Rules of Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml) makes a similar point from the engineering side: get the metrics, the infrastructure, and the problem framing right before you congratulate yourself for having deployed ML at all.

## What Leadership Still Owns

The leader's job does not get replaced. It gets sharpened.

You still have to define the problem well. In some ways this matters more now, because vague organizations produce vague prompts, vague evaluation criteria, and vague systems that sound plausible while doing the wrong thing.

You still have to decide where human review stays in the loop. Google's old "Rules of ML" remains useful because it assumes production systems are fragile, changing things, not one-time demos. That is the right mindset. Models drift. Context changes. Incentives distort usage. If the workflow has no human judgment at the right checkpoints, the organization is usually borrowing risk it does not understand.

You still have to build team literacy. The people operating AI-augmented workflows need to know enough to distrust confident nonsense, to recognize drift, and to distinguish "helpful model output" from "truth." A team that treats model output as objective reality is a fragile team.

You still have to decide where the return is worth the maintenance burden. This is the part people underweight. Models are not free once deployed. They create monitoring, retraining, evaluation, governance, and workflow design overhead. Sometimes the gain justifies it. Sometimes a cleaner rule set, a better runbook, or a more disciplined process would have produced more value for less effort.

## The Pattern I Keep Coming Back To

The best AI deployments I have seen are humble.

They do not try to look like science fiction. They make a noisy workflow quieter. They make a slow triage process faster. They make a support team more consistent. They help a human operator notice something they would otherwise have missed.

That may sound small. In operations, small and repeatable improvements compound.

The worst deployments I have seen were burdened from the start by the need to symbolize innovation. Too much of the investment was really about saying, "We are doing AI." Once that becomes the hidden requirement, honest evaluation gets harder.

## My View

I am genuinely excited about AI in operations. I have been for a long time.

I am also convinced that leaders need to treat it the way they should treat any powerful operational tool: with clear problem definitions, disciplined pilots, human oversight, and a willingness to conclude that some proposed use cases are not worth doing.

AI is not the new leader. It is not the new operating model. It is not a shortcut around organizational discipline.

Used well, it can make a good operating system better.

Used badly, it mostly gives a confused organization a more expensive way to be confused.

## Further Reading

- NIST, *AI Risk Management Framework (AI RMF 1.0)*
- Chip Huyen, *Designing Machine Learning Systems*
- Google, "Rules of Machine Learning"
- Gene Kim, Betsy Beyer, Chris Jones, and Jennifer Petoff, *Site Reliability Engineering*
