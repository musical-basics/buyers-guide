"use client"

import { cn } from "@/lib/utils"

interface QuestionTwoProps {
  selected: string | null
  buyingFor: "myself" | "someone-else" | null
  onSelect: (value: "adult-female" | "adult-male" | "child") => void
}

export function QuestionTwo({ selected, buyingFor, onSelect }: QuestionTwoProps) {
  const isGift = buyingFor === "someone-else"

  return (
    <section id="question-2" className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background text-sm font-semibold">
            2
          </span>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Question Two
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
          {isGift ? "Who will be playing?" : "Tell us about yourself"}
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          {isGift
            ? "This helps us tailor our recommendations to the recipient."
            : "Different demographics have different typical hand sizes. This helps us guide you better."
          }
        </p>

        <div className="grid gap-4">
          <button
            onClick={() => onSelect("adult-female")}
            className={cn(
              "group relative p-6 rounded-2xl border-2 text-left transition-all duration-200",
              "hover:border-foreground hover:shadow-lg",
              selected === "adult-female"
                ? "border-foreground bg-foreground/5"
                : "border-border bg-background"
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {isGift ? "Adult Woman" : "I'm an Adult Woman"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Age 18 and above
                </p>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                selected === "adult-female" ? "border-foreground bg-foreground" : "border-muted-foreground"
              )}>
                {selected === "adult-female" && (
                  <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelect("adult-male")}
            className={cn(
              "group relative p-6 rounded-2xl border-2 text-left transition-all duration-200",
              "hover:border-foreground hover:shadow-lg",
              selected === "adult-male"
                ? "border-foreground bg-foreground/5"
                : "border-border bg-background"
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {isGift ? "Adult Man" : "I'm an Adult Man"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Age 18 and above
                </p>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                selected === "adult-male" ? "border-foreground bg-foreground" : "border-muted-foreground"
              )}>
                {selected === "adult-male" && (
                  <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelect("child")}
            className={cn(
              "group relative p-6 rounded-2xl border-2 text-left transition-all duration-200",
              "hover:border-foreground hover:shadow-lg",
              selected === "child"
                ? "border-foreground bg-foreground/5"
                : "border-border bg-background"
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {isGift ? "Child or Teen" : "I'm a Young Pianist"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Ages 7-17 years old
                </p>
              </div>
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                selected === "child" ? "border-foreground bg-foreground" : "border-muted-foreground"
              )}>
                {selected === "child" && (
                  <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
