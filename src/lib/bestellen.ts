// Bestelregels (PLAN.md §9). Eén bron van waarheid voor site én (later) de server-side check.
export const BESTEL_TIJDZONE = 'Europe/Amsterdam';
export const MIN_DAGEN_VOORUIT = 3;

/** Kalenderdatum (jaar/maand/dag) van `nu` in Nederlandse tijd, als UTC-middernacht. */
export function vandaagInNL(nu: Date = new Date()): Date {
  const delen = new Intl.DateTimeFormat('en-CA', {
    timeZone: BESTEL_TIJDZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(nu); // "2026-10-05"
  return new Date(`${delen}T00:00:00Z`);
}

/** Eerste dag waarop een bestelling van vandaag (vóór 00:00) opgehaald kan worden. */
export function eersteOphaaldag(nu: Date = new Date()): Date {
  const dag = vandaagInNL(nu);
  dag.setUTCDate(dag.getUTCDate() + MIN_DAGEN_VOORUIT);
  return dag;
}

export function formatDatum(dag: Date): string {
  return new Intl.DateTimeFormat('nl-NL', {
    timeZone: 'UTC',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(dag);
}
