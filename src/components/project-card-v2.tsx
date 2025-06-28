import React from 'react';
import { Project } from '@/types/project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-transparent dark:hover:border-gray-600 dark:hover:shadow-none'>
      {/* Image */}
      <div className='h-48 overflow-hidden'>
        <Image
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
        />
      </div>

      {/* Content */}
      <div className='space-y-4 p-6'>
        {/* Title & Subtitle */}
        <div>
          <h3 className='mb-1 text-xl font-semibold text-gray-900 dark:text-white'>
            {project.title}
          </h3>
          <p className='text-sm leading-relaxed text-gray-600 dark:text-gray-400'>
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
            Technology
          </h4>
          <div className='flex flex-wrap gap-2'>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className='rounded bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & Team Info */}
        <div className='grid grid-cols-2 gap-4 border-t border-gray-100 pt-2 dark:border-gray-700'>
          <div>
            <h4 className='mb-1 text-sm font-medium text-gray-700 dark:text-gray-300'>
              Architecture
            </h4>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              {project.architecture}
            </p>
          </div>
          <div>
            <h4 className='mb-1 text-sm font-medium text-gray-700 dark:text-gray-300'>
              Team Lead
            </h4>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              {project.teamLead}
            </p>
          </div>
        </div>

        {/* Tasks */}
        <div>
          <h4 className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
            Key Tasks
          </h4>
          <div className='flex flex-wrap gap-2'>
            {project.relatedTasks.map((task) => (
              <span
                key={task}
                className='rounded bg-gray-50 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800/50 dark:text-gray-400'
              >
                {task}
              </span>
            ))}
          </div>
        </div>

        {/* Team Size */}
        <div className='pt-2 text-xs text-gray-500 dark:text-gray-500'>
          {project.memberCount} team member{project.memberCount > 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
