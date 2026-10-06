// Netlify roept deze functie automatisch aan bij elke formulierinzending (event: submission-created).
// Hij stuurt de bestelling of het contactbericht als WhatsApp-bericht naar de bakker, via CallMeBot.
//
// Instellen in Netlify → Site configuration → Environment variables:
//   CALLMEBOT_APIKEY  de sleutel die CallMeBot per WhatsApp stuurt na activatie (verplicht)
//   WHATSAPP_NUMMER   ontvanger, internationaal zonder + (optioneel, standaard 31639033748)
//
// Zonder CALLMEBOT_APIKEY doet de functie niets: de inzending staat dan nog steeds in Netlify
// en de e-mailmelding werkt gewoon.

const STANDAARD_NUMMER = '31639033748';

function berichtVoor(formulier, d) {
  if (formulier === 'bestelling') {
    // Het veld "bestelling" bevat de complete, leesbare samenvatting uit de site
    return `🍞 *Mijn Desem*\n\n${d.bestelling || '(geen samenvatting)'}`;
  }
  if (formulier === 'contact') {
    return [
      '✉️ *Mijn Desem: nieuw contactbericht*',
      '',
      `Van: ${d.naam || '-'}`,
      `E-mail: ${d.email || '-'}`,
      d.telefoon ? `Telefoon: ${d.telefoon}` : '',
      '',
      d.bericht || '',
    ]
      .filter((r, i, a) => !(r === '' && a[i - 1] === ''))
      .join('\n');
  }
  return null;
}

export const handler = async (event) => {
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (!apikey) {
    console.log('CALLMEBOT_APIKEY ontbreekt: geen WhatsApp-melding verstuurd.');
    return { statusCode: 200, body: 'overgeslagen' };
  }

  let payload;
  try {
    ({ payload } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: 'ongeldige payload' };
  }

  const tekst = berichtVoor(payload?.form_name, payload?.data ?? {});
  if (!tekst) return { statusCode: 200, body: 'onbekend formulier' };

  const nummer = (process.env.WHATSAPP_NUMMER || STANDAARD_NUMMER).replace(/\D/g, '');
  const url = new URL('https://api.callmebot.com/whatsapp.php');
  url.searchParams.set('phone', `+${nummer}`);
  url.searchParams.set('apikey', apikey);
  url.searchParams.set('text', tekst.slice(0, 3500));

  try {
    const res = await fetch(url);
    const antwoord = await res.text();
    if (!res.ok) console.error('CallMeBot gaf een fout:', res.status, antwoord.slice(0, 300));
    else console.log('WhatsApp-melding verstuurd voor formulier', payload.form_name);
  } catch (fout) {
    // Een mislukte melding mag de inzending nooit blokkeren: die staat al veilig in Netlify
    console.error('WhatsApp-melding mislukt:', fout);
  }
  return { statusCode: 200, body: 'ok' };
};
