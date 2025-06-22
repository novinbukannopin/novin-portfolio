import BlurFade from '@/components/magicui/blur-fade';
import Link from 'next/link';
import { DATA } from '@/data/resume';

export const metadata = {
  title: 'Certification',
  description: 'My certifications and achievements.',
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
            className='mb-4 flex flex-col space-y-1'
            href={`/blog/${certif.slug}`}
          >
            <div className='flex w-full flex-col'>
              <p className='tracking-tight'>{certif.title}</p>
              <p className='h-6 text-xs text-muted-foreground'>
                {certif.subtitle}
              </p>
            </div>
          </Link>
        </BlurFade>
      ))}
    </section>
  );
}
