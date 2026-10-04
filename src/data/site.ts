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

// Waar bestellingen naartoe gaan. Zie .env.example.
// - PUBLIC_WEB3FORMS_KEY: bestelling komt per e-mail binnen (gratis via web3forms.com)
// - site.whatsapp: klant kan de bestelling ook als WhatsApp-bericht versturen
export const bestelKanaal = {
  web3formsKey: (import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '') as string,
};

export const nav = [
  { href: '/broden', label: 'Broden' },
  { href: '/ons-verhaal', label: 'Ons verhaal' },
  { href: '/veelgestelde-vragen', label: 'Vragen' },
  { href: '/contact', label: 'Contact' },
] as const;
