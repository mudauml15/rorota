"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="bg-accent text-accent-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
          <a href="tel:+27115688298" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>+27 11 568 8298</span>
          </a>
          <a href="tel:+27659919216" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>+27 65 991 9216</span>
          </a>
          <a href="mailto:info@rorota.co.za" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="h-3.5 w-3.5" />
            <span>info@rorota.co.za</span>
          </a>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-foreground tracking-tight">ROROTA</span>
              <span className="text-xs text-primary-foreground/70 tracking-wider">QUALITY SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/20 pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-fit">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
