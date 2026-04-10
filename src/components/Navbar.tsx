"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/team", label: "Team" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
          <Link href="/" className="group">
            <span
              className={`font-heading text-2xl font-semibold tracking-wide transition-colors duration-500 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              HUBKA
            </span>
            <span
              className={`block text-[10px] font-body uppercase tracking-[0.3em] transition-colors duration-500 ${
                scrolled ? "text-charcoal/50" : "text-white/60"
              }`}
            >
              Malermeister · München
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-body font-medium uppercase tracking-wider transition-colors duration-300 hover:text-terracotta ${
                  scrolled ? "text-charcoal/70" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://www.farbenshop-hubka.de/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[13px] font-body font-medium uppercase tracking-wider transition-colors duration-300 ${
                scrolled
                  ? "text-terracotta hover:text-terracotta-dark"
                  : "text-terracotta-light hover:text-terracotta"
              }`}
            >
              Farbenshop
            </a>
            <a
              href="tel:0893110929"
              className="flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300"
            >
              <Phone size={14} />
              089 / 311 09 29
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Menü"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <div className="space-y-8 text-center">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-heading text-4xl text-white/90 hover:text-terracotta transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="tel:0893110929"
                  className="inline-flex items-center gap-3 mt-8 bg-terracotta text-white px-8 py-4 rounded-full text-lg font-semibold"
                >
                  <Phone size={20} />
                  089 / 311 09 29
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
