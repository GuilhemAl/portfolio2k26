import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { LanguageProvider } from "@/lib/i18n";
import { CursorFollower } from "@/components/fx/CursorFollower";
import { DepthLayers } from "@/components/fx/DepthLayers";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { ScrollRail } from "@/components/fx/ScrollRail";
import { RevealObserver } from "@/components/fx/RevealObserver";
import { ScrollFXProvider } from "@/components/fx/ScrollFXProvider";
import { Footer } from "@/components/Footer";
import { CVFloat } from "@/components/CVFloat";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hero du portfolio de Guilhem Albus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
        <LanguageProvider>
          <ScrollProgress />
          <DepthLayers />
          <CursorFollower />
          <Navbar />
          <ScrollRail />
          <ScrollFXProvider intensity={10} />
          <RevealObserver />
          <div id="scroll-warp" className="scroll-warp">
            {children}
            <Footer />
          </div>
          <CVFloat />
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
