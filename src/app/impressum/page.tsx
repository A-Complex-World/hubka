import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <>
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="editorial-rule !bg-terracotta mb-6" />
          <h1 className="font-heading text-4xl text-white">Impressum</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 space-y-8 text-charcoal/70 leading-relaxed">
          <div>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Angaben gemäß §5 Abs. 1 TMG
            </h2>
            <p>
              Malermeister Horst Hubka GmbH
              <br />
              Belgradstr. 26, 80796 München
              <br />
              Tel.: 089 311 09 29
              <br />
              Fax: 089 316 60 26
              <br />
              E-Mail: info@hubka.de
            </p>
          </div>

          <div>
            <p>
              <strong className="text-charcoal">
                Vertretungsberechtigter Geschäftsführer:
              </strong>
              <br />
              Horst Hubka, Maler- und Lackierermeister und Lacktechniker
            </p>
          </div>

          <div>
            <p>
              <strong className="text-charcoal">Rechtsform:</strong> GmbH
              <br />
              <strong className="text-charcoal">Registereintrag:</strong> HRB
              137664
              <br />
              <strong className="text-charcoal">Registergericht:</strong>{" "}
              Amtsgericht München
              <br />
              <strong className="text-charcoal">USt-ID:</strong> DE216789924
            </p>
          </div>

          <div>
            <p>
              <strong className="text-charcoal">
                Erlaubnispflichtige Tätigkeit:
              </strong>
              <br />
              Eingetragen in der Handwerksrolle für Maler- und
              Lackiererarbeiten seit 28.05.2001
            </p>
          </div>

          <div>
            <p>
              <strong className="text-charcoal">Zuständige Kammer:</strong>
              <br />
              Handwerkskammer für München und Oberbayern, Max-Joseph-Str. 4,
              80333 München
            </p>
          </div>

          <div>
            <p>
              <strong className="text-charcoal">
                Berufsrechtliche Regelungen:
              </strong>
              <br />
              Deutsche Handwerksordnung (HWO)
            </p>
          </div>

          <div>
            <p>
              <strong className="text-charcoal">
                Betriebshaftpflichtversicherung:
              </strong>
              <br />
              Münchner Verein, Pettenkoferstraße 19, 80336 München
            </p>
          </div>

          <p className="text-sm text-charcoal/40 pt-4 border-t border-charcoal/8">
            Inhaltlich verantwortlich: Horst Hubka, Geschäftsführer. Trotz
            sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für
            die Inhalte externer Links.
          </p>
        </div>
      </section>
    </>
  );
}
