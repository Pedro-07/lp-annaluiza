import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

/**
 * sitemap.xml — página única. Gerado no build (estático).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
