"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    values: ["+27 11 568 8298", "+27 65 991 9216"],
  },
  {
    icon: Mail,
    label: "Email",
    values: ["info@rorota.co.za"],
  },
  {
    icon: Globe,
    label: "Website",
    values: ["www.rorota.co.za"],
  },
]

const locations = [
  {
    name: "Head Office & Workshop",
    address: "26 Ivor Street, Germiston, Gauteng 1401",
  },
  {
    name: "Middleburg Branch",
    address: "C)4A Beyers Naude Street, Middleburg, Mpumalanga 1050",
  },
  {
    name: "Pretoria Branch",
    address: "D)10753 Intambula Street, Nelmapius Ext 9, Pretoria, 0122",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Get In Touch</span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our focus on total quality solutions ensures complete client satisfaction. 
            Get in touch to discuss your engineering needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary rounded-lg p-8">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">{info.label}</p>
                      {info.values.map((value) => (
                        <p key={value} className="text-primary-foreground font-medium">{value}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/70 mb-2">Registration Details</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p className="text-primary-foreground/80">CIPC: 2018/201890/07</p>
                  <p className="text-primary-foreground/80">Tax: 9816943162</p>
                  <p className="text-primary-foreground/80">CSD: MAAA0629406</p>
                  <p className="text-primary-foreground/80">VAT: 4480303892</p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Locations</h3>
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg"
                >
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{location.name}</p>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
