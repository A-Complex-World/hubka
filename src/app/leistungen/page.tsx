import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = { title: "Leistungen" };
const svcs = [
  { title:"Exklusive Techniken & Innenarbeiten", img:"/images/portfolio/innen.jpg", text:"Lasurtechnik, Spachteltechnik, mineralisch oder auf Kunststoffdispersionsbasis — wir erstellen elegante Raumsituationen, die durch Individualität und handwerkliche Präzision glänzen. Erfahrene Farbberatung und individuelle Bemusterung schaffen einen sicheren Umgang mit Ihrer Wohnsituation." },
  { title:"Malerarbeiten", img:"/images/portfolio/footer-maler.jpg", text:"Decken- und Wandbeschichtungen, Spachtelarbeiten sowie Grundrenovierungen. Lösungen, die Ihren Bedürfnissen entsprechen und handwerklich angemessen sind — mit pünktlicher und zuverlässiger Abwicklung." },
  { title:"Lackierarbeiten", img:"/images/portfolio/innen.jpg", text:"Professionelle Pinsellackierung in traditioneller Form mit viel Erfahrung. Mit Airless-Höchstdruckverfahren schaffen wir extra glatte, perfekte Oberflächen — erwärmtes Material, keine Verdünnung, ca. 3 Liter Lack pro Minute bei wenig Overspray." },
  { title:"Fassaden", img:"/images/portfolio/fassade.jpg", text:"Historisches erhalten — Modernes gestalten. Sanierung denkmalgeschützter Fassaden, Mietshäuser und Eigenheime. Vom Gerüst über Maurerarbeiten bis zu Abwasch- und Abbeizarbeiten. Farbberatung mit Farbfächern oder digitaler Visualisierung." },
  { title:"Tapeten", img:"/images/portfolio/tapeten.jpg", text:"Edle Wandbeläge mit Sorgfalt verarbeitet. Regelmäßige Schulung unserer Mitarbeiter. Diverse Muster-Kollektionen von Chivasso, Osborne & Little, Jim Thompson, Elitis, Arte, Omexco und mehr." },
  { title:"Sanieren", img:"/images/portfolio/sanieren.jpg", text:"Nicht alles aus einer Hand, sondern alles in einer Hand. Wir koordinieren unsere von Meistern geführten Partnerbetriebe — von Verputzarbeiten bis zum Schrankeinbau, detaillierte Gesamtlösungen." },
];
export default function Leistungen() {
  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6"><span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Leistungen</span><h1 className="font-heading text-4xl sm:text-5xl mb-4">Unser Leistungsspektrum</h1><p className="text-white/60 text-lg max-w-2xl">Professionelle Ausführung sämtlicher Maler-, Tapezier- und Lackierarbeiten mit modernsten Verfahren und umweltfreundlichen Produkten.</p></div></section>
      <section className="py-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {svcs.map((s,i) => (
          <div key={s.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i%2===1?"":"md:direction-rtl"}`}>
            <div className={`relative h-72 rounded-xl overflow-hidden shadow-xl ${i%2===1?"md:order-2":""}`}><Image src={s.img} alt={s.title} fill className="object-cover"/></div>
            <div className={i%2===1?"md:order-1":""}><h2 className="font-heading text-2xl text-navy mb-4">{s.title}</h2><p className="text-gray-600 leading-relaxed">{s.text}</p></div>
          </div>
        ))}
      </div></section>
      <section className="py-16 bg-warm"><div className="max-w-4xl mx-auto px-4 sm:px-6 text-center"><h3 className="font-heading text-2xl text-navy mb-4">Mobile Innovationen</h3><p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">Rationelle und innovative Arbeitsweise: Voll ausgestattete Werkstattfahrzeuge in der dritten Entwicklungsstufe und Spezialanhänger, die einzelne Teilbereiche der Bauabläufe begleiten und für sehr hohe Effizienz sorgen.</p></div></section>
    </div>
  );
}
