import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogFolder = path.join(process.cwd(), 'content/');
  const blogFiles = fs.readdirSync(blogFolder);

  const blogPages = blogFiles
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      return {
        url: `https://novin.fun/blog/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      };
    });

  const certificationList = DATA.certifications.map((certif) => ({
    url: `https://novin.fun/certification/${certif.slug}`,
    lastModified: new Date(certif.start).toISOString(),
    changeFrequency: 'yearly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: 'https://novin.fun',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: 'https://novin.fun/certification',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...certificationList,
    {
      url: 'https://novin.fun/project',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://novin.fun/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...blogPages,
  ];
}
