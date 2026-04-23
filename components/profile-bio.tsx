import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProfileBio() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">À propos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        <p className="text-pretty">
          Bonjour, je suis <span className="font-medium text-foreground">Merphy Mademba</span>, développeur full-stack
          passionné par la création d&apos;interfaces modernes, performantes et accessibles. J&apos;aime transformer des
          idées en produits concrets qui apportent une réelle valeur aux utilisateurs.
        </p>
        <p className="text-pretty">
          Je travaille principalement avec l&apos;écosystème JavaScript/TypeScript — Next.js, React et Node.js — et
          j&apos;accorde une attention particulière à l&apos;expérience utilisateur, au design et à la qualité du code.
          Toujours curieux, j&apos;explore régulièrement de nouvelles technologies pour repousser mes limites.
        </p>
      </CardContent>
    </Card>
  )
}
