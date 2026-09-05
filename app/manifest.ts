import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

/**
 * Web App Manifest — identidade no mobile (nome, cor de tema petróleo, ícones).
 * Gerado no build (estático).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brand.name,
    short_name: 'Anna Luiza',
    description: site.seo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#002F4A',
    theme_color: '#002F4A',
    lang: 'pt-BR',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any', purpose: 'any' },
      { src: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  };
}
