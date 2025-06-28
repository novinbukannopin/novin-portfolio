'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { DATA } from '@/data/project';
import Image from 'next/image';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const project = DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section id='certification-certif'>
      <h1 className='title max-w-[650px] text-2xl font-medium tracking-tighter'>
        {project.title}
      </h1>
      <div className='mx-auto max-w-4xl py-12'>
        <div className='overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-transparent'>
          <div className='h-64 overflow-hidden sm:h-80'>
            <Image
              src={project.image}
              alt={project.title}
              className='h-full w-full object-cover'
            />
          </div>

          <div className='space-y-6 p-6'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl'>
                {project.title}
              </h1>
              <p className='leading-relaxed text-gray-600 dark:text-gray-400'>
                {project.subtitle}
              </p>
            </div>

            <div>
              <h4 className='mb-3 text-sm font-medium text-gray-700 dark:text-gray-300'>
                Technology
              </h4>
              <div className='flex flex-wrap gap-2'>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='grid grid-cols-1 gap-6 border-t border-gray-100 pt-4 dark:border-gray-700 sm:grid-cols-2'>
              <div>
                <h4 className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Architecture
                </h4>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  {project.architecture}
                </p>
              </div>
              <div>
                <h4 className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Team Lead
                </h4>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  {project.teamLead}
                </p>
              </div>
            </div>

            <div>
              <h4 className='mb-3 text-sm font-medium text-gray-700 dark:text-gray-300'>
                Team Members
              </h4>
              <div className='flex flex-wrap gap-2'>
                {project.team.map((member) => (
                  <span
                    key={member}
                    className='rounded bg-gray-50 px-3 py-1 text-xs text-gray-600 dark:bg-gray-800/50 dark:text-gray-400'
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className='mb-3 text-sm font-medium text-gray-700 dark:text-gray-300'>
                Key Tasks
              </h4>
              <div className='flex flex-wrap gap-2'>
                {project.relatedTasks.map((task) => (
                  <span
                    key={task}
                    className='rounded bg-gray-50 px-3 py-1 text-xs text-gray-600 dark:bg-gray-800/50 dark:text-gray-400'
                  >
                    {task}
                  </span>
                ))}
              </div>
            </div>
            {/* Team Size */}
            <div className='border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-500'>
              {project.memberCount} team member
              {project.memberCount > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
