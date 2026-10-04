import type { Allergeen } from '@/content.config';

export const allergeenLabels: Record<Allergeen, string> = {
  'gluten-tarwe': 'Gluten (tarwe)',
  'gluten-spelt': 'Gluten (spelt)',
  'gluten-rogge': 'Gluten (rogge)',
  sesam: 'Sesam',
  'noten-hazelnoot': 'Noten (hazelnoot)',
};

export const sporenMelding =
  'Alles wordt in één keuken gemaakt. Sporen van sesam en noten (hazelnoot) kunnen daarom in alle broden voorkomen.';

/** Unieke, gesorteerde allergenenlijst uit meerdere bronnen (brood + extra's). */
export function combineerAllergenen(...lijsten: Allergeen[][]): Allergeen[] {
  const volgorde = Object.keys(allergeenLabels) as Allergeen[];
  const set = new Set(lijsten.flat());
  return volgorde.filter((a) => set.has(a));
}
