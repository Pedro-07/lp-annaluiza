import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

/**
 * robots.txt — gerado no build (estático, compatível com output: 'export').
 * Indexação liberada; aponta o sitemap pela URL canônica.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
