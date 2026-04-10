"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Paintbrush, Building2, Wallpaper, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Paintbrush,
    title: "Exklusive Techniken",
    desc: "Lasurtechnik, Spachteltechnik, Versilberung — individuelle Raumgestaltungen auf höchstem Niveau.",
    img: "/images/portfolio/innen.jpg",
  },
  {
    icon: Building2,
    title: "Fassaden",
    desc: "Sanierung denkmalgeschützter Fassaden, Mietshäuser und Eigenheime. Farbberatung mit Digitalvisualisierung.",
    img: "/images/portfolio/fassade.jpg",
  },
  {
    icon: Wallpaper,
    title: "Tapeten",
    desc: "Edle Wandbeläge von Chivasso, Osborne & Little, Jim Thompson, Arte und mehr.",
    img: "/images/portfolio/tapeten.jpg",
  },
  {
    icon: Wrench,
    title: "Sanieren",
    desc: "Komplettsanierungen mit unseren Meister-Partnerbetrieben. Alles in einer Hand.",
    img: "/images/portfolio/sanieren.jpg",
  },
];

const team = [
  { name: "Horst Hubka", role: "Geschäftsführer", img: "/images/team/horst.jpg" },
  { name: "Mandy Hubka", role: "Geschäftsführerin", img: "/images/team/mandy.jpg" },
  { name: "Philipp Hubka", role: "Verkaufsleiter", img: "/images/team/philipp.jpg" },
  { name: "Florian Hubka", role: "Verkaufsberater", img: "/images/team/florian.jpg" },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <Image
          src="/images/portfolio/fassade.jpg"
          alt="Fassadenarbeit München"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-20 sm:pb-28 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <div className="editorial-rule mb-8" />
            <span className="text-terracotta text-[11px] font-semibold uppercase tracking-[0.35em]">
              Seit über 50 Jahren in München-Schwabing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.95] mb-8 max-w-4xl"
          >
            Handwerk,
            <br />
            das Räume
            <br />
            <span className="italic text-terracotta">verwandelt.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/50 text-lg sm:text-xl max-w-xl leading-relaxed mb-12 font-light"
          >
            Professionelle Maler-, Tapezier- und Lackierarbeiten. Von der
            historischen Fassade bis zur exklusiven Innenraumgestaltung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:0893110929"
              className="group bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2"
            >
              Jetzt anrufen
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <Link
              href="/leistungen"
              className="group border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/5"
            >
              Leistungen entdecken
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-10 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── INTRO STATEMENT ─── */}
      <section className="py-28 sm:py-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <div className="editorial-rule mb-6" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal/40">
                  Über uns
                </span>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-[1.15] mb-8">
                  Wir bieten professionelle Ausführung sämtlicher Maler-,
                  Tapezier- und Lackierarbeiten — mit{" "}
                  <span className="italic text-terracotta">
                    über 50 Jahren Erfahrung.
                  </span>
                </h2>
                <p className="text-charcoal/50 text-lg leading-relaxed max-w-2xl">
                  Von der Komplettsanierung historischer Fassaden bis hin zu
                  exklusiven Techniken und Innenraumgestaltungen. Modernste
                  Verfahren, umweltfreundliche Produkte und die Erfahrung eines
                  traditionsreichen Familienbetriebs.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="pb-28 sm:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="mb-16">
            <div className="flex items-end justify-between">
              <div>
                <div className="editorial-rule mb-6" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal/40 block mb-3">
                  Leistungen
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl text-charcoal">
                  Was wir tun
                </h2>
              </div>
              <Link
                href="/leistungen"
                className="hidden sm:flex items-center gap-2 text-sm text-terracotta font-medium hover:text-terracotta-dark transition-colors"
              >
                Alle Leistungen
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <Link href="/leistungen" className="group block">
                  <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />

                    <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <s.icon size={20} className="text-white" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-heading text-2xl text-white mb-2">
                        {s.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                        {s.desc}
                      </p>
                    </div>

                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm text-terracotta font-medium"
            >
              Alle Leistungen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE / CAPABILITIES ─── */}
      <section className="py-6 border-y border-charcoal/8 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center">
              {[
                "Malerarbeiten",
                "Lackierarbeiten",
                "Fassadensanierung",
                "Exklusive Techniken",
                "Tapeten",
                "Innengestaltung",
                "Farbberatung",
                "Sanierung",
              ].map((t) => (
                <span key={`${idx}-${t}`} className="flex items-center">
                  <span className="font-heading text-xl sm:text-2xl text-charcoal/25 px-8">
                    {t}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta/40" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-28 sm:py-36 bg-cream relative noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          <ScrollReveal className="mb-16">
            <div className="max-w-xl">
              <div className="editorial-rule mb-6" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal/40 block mb-3">
                Familie Hubka
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-charcoal mb-4">
                Ein Familienbetrieb mit{" "}
                <span className="italic text-terracotta">Leidenschaft</span>
              </h2>
              <p className="text-charcoal/50 leading-relaxed">
                Seit über 50 Jahren steht die Familie Hubka für erstklassiges
                Handwerk in München-Schwabing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <Link href="/team" className="group block">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-lg">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-heading text-xl text-charcoal group-hover:text-terracotta transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-sm text-charcoal/40 mt-1">{t.role}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FARBENSHOP CTA ─── */}
      <section className="py-28 sm:py-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="relative bg-charcoal rounded-3xl overflow-hidden p-12 sm:p-16 noise-overlay">
              <div className="relative z-10">
                <div className="editorial-rule !bg-terracotta mb-6" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/30 block mb-3">
                  Online-Shop
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4 max-w-lg">
                  Auch online für Sie da
                </h2>
                <p className="text-white/40 text-lg leading-relaxed max-w-md mb-10">
                  Besuchen Sie unseren Farbenfachhandel — Farrow & Ball, Caparol
                  Icons, Little Greene und mehr.
                </p>
                <a
                  href="https://www.farbenshop-hubka.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
                >
                  Zum Farbenshop
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>

              {/* Decorative circle */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/5" />
              <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/5" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
