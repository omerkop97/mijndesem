# Mijn Desem: websitevoorstel en implementatieplan

> *Puur Ambacht.* Handgemaakt zuurdesembrood, gebakken vanuit huis met een eigen starter.

---

## 1. Concept en uitstraling

**Kernidee: "De keukentafel van een ambachtsbakker."**
Grote bakkerijketens kunnen niet beloven wat Mijn Desem wel kan: elk brood is door één persoon gekneed, gevouwen en gebakken, met een starter die zij zelf heeft gekweekt. Daarom moet de site niet aanvoelen als een webshop. Hij moet voelen als een uitnodiging: warm, rustig en eerlijk, en met de verzorging van een premium merk.

Het merk zit al in de foto's. Ik heb het daar niet bij hoeven verzinnen:
- **Roestbruin linnen met crèmekleurig borduursel**: het meest herkenbare element. We gebruiken het als kleur en als ornament.
- **Bloemhartjes op de korst**: een persoonlijk handschrift. Een klein hartje kan terugkomen als icoon, divider of bullet.
- **Rieten rijsmanden, donker notenhout en gele baksteen**: ambacht en huiselijkheid.
- **De bruisende starter in de pot**: het bewijs dat alles echt zelf gemaakt wordt.
- **Het logo**: een blush/roze achtergrond, een script-woordmerk en "Puur Ambacht".

### Vertrouwen wekken: de pijlers
1. **Transparantie**: per brood een volledige ingrediëntenlijst ("bloem, water, zout, desem, en verder niets") plus allergenen.
2. **Het proces laten zien**: een tijdlijn van 24 tot 48 uur (voeden, kneden, vouwen, rijzen, bakken) met echte foto's.
3. **Een persoonlijke stem** (de bakker blijft voorlopig anoniem): het verhaal in de ik-vorm, met handen in het deeg en procesfoto's in plaats van een portret. Een gezicht kan later altijd nog worden toegevoegd.
4. **Sociaal bewijs**: reviews en quotes van klanten, later aangevuld met een Instagram-feed.
5. **Duidelijkheid**: bakdagen, bestel-deadline, ophalen of bezorgen, betaalwijze. Geen vragen open laten.
6. **Formaliteiten zichtbaar**: KvK-nummer, NVWA-registratie, allergeneninfo, privacyverklaring.

---

## 2. Kleurenpalet

| Rol | Naam | Hex | Afgeleid van |
|---|---|---|---|
| Achtergrond | **Meel** | `#F7F1EA` | bloemlaag op de korst |
| Merkkleur zacht | **Blush** | `#D4A898` | logo-achtergrond |
| Merkkleur sterk / CTA | **Roest** | `#8B3A22` | linnen theedoek |
| Accent | **Korst** | `#C2873A` | goudbruine korst |
| Tekst / donker | **Notenhout** | `#2A1B14` | tafelblad |
| Secundair accent | **Klimop** | `#4F5B3F` | tuinfoto's (spaarzaam gebruiken) |
| Lijnen / kaarten | **Linnen** | `#EADBCB` | rand van de theedoek |

Gebruik: veel Meel (ruimte en rust), Notenhout voor tekst, Roest alleen voor knoppen en highlights, en Blush voor secties die het logo-gevoel moeten oproepen (hero-band, footer). Alle combinaties checken op WCAG AA-contrast.

## 3. Typografie

- **Logo**: het bestaande script-woordmerk, als SVG laten vectoriseren. Dit lettertype alleen voor het logo gebruiken, niet voor koppen.
- **Koppen**: *Fraunces* (Google Fonts, variabel, met de "soft"/"wonk"-assen). Een warme, ambachtelijke serif met karakter.
- **Tekst**: *Inter* of *DM Sans*. Neutraal en heel leesbaar op mobiel.
- **Accent/handschrift** (spaarzaam, bijvoorbeeld "vers uit de oven"): *Caveat*.

## 4. Beeld en details

- Fotografie op volle breedte, warm van kleur, met lichte filmkorrel.
- Ornamenten: een SVG-lijnwerk gebaseerd op het borduurmotief van de theedoek, als sectie-divider.
- Subtiele micro-animaties: foto's die zacht "rijzen" (scale 0.98 naar 1) bij scrollen, en een hartje dat in de knop verschijnt bij hover. Geen drukke effecten.
- Papier-/linnentextuur heel subtiel in de achtergrond (≤ 3% dekking).

