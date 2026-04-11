"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GoogleMapsEmbed from "@/components/GoogleMapsEmbed";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "089 / 311 09 29",
    sub: "Fax: 089 / 316 60 26",
    href: "tel:0893110929",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@hubka.de",
    href: "mailto:info@hubka.de",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    content: "Mo–Do: 9:00–12:30, 14:00–18:00",
    sub: "Fr: 9:00–16:00",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Belgradstr. 26",
    sub: "80796 München-Schwabing",
  },
];

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="editorial-rule !bg-terracotta mb-6" />
            <span className="text-terracotta text-[11px] font-semibold uppercase tracking-[0.35em] block mb-3">
              Kontakt
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
          >
            Sprechen wir <span className="italic text-terracotta">darüber.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/40 text-lg max-w-xl"
          >
            Wir beraten Sie gerne — kostenlos und unverbindlich. Besuchen Sie uns
            in München-Schwabing oder rufen Sie uns an.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-8 sm:p-10 h-full">
                  <div className="w-12 h-12 rounded-xl bg-warm-white flex items-center justify-center mb-6">
                    <c.icon size={22} className="text-terracotta" />
                  </div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/40 mb-3">
                    {c.title}
                  </h3>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-heading text-2xl text-charcoal hover:text-terracotta transition-colors block"
                    >
                      {c.content}
                    </a>
                  ) : (
                    <span className="font-heading text-xl text-charcoal block">
                      {c.content}
                    </span>
                  )}
                  {c.sub && (
                    <span className="text-sm text-charcoal/40 mt-2 block">
                      {c.sub}
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <GoogleMapsEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661!2d11.578!3d48.162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sBelgradstr.+26,+80796+M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1" style={{ minHeight: 450 }} title="Standort Malermeister Hubka" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
