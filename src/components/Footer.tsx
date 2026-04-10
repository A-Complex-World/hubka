import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/40 relative noise-overlay">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/8">
            {/* Brand */}
            <div className="md:col-span-4">
              <span className="font-heading text-white text-3xl font-semibold block mb-1">
                HUBKA
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 block mb-6">
                Malermeister · seit 1974
              </span>
              <p className="text-sm leading-relaxed">
                Malermeister Horst Hubka GmbH
                <br />
                Belgradstr. 26
                <br />
                80796 München-Schwabing
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://de-de.facebook.com/hubkamalereibetriebmuenchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-terracotta transition-colors text-sm"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/malermeisterhubka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-terracotta transition-colors text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-3 md:col-start-6">
              <h4 className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                Leistungen
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Exklusive Techniken",
                  "Malerarbeiten",
                  "Lackierarbeiten",
                  "Fassaden",
                  "Tapeten",
                  "Sanierung",
                ].map((s) => (
                  <li key={s}>
                    <Link
                      href="/leistungen"
                      className="hover:text-white transition-colors"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                Kontakt
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={13} className="text-terracotta" />
                  <a
                    href="tel:0893110929"
                    className="hover:text-white transition-colors"
                  >
                    089 / 311 09 29
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={13} className="text-terracotta" />
                  <a
                    href="mailto:info@hubka.de"
                    className="hover:text-white transition-colors"
                  >
                    info@hubka.de
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={13} className="text-terracotta mt-0.5" />
                  <span>
                    Mo–Do: 9–12:30, 14–18 Uhr
                    <br />
                    Fr: 9–16 Uhr
                  </span>
                </li>
              </ul>
              <a
                href="https://www.farbenshop-hubka.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-6 text-terracotta hover:text-terracotta-light text-sm font-medium transition-colors"
              >
                Farbenshop
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20">
            <span>
              &copy; {new Date().getFullYear()} Malermeister Horst Hubka GmbH
            </span>
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="hover:text-white/50 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-white/50 transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
