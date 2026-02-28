"use client"

import { RefreshCw } from "lucide-react"

interface InfoSectionTwoProps {
  demographic: "adult-female" | "adult-male" | "child" | null
}

export function InfoSectionTwo({ demographic }: InfoSectionTwoProps) {
  if (demographic === "adult-female") {
    return (
      <section className="py-16 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                The Hidden Barrier for Women Pianists
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Standard keyboards were designed over 150 years ago based on a narrow 
                range of hand sizes—primarily those of adult men. Today, this one-size-fits-all 
                approach holds back the majority of pianists.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Studies note that <strong className="text-foreground">internationally acclaimed women 
                pianists tend to have larger-than-average hands</strong>, which aligns with a repertoire 
                that often expects very wide reaches. This suggests that hand size, not talent, 
                may be filtering who succeeds.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-foreground mb-2">87%</div>
                <p className="text-muted-foreground">of women have hands smaller than what standard keyboards expect</p>
              </div>
              
              <div className="relative h-8 bg-muted rounded-full overflow-hidden mb-4">
                <div className="absolute inset-y-0 left-0 w-[87%] bg-accent rounded-full flex items-center justify-end pr-3">
                  <span className="text-xs font-medium text-accent-foreground">Too small</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Hand span under 8.5&quot;</span>
                <span className="text-foreground font-medium">Comfortable</span>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">8.5 inches</strong> is the minimum hand span needed 
                  to play a standard keyboard comfortably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (demographic === "adult-male") {
    return (
      <section className="py-16 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                Hand Size Varies More Than You Think
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While men typically have larger hands than women, there&apos;s enormous 
                variation—from below 7 inches to above 10 inches. Many adult men have 
                hand spans around 8 inches, which benefits significantly from the DS6.0.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The assumption that &quot;standard&quot; means &quot;fits everyone&quot; has held back 
                countless pianists. <strong className="text-foreground">Finding the right fit isn&apos;t 
                about weakness—it&apos;s about optimization.</strong>
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-foreground mb-2">24%</div>
                <p className="text-muted-foreground">of men have hands smaller than what standard keyboards expect</p>
              </div>
              
              <div className="relative h-8 bg-muted rounded-full overflow-hidden mb-4">
                <div className="absolute inset-y-0 left-0 w-[24%] bg-accent rounded-full flex items-center justify-end pr-3">
                  <span className="text-xs font-medium text-accent-foreground">Too small</span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Hand span under 8.5&quot;</span>
                <span className="text-foreground font-medium">Comfortable</span>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Hand span often needs to be at least <strong className="text-foreground">25-30% larger</strong> than 
                  the octave to comfortably reach 8ths, 9ths, and 10ths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (demographic === "child") {
    return (
      <section className="py-16 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                Growing Hands Need Growing Keyboards
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Children aged 7-14 typically have hand spans well under 7.6 inches. 
                Forcing small hands onto standard-sized keys can create bad habits, 
                tension, and frustration that lasts a lifetime.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The DS5.5 is specifically designed for 
                developing pianists</strong>, allowing them to build proper technique without 
                strain—and they can upgrade as they grow.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                  <RefreshCw className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Upgrade Path</h4>
                  <p className="text-muted-foreground text-sm">
                    When your child outgrows the DS5.5, exchange it for a DS6.0—you only pay shipping costs.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                  <div>
                    <p className="font-medium text-foreground">Ages 7-10</p>
                    <p className="text-sm text-muted-foreground">Hand span typically under 6&quot;</p>
                  </div>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-foreground text-background">DS5.5</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                  <div>
                    <p className="font-medium text-foreground">Ages 11-14</p>
                    <p className="text-sm text-muted-foreground">Hand span typically 6-7.5&quot;</p>
                  </div>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-foreground text-background">DS5.5</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                  <div>
                    <p className="font-medium text-foreground">Ages 15+</p>
                    <p className="text-sm text-muted-foreground">Measure and reassess</p>
                  </div>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-muted-foreground text-background">DS6.0 or 6.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return null
}
