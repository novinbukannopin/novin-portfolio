'use client';

import { useState } from 'react';
import { Dock, DockIcon } from '@/components/magicui/dock';
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MessageSquareShare } from 'lucide-react';

export default function Navbar() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom'>
      <div className='fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background'></div>

      <Dock
        className={cn(
          'pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
          showSocial && 'pointer-events-none opacity-60',
        )}
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={`Navigate to ${item.label}`}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12',
                  )}
                >
                  <item.icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation='vertical' className='h-full' />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setShowSocial(!showSocial)}
                aria-label='Open social dock'
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'size-12',
                )}
              >
                <MessageSquareShare className={'size-4'} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Social Links</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation='vertical' className='h-full py-2' />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>

      {showSocial && (
        <Dock className='[box-shadow:... pointer-events-auto absolute -top-16 left-1/2 z-50 mx-auto flex h-full min-h-full -translate-x-1/2 transform-gpu items-center bg-background px-1'>
          {Object.entries(DATA.contact.social)
            .filter(([, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      onClick={() => setShowSocial(false)}
                      aria-label={`Navigate to ${social.name}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'icon' }),
                        'size-12',
                      )}
                    >
                      <social.icon className='size-4' />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

          <Separator orientation='vertical' className='h-full py-2' />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setShowSocial(false)}
                  aria-label='Close social dock'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12',
                  )}
                >
                  {/* Icon close */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-4'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6.72 6.72a.75.75 0 011.06 0L12 10.94l4.22-4.22a.75.75 0 111.06 1.06L13.06 12l4.22 4.22a.75.75 0 11-1.06 1.06L12 13.06l-4.22 4.22a.75.75 0 11-1.06-1.06L10.94 12 6.72 7.78a.75.75 0 010-1.06z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Close</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      )}
    </div>
  );
}
