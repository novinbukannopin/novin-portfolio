import { ImageResponse } from 'next/og';

interface OgProps {
  title: string;
  description?: string;
  date?: string;
  brandText?: string;
  brandUrl?: string;
  fonts: {
    interBold: ArrayBuffer;
    interRegular: ArrayBuffer;
  };
}

export function generateOgImage({
  title,
  description,
  date,
  brandText,
  brandUrl,
  fonts,
}: OgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          padding: '60px',
          backgroundColor: 'white',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            width: brandUrl ? '20%' : '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt='Logo'
            src={brandUrl || 'https://novin.fun/buildspace.jpg'}
            style={{
              width: 140,
              height: 140,
              objectFit: 'contain',
              // quality
              imageRendering: 'crisp-edges',
            }}
          />
        </div>

        {/* Title & Description */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
            paddingLeft: '40px',
          }}
        >
          <div
            style={{
              fontFamily: 'Inter',
              fontSize: title.length > 60 ? '48px' : '64px',
              fontWeight: 700,
              color: '#111',
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>

          {description && (
            <div
              style={{
                fontFamily: 'Inter',
                fontSize: '32px',
                color: '#555',
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          )}

          {date && (
            <div
              style={{
                fontFamily: 'Inter',
                fontSize: '24px',
                color: '#666',
                marginTop: '10px',
              }}
            >
              {date}
            </div>
          )}
        </div>

        {/* Brand Text */}
        {brandText && (
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              right: 60,
              fontFamily: 'Inter',
              fontSize: '24px',
              color: '#3b82f6',
            }}
          >
            {brandText}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fonts.interBold,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fonts.interRegular,
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );
}
