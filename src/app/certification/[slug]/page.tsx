import { Metadata } from 'next';
import { DATA } from '@/data/resume';
import CertificationDetail from '@/components/certification-detail';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const certif = DATA.certifications.find(
    (certif) => certif.slug === params.slug,
  );

  if (!certif) {
    return {
      title: 'Certification Not Found',
      description: 'Certification tidak ditemukan.',
    };
  }

  const ogImage =
    certif.image && certif.image.length > 0
      ? `${DATA.url}/certifications/${certif.image[0]}`
      : `${DATA.url}/og?title=${encodeURIComponent(certif.title)}`;

  return {
    title: certif.title,
    description: certif.subtitle || 'Certification detail.',
    openGraph: {
      title: certif.title,
      description: certif.subtitle || 'Certification detail.',
      url: `${DATA.url}/certification/${certif.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: certif.title,
      description: certif.subtitle || 'Certification detail.',
      images: [ogImage],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <CertificationDetail params={params} />;
}
