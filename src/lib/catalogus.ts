// Gesorteerde toegang tot de content collections.
import { getCollection } from 'astro:content';

export async function getBroden() {
  return (await getCollection('broden')).sort((a, b) => a.data.volgorde - b.data.volgorde);
}

export async function getExtras() {
  return (await getCollection('extras')).sort((a, b) => a.data.volgorde - b.data.volgorde);
}

export async function getFaq({ alleenHome = false } = {}) {
  const items = (await getCollection('faq')).sort((a, b) => a.data.volgorde - b.data.volgorde);
  return alleenHome ? items.filter((i) => i.data.opHome) : items;
}

export async function getReviews() {
  return getCollection('reviews');
}

/** Platte extra-data voor de prijsfuncties en de configurator in de browser. */
export async function getExtrasInfo() {
  return (await getExtras()).map((e) => ({
    id: e.id,
    naam: e.data.naam,
    groep: e.data.groep,
    prijs: e.data.prijs,
    allergenen: e.data.allergenen,
    omschrijving: e.data.omschrijving,
    combineert: e.data.combineert?.map((r) => r.id),
  }));
}
