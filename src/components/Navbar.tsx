"use client";
import Link from "next/link";
import { useState } from "react";
const links = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/team", label: "Team" },
  { href: "/kontakt", label: "Kontakt" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col"><span className="font-heading text-primary text-xl">Hubka</span><span className="text-xs text-gray-400 tracking-widest uppercase">Malermeister seit 50 Jahren</span></Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => <Link key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-primary font-medium transition-colors">{l.label}</Link>)}
          <a href="https://www.farbenshop-hubka.de/" target="_blank" rel="noopener noreferrer" className="text-sm text-accent font-semibold hover:text-primary transition-colors">Farbenshop →</a>
          <a href="tel:0893110929" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all">089 / 311 09 29</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menü">
          <span className={`w-6 h-0.5 bg-navy rounded transition-transform ${open?"rotate-45 translate-y-2":""}`}/><span className={`w-6 h-0.5 bg-navy rounded transition-opacity ${open?"opacity-0":""}`}/><span className={`w-6 h-0.5 bg-navy rounded transition-transform ${open?"-rotate-45 -translate-y-2":""}`}/>
        </button>
      </div>
      {open && <div className="md:hidden bg-white px-4 pb-4 border-t border-gray-100">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block py-3 text-gray-700 border-b border-gray-50 font-medium">{l.label}</Link>)}<a href="tel:0893110929" className="block mt-3 bg-primary text-white text-center py-3 rounded-lg font-semibold">089 / 311 09 29</a></div>}
    </nav>
  );
}
