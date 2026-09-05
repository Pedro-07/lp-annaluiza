import type { Metadata, Viewport } from 'next';
import { Comfortaa, Manrope } from 'next/font/google';
import { site } from '@/content/site';
import './globals.css';

// Comfortaa = display (marca, títulos, números). Restrição 1 do briefing.
const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
  display: 'swap',
});

// Manrope = corpo e rótulos. Legível em tamanho pequeno, com mais estrutura
// que uma sans neutra — sai do padrão casual sem competir com o Comfortaa.
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const { city, state } = site.location.address;

// Título local: nome + profissão + praça. "Dentista" é fato (CRO-MA), não
// especialidade — a barra do CRO vale para especialidades, não para a profissão.
const title = `${site.brand.name} — Dentista em ${city} – ${state}`;
const description = site.seo.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.brand.name}`,
  },
  description,
  applicationName: site.brand.name,
  authors: [{ name: site.brand.name }],
  creator: site.brand.name,
  publisher: site.brand.name,
  category: 'Dentistry',
  // Meta keywords quase não pesam no Google, mas alguns buscadores e motores
  // generativos ainda leem. Só termos factuais: profissão + praça + serviços.
  keywords: [
    `dentista ${city}`,
    `odontologia ${city}`,
    `consultório odontológico ${city} ${state}`,
    'atendimento particular',
    'agendamento online',
    ...site.services.map((s) => s.title.replace(/\s*\(.*\)/, '')),
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.brand.name,
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#002F4A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${comfortaa.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
