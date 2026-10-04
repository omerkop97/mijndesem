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

/** Datum als YYYY-MM-DD (voor <input type="date">). */
export function isoDatum(dag: Date): string {
  return dag.toISOString().slice(0, 10);
}

/** Is de gekozen ophaaldag (YYYY-MM-DD) toegestaan op moment `nu`? */
export function ophaaldagToegestaan(iso: string, nu: Date = new Date()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  return iso >= isoDatum(eersteOphaaldag(nu));
}

export function formatDatum(dag: Date): string {
  return new Intl.DateTimeFormat('nl-NL', {
    timeZone: 'UTC',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(dag);
}
