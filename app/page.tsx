"use client"

import { useState } from "react"
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
      <HeroSection onStart={startGuide} />
      
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
