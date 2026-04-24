/**
 * profile-header.tsx
 * ---------------------------------------------------------------
 * En-tête du profil : bannière décorative, avatar dans un cadre
 * circulaire "premium" (anneau conique bleu/argent), nom, pseudo,
 * rôle professionnel, localisation et badges technologiques.
 *
 * Pour modifier :
 *  - Le titre / pseudo  : balise <h1> et <span> juste en dessous.
 *  - Les spécialités    : texte à côté de l'icône <Briefcase />.
 *  - La localisation    : texte à côté de l'icône <MapPin />.
 *  - Les badges tech    : bloc <div> "flex flex-wrap" plus bas.
 *  - Le cadre de l'avatar : classe "avatar-frame" définie dans globals.css.
 * ---------------------------------------------------------------
 */

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase } from "lucide-react"

export function ProfileHeader() {
  return (
    <section className="relative">
      {/* Bannière décorative : dégradé sombre + halos bleus (voir .header-banner) */}
      <div className="header-banner h-44 w-full rounded-2xl border border-border/60 shadow-lg md:h-60" />

      <div className="-mt-16 flex flex-col items-center gap-4 px-4 md:-mt-20 md:flex-row md:items-end md:gap-6 md:px-8">
        {/*
         * Cadre décoratif autour de l'avatar
         * - .avatar-frame : dégradé conique bleu/argent (globals.css)
         * - p-[3px]      : épaisseur de l'anneau
         * - ring/shadow  : donne un effet "flottant" élégant
         */}
        <div className="avatar-frame relative h-36 w-36 shrink-0 rounded-full p-[3px] shadow-2xl md:h-44 md:w-44">
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background bg-muted">
            <Image
              src="/merphy-avatar.jpg"
              alt="Photo de profil de Merphy Mademba"
              fill
              priority
              className="object-cover"
              sizes="176px"
            />
          </div>
        </div>

        {/* Bloc identité : nom, pseudo, rôle, localisation, badges */}
        <div className="flex flex-1 flex-col items-center gap-2 text-center md:items-start md:pb-2 md:text-left">
          <div className="flex flex-col items-center gap-1 md:flex-row md:items-baseline md:gap-3">
            <h1 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              Merphy Mademba
            </h1>
            <span className="font-mono text-sm text-muted-foreground">@Merph-dev</span>
          </div>

          {/* Rôle + localisation (icônes Lucide) */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground md:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              Data Scientist · Ingénieur logiciel · IA & DevOps
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Dakar, Sénégal
            </span>
          </div>

          {/* Badges technologiques (modifier/ajouter/retirer librement) */}
          <div className="mt-1 flex flex-wrap justify-center gap-2 md:justify-start">
            <Badge variant="secondary">Data Science</Badge>
            <Badge variant="secondary">IA</Badge>
            <Badge variant="secondary">DevOps</Badge>
            <Badge variant="secondary">Full-Stack</Badge>
            <Badge variant="secondary">TensorFlow</Badge>
            <Badge variant="secondary">Keras</Badge>
            <Badge variant="secondary">PyTorch</Badge>
            <Badge variant="secondary">ML</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
