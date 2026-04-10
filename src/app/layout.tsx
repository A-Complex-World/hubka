import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], variable: "--font-dm-serif", weight: "400" });
export const metadata: Metadata = {
  title: { default: "Malermeister Horst Hubka GmbH | München-Schwabing", template: "%s | Malermeister Hubka München" },
  description: "Seit 50 Jahren Ihr Malerbetrieb in München-Schwabing. Maler-, Tapezier-, Lackier- und Sanierungsarbeiten. Fassaden, exklusive Techniken, Farbenfachhandel.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-white"><Navbar /><main>{children}</main><Footer /></body>
    </html>
  );
}
