import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-primary pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-primary-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              ISO Certified Engineering Excellence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Precision Engineering & Quality Solutions for South Africa
          </h1>
          
          <p className="text-xl text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed">
            100% Black-owned and 60% Black women-owned engineering company delivering 
            turnkey quality solutions from precise material procurement to final ISO-compliant documentation.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-primary-foreground/5 p-4 rounded-lg backdrop-blur-sm">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">ISO 9001:2015</p>
                <p className="text-primary-foreground/60 text-sm">Quality Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-primary-foreground/5 p-4 rounded-lg backdrop-blur-sm">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">ISO 45001:2018</p>
                <p className="text-primary-foreground/60 text-sm">Safety Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-primary-foreground/5 p-4 rounded-lg backdrop-blur-sm">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">ISO 3834-2</p>
                <p className="text-primary-foreground/60 text-sm">Welding Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
