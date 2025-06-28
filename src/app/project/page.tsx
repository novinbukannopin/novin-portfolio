import BlurFade from '@/components/magicui/blur-fade';
import { DATA } from '@/data/project';
import { ProjectCard } from '@/components/project-card-v2';
import Link from 'next/link';
import { Wrench } from 'lucide-react';

export const metadata = {
  title: 'Projects',
  description: 'My completed and ongoing projects.',
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const projects = DATA.projects;

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className='mb-8 text-2xl font-medium tracking-tighter'>projects</h1>
      </BlurFade>
      <div className='mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20'>
        <div className='flex items-center gap-3'>
          <Wrench className='h-5 w-5 text-yellow-600 dark:text-yellow-400' />
          <div>
            <p className='text-sm font-medium text-yellow-800 dark:text-yellow-200'>
              Under Maintenance
            </p>
            <p className='mt-1 text-xs text-yellow-700 dark:text-yellow-300'>
              This page is currently being improved. Some features may be
              limited.
            </p>
          </div>
        </div>
      </div>
      <div className={'flex flex-col gap-4'}>
        {projects.map((project, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={project.slug}>
            <Link href={`/project/${project.slug}`} className='block'>
              <ProjectCard key={project.slug} project={project} />
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
