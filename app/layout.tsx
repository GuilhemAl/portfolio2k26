import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { LanguageProvider } from "@/lib/i18n";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
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
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} pb-24 antialiased sm:pb-20`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <a
            href="/CV%20Guilhem%20ALBUS%20-%20Chef%20de%20Projet%20IT.pdf"
            download="Guilhem-Albus-CV.pdf"
            aria-label="Telecharger le CV"
            className="fixed bottom-4 right-4 z-40 rounded-full bg-[var(--text)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[var(--shadow)] transition hover:bg-[#111a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            CV
          </a>
        </LanguageProvider>
      </body>
    </html>
  );
}
