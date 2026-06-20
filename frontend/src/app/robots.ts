import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/blog-admin/',
    },
    sitemap: 'https://www.srsdentalcare.in/sitemap.xml',
  };
}
