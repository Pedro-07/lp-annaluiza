import { site } from '@/content/site';

/**
 * JSON-LD do consultório (Dentist), alimentado por content/site.ts.
 * Só entram campos que já têm valor — telefone e demais pendências ficam de
 * fora, nunca inventados. Endereço (PostalAddress) e horários (openingHours)
 * saem da mesma fonte que o texto visível, sem divergência.
 */
export function JsonLd() {
  const a = site.location.address;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: site.brand.name,
    telephone: `+${site.contact.whatsapp.e164}`,
    email: site.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.street} - ${a.neighborhood}`,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    openingHoursSpecification: site.location.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [
      `https://instagram.com/${site.contact.instagram.replace('@', '')}`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
