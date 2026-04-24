/**
 * app/layout.tsx
 * ---------------------------------------------------------------
 * Layout racine de l'application Next.js (App Router).
 *
 * Rôles :
 *  - Charge les polices Geist (sans) et Geist Mono (mono).
 *  - Définit les métadonnées SEO (titre, description, favicons).
 *  - Active le thème sombre "noir clair" en posant la classe
 *    `dark` sur la balise <html>.
 *  - Injecte Vercel Analytics uniquement en production.
 * ---------------------------------------------------------------
 */

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Chargement des polices Google via next/font (optimisé, zéro CLS)
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Métadonnées pour le SEO et les navigateurs
export const metadata: Metadata = {
  title: "Merphy Mademba — Merph-dev",
  description:
    "Profil de Merphy Mademba (Merph-dev), Data Scientist et ingénieur logiciel basé à Dakar. Biographie, contact et portfolio.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // `dark` force le thème sombre défini dans globals.css
    <html lang="fr" className="dark bg-background">
      <body className="font-sans antialiased">
        {children}
        {/* Analytics Vercel uniquement en prod */}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
