import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-navy text-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/8">
          <div><span className="font-heading text-white text-xl block mb-2">Hubka</span><p className="text-sm">Malermeister Horst Hubka GmbH<br/>Belgradstr. 26<br/>80796 München-Schwabing</p></div>
          <div><h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Leistungen</h4><ul className="space-y-2 text-sm"><li><Link href="/leistungen" className="hover:text-white transition-colors">Innenarbeiten</Link></li><li><Link href="/leistungen" className="hover:text-white transition-colors">Fassaden</Link></li><li><Link href="/leistungen" className="hover:text-white transition-colors">Tapeten</Link></li><li><Link href="/leistungen" className="hover:text-white transition-colors">Sanieren</Link></li></ul></div>
          <div><h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Kontakt</h4><ul className="space-y-2 text-sm"><li><a href="tel:0893110929" className="hover:text-white transition-colors">089 / 311 09 29</a></li><li><a href="mailto:info@hubka.de" className="hover:text-white transition-colors">info@hubka.de</a></li><li>Mo-Do 9-12:30, 14-18 Uhr</li><li>Fr 9-16 Uhr</li></ul></div>
          <div><h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Rechtliches</h4><ul className="space-y-2 text-sm"><li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li><li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li></ul><div className="mt-6 flex gap-3"><a href="https://de-de.facebook.com/hubkamalereibetriebmuenchen" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">Facebook</a><a href="https://www.instagram.com/malermeisterhubka/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">Instagram</a></div></div>
        </div>
        <div className="pt-8 text-center text-xs text-white/25">&copy; 2026 Malermeister Horst Hubka GmbH. Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  );
}
