import { interpolate } from "remotion";

/** Sentence boundaries (ms) — each one gets a small punch-in, simulating a cut to a closer angle. */
const SENTENCE_BOUNDARIES_MS = [6270, 14760, 22090, 28320];
const TOTAL_MS = 37600;

/**
 * Combines three layers of motion so a single static talking-head shot never sits still:
 * - a slow continuous push-in across the whole clip (Ken Burns)
 * - a small scale "punch" at each sentence boundary (fake multi-cam cut)
 * - a fast punch-in during the first 12 frames, since the hook is what stops the scroll
 */
export function getZoomScale(frame: number, fps: number): number {
  const timeMs = (frame / fps) * 1000;

  const creep = interpolate(timeMs, [0, TOTAL_MS], [1, 1.12], {
    extrapolateRight: "clamp",
  });

  const punch = SENTENCE_BOUNDARIES_MS.reduce((acc, boundary) => {
    const progress = interpolate(timeMs, [boundary, boundary + 220], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return acc + progress * 0.035;
  }, 0);

  const hookPunch = interpolate(frame, [0, 12], [-0.08, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return creep + punch + hookPunch;
}
