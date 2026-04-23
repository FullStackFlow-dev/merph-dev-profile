import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function ProfileBio() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">À propos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
        <p className="text-pretty">
          Bonjour, je suis <span className="font-medium text-foreground">Merphy Mademba</span>, alias{" "}
          <span className="font-mono text-foreground">Merph-dev</span>. Je suis{" "}
          <span className="font-medium text-foreground">Data Scientist</span>,{" "}
          <span className="font-medium text-foreground">ingénieur logiciel généraliste</span> et{" "}
          <span className="font-medium text-foreground">ingénieur en IA et DevOps</span>, basé à Dakar, au Sénégal.
          J&apos;aime concevoir des systèmes intelligents, fiables et utiles — de la donnée brute jusqu&apos;à la mise
          en production.
        </p>
        <p className="text-pretty">
          Curieux par nature, je me situe à l&apos;intersection du code, de la donnée et de l&apos;infrastructure.
          J&apos;accorde une attention particulière à la qualité, à l&apos;automatisation et à l&apos;impact concret de
          mes projets, tout en continuant à explorer de nouvelles technologies pour repousser mes limites.
        </p>

        <div className="rounded-lg border bg-secondary/40 p-4">
          <div className="mb-3 flex items-center gap-2 text-foreground">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-medium">Parcours académique</h3>
          </div>
          <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
            Université ENSUP Afrique — Dakar
          </p>
          <ul className="space-y-3">
            <li className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-3">
              <span className="shrink-0 font-mono text-xs text-muted-foreground">En cours</span>
              <span className="text-sm text-foreground">
                Master en Entrepreneuriat et Création d&apos;Entreprises
              </span>
            </li>
            <li className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-3">
              <span className="shrink-0 font-mono text-xs text-muted-foreground">Obtenue</span>
              <span className="text-sm text-foreground">
                Licence en Administration, Gestion des Collectivités
              </span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
