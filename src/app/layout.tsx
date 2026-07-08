import type { Metadata } from "next";
import { Space_Grotesk, Inter, Syne, Fraunces, Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--f-display", weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin", "latin-ext"], variable: "--f-body", weight: ["400", "500", "600", "700"] });
const syne = Syne({ subsets: ["latin", "latin-ext"], variable: "--f-syne", weight: ["600", "700", "800"], preload: false });
const fraunces = Fraunces({ subsets: ["latin", "latin-ext"], variable: "--f-fraunces", weight: ["400", "500", "600", "700"], preload: false });
const sora = Sora({ subsets: ["latin", "latin-ext"], variable: "--f-sora", weight: ["500", "600", "700", "800"], preload: false });
const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--f-manrope", weight: ["400", "500", "600", "700", "800"], preload: false });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--f-mono", weight: ["400", "500", "600"], preload: false });

export const metadata: Metadata = {
  title: "MC Sistem — Anahtar Teslim Elektromekanik Çözümler",
  description:
    "MC Sistem; akıllı ulaşım, raylı sistemler, metro, havaalanı ve yeraltı tesislerinde anahtar teslim elektromekanik sistem entegrasyonu sunan Türkiye merkezli müteahhit firmadır.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${syne.variable} ${fraunces.variable} ${sora.variable} ${manrope.variable} ${mono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
