'use client';

import { notFound } from 'next/navigation';
import { Suspense, useState } from 'react';
import { formatDate } from '@/lib/utils';
import { DATA } from '@/data/resume';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const certif = DATA.certifications.find(
    (certif) => certif.slug === params.slug,
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!certif) {
    notFound();
  }

  return (
    <section id='certification-certif'>
      <h1 className='title max-w-[650px] text-2xl font-medium tracking-tighter'>
        {certif.title}
      </h1>
      <div className='mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm'>
        <Suspense fallback={<p className='h-5' />}>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            {formatDate(certif.start)}
          </p>
        </Suspense>
      </div>
      <div className='mb-8 mt-2 flex max-w-[650px] flex-col items-start justify-between gap-0 md:flex-row md:items-start md:gap-8'>
        <div>
          <h2 className={'mb-4'}>Images</h2>
          {certif.image && certif.image.length > 0 ? (
            <div className='flex flex-wrap gap-2'>
              {certif.image.map((image, index) => (
                <Image
                  key={index}
                  src={`/certifications/${image}`}
                  alt={certif.title}
                  className='h-48 w-48 cursor-pointer rounded-md object-cover transition hover:brightness-75'
                  onClick={() => setSelectedImage(`/certifications/${image}`)}
                />
              ))}
            </div>
          ) : (
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              No images available.
            </p>
          )}

          {selectedImage && (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'>
              <div className='relative w-full max-w-4xl p-4'>
                <button
                  onClick={() => setSelectedImage(null)}
                  className='absolute right-4 top-4 text-xl font-bold text-white'
                  aria-label='Close'
                >
                  ✕
                </button>
                <img
                  src={selectedImage}
                  alt='Selected'
                  className='mx-auto max-h-[80vh] rounded-md shadow-lg'
                />
              </div>
            </div>
          )}
        </div>

        <div className={'mt-8 flex flex-col gap-8 md:mt-0'}>
          <div className={''}>
            <h2 className={'mb-4'}>Competencies</h2>
            <ul className='list-disc pl-5'>
              {certif?.competencies && certif.competencies.length > 0 ? (
                certif.competencies.map((competency, index) => (
                  <li
                    key={index}
                    className='text-sm text-neutral-600 dark:text-neutral-400'
                  >
                    {competency}
                  </li>
                ))
              ) : (
                <li className='text-sm text-neutral-600 dark:text-neutral-400'>
                  No competencies listed.
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className={'mb-4'}>Skills or Tools</h2>
            <div className='flex flex-wrap gap-1'>
              {certif?.skills && certif.skills.length > 0 ? (
                certif.skills.map((competency, index) => (
                  <Badge key={index} className='text-sm'>
                    {competency}
                  </Badge>
                ))
              ) : (
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  No skills listed.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
