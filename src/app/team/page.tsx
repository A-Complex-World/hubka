import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = { title: "Team" };
const team = [
  { name:"Horst Hubka", role:"Geschäftsführer / Gesellschafter", img:"/images/team/horst.jpg", bio:"Maler- und Lackierermeister sowie staatlich geprüfter Lacktechniker. Steht Ihnen immer mit fachmännischem Rat zur Seite. Geht nicht gibt es nicht ist seine Devise." },
  { name:"Mandy Hubka", role:"Geschäftsführerin / Gesellschafterin", img:"/images/team/mandy.jpg", bio:"Polsterin sowie Steuerfachgehilfin. Für die Erstellung von individuellen Farbkonzepten nach Kundenwünschen ist sie Ihre Ansprechpartnerin." },
  { name:"Philipp Hubka", role:"Verkaufsleiter / Prokurist", img:"/images/team/philipp.jpg", bio:"Bürokaufmann sowie Ausbilder im Einzelhandel. Leitet den Farbenfachhandel und ist Ihr Fachberater für aufwendige Komplettgestaltungen." },
  { name:"Florian Hubka", role:"Verkaufsberater", img:"/images/team/florian.jpg", bio:"Maler- und Lackierergeselle sowie Einzelhandelskaufmann. Technisch aufwendige wie auch fachlich kompetente Beratung gehören zu seinen Spezialitäten." },
];
export default function Team() {
  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6"><span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Unser Team</span><h1 className="font-heading text-4xl sm:text-5xl mb-4">Familie Hubka</h1><p className="text-white/60 text-lg">Seit über 50 Jahren — ein Familienbetrieb mit Leidenschaft für Qualität.</p></div></section>
      <section className="py-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">{team.map((t,i) => (
        <div key={t.name} className={`grid grid-cols-1 md:grid-cols-3 gap-10 items-center ${i%2===1?"":"md:direction-rtl"}`}>
          <div className={`relative aspect-square rounded-xl overflow-hidden shadow-xl ${i%2===1?"md:order-2 md:col-start-3":""}`}><Image src={t.img} alt={t.name} fill className="object-cover"/></div>
          <div className={`md:col-span-2 ${i%2===1?"md:order-1":""}`}><h2 className="font-heading text-2xl text-navy mb-1">{t.name}</h2><p className="text-primary font-medium mb-4">{t.role}</p><p className="text-gray-600 leading-relaxed">{t.bio}</p></div>
        </div>
      ))}</div></section>
    </div>
  );
}
