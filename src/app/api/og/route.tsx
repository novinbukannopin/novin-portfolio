import { generateOgImage } from '@/lib/og/generate-image';
import { getParam } from '@/lib/og/get-param';
import { loadGoogleFont } from '@/lib/og/load-font';

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const props = {
    title: getParam(searchParams, 'title', 'Default Title'),
    description: getParam(searchParams, 'description'),
    date: getParam(searchParams, 'date'),
    brandText: getParam(searchParams, 'brandText'),
    brandUrl: getParam(searchParams, 'brandUrl'),
  };

  const interBold = await loadGoogleFont(
    'Inter:wght@700',
    `${props.title}${props.description}${props.brandText}${props.date}`,
  );
  const interRegular = await loadGoogleFont(
    'Inter',
    `${props.title}${props.description}${props.brandText}${props.date}`,
  );

  return generateOgImage({
    ...props,
    fonts: {
      interBold,
      interRegular,
    },
  });
}
