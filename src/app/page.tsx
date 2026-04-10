import Image from "next/image";
import Link from "next/link";
const services = [
  { icon: "🎨", title: "Exklusive Techniken", desc: "Lasurtechnik, Spachteltechnik, Versilberung — individuelle Raumgestaltungen auf höchstem Niveau.", img: "/images/portfolio/innen.jpg" },
  { icon: "🏛️", title: "Fassaden", desc: "Sanierung denkmalgeschützter Fassaden, Mietshäuser und Eigenheime. Farbberatung mit Digitalvisualisierung.", img: "/images/portfolio/fassade.jpg" },
  { icon: "🪩", title: "Tapeten", desc: "Edle Wandbeläge von Chivasso, Osborne & Little, Jim Thompson, Arte und mehr. Professionell verklebt.", img: "/images/portfolio/tapeten.jpg" },
  { icon: "🔧", title: "Sanieren", desc: "Komplettsanierungen mit unseren Meister-Partnerbetrieben. Alles in einer Hand.", img: "/images/portfolio/sanieren.jpg" },
];
export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{background:"linear-gradient(135deg, #1e3d1a 0%, #2d5a27 40%, #1a1a2e 100%)"}}>
        <div className="absolute inset-0"><Image src="/images/portfolio/fassade.jpg" alt="" fill className="object-cover opacity-15" priority/></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 relative z-10 max-w-2xl">
          <div className="inline-block border border-accent/40 text-accent px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-8">Seit über 50 Jahren in München</div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">Qualität, die<br/><span className="text-accent">man sieht.</span></h1>
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">Professionelle Maler-, Tapezier- und Lackierarbeiten. Von der historischen Fassade bis zur exklusiven Innenraumgestaltung — Ihr Meisterbetrieb in Schwabing.</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:0893110929" className="bg-accent hover:bg-accent-light text-navy px-7 py-3.5 rounded-lg font-bold transition-all shadow-lg">089 / 311 09 29</a>
            <Link href="/leistungen" className="border-2 border-white/20 hover:border-white/40 text-white px-7 py-3.5 rounded-lg font-semibold transition-all hover:bg-white/5">Unsere Leistungen</Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Leistungen</span>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">Von Tradition bis Innovation</h2>
            <p className="text-gray-500">Modernste Verfahren, umweltfreundliche Produkte und über 50 Jahre Erfahrung.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(s => (
              <div key={s.title} className="group relative rounded-xl overflow-hidden h-80">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-2xl block mb-2">{s.icon}</span>
                  <h3 className="font-heading text-xl text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Familienbetrieb</span>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-4">Das Team Hubka</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name:"Horst Hubka", role:"Geschäftsführer", img:"/images/team/horst.jpg" },
              { name:"Mandy Hubka", role:"Geschäftsführerin", img:"/images/team/mandy.jpg" },
              { name:"Philipp Hubka", role:"Verkaufsleiter", img:"/images/team/philipp.jpg" },
              { name:"Florian Hubka", role:"Verkaufsberater", img:"/images/team/florian.jpg" },
            ].map(t => (
              <div key={t.name} className="text-center">
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden shadow-lg"><Image src={t.img} alt={t.name} fill className="object-cover"/></div>
                <h3 className="font-heading text-lg text-navy">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10"><Link href="/team" className="text-primary font-semibold hover:text-primary-dark transition-colors">Mehr über unser Team →</Link></div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl mb-4">Auch online für Sie da</h2>
          <p className="text-white/70 mb-8">Besuchen Sie unseren Farbenfachhandel — Farrow & Ball, Caparol Icons, Little Greene und mehr.</p>
          <a href="https://www.farbenshop-hubka.de/" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent-light text-navy px-8 py-3.5 rounded-lg font-bold transition-all shadow-lg">Zum Farbenshop →</a>
        </div>
      </section>
    </>
  );
}
