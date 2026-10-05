// Schema.org-helpers voor gestructureerde data (rich results in Google).
import { site } from '@/data/site';

export function kruimelpad(basis: URL | undefined, stappen: { naam: string; pad: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ naam: 'Home', pad: '/' }, ...stappen].map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.naam,
      item: new URL(s.pad, basis).href,
    })),
  };
}

/** Lokale bakkerij: de belangrijkste markup voor gevonden worden op "zuurdesembrood Zevenaar". */
export function bakkerij(
  basis: URL | undefined,
  opties: { afbeelding: string; prijsVan: number; prijsTot: number },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    '@id': new URL('/#bakkerij', basis).href,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: new URL('/', basis).href,
    image: opties.afbeelding,
    priceRange: `€${(opties.prijsVan / 100).toFixed(0)}–€${Math.ceil(opties.prijsTot / 100)}`,
    servesCuisine: 'Zuurdesembrood',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Contant, Tikkie',
    // Alleen de plaats: het exacte adres van de thuisbakkerij blijft privé
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'NL' },
    areaServed: { '@type': 'City', name: site.city },
    parentOrganization: { '@id': new URL('/#organisatie', basis).href },
    ...(site.whatsapp && { telephone: `+${site.whatsapp}` }),
    ...(site.email && { email: site.email }),
  };
}

export function website(basis: URL | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: new URL('/', basis).href,
    inLanguage: 'nl-NL',
  };
}
