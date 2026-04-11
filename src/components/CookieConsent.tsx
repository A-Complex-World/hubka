'use client';

import { useState, useEffect, useCallback } from 'react';

interface ConsentState {
  necessary: boolean;
  maps: boolean;
}

const CONSENT_KEY = 'cookie_consent';

export function getConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setConsent(consent: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event('consent-updated'));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mapsToggle, setMapsToggle] = useState(false);

  const openSettings = useCallback(() => {
    const consent = getConsent();
    setMapsToggle(consent?.maps || false);
    setShowSettings(true);
    setVisible(false);
  }, []);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) setVisible(true);

    const handler = () => openSettings();
    window.addEventListener('open-cookie-settings', handler);
    return () => window.removeEventListener('open-cookie-settings', handler);
  }, [openSettings]);

  const acceptAll = () => {
    setConsent({ necessary: true, maps: true });
    setVisible(false);
  };

  const rejectAll = () => {
    setConsent({ necessary: true, maps: false });
    setVisible(false);
  };

  const saveSettings = () => {
    setConsent({ necessary: true, maps: mapsToggle });
    setShowSettings(false);
  };

  return (
    <>
      {visible && (
        <div className="cookie-banner">
          <div className="cookie-banner-inner">
            <div className="cookie-banner-text">
              <p>
                Diese Website verwendet Cookies und externe Dienste (Google Maps), um Ihnen das bestmögliche Erlebnis zu bieten.{' '}
                <a href="/datenschutz">Mehr erfahren</a>
              </p>
            </div>
            <div className="cookie-banner-buttons">
              <button onClick={acceptAll} className="cookie-btn cookie-btn-accept">Alle akzeptieren</button>
              <button onClick={rejectAll} className="cookie-btn cookie-btn-reject">Nur notwendige</button>
              <button onClick={openSettings} className="cookie-btn cookie-btn-settings">Einstellungen</button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="cookie-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowSettings(false); }}>
          <div className="cookie-modal-content">
            <h2>Cookie-Einstellungen</h2>
            <p className="cookie-modal-desc">Verwalten Sie hier Ihre Einwilligung für externe Dienste.</p>

            <div className="cookie-setting-item">
              <div className="cookie-setting-info">
                <h4>Technisch notwendig</h4>
                <p>Speicherung Ihrer Cookie-Einstellungen. Kann nicht deaktiviert werden.</p>
              </div>
              <label className="cookie-toggle">
                <input type="checkbox" checked disabled />
                <span className="cookie-toggle-slider" />
              </label>
            </div>

            <div className="cookie-setting-item">
              <div className="cookie-setting-info">
                <h4>Google Maps</h4>
                <p>Interaktive Karte. Daten werden an Google übermittelt.</p>
              </div>
              <label className="cookie-toggle">
                <input type="checkbox" checked={mapsToggle} onChange={(e) => setMapsToggle(e.target.checked)} />
                <span className="cookie-toggle-slider" />
              </label>
            </div>

            <button onClick={saveSettings} className="cookie-btn cookie-btn-accept cookie-save-btn">
              Einstellungen speichern
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <a
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event('open-cookie-settings'));
      }}
    >
      Cookie-Einstellungen
    </a>
  );
}
