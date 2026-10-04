import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Allergenen volgens EU 1169/2011, voor zover relevant voor dit assortiment.
export const allergeenSchema = z.enum([
  'gluten-tarwe',
  'gluten-spelt',
  'gluten-rogge',
  'sesam',
  'noten-hazelnoot',
]);
export type Allergeen = z.infer<typeof allergeenSchema>;

/** Prijzen in centen, zodat er nooit afrondingsfouten ontstaan. */
const centen = z.number().int().nonnegative();

const broden = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/broden' }),
  schema: ({ image }) =>
    z.object({
      naam: z.string(),
      volgorde: z.number(),
      prijs: centen,
      kort: z.string().max(90), // één zin voor kaarten
      smaak: z.array(z.string()).min(1).max(4), // smaakwoorden, bijv. "mild", "nootachtig"
      ingredienten: z.array(z.string()).min(1),
      allergenen: z.array(allergeenSchema).min(1),
      foto: image(),
      fotoAlt: z.string(),
      fotoIsVoorlopig: z.boolean().default(false),
    }),
});

const extras = defineCollection({
  loader: file('./src/content/extras.json'),
  schema: z.object({
    naam: z.string(),
    groep: z.enum(['zaden', 'vruchten-noten']),
    prijs: centen,
    volgorde: z.number(),
    allergenen: z.array(allergeenSchema).default([]),
    // Een combi-extra vervangt deze losse extra's (bijv. rozijnen + hazelnoten).
    combineert: z.array(reference('extras')).optional(),
    omschrijving: z.string().optional(),
  }),
});

const faq = defineCollection({
  loader: file('./src/content/faq.json'),
  schema: z.object({
    vraag: z.string(),
    antwoord: z.string(),
    volgorde: z.number(),
    opHome: z.boolean().default(false),
  }),
});

// Echte klantreviews. Leeg laten tot er reviews zijn; de sectie verschijnt dan vanzelf.
const reviews = defineCollection({
  loader: file('./src/content/reviews.json'),
  schema: z.object({
    naam: z.string(),
    plaats: z.string().optional(),
    tekst: z.string(),
    brood: reference('broden').optional(),
  }),
});

export const collections = { broden, extras, faq, reviews };
