import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';
import { DATA } from '@/data/resume';
import { formatDateISO8601 } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogFolder = path.join(process.cwd(), 'content/');
  const blogFiles = fs.readdirSync(blogFolder);

  const blogPages = blogFiles
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace('.mdx', '');
      return {
        url: `https://novin.fun/blog/${slug}`,
        lastModified: formatDateISO8601(new Date().toISOString()),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      };
    });

  const certificationList = DATA.certifications.map((certif) => ({
    url: `https://novin.fun/certification/${certif.slug}`,
    lastModified: formatDateISO8601(certif.start),
    changeFrequency: 'yearly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: 'https://novin.fun',
      lastModified: formatDateISO8601(new Date().toISOString()),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: 'https://novin.fun/certification',
      lastModified: formatDateISO8601(new Date().toISOString()),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...certificationList,
    {
      url: 'https://novin.fun/project',
      lastModified: formatDateISO8601(new Date().toISOString()),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://novin.fun/blog',
      lastModified: formatDateISO8601(new Date().toISOString()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...blogPages,
  ];
}
