import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RevealObserver from "@/components/RevealObserver";
import { home, site } from "@/content/site";
import "./globals.css";

const sans = Outfit({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "Peppy Foods",
    "wholesale food supplier",
    "frozen samosa wholesale",
    "restaurant supply",
    "catering supplies",
    "paneer wholesale",
    "bulk lentils",
    "food packaging supplier",
  ],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: home.heroImage, width: 1600, height: 1067, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#D7261E" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  name: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add(\"js\")" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
