"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const team = [
  {
    name: "Horst Hubka",
    role: "Geschäftsführer / Gesellschafter",
    img: "/images/team/horst.jpg",
    bio: "Maler- und Lackierermeister sowie staatlich geprüfter Lacktechniker. Steht Ihnen immer mit fachmännischem Rat zur Seite. Geht nicht gibt es nicht ist seine Devise.",
  },
  {
    name: "Mandy Hubka",
    role: "Geschäftsführerin / Gesellschafterin",
    img: "/images/team/mandy.jpg",
    bio: "Polsterin sowie Steuerfachgehilfin. Für die Erstellung von individuellen Farbkonzepten nach Kundenwünschen ist sie Ihre Ansprechpartnerin.",
  },
  {
    name: "Philipp Hubka",
    role: "Verkaufsleiter / Prokurist",
    img: "/images/team/philipp.jpg",
    bio: "Bürokaufmann sowie Ausbilder im Einzelhandel. Leitet den Farbenfachhandel und ist Ihr Fachberater für aufwendige Komplettgestaltungen.",
  },
  {
    name: "Florian Hubka",
    role: "Verkaufsberater",
    img: "/images/team/florian.jpg",
    bio: "Maler- und Lackierergeselle sowie Einzelhandelskaufmann. Technisch aufwendige wie auch fachlich kompetente Beratung gehören zu seinen Spezialitäten.",
  },
];

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="/images/portfolio/footer-maler.jpg"
          alt="Team Hubka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="editorial-rule mb-6" />
            <span className="text-terracotta text-[11px] font-semibold uppercase tracking-[0.35em] block mb-3">
              Unser Team
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white"
          >
            Familie <span className="italic text-terracotta">Hubka</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <p className="font-heading text-2xl sm:text-3xl text-charcoal/80 leading-[1.4] max-w-3xl">
              Seit über 50 Jahren — ein Familienbetrieb mit Leidenschaft für
              Qualität, Kreativität und ehrliches Handwerk.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-28 sm:pb-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="space-y-28">
            {team.map((t, i) => (
              <ScrollReveal key={t.name}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
                >
                  <div
                    className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl lg:col-span-4 ${
                      i % 2 === 1 ? "lg:order-2 lg:col-start-9" : ""
                    }`}
                  >
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`lg:col-span-7 ${
                      i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-6"
                    }`}
                  >
                    <div className="editorial-rule mb-6" />
                    <h2 className="font-heading text-3xl sm:text-4xl text-charcoal mb-2">
                      {t.name}
                    </h2>
                    <p className="text-terracotta font-medium text-sm uppercase tracking-wider mb-6">
                      {t.role}
                    </p>
                    <p className="text-charcoal/50 text-lg leading-relaxed max-w-lg">
                      {t.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
