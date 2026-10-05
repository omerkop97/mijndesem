// Centrale merk- en bedrijfsgegevens. Eén plek om aan te passen.
export const site = {
  name: 'Mijn Desem',
  tagline: 'Puur Ambacht',
  description:
    'Handgemaakt zuurdesembrood uit Zevenaar. Gebakken met een eigen starter, langzaam gerezen en 100% natuurlijk.',
  city: 'Zevenaar',
  // TODO: invullen zodra bekend.
  // Bestellingen en contactberichten gaan via Netlify Forms (e-mailmelding instellen in Netlify).
  // Met een WhatsApp-nummer kan de klant de bestelling daarna ook via WhatsApp sturen.
  whatsapp: '31639033748' as string, // internationaal zonder + of 0 (06-39033748)
  email: '' as string,
  instagram: '' as string,
  kvk: '' as string,
} as const;

export const nav = [
  { href: '/broden', label: 'Broden' },
  { href: '/ons-verhaal', label: 'Ons verhaal' },
  { href: '/veelgestelde-vragen', label: 'Vragen' },
  { href: '/contact', label: 'Contact' },
] as const;
