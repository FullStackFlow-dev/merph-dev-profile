/**
 * app/page.tsx
 * ---------------------------------------------------------------
 * Page d'accueil : profil de Merphy Mademba (Merph-dev).
 *
 * Structure de la page :
 *   1. <ProfileHeader />  — bannière, avatar, nom, badges.
 *   2. Grille 2/1 :
 *        - <ProfileBio />     (colonne large, 2/3)
 *        - <ProfileContact /> (colonne étroite, 1/3)
 *   3. <ContactForm /> — formulaire d'envoi de message.
 *
 * La page utilise le thème sombre "noir clair" activé via la
 * classe `dark` posée sur <html> dans app/layout.tsx.
 * ---------------------------------------------------------------
 */

import { ProfileHeader } from "@/components/profile-header"
import { ProfileBio } from "@/components/profile-bio"
import { ProfileContact } from "@/components/profile-contact"
import { ContactForm } from "@/components/contact-form"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      {/* Conteneur centré avec largeur max et marges internes responsives */}
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
        {/* 1. En-tête du profil */}
        <ProfileHeader />

        {/* 2. Grille biographie (2/3) + contact (1/3) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          <div className="md:col-span-2">
            <ProfileBio />
          </div>
          <div className="md:col-span-1">
            <ProfileContact />
          </div>
        </div>

        {/* 3. Formulaire de contact (ancré à #contact) */}
        <section id="contact" className="mt-10 md:mt-12">
          <ContactForm />
        </section>
      </div>
    </main>
  )
}
