import type { Metadata } from 'next';
import { Comfortaa, Manrope } from 'next/font/google';
import { site, isPending } from '@/content/site';
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

// Descrição só vai ao ar quando deixar de ser pending — nada inventado.
export const metadata: Metadata = {
  title: site.brand.name,
  description: isPending(site.seo.description) ? undefined : site.seo.description,
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
