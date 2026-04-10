import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz" };

export default function Datenschutz() {
  return (
    <>
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="editorial-rule !bg-terracotta mb-6" />
          <h1 className="font-heading text-4xl text-white">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 space-y-8 text-charcoal/70 leading-relaxed">
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften.
          </p>

          <div>
            <h2 className="font-heading text-xl text-charcoal mb-3">Cookies</h2>
            <p>
              Die Internetseiten verwenden teilweise Cookies. Die meisten sind
              Session-Cookies, die nach Ende Ihres Besuchs automatisch gelöscht
              werden.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Server-Log-Files
            </h2>
            <p>
              Der Provider erhebt und speichert automatisch Informationen in
              Server-Log-Files: Browsertyp/-version, Betriebssystem, Referrer
              URL, Hostname, Uhrzeit der Serveranfrage.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Google Analytics
            </h2>
            <p>
              Diese Website nutzt Google Analytics mit IP-Anonymisierung. Sie
              können die Erfassung durch ein Browser-Add-on verhindern:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta underline underline-offset-4"
              >
                Browser-Plugin
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-charcoal mb-3">
              Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung und
              Löschung Ihrer gespeicherten personenbezogenen Daten.
            </p>
          </div>

          <div className="pt-4 border-t border-charcoal/8">
            <p>
              <strong className="text-charcoal">
                Verantwortliche Stelle:
              </strong>
              <br />
              Malermeister Horst Hubka GmbH, Belgradstr. 26, 80796 München
              <br />
              E-Mail: info@hubka.de
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
