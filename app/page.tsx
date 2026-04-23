import { ProfileHeader } from "@/components/profile-header"
import { ProfileBio } from "@/components/profile-bio"
import { ProfileContact } from "@/components/profile-contact"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
        <ProfileHeader />

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          <div className="md:col-span-2">
            <ProfileBio />
          </div>
          <div className="md:col-span-1">
            <ProfileContact />
          </div>
        </div>
      </div>
    </main>
  )
}
