import { Metadata } from 'next';
import { DATA } from '@/data/resume';
import CertificationDetail from '@/components/certification-detail';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const certif = DATA.certifications.find((c) => c.slug === params.slug);

  if (!certif) {
    return {
      title: 'Certification Not Found',
      description: 'Sertifikasi tidak ditemukan.',
      robots: { index: false, follow: false },
    };
  }

  const ogImage =
    certif.image && certif.image.length > 0
      ? `${DATA.url}/certifications/${certif.image[0]}`
      : `${DATA.url}/api/og?title=${encodeURIComponent(certif.title)}&description=${encodeURIComponent(certif.subtitle || '')}&brandText=novin.fun`;

  return {
    title: certif.title,
    description: certif.subtitle || 'Detail sertifikasi.',
    openGraph: {
      title: certif.title,
      description: certif.subtitle || 'Detail sertifikasi.',
      url: `${DATA.url}/certification/${certif.slug}`,
      siteName: 'novin.fun',
      type: 'article',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: certif.title,
      description: certif.subtitle || 'Detail sertifikasi.',
      images: [ogImage],
    },
    alternates: {
      canonical: `${DATA.url}/certification/${certif.slug}`,
    },
  };
}

export default function CertificationSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return <CertificationDetail params={params} />;
}
