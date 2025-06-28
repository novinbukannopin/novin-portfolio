import BlurFade from '@/components/magicui/blur-fade';
import Link from 'next/link';
import { DATA } from '@/data/resume';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Daftar sertifikasi dan pencapaian Novin Ardian Yulianto.',
  openGraph: {
    title: 'Certifications - Novin Ardian Yulianto',
    description: 'Daftar sertifikasi dan pencapaian profesional Novin.',
    url: `${DATA.url}/certification`,
    siteName: 'novin.fun',
    type: 'website',
    images: [
      {
        url: `${DATA.url}/api/og?title=Certifications&description=Daftar%20sertifikasi%20dan%20pencapaian%20Novin%20Ardian%20Yulianto&brandText=novin.fun`,
        width: 1200,
        height: 630,
        alt: 'Certifications OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certifications - Novin Ardian Yulianto',
    description: 'Daftar sertifikasi profesional Novin.',
    images: [
      `${DATA.url}/api/og?title=Certifications&description=Daftar%20sertifikasi%20dan%20pencapaian%20Novin%20Ardian%20Yulianto&brandText=novin.fun`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${DATA.url}/certification`,
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = DATA.certifications;

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className='mb-8 text-2xl font-medium tracking-tighter'>
          certification
        </h1>
      </BlurFade>
      {posts.map((certif, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={certif.href}>
          <Link
            className='mb-4 flex space-y-1'
            href={`/certification/${certif.slug}`}
          >
            <div className='flex w-full flex-col'>
              <p className='tracking-tight'>{certif.title}</p>
              <p className='h-6 text-xs text-muted-foreground'>
                {certif.subtitle}
              </p>
            </div>
            <div>
              <p className='text-xs text-muted-foreground'>{certif.start}</p>
            </div>
          </Link>
        </BlurFade>
      ))}
    </section>
  );
}
