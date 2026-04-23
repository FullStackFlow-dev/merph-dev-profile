import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, ExternalLink, Globe } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "merphy.mademba@example.com",
    href: "mailto:merphy.mademba@example.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+241 00 00 00 00",
    href: "tel:+24100000000",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Merph-dev",
    href: "https://github.com/Merph-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/merphy-mademba",
    href: "https://linkedin.com/in/merphy-mademba",
  },
]

export function ProfileContact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Contact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <ul className="space-y-3">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-accent"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="flex flex-col overflow-hidden">
                  <span className="text-xs font-medium text-muted-foreground">{label}</span>
                  <span className="truncate text-sm text-foreground group-hover:text-primary">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

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
