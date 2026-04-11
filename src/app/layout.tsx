import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Malermeister Horst Hubka GmbH | München-Schwabing",
    template: "%s | Malermeister Hubka München",
  },
  description:
    "Seit über 50 Jahren Ihr Malerbetrieb in München-Schwabing. Maler-, Tapezier-, Lackier- und Sanierungsarbeiten. Fassaden, exklusive Techniken, Farbenfachhandel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="bg-warm-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
              <CookieConsent />
      </body>
    </html>
  );
}
