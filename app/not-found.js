import Link from 'next/link';


export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: '#2E2017',
        background:
          'radial-gradient(ellipse at 82% 0%, rgba(255, 238, 211, .66), transparent 40%), #EEC9A3',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '480px',
          padding: '48px 36px',
          border: '1.5px solid rgba(255, 247, 228, .88)',
          borderRadius: '34px',
          background: 'linear-gradient(148deg, #FBE7CA, #F6D9B8)',
          boxShadow:
            '12px 15px 28px rgba(94, 58, 31, .2), -7px -7px 17px rgba(255, 247, 228, .72), inset 1px 1px 2px rgba(255,255,255,.82)',
        }}
      >
        <h1
          style={{
            margin: '0 0 8px',
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(56px, 12vw, 80px)',
            fontWeight: 800,
            letterSpacing: '-.06em',
            color: '#246D5B',
            lineHeight: 1,
          }}
        >
          404
        </h1>
        <h2
          style={{
            margin: '0 0 14px',
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(20px, 4vw, 26px)',
            fontWeight: 700,
            letterSpacing: '-.03em',
          }}
        >
          Page Not Found
        </h2>
        <p
          style={{
            margin: '0 0 24px',
            color: '#705844',
            fontSize: '15px',
            lineHeight: 1.55,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            minHeight: '46px',
            padding: '0 22px',
            border: 'none',
            borderRadius: '999px',
            color: '#FFF9EE',
            background: 'linear-gradient(145deg, #2D8067, #155744)',
            boxShadow:
              '7px 8px 15px rgba(30, 74, 54, .32), inset 1px 1px 2px rgba(255,255,255,.25)',
            fontSize: '14px',
            fontWeight: 700,
            textDecoration: 'none',
            transition: 'transform .17s ease, box-shadow .17s ease',
          }}
        >
          Go Home
          <svg
            viewBox="0 0 24 24"
            style={{
              width: '18px',
              height: '18px',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }}
          >
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
