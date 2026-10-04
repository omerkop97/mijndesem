// Centrale merk- en bedrijfsgegevens. Eén plek om aan te passen.
export const site = {
  name: 'Mijn Desem',
  tagline: 'Puur Ambacht',
  description:
    'Handgemaakt zuurdesembrood uit Zevenaar. Gebakken met een eigen starter, langzaam gerezen en 100% natuurlijk.',
  city: 'Zevenaar',
  // TODO: invullen zodra bekend
  whatsapp: '' as string, // bijv. '31612345678'
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
