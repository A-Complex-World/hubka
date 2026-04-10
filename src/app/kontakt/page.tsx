import type { Metadata } from "next";
export const metadata: Metadata = { title: "Kontakt" };
export default function Kontakt() {
  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6"><h1 className="font-heading text-4xl sm:text-5xl mb-4">Kontakt</h1></div></section>
      <section className="py-20"><div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm"><span className="text-3xl block mb-4">📞</span><h3 className="font-heading text-lg text-navy mb-2">Telefon</h3><a href="tel:0893110929" className="text-primary font-bold text-lg">089 / 311 09 29</a><p className="text-sm text-gray-400 mt-1">Fax: 089 / 316 60 26</p></div>
          <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm"><span className="text-3xl block mb-4">✉️</span><h3 className="font-heading text-lg text-navy mb-2">E-Mail</h3><a href="mailto:info@hubka.de" className="text-primary font-semibold">info@hubka.de</a></div>
          <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm"><span className="text-3xl block mb-4">🕐</span><h3 className="font-heading text-lg text-navy mb-2">Öffnungszeiten</h3><p className="text-gray-600 text-sm">Mo–Do: 9:00–12:30, 14:00–18:00<br/>Fr: 9:00–16:00</p></div>
        </div>
        <div className="bg-warm rounded-xl p-8 mb-12 text-center"><h3 className="font-heading text-xl text-navy mb-2">Adresse</h3><p className="text-gray-600">Malermeister Horst Hubka GmbH<br/>Belgradstr. 26, 80796 München-Schwabing</p></div>
        <div className="rounded-xl overflow-hidden shadow-lg"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661!2d11.578!3d48.162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sBelgradstr.+26,+80796+München!5e0!3m2!1sde!2sde!4v1" width="100%" height="400" style={{border:0}} allowFullScreen loading="lazy" title="Standort"/></div>
      </div></section>
    </div>
  );
}
