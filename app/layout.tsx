import type { Metadata, Viewport } from 'next';
import { Comfortaa, Manrope } from 'next/font/google';
import Script from 'next/script';
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

// Google Tag Manager. Snippet oficial (dispara o evento gtm.js que o container
// usa como gatilho "Container Loaded"); carregado após a página ficar interativa.
const GTM_ID = 'GTM-P2RWZ76Q';

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
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  );
}
