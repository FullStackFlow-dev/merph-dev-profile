import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase } from "lucide-react"

export function ProfileHeader() {
  return (
    <section className="relative">
      {/* Cover banner */}
      <div className="h-40 w-full rounded-2xl bg-gradient-to-r from-primary/15 via-accent to-primary/10 md:h-56" />

      <div className="-mt-16 flex flex-col items-center gap-4 px-4 md:-mt-20 md:flex-row md:items-end md:gap-6 md:px-8">
        {/* Avatar */}
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-background bg-muted shadow-lg md:h-40 md:w-40">
          <Image
            src="/merphy-avatar.jpg"
            alt="Photo de profil de Merphy Mademba"
            fill
            priority
            className="object-cover"
            sizes="160px"
          />
        </div>

        {/* Name & meta */}
        <div className="flex flex-1 flex-col items-center gap-2 text-center md:items-start md:pb-2 md:text-left">
          <div className="flex flex-col items-center gap-1 md:flex-row md:items-baseline md:gap-3">
            <h1 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">Merphy Mademba</h1>
            <span className="font-mono text-sm text-muted-foreground">@Merph-dev</span>
          </div>

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
