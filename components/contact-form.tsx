"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle2, AlertCircle, Send } from "lucide-react"

type Status = "idle" | "loading" | "success" | "error"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdadyejk"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        const data = await response.json().catch(() => null)
        const message =
          data?.errors?.map((e: { message: string }) => e.message).join(", ") ||
          "Une erreur est survenue. Veuillez réessayer."
        setStatus("error")
        setErrorMessage(message)
      }
    } catch {
      setStatus("error")
      setErrorMessage("Impossible d'envoyer le message. Vérifiez votre connexion.")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Envoyez-moi un message</CardTitle>
        <CardDescription>
          Une question, un projet ou une collaboration ? Remplissez le formulaire, je vous réponds rapidement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                required
                autoComplete="name"
                disabled={status === "loading"}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                required
                autoComplete="email"
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="subject">Sujet</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Objet de votre message"
              required
              disabled={status === "loading"}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décrivez votre projet, votre demande ou votre question..."
              required
              rows={6}
              disabled={status === "loading"}
            />
          </div>

          {/* Honeypot anti-spam */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div aria-live="polite" className="min-h-6 text-sm">
              {status === "success" && (
                <span className="inline-flex items-center gap-2 text-primary">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Message envoyé. Merci, je reviens vers vous rapidement.
                </span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-4 w-4" aria-hidden="true" />
                  {errorMessage}
                </span>
              )}
            </div>

            <Button type="submit" size="lg" disabled={status === "loading"} className="sm:w-auto">
              {status === "loading" ? (
                <>
                  <Spinner className="h-4 w-4" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Envoyer le message
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