### Fotogebruik (huidige set)
| Foto | Inzet |
|---|---|
| `IMG-20260928-WA0056` (logo) | bron voor logo en kleur; logo laten vectoriseren |
| `IMG-20261004-WA0016` (baksteen, roest doek) | **hero** (sterkste merkbeeld) |
| `IMG-20261004-WA0017` (hartjes, rijsmand) | hero-alternatief / "Over mij" |
| `IMG-20261004-WA0019` (hartjesbrood, tuin) | uitgelicht product |
| `IMG-20261004-WA0013` (bovenaanzicht, notenhout) | assortimentssectie / Open Graph-afbeelding |
| `IMG-20261004-WA0014` (twee broden, tuin) | "Bestellen"-sectie |
| `IMG-20261004-WA0018` (deeg onder doek) | procestijdlijn: rijzen |
| `IMG-20261004-WA0020` (starter in pot) | "Onze starter"-verhaal |

### Ontbrekend beeld (aanbevolen fotoshoot)
Voor een echt world class productpagina is **consistente productfotografie** nodig:
- Elk van de 5 broden **heel én aangesneden** (de kruim laat de kwaliteit zien), steeds op dezelfde ondergrond (het linnen of notenhout), met hetzelfde licht en vanuit dezelfde hoek.
- Close-ups van de toppings (zaden, rozijnen/hazelnoot).
- Handen in het deeg, het insnijden, de oven.
- Een portret van de bakker.

---

## 5. Sitestructuur

```
/                  Home
/broden            Assortiment + configurator
/broden/[slug]     Productpagina per brood (wit, lichtbruin, bruin, spelt, rogge)
/bestellen         Bestelflow
/ons-verhaal       Over de bakker + de starter + het proces
/veelgestelde-vragen
/contact
/allergenen        Allergeneninformatie (wettelijk verplicht)
/privacy, /voorwaarden
```

### Homepage (van boven naar beneden)
1. **Hero**: grote foto, kop *"Echt zuurdesembrood. Langzaam gerezen, met liefde gebakken."*, met CTA's "Bestel voor de volgende bakdag" en "Bekijk de broden".
2. **USP-strook**: Eigen starter · 100% natuurlijk · 24+ uur gerezen · Handgemaakt.
3. **Bestel-banner** (live berekend): "Bestel vandaag, vers voor je klaar vanaf donderdag 8 oktober". Daaronder een kleine uitleg: "Waarom 3 dagen? Mijn starter wordt eerst gevoed, daarna rijst het deeg langzaam. Echt brood kost tijd."
4. **Assortiment**: 5 broodkaarten met korte smaakomschrijving.
5. **Maak het jouw brood**: de toppings visueel (zaden, rozijnen, hazelnoten).
6. **Het proces**: horizontale tijdlijn in 5 stappen met foto's.
7. **De starter**: verhaal met de pot-foto ("ze heeft zelfs een naam").
8. **Reviews**.
9. **Zo werkt bestellen**: 1. Stel je brood samen → 2. Kies je ophaaldag (minimaal 3 dagen vooruit) → 3. Betaal via Tikkie of contant → 4. Ophalen.
10. **FAQ** (top 4) en een afsluitende CTA.
11. **Footer** op blush: logo, bakdagen, contact, socials, KvK, links.

### Broodconfigurator
Stap 1: kies een brood. Stap 2: vink extra's aan; alles is combineerbaar (prijzen in §9). Kiest iemand rozijnen én hazelnoten los, dan rekent de configurator automatisch de combiprijs van €1,75. Stap 3: aantal. Daarna verschijnt een live samenvatting met prijs, ingrediënten en allergenen.

---

## 6. Stack

