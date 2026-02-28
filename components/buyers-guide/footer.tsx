"use client"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground mb-1">DreamPlay Pianos</p>
            <p className="text-sm text-muted-foreground">Keyboards that fit you.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#" className="hover:text-foreground transition-colors">Customize</a>
            <a href="#" className="hover:text-foreground transition-colors">Research</a>
            <a href="#" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DreamPlay Pianos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
