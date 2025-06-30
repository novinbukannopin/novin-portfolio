import BlurFade from '@/components/magicui/blur-fade';
import { getBlogPosts } from '@/data/blog';
import Link from 'next/link';
import { Metadata } from 'next';
import { DATA } from '@/data/resume';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Kumpulan tulisan tentang software development, life, dan insight lainnya.',
  keywords: [
    'Blog',
    'Software Development',
    'Programming',
    'Novin Ardian Yulianto',
    'Fullstack Developer',
    'Personal Website',
  ],
  authors: [{ name: 'Novin Ardian Yulianto', url: 'https://novin.fun' }],
  alternates: {
    canonical: `${DATA.url}/blog`,
  },
  openGraph: {
    title: 'Blog',
    description:
      'Kumpulan tulisan tentang software development, life, dan insight lainnya.',
    url: `${DATA.url}/blog`,
    siteName: 'novin.fun',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${DATA.url}/api/og?title=${encodeURIComponent('Blog')}&description=${encodeURIComponent('Kumpulan tulisan tentang software development, life, dan insight lainnya.')}&brandText=novin.fun`,
        width: 1200,
        height: 630,
        alt: 'Blog OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog',
    description:
      'Kumpulan tulisan tentang software development, life, dan insight lainnya.',
    images: [
      `${DATA.url}/api/og?title=${encodeURIComponent('Blog')}&description=${encodeURIComponent('Kumpulan tulisan tentang software development, life, dan insight lainnya.')}&brandText=novin.fun`,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className='mb-8 text-2xl font-medium tracking-tighter'>blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className='mb-4 flex flex-col space-y-1'
              href={`/blog/${post.slug}`}
            >
              <div className='flex w-full flex-col'>
                <p className='tracking-tight'>{post.metadata.title}</p>
                <p className='h-6 text-xs text-muted-foreground'>
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
