"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

interface HeroSectionProps {
  onStart: () => void
}

export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-muted text-muted-foreground text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          Interactive Buyer&apos;s Guide
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 text-balance">
          Find the Keyboard
          <br />
          <span className="text-muted-foreground">That Fits You.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Answer 4 simple questions and discover which DreamPlay keyboard size 
          matches your hands perfectly. Plus, learn why the right fit matters for 
          your musical journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="text-base px-8 py-6 rounded-full"
            onClick={onStart}
          >
            Start Your Journey
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground">Takes about 2 minutes</span>
        </div>
      </div>

      {/* Decorative keyboard illustration hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`${
              [1, 2, 4, 5, 6, 8, 9, 11].includes(i)
                ? "w-3 h-12 bg-foreground rounded-b"
                : "w-5 h-20 bg-foreground/50 rounded-b"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
