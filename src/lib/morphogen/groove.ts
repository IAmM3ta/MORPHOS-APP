/** One bar of eighth notes. The glass Loop button writes it, then it plays itself. */

export const GROOVE_STEPS = 8;
export const GROOVE_BPM = 76;

export type GrooveNote = { degree: number; y: number };

export type Groove = {
  playing: boolean;
  writing: boolean;
  bpm: number;
  steps: (GrooveNote | null)[];
  /** Next step to write or play. */
  index: number;
  /** Step that just sounded. -1 when the bar is quiet. */
  lit: number;
  nextAt: number;
  pass: number;
  /** 1 on a hit, decays toward 0. Drives the field, not the speakers. */
  pulse: number;
};

export function createGroove(): Groove {
  return {
    playing: false,
    writing: false,
    bpm: GROOVE_BPM,
    steps: Array.from({ length: GROOVE_STEPS }, () => null),
    index: 0,
    lit: -1,
    nextAt: 0,
    pass: 0,
    pulse: 0,
  };
}

export function grooveHasNotes(g: Groove): boolean {
  return g.steps.some((s) => s !== null);
}

/** Eighth-note length in seconds. */
export function eighth(bpm: number): number {
  const clamped = Math.max(48, Math.min(140, bpm));
  return 60 / clamped / 2;
}

/**
 * Move the bar forward. Returns the notes that should sound now
 * (the last one wins if the clock skipped).
 * A writing pass locks itself after one bar.
 */
export function advanceGroove(
  g: Groove,
  now: number,
  finger: GrooveNote | null,
): { hopped: boolean; note: GrooveNote | null } {
  if (!g.playing) {
    g.pulse *= 0.86;
    return { hopped: false, note: null };
  }
  if (g.nextAt <= 0) g.nextAt = now;
  const dur = eighth(g.bpm);
  let hopped = false;
  let note: GrooveNote | null = null;
  let hops = 0;
  while (now + 0.03 >= g.nextAt && hops < 3) {
    if (g.writing && finger) g.steps[g.index] = { degree: finger.degree, y: finger.y };
    note = g.steps[g.index];
    g.lit = g.index;
    g.pulse = 1;
    g.index = (g.index + 1) % GROOVE_STEPS;
    if (g.index === 0 && g.writing) g.writing = false;
    g.nextAt += dur;
    hopped = true;
    hops += 1;
  }
  if (!hopped) g.pulse *= 0.9;
  return { hopped, note };
}

/** Drop a chant-register note into the bass octave a phone can still feel. */
export function bassRegister(hz: number): number {
  let f = Number.isFinite(hz) && hz > 20 ? hz : 73.42;
  while (f > 98) f *= 0.5;
  while (f < 41) f *= 2;
  return f;
}
