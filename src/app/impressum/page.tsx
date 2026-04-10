import type { Metadata } from "next";
export const metadata: Metadata = { title: "Impressum" };
export default function Impressum() {
  return (
    <div className="pt-20">
      <section className="bg-navy text-white py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6"><h1 className="font-heading text-3xl">Impressum</h1></div></section>
      <section className="py-16"><div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-gray-700 text-sm">
        <h2 className="font-heading text-xl text-navy">Angaben gemäß §5 Abs. 1 TMG</h2>
        <p>Malermeister Horst Hubka GmbH<br/>Belgradstr. 26, 80796 München<br/>Tel.: 089 311 09 29<br/>Fax: 089 316 60 26<br/>E-Mail: info@hubka.de</p>
        <p><strong>Vertretungsberechtigter Geschäftsführer:</strong><br/>Horst Hubka, Maler- und Lackierermeister und Lacktechniker</p>
        <p><strong>Rechtsform:</strong> GmbH<br/><strong>Registereintrag:</strong> HRB 137664<br/><strong>Registergericht:</strong> Amtsgericht München<br/><strong>USt-ID:</strong> DE216789924</p>
        <p><strong>Erlaubnispflichtige Tätigkeit:</strong> Eingetragen in der Handwerksrolle für Maler- und Lackiererarbeiten seit 28.05.2001</p>
        <p><strong>Zuständige Kammer:</strong> Handwerkskammer für München und Oberbayern, Max-Joseph-Str. 4, 80333 München</p>
        <p><strong>Berufsrechtliche Regelungen:</strong> Deutsche Handwerksordnung (HWO)</p>
        <p><strong>Betriebshaftpflichtversicherung:</strong> Münchner Verein, Pettenkoferstraße 19, 80336 München</p>
        <p className="text-xs text-gray-400">Inhaltlich verantwortlich: Horst Hubka, Geschäftsführer. Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.</p>
      </div></section>
    </div>
  );
}
