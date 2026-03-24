"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Building2, Pipette, FileCheck } from "lucide-react"

const projectCategories = [
  { id: "structural", label: "Structural", icon: Building2 },
  { id: "pipes", label: "Pipes & Tanks", icon: Pipette },
  { id: "consulting", label: "Consulting", icon: FileCheck },
]

const projects = {
  structural: [
    { name: "IPHC Dome - Heidelburg", description: "Large scale dome structure fabrication" },
    { name: "Manthe Primary School - Polokwane", description: "Educational facility steel works" },
    { name: "Matla-Exxaro Relocation Project", description: "Industrial relocation engineering" },
    { name: "Reavaya Station", description: "Public transport infrastructure" },
    { name: "Steel Structure For Zithembile - Witbank", description: "Commercial steel structure" },
    { name: "Hesto Harnes-Tazes - Pretoria", description: "Industrial facility fabrication" },
  ],
  pipes: [
    { name: "Mogalakwena Bulk 350NB Pipeline", description: "Large diameter pipeline installation" },
    { name: "Boroscopic Pipe Inspection (Rada)", description: "Advanced pipeline inspection" },
    { name: "Lethabo Water Analyser", description: "Water treatment piping systems" },
    { name: "HDPE Fusion Welding - Modikwe", description: "Plastic pipe welding services" },
  ],
  consulting: [
    { name: "ISO 3834 Handover - Multiple Clients", description: "Welding management certification" },
    { name: "ISO 3834-2 Handover", description: "Comprehensive quality standard implementation" },
    { name: "Theoretical Welding Training - Ndoukhulu Hydrolics", description: "Staff development program" },
    { name: "Eskom Engineers Quality Compliance", description: "Addressing quality compliance requirements" },
  ],
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"structural" | "pipes" | "consulting">("structural")

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Completed Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of our engineering excellence across structural, pipeline, and consulting projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as "structural" | "pipes" | "consulting")}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
                )}
              >
                <category.icon className="h-5 w-5" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[activeCategory].map((project, index) => (
            <div
              key={project.name}
              className="group relative overflow-hidden bg-primary rounded-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full" />
              <span className="absolute top-3 right-3 text-accent/30 text-4xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-primary-foreground mb-2 pr-8">{project.name}</h3>
                <p className="text-sm text-primary-foreground/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
