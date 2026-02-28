"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Moon, Sun } from "lucide-react"
import { HeroSection } from "@/components/buyers-guide/hero-section"
import { QuestionOne } from "@/components/buyers-guide/question-one"
import { InfoSectionOne } from "@/components/buyers-guide/info-section-one"
import { QuestionTwo } from "@/components/buyers-guide/question-two"
import { InfoSectionTwo } from "@/components/buyers-guide/info-section-two"
import { QuestionThree } from "@/components/buyers-guide/question-three"
import { InfoSectionThree } from "@/components/buyers-guide/info-section-three"
import { QuestionFour } from "@/components/buyers-guide/question-four"
import { RecommendationSection } from "@/components/buyers-guide/recommendation-section"
import { Footer } from "@/components/buyers-guide/footer"
import { Button } from "@/components/ui/button"

export type UserProfile = {
  buyingFor: "myself" | "someone-else" | null
  demographic: "adult-female" | "adult-male" | "child" | null
  handSize: "small" | "average" | "large" | null
  goal: "beginner" | "intermediate" | "professional" | "casual" | null
}

export default function BuyersGuidePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [profile, setProfile] = useState<UserProfile>({
    buyingFor: null,
    demographic: null,
    handSize: null,
    goal: null,
  })
  const { theme, setTheme } = useTheme()

  const updateProfile = (key: keyof UserProfile, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }, 100)
  }

  const startGuide = () => {
    setCurrentStep(1)
    setTimeout(() => {
      const element = document.getElementById("question-1")
      element?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Dark mode toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm border-border shadow-lg"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <HeroSection onStart={startGuide} />

      {/* Piano product showcase */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Piano Front 2.jpg"
              alt="DreamPlay Piano with bench"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-medium tracking-wide uppercase opacity-80">DreamPlay Pianos</p>
              <p className="text-lg sm:text-xl font-semibold">Designed to fit your hands perfectly</p>
            </div>
          </div>
        </div>
      </section>

      {currentStep >= 1 && (
        <QuestionOne
          selected={profile.buyingFor}
          onSelect={(value) => {
            updateProfile("buyingFor", value)
            nextStep()
          }}
        />
      )}

      {currentStep >= 2 && (
        <>
          <InfoSectionOne buyingFor={profile.buyingFor} />
          <QuestionTwo
            selected={profile.demographic}
            buyingFor={profile.buyingFor}
            onSelect={(value) => {
              updateProfile("demographic", value)
              nextStep()
            }}
          />
        </>
      )}

      {currentStep >= 3 && (
        <>
          <InfoSectionTwo demographic={profile.demographic} />
          <QuestionThree
            selected={profile.handSize}
            demographic={profile.demographic}
            onSelect={(value) => {
              updateProfile("handSize", value)
              nextStep()
            }}
          />
        </>
      )}

      {currentStep >= 4 && (
        <>
          <InfoSectionThree handSize={profile.handSize} demographic={profile.demographic} />
          <QuestionFour
            selected={profile.goal}
            onSelect={(value) => {
              updateProfile("goal", value)
              nextStep()
            }}
          />
        </>
      )}

      {currentStep >= 5 && <RecommendationSection profile={profile} />}

      <Footer />
    </main>
  )
}
