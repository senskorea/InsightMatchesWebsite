export const phases = ['plan', 'focus', 'share', 'reset'];
export const minutes = { plan: 3, focus: 25, share: 8, reset: 4 };
export const defaultConfig = { minutes, rounds: 3 };
export function cleanConfig(value) {
  return { minutes: Object.fromEntries(phases.map(p => [p, Number.isInteger(value?.minutes?.[p]) && value.minutes[p] >= 1 && value.minutes[p] <= 120 ? value.minutes[p] : minutes[p]])), rounds: Number.isInteger(value?.rounds) && value.rounds >= 1 && value.rounds <= 12 ? value.rounds : 3 };
}
export const duration = (phase, config = defaultConfig) => config.minutes[phase] * 60000;
export const freshClock = (config = defaultConfig) => ({ phase: 'plan', remaining: duration('plan', config), deadline: null, round: 1, complete: false, config });
export function tickClock(clock, now) {
  if (clock.deadline === null || clock.complete) return clock;
  let next = { ...clock };
  // Anchor each phase to its original deadline, even after a sleeping/background tab.
  while (now >= next.deadline) {
    const index = phases.indexOf(next.phase);
    if (index === 3 && next.round === (next.config?.rounds ?? 3)) return { ...next, remaining: 0, deadline: null, complete: true };
    const phase = phases[(index + 1) % phases.length];
    next = { ...next, phase, round: next.round + (index === 3 ? 1 : 0), deadline: next.deadline + duration(phase, next.config) };
  }
  return { ...next, remaining: Math.max(0, next.deadline - now) };
}
export function toggleClock(clock, now) {
  const current = tickClock(clock, now);
  if (current.complete) return { ...freshClock(current.config), deadline: now + duration('plan', current.config) };
  return current.deadline === null ? { ...current, deadline: now + current.remaining } : { ...current, deadline: null };
}
export const choosePhase = (clock, phase) => ({ ...clock, phase, remaining: duration(phase, clock.config), deadline: null, complete: false });
export const restartPhase = clock => choosePhase(clock, clock.phase);
export function restoreClock(value, now) {
  // Refresh the previous default on paused sessions without interrupting running
  // sessions or replacing deliberately customized timings.
  const previousMinutes = { plan: 5, focus: 40, share: 10, reset: 5 };
  if (value?.deadline === null && value?.config?.rounds === 3 && phases.every(p => value.config.minutes?.[p] === previousMinutes[p])) {
    return choosePhase(freshClock(), phases.includes(value.phase) ? value.phase : 'plan');
  }
  if (!value || !phases.includes(value.phase) || !Number.isInteger(value.round) || value.round < 1 || value.round > (cleanConfig(value.config).rounds) || !Number.isFinite(value.remaining) || value.remaining < 0 || value.remaining > duration(value.phase, cleanConfig(value.config)) || (value.deadline !== null && !Number.isFinite(value.deadline))) return freshClock();
  return tickClock({ ...value, config: cleanConfig(value.config), complete: Boolean(value.complete) }, now);
}
