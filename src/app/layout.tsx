import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  authors: {
    name: DATA.name,
    url: DATA.url,
  },
  creator: DATA.name,
  publisher: DATA.url,
  abstract: DATA.description,
  classification: 'Personal Website, Portfolio, Blog',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: DATA.name,
  },
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  description: DATA.description,
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${DATA.url}/api/og?title=${encodeURIComponent(DATA.name)}&description=${encodeURIComponent(DATA.description)}&brandText=novin.fun`,
        width: 1200,
        height: 630,
        alt: DATA.name,
      },
    ],
  },
  alternates: {
    canonical: DATA.url,
  },
  twitter: {
    title: DATA.name,
    description: DATA.description,
    card: 'summary_large_image',
    images: [
      `${DATA.url}/api/og?title=${encodeURIComponent(DATA.name)}&description=${encodeURIComponent(DATA.description)}&brandText=novin.fun`,
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
  verification: {
    google: '',
    yandex: '',
  },
  keywords: [
    'Novin Ardian Yulianto',
    'Fullstack Developer',
    'Personal Website',
    'Portfolio',
    'Project Manager',
    'Software Engineer',
    'Blog',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://novin.fun/',
              name: 'Novin Ardian Yulianto',
              alternateName: 'novin.fun',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://novin.fun/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              image: 'https://novin.fun/me.webp',
            }),
          }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://novin.fun/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://novin.fun/blog',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Certifications',
                  item: 'https://novin.fun/certification',
                },
              ],
            }),
          }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Novin Ardian Yulianto',
              url: 'https://novin.fun',
              image: 'https://novin.fun/me.webp',
              jobTitle: 'Fullstack Developer',
              sameAs: [
                'https://github.com/novinbukannopin',
                'https://www.linkedin.com/in/novin-ardian-yulianto',
                'https://www.tiktok.com/@novinnnnnnnn',
                'https://x.com/novinbukannopin',
                'https://www.instagram.com/novinbukannopin',
              ],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          'mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId='G-W1MDRB9NRR' />
      <GoogleTagManager gtmId='G-W1MDRB9NRR' />
    </html>
  );
}
