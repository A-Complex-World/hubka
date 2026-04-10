"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Paintbrush, SprayCan, Building2, Wallpaper, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Sparkles,
    title: "Exklusive Techniken & Innenarbeiten",
    img: "/images/portfolio/innen.jpg",
    text: "Lasurtechnik, Spachteltechnik, mineralisch oder auf Kunststoffdispersionsbasis — wir erstellen elegante Raumsituationen, die durch Individualität und handwerkliche Präzision glänzen. Erfahrene Farbberatung und individuelle Bemusterung schaffen einen sicheren Umgang mit Ihrer Wohnsituation.",
  },
  {
    icon: Paintbrush,
    title: "Malerarbeiten",
    img: "/images/portfolio/footer-maler.jpg",
    text: "Decken- und Wandbeschichtungen, Spachtelarbeiten sowie Grundrenovierungen. Lösungen, die Ihren Bedürfnissen entsprechen und handwerklich angemessen sind — mit pünktlicher und zuverlässiger Abwicklung.",
  },
  {
    icon: SprayCan,
    title: "Lackierarbeiten",
    img: "/images/portfolio/innen.jpg",
    text: "Professionelle Pinsellackierung in traditioneller Form mit viel Erfahrung. Mit Airless-Höchstdruckverfahren schaffen wir extra glatte, perfekte Oberflächen — erwärmtes Material, keine Verdünnung, ca. 3 Liter Lack pro Minute bei wenig Overspray.",
  },
  {
    icon: Building2,
    title: "Fassaden",
    img: "/images/portfolio/fassade.jpg",
    text: "Historisches erhalten — Modernes gestalten. Sanierung denkmalgeschützter Fassaden, Mietshäuser und Eigenheime. Vom Gerüst über Maurerarbeiten bis zu Abwasch- und Abbeizarbeiten. Farbberatung mit Farbfächern oder digitaler Visualisierung.",
  },
  {
    icon: Wallpaper,
    title: "Tapeten",
    img: "/images/portfolio/tapeten.jpg",
    text: "Edle Wandbeläge mit Sorgfalt verarbeitet. Regelmäßige Schulung unserer Mitarbeiter. Diverse Muster-Kollektionen von Chivasso, Osborne & Little, Jim Thompson, Elitis, Arte, Omexco und mehr.",
  },
  {
    icon: Wrench,
    title: "Sanieren",
    img: "/images/portfolio/sanieren.jpg",
    text: "Nicht alles aus einer Hand, sondern alles in einer Hand. Wir koordinieren unsere von Meistern geführten Partnerbetriebe — von Verputzarbeiten bis zum Schrankeinbau, detaillierte Gesamtlösungen.",
  },
];

export default function Leistungen() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/portfolio/innen.jpg"
          alt="Innenraumgestaltung"
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
              Leistungen
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white"
          >
            Unser Leistungs
            <span className="italic text-terracotta">spektrum</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <p className="font-heading text-2xl sm:text-3xl text-charcoal/80 leading-[1.4] max-w-3xl">
              Professionelle Ausführung sämtlicher Maler-, Tapezier- und
              Lackierarbeiten mit modernsten Verfahren und umweltfreundlichen
              Produkten.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-28 sm:pb-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="space-y-24">
            {services.map((s, i) => (
              <ScrollReveal key={s.title}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-ink/10" />
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-6">
                      <s.icon size={24} className="text-terracotta" />
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-charcoal mb-5">
                      {s.title}
                    </h2>
                    <p className="text-charcoal/50 leading-relaxed text-lg">
                      {s.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Innovationen */}
      <section className="py-20 bg-cream relative noise-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <ScrollReveal>
            <div className="editorial-rule mx-auto mb-6" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal/40 block mb-3">
              Innovation
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-charcoal mb-6">
              Mobile Innovationen
            </h3>
            <p className="text-charcoal/50 leading-relaxed text-lg max-w-2xl mx-auto">
              Rationelle und innovative Arbeitsweise: Voll ausgestattete
              Werkstattfahrzeuge in der dritten Entwicklungsstufe und
              Spezialanhänger, die einzelne Teilbereiche der Bauabläufe begleiten
              und für sehr hohe Effizienz sorgen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <ScrollReveal>
            <h3 className="font-heading text-3xl text-charcoal mb-6">
              Interesse geweckt?
            </h3>
            <p className="text-charcoal/50 mb-8">
              Wir beraten Sie gerne — kostenlos und unverbindlich.
            </p>
            <a
              href="tel:0893110929"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all"
            >
              089 / 311 09 29
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
