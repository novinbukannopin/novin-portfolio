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
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* WebSite Structured Data */}
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
