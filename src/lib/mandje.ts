// Mandje en bestelling: types, opslag (localStorage) en de tekst-samenvatting die naar de bakker gaat.
import { formatEuro, normaliseerExtras, prijsPerBrood, type ExtraInfo } from './prijs';

export interface BroodInfo {
  id: string;
  naam: string;
  prijs: number;
}

export interface CatalogusExtra extends ExtraInfo {
  naam: string;
}

export interface Catalogus {
  broden: BroodInfo[];
  extras: CatalogusExtra[];
}

export interface Regel {
  brood: string;
  extras: string[];
  aantal: number;
}

export interface Klant {
  naam: string;
  email: string;
  telefoon: string;
  ophaaldag: string; // YYYY-MM-DD
  voorkeurstijd: string;
  betaalwijze: 'tikkie' | 'contant';
  opmerking: string;
}

const OPSLAG_SLEUTEL = 'mijndesem-mandje-v1';
export const MAX_AANTAL = 20;

export function laadMandje(): Regel[] {
  try {
    const ruw = localStorage.getItem(OPSLAG_SLEUTEL);
    const data = ruw ? JSON.parse(ruw) : [];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function bewaarMandje(regels: Regel[]): void {
  try {
    localStorage.setItem(OPSLAG_SLEUTEL, JSON.stringify(regels));
  } catch {
    /* privé-venster of geblokkeerde opslag: mandje blijft alleen in geheugen */
  }
}

/** Ongeldige of verouderde regels (bijv. na een assortimentswijziging) eruit filteren. */
export function schoonMandje(regels: Regel[], cat: Catalogus): Regel[] {
  return regels
    .filter((r) => cat.broden.some((b) => b.id === r.brood))
    .map((r) => ({
      brood: r.brood,
      extras: normaliseerExtras(r.extras ?? [], cat.extras),
      aantal: Math.min(MAX_AANTAL, Math.max(1, Math.floor(r.aantal) || 1)),
    }));
}

/** Zelfde brood met dezelfde extra's wordt samengevoegd. */
export function voegToe(regels: Regel[], nieuw: Regel, cat: Catalogus): Regel[] {
  const extras = normaliseerExtras(nieuw.extras, cat.extras);
  const sleutel = (r: Regel) => `${r.brood}|${r.extras.join(',')}`;
  const doel = sleutel({ ...nieuw, extras });
  const bestaand = regels.find((r) => sleutel(r) === doel);
  if (bestaand) {
    return regels.map((r) =>
      r === bestaand ? { ...r, aantal: Math.min(MAX_AANTAL, r.aantal + nieuw.aantal) } : r,
    );
  }
  return [...regels, { brood: nieuw.brood, extras, aantal: nieuw.aantal }];
}

export function regelPrijs(r: Regel, cat: Catalogus): number {
  const brood = cat.broden.find((b) => b.id === r.brood);
  return brood ? prijsPerBrood(brood.prijs, r.extras, cat.extras) * r.aantal : 0;
}

export function totaal(regels: Regel[], cat: Catalogus): number {
  return regels.reduce((som, r) => som + regelPrijs(r, cat), 0);
}

export function regelOmschrijving(r: Regel, cat: Catalogus): { brood: string; extras: string } {
  const brood = cat.broden.find((b) => b.id === r.brood)?.naam ?? r.brood;
  const extras = r.extras.map((id) => cat.extras.find((e) => e.id === id)?.naam ?? id).join(', ');
  return { brood, extras };
}

/** Leesbare samenvatting voor e-mail of WhatsApp. */
export function bestelTekst(
  regels: Regel[],
  klant: Klant,
  cat: Catalogus,
  ophaaldagTekst: string,
): string {
  const lijnen = regels.map((r) => {
    const { brood, extras } = regelOmschrijving(r, cat);
    return `• ${r.aantal}× ${brood}${extras ? ` met ${extras.toLowerCase()}` : ''} (${formatEuro(regelPrijs(r, cat))})`;
  });
  return [
    `Naam: ${klant.naam}`,
    '',
    ...lijnen,
    '',
    `Totaal: ${formatEuro(totaal(regels, cat))}`,
    `Ophalen: ${ophaaldagTekst}${klant.voorkeurstijd ? `, voorkeur ${klant.voorkeurstijd}` : ''}`,
    `Betalen bij ophalen: ${klant.betaalwijze === 'tikkie' ? 'Tikkie' : 'contant'}`,
    '',
    `Telefoon: ${klant.telefoon}`,
    `E-mail: ${klant.email}`,
    klant.opmerking ? `Opmerking: ${klant.opmerking}` : '',
  ]
    .filter((l, i, a) => !(l === '' && a[i - 1] === ''))
    .join('\n')
    .trim();
}