| Onderdeel | Keuze | Waarom |
|---|---|---|
| Framework | **Astro 5** | statisch en razendsnel (Lighthouse 95+), perfect voor SEO, met interactieve "islands" alleen waar nodig |
| Styling | **Tailwind CSS v4** | design tokens (het kleurenpalet) centraal, snel bouwen |
| Interactiviteit | **Preact** of vanilla TS-islands | configurator en winkelmand, minimale JS |
| Afbeeldingen | `astro:assets` | automatisch AVIF/WebP, responsive, lazy loading (de WhatsApp-foto's zijn groot) |
| Content | **Astro Content Collections** | broden, extra's, FAQ en reviews als Markdown/JSON; makkelijk aan te passen |
| CMS (optioneel, fase 3) | **Decap CMS** of **Keystatic** | bakker kan zelf bakdagen/prijzen/tekst aanpassen, gratis en git-based |
| Bestellingen v1 | formulier → e-mail (**Netlify Forms** / **Web3Forms**) + bevestiging. Betalen via **Tikkie** (vooraf gestuurd door de bakker) of **contant** bij ophalen | snel live, geen kosten, past bij thuisbakkerij |
| Bestellingen v2 (optioneel) | **Mollie** (iDEAL, Wero) via serverless function, direct afrekenen bij het bestellen | pas nodig bij meer volume; scheelt handwerk met Tikkies |
| Hosting | **Netlify** of **Cloudflare Pages** | gratis tier, HTTPS, forms/functions, eigen domein |
| Analytics | **Plausible** of **Umami** | privacyvriendelijk, geen cookiebanner nodig |
| Taal | Nederlands (eventueel later EN) | |

Bewust **geen** Shopify/WooCommerce: dat is te zwaar en duur voor het huidige volume, en een custom site oogt veel unieker. Groeit het, dan kan Mollie of Snipcart erbij zonder herbouw.

---

## 7. Wettelijk en praktisch (vertrouwen + verplicht)

- [ ] **KvK-inschrijving** (nummer in de footer).
- [ ] **Registratie bij de NVWA** als levensmiddelenbedrijf (verplicht, ook vanuit huis).
- [ ] Werken volgens de **Hygiënecode voor de bakkerij** (Hygiënecode Brood en Banket).
- [ ] **Allergeneninformatie** per product (EU 1169/2011): gluten (tarwe, spelt, rogge), sesam, noten (hazelnoot), plus een "kan sporen bevatten van"-melding.
- [ ] Privacyverklaring (AVG) voor bestelgegevens.
- [ ] Algemene voorwaarden: annuleren, ophalen, betalen.
- [ ] Even checken of de gemeente/VvE regels heeft voor bedrijfsmatig werken aan huis.

---

## 8. Implementatieplan (stap voor stap)

### Fase 0: Voorbereiding
- [ ] 0.1 Openstaande vragen beantwoorden (zie §9).
- [ ] 0.2 Domeinnaam registreren (bijv. `mijndesem.nl`).
- [ ] 0.3 Logo laten vectoriseren naar SVG (woordmerk + broodillustratie los).
- [ ] 0.4 Teksten verzamelen: verhaal van de bakker, beschrijving per brood, ingrediënten.

### Fase 1: Fundament
- [x] 1.1 Astro-project opzetten (TypeScript, Tailwind v4, Prettier), git-repo. Lokaal: `npm run dev` → http://localhost:4321 (stijlgids op `/stijlgids`).
- [x] 1.2 Design tokens: kleuren, fonts, spacing en radius in `global.css`.
- [x] 1.3 Foto's naar `src/assets/` verplaatsen met beschrijvende namen.
- [x] 1.4 Basiscomponenten: `Button`, `Container`, `Section`, `Heading`, `Divider` (borduurmotief-SVG), `HeartIcon`.
- [x] 1.5 Layout: `Header` (sticky, logo, nav, bestel-CTA), `Footer`, mobiel menu.
- [x] 1.6 SEO-basis: meta tags, Open Graph, favicon, `sitemap.xml`, `robots.txt`.

### Fase 2: Content-model
- [x] 2.1 Collection `breads` (naam, slug, beschrijving, smaakprofiel, ingrediënten, allergenen, prijs, gewicht, foto's).
- [x] 2.2 Collection `extras` (naam, groep: zaden/vruchten-noten, meerprijs, allergenen, samenstelling bij mixen). Alles combineerbaar op alle broden, inclusief de combiregel voor rozijnen + hazelnoten.
- [x] 2.3 Collections `faq`, `reviews`.
- [x] 2.4 Instellingen `ordering`: minimale doorlooptijd (3 dagen), bakdagen (ma t/m zo), dichte dagen/vakantie, optioneel een max. aantal per dag.

### Fase 3: Pagina's
- [ ] 3.1 Homepage (alle secties uit §5).
- [ ] 3.2 Assortimentspagina `/broden`.
- [ ] 3.3 Productpagina's `/broden/[slug]`.
- [ ] 3.4 `/ons-verhaal` met procestijdlijn en starterverhaal.
- [ ] 3.5 FAQ, contact, allergenen, privacy, voorwaarden.

### Fase 4: Bestellen (v1)
- [ ] 4.1 Configurator-island: brood → extra → aantal → samenvatting.
- [ ] 4.2 Mandje (localStorage) voor meerdere broden per bestelling.
- [ ] 4.3 Bestelformulier: naam, e-mail, telefoon (WhatsApp), ophaaldag, voorkeurstijd (optioneel, "in overleg"), betaalwijze (Tikkie / contant), opmerking.
- [ ] 4.4 Datumkiezer: wie vóór 00:00 bestelt op dag D, kan ophalen vanaf D+3 (in Nederlandse tijd, Europe/Amsterdam). Dichte dagen zijn uitgeschakeld en dezelfde check gebeurt server-side.
- [ ] 4.5 Verzending naar de bakker (e-mail) plus een automatische bevestigingsmail naar de klant.
- [ ] 4.6 Bedankpagina met afhaalinformatie.

### Fase 5: Polish en kwaliteit
- [ ] 5.1 Micro-animaties (scroll-reveal, hover-states), met respect voor `prefers-reduced-motion`.
- [ ] 5.2 Toegankelijkheid: contrast, focus-states, alt-teksten, toetsenbordnavigatie.
- [ ] 5.3 Performance: Lighthouse ≥ 95 op alle onderdelen, afbeeldingen AVIF/WebP.
- [ ] 5.4 Structured data: `Bakery` / `LocalBusiness` + `Product` (rich results in Google).
- [ ] 5.5 Testen op iPhone, Android en desktop (Safari, Chrome, Firefox).

### Fase 6: Livegang
- [ ] 6.1 Deploy op Netlify/Cloudflare Pages en domein koppelen.
- [ ] 6.2 Analytics (Plausible/Umami).
- [ ] 6.3 Google Bedrijfsprofiel aanmaken en koppelen.
- [ ] 6.4 Testbestelling end-to-end.

### Fase 7: Groei (later)
- [ ] 7.1 Online betalen met Mollie (iDEAL).
- [ ] 7.2 CMS zodat de bakker zelf bakdagen, prijzen en voorraad beheert.
- [ ] 7.3 Instagram-feed, nieuwsbrief ("de bakdag-mail").
- [ ] 7.4 Abonnement ("elke week een vers brood").
- [ ] 7.5 Workshops / starter verkopen.

---

## 9. Besluiten

| Onderwerp | Besluit |
|---|---|
| Prijzen | Zichtbaar op de site (advies, zie hieronder) |
| Extra's | Alles combineerbaar, prijzen hieronder |
| Bakdagen | Maandag t/m zondag; besteld vóór 00:00 op dag D = ophalen vanaf D+3 |
| Levering | Alleen ophalen in **Zevenaar**; ophaaltijd in overleg (exact adres pas in de bevestiging) |
| Capaciteit | Voorlopig geen maximum per dag; instelbaar gemaakt voor later |
| Betalen | Tikkie of contant bij ophalen (Mollie optioneel later) |
| Bakker in beeld | Nog niet; persoonlijke ik-vorm zonder portret |

### Prijslijst

| Brood | Prijs |
|---|---|
| Witte Zuurdesem Brood | €5,00 |
| Lichtbruine Zuurdesem Brood | €5,50 |
| Bruine Zuurdesem Brood | €6,00 |
| Spelt Zuurdesem Brood | €7,50 |
| Rogge Zuurdesem Brood | €7,50 |

| Extra | Meerprijs |
|---|---|
| Zonnebloempitten | + €0,50 |
| Pompoenpitten | + €0,50 |
| Chiazaden | + €0,50 |
| Maanzaden | + €0,50 |
| Sesam | + €0,50 |
| Mix van zaden (4 soorten) | + €1,50 |
| Rozijnen | + €1,00 |
| Hazelnoten | + €1,00 |
| Rozijnen en hazelnoten | + €1,75 |

**Waarom prijzen tonen:** "prijs op aanvraag" voelt bij een brood van een paar euro als drempel en roept wantrouwen op ("zal wel duur zijn"). Bovendien haken bezoekers af die eerst willen vergelijken. Met zichtbare prijzen wordt elke WhatsApp/bestelling een concrete order in plaats van een vraag, en dat scheelt de bakker veel heen-en-weer berichten. Een premium prijs is juist geloofwaardig als je hem naast het verhaal (eigen starter, 3 dagen werk) laat zien.

## 10. Nog openstaande vragen

1. ~~Mix van zaden~~: mix van de losse zaden; voor de zekerheid wordt sesam als allergeen vermeld.
2. ~~Gewicht~~: niet vermeld.
3. ~~Naam starter~~: geen naam.
4. **Domeinnaam** al geregeld? **KvK/NVWA** al rond?
