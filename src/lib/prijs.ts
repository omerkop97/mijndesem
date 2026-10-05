// Prijsberekening. Pure functies zonder Astro-afhankelijkheden, zodat ze zowel op de server
// als in de configurator (browser) gebruikt kunnen worden. Alle bedragen in centen.

export interface ExtraInfo {
  id: string;
  prijs: number;
  combineert?: string[];
}

const euro = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' });

export function formatEuro(centen: number): string {
  return euro.format(centen / 100);
}

/** "+ € 0,50" voor meerprijzen */
export function formatMeerprijs(centen: number): string {
  return `+ ${formatEuro(centen)}`;
}

/**
 * Maakt van een selectie extra's de definitieve set:
 * - zijn alle onderdelen van een combi-extra los gekozen, dan wordt het de combi (goedkoper);
 * - is een combi gekozen, dan vervallen de losse onderdelen ervan;
 * - dubbele keuzes en onbekende ids verdwijnen.
 */
export function normaliseerExtras(gekozen: string[], alleExtras: ExtraInfo[]): string[] {
  const bekend = new Map(alleExtras.map((e) => [e.id, e]));
  const set = new Set(gekozen.filter((id) => bekend.has(id)));

  for (const extra of alleExtras) {
    if (!extra.combineert?.length) continue;
    const alleOnderdelen = extra.combineert.every((id) => set.has(id));
    if (alleOnderdelen) set.add(extra.id);
    if (set.has(extra.id)) extra.combineert.forEach((id) => set.delete(id));
  }

  // Volgorde van de catalogus aanhouden
  return alleExtras.filter((e) => set.has(e.id)).map((e) => e.id);
}

export function prijsPerBrood(
  broodPrijs: number,
  gekozenExtras: string[],
  alleExtras: ExtraInfo[],
): number {
  const ids = normaliseerExtras(gekozenExtras, alleExtras);
  const extraPrijs = ids.reduce(
    (som, id) => som + (alleExtras.find((e) => e.id === id)?.prijs ?? 0),
    0,
  );
  return broodPrijs + extraPrijs;
}
