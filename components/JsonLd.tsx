import { site, isPending } from '@/content/site';

/**
 * Dados estruturados (schema.org) em um único @graph — a espinha do GEO/AEO:
 * motores de busca, buscadores de resposta e LLMs leem daqui "quem/o quê/onde".
 *
 * Alimentado por content/site.ts. Só entram campos com valor real — geo e link
 * do Google entram só quando deixam de ser `pending`. Nada inventado:
 *   - sem `medicalSpecialty` / especialidade (barrada até verificação no CRO);
 *   - sem `aggregateRating` (não há avaliações reais);
 *   - `availableService` espelha os serviços já exibidos na página (não é
 *     alegação de especialidade — é oferta de serviço).
 */
export function JsonLd() {
  const a = site.location.address;
  const { city, state } = a;
  const dentistId = `${site.url}/#dentist`;
  const websiteId = `${site.url}/#website`;
  const title = `${site.brand.name} — Dentista em ${city} – ${state}`;

  const sameAs = [
    `https://instagram.com/${site.contact.instagram.replace('@', '')}`,
  ];
  if (!isPending(site.location.googleMapsUrl)) {
    sameAs.push(site.location.googleMapsUrl);
  }

  const dentist: Record<string, unknown> = {
    '@type': 'Dentist',
    '@id': dentistId,
    name: site.brand.name,
    url: site.url,
    image: `${site.url}/opengraph-image.png`,
    logo: `${site.url}/icon.svg`,
    telephone: `+${site.contact.whatsapp.e164}`,
    email: site.contact.email,
    currenciesAccepted: 'BRL',
    paymentAccepted: site.payment,
    knowsLanguage: 'pt-BR',
    areaServed: { '@type': 'City', name: city },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.street} - ${a.neighborhood}`,
      addressLocality: city,
      addressRegion: state,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    openingHoursSpecification: site.location.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    availableService: site.services.map((s) => ({
      '@type': 'Service',
      name: s.title,
      description: s.description,
    })),
    employee: {
      '@type': 'Person',
      name: site.responsible.name,
      jobTitle: 'Cirurgiã-dentista',
      identifier: site.responsible.cro,
    },
    sameAs,
  };

  // Coordenadas só entram quando confirmadas (reforço forte de SEO local).
  if (!isPending(site.location.geo)) {
    dentist.geo = { '@type': 'GeoCoordinates', ...site.location.geo };
  }
  if (!isPending(site.location.googleMapsUrl)) {
    dentist.hasMap = site.location.googleMapsUrl;
  }

  const graph = [
    dentist,
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: site.url,
      name: site.brand.name,
      inLanguage: 'pt-BR',
      publisher: { '@id': dentistId },
    },
    {
      '@type': 'WebPage',
      '@id': `${site.url}/#webpage`,
      url: `${site.url}/`,
      name: title,
      isPartOf: { '@id': websiteId },
      about: { '@id': dentistId },
      inLanguage: 'pt-BR',
      // AEO/voz: trecho falável (headline). cssSelector precisa existir na página.
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${site.url}/#faq`,
      inLanguage: 'pt-BR',
      mainEntity: site.faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  const data = { '@context': 'https://schema.org', '@graph': graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
