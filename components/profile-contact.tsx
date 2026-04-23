import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  ExternalLink,
  Globe,
} from "lucide-react"

const primaryContacts = [
  {
    icon: Mail,
    label: "Email",
    value: "merphy.mademba@example.com",
    href: "mailto:merphy.mademba@example.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+221 76 558 78 77",
    href: "tel:+221765587877",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Dakar, Sénégal",
    href: "https://maps.google.com/?q=Dakar,Sénégal",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "FullStackFlow-dev",
    href: "https://github.com/FullStackFlow-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Merph-dev",
    href: "https://linkedin.com/in/Merph-dev",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    value: "@Merph-dev",
    href: "https://x.com/Merph-dev",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@Merph-dev",
    href: "https://instagram.com/Merph-dev",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    value: "Merph-dev",
    href: "#",
  },
]

type ContactItem = {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
  label: string
  value: string
  href: string
}

function ContactRow({ icon: Icon, label, value, href }: ContactItem) {
  const isExternal = href.startsWith("http")
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-accent"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
        <Icon className="h-4 w-4" aria-hidden={true} />
      </span>
      <span className="flex min-w-0 flex-col overflow-hidden">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="truncate text-sm text-foreground group-hover:text-primary">{value}</span>
      </span>
    </a>
  )
}

export function ProfileContact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Contact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {primaryContacts.map((item) => (
            <li key={item.label}>
              <ContactRow {...item} />
            </li>
          ))}
        </ul>

        <div className="space-y-3 border-t pt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Réseaux</p>
          <ul className="space-y-3">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <ContactRow {...item} />
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Portfolio</p>
          <Button asChild className="w-full" size="lg">
            <a
              href="https://merph-dev.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter mon portfolio (nouvel onglet)"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              Voir mon portfolio
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
