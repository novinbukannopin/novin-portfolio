import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { formatDate } from '@/lib/utils';
import { DATA } from '@/data/resume';

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = DATA.certifications.find(
    (certif) => certif.slug === params.slug,
  );

  if (!post) {
    notFound();
  }

  return (
    <section id='certification-post'>
      <h1 className='title max-w-[650px] text-2xl font-medium tracking-tighter'>
        {post.title}
      </h1>
      <div className='mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm'>
        <Suspense fallback={<p className='h-5' />}>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            {formatDate(post.start)}
          </p>
        </Suspense>
      </div>
    </section>
  );
}
