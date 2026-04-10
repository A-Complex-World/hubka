import type { Metadata } from "next";
export const metadata: Metadata = { title: "Datenschutz" };
export default function Datenschutz() {
  return (
    <div className="pt-20">
      <section className="bg-navy text-white py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6"><h1 className="font-heading text-3xl">Datenschutzerklärung</h1></div></section>
      <section className="py-16"><div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-gray-700 text-sm leading-relaxed">
        <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.</p>
        <h2 className="font-heading text-xl text-navy">Cookies</h2>
        <p>Die Internetseiten verwenden teilweise Cookies. Die meisten sind Session-Cookies, die nach Ende Ihres Besuchs automatisch gelöscht werden.</p>
        <h2 className="font-heading text-xl text-navy">Server-Log-Files</h2>
        <p>Der Provider erhebt und speichert automatisch Informationen in Server-Log-Files: Browsertyp/-version, Betriebssystem, Referrer URL, Hostname, Uhrzeit der Serveranfrage.</p>
        <h2 className="font-heading text-xl text-navy">Google Analytics</h2>
        <p>Diese Website nutzt Google Analytics mit IP-Anonymisierung. Sie können die Erfassung durch ein Browser-Add-on verhindern: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary underline">Browser-Plugin</a>.</p>
        <h2 className="font-heading text-xl text-navy">Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten personenbezogenen Daten.</p>
        <p><strong>Verantwortliche Stelle:</strong><br/>Malermeister Horst Hubka GmbH, Belgradstr. 26, 80796 München<br/>E-Mail: info@hubka.de</p>
      </div></section>
    </div>
  );
}
