# Speaker presence shot

**Use when:** the user has (or is creating) a real photograph of themselves on
stage, mid-talk, or in a clearly working environment, and wants to use it as
the banner. This file is about how to *handle* such a photo, not about how to
generate one — speaker shots from generative models almost always misrepresent
the user's likeness and should be avoided.

**Source guidance:**
- Real photo from a recent talk is best.
- Wide framing — the user should be on one side of the frame (ideally left,
  so text on right works), with environmental context filling the other.
- Dim or stage-lit settings render best on dark-themed banners.
- Avoid head-on lectern shots; favour 3/4 angle showing audience or stage
  context.

## If you must generate one

Generative models cannot replicate a specific person's face. Only use this
prompt if the user is OK with a *stylised abstraction* (silhouette, back-of-head, hands-only) rather than a recognisable portrait of themselves.

> Wide cinematic 4:1 photograph (1584 × 396), silhouette of a speaker on stage from behind, facing a dim audience, theatrical stage lighting catching the speaker's edge in pale lime green and violet, deep shadow in the foreground, no readable text on any screens, no logos, generous low-density area on the right side of the frame, 35mm film grain, photographic realism.

## Cropping a real photo

If the user supplies a 16:9 or 3:2 source photograph, the renderer will crop
to 4:1 by trimming top and bottom equally. Use `--bg-y-offset` if the
subject is off-center and gets clipped:

- `--bg-y-offset -50` shifts the crop window 50 px upward in the source
  (keeps more head and less floor)
- `--bg-y-offset 50` shifts it downward (keeps more torso and stage)

## Banner copy that pairs well

Keep text minimal when the photo is the focal element. Headline alone, no
eyebrow, no meta line. Let the image carry the energy.
