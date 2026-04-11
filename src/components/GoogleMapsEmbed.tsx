'use client';

import { useState, useEffect } from 'react';
import { getConsent, setConsent } from './CookieConsent';

interface GoogleMapsEmbedProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

export default function GoogleMapsEmbed({ src, className, style, title = 'Standort' }: GoogleMapsEmbedProps) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const check = () => {
      const consent = getConsent();
      setAllowed(consent?.maps === true);
    };
    check();
    window.addEventListener('consent-updated', check);
    window.addEventListener('storage', check);
    return () => {
      window.removeEventListener('consent-updated', check);
      window.removeEventListener('storage', check);
    };
  }, []);

  const enableMaps = () => {
    const consent = getConsent() || { necessary: true, maps: false };
    consent.maps = true;
    setConsent(consent);
    setAllowed(true);
  };

  if (!allowed) {
    return (
      <div className={className} style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        minHeight: 300, background: 'rgba(255,255,255,0.03)', borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', padding: '2rem',
        ...style
      }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1.5rem', maxWidth: 300 }}>
          Zum Anzeigen der Karte werden Daten an Google Maps übermittelt.
        </p>
        <button
          onClick={enableMaps}
          style={{
            padding: '0.65rem 1.5rem', borderRadius: 6, fontSize: '0.8rem', cursor: 'pointer',
            background: 'transparent', color: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'inherit', transition: 'all 0.2s'
          }}
        >
          Google Maps laden
        </button>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      className={className}
      style={{ border: 0, borderRadius: 12, minHeight: 350, width: '100%', height: '100%', ...style }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
    />
  );
}
