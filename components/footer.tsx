import { Phone, Mail, MapPin } from "lucide-react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
]

const certifications = [
  "ISO 9001:2015",
  "ISO 45001:2018",
  "ISO 14001:2015",
  "ISO 3834 Part 2",
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-tight">ROROTA</span>
              <p className="text-xs text-primary-foreground/70 tracking-wider">QUALITY SOLUTIONS</p>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              100% Black-owned and 60% Black women-owned engineering company delivering 
              turnkey quality solutions in South Africa.
            </p>
            <p className="text-sm text-primary-foreground/70">
              Our focus on total quality solutions ensures complete client satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Certifications</h4>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-primary-foreground/70">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/70">+27 11 568 8298</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/70">+27 65 991 9216</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/70">info@rorota.co.za</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  26 Ivor Street, Germiston, Gauteng 1401
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Rorota Quality Solutions. All rights reserved.
            </p>
            <a 
              href="https://www.rorota.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              www.rorota.co.za
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
