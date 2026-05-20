"use client"

import Image from "next/image"
import { useState } from "react"
import { Building2, Wrench, Factory, HardHat, Pipette, FileCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const structuralProjects = [
  {
    icon: Building2,
    title: "Structural Project 1",
    subtitle: "Rorota workshop - germiston",
    description: "Precision fabrication and assembly of structural elements.",
    image: "/images/portfolio/Structural-0.jpg",
  },
  {
    icon: Wrench,
    title: "Structural Project 2",
    subtitle: "Rorota workshop - germiston",
    description: "Steel fabrication for industrial applications.",
    image: "/images/portfolio/Structural-1.jpg",
  },
  {
    icon: Factory,
    title: "Structural Project 3",
    subtitle: "Rorota workshop - germiston",
    description: "Large-scale structural engineering project.",
    image: "/images/portfolio/Structural-2.jpg",
  },
  {
    icon: HardHat,
    title: "Structural Project 4",
    subtitle: "Rorota workshop - germiston",
    description: "On-site fabrication and assembly capabilities.",
    image: "/images/portfolio/Structural-3.jpg",
  },
  {
    icon: Building2,
    title: "Structural Project 5",
    subtitle: "Rorota workshop - germiston",
    description: "Commercial steel structure fabrication.",
    image: "/images/portfolio/Structural-4.jpg",
  },
  {
    icon: Wrench,
    title: "Structural Project 6",
    subtitle: "Rorota workshop - germiston",
    description: "Industrial facility steel works.",
    image: "/images/portfolio/Structural-5.jpg",
  },
  {
    icon: Factory,
    title: "Structural Project 7",
    subtitle: "Rorota workshop - germiston",
    description: "Advanced structural welding techniques.",
    image: "/images/portfolio/Structural-6.jpg",
  },
  {
    icon: HardHat,
    title: "Structural Project 8",
    subtitle: "Rorota workshop - germiston",
    description: "Structural steel installation project.",
    image: "/images/portfolio/Structural-7.jpg",
  },
  {
    icon: Building2,
    title: "Structural Project 9",
    subtitle: "Rorota workshop - germiston",
    description: "Custom steel structure fabrication.",
    image: "/images/portfolio/Structural-8.jpg",
  },
]

const pipesAndTanksProjects = [
  {
    icon: Pipette,
    title: "Pipes and Tanks Project 1",
    subtitle: "Rorota workshop - germiston",
    description: "Specialized piping solutions for industrial applications.",
    image: "/images/portfolio/Pipes & Tanks-1.jpg",
  },
  {
    icon: Wrench,
    title: "Pipes and Tanks Project 2",
    subtitle: "Rorota workshop - germiston",
    description: "Pipe fabrication and installation services.",
    image: "/images/portfolio/Pipes & TanksPipes-2.jpg",
  },
  {
    icon: Factory,
    title: "Pipes and Tanks Project 3",
    subtitle: "Rorota workshop - germiston",
    description: "HDPE fusion welding for robust piping systems.",
    image: "/images/portfolio/Pipes & Tanks-3.jpg",
  },
  {
    icon: HardHat,
    title: "Pipes and Tanks Project 4",
    subtitle: "Rorota workshop - germiston",
    description: "Tank fabrication and repair services.",
    image: "/images/portfolio/Pipes & Tanks-4.jpg",
  },
  {
    icon: Pipette,
    title: "Pipes and Tanks Project 5",
    subtitle: "Rorota workshop - germiston",
    description: "Industrial piping system installation.",
    image: "/images/portfolio/Pipes & Tanks-5.jpg",
  },
  {
    icon: Wrench,
    title: "Pipes and Tanks Project 6",
    subtitle: "Rorota workshop - germiston",
    description: "Pressure vessel fabrication services.",
    image: "/images/portfolio/Pipes & Tanks-6.jpg",
  },
  {
    icon: Factory,
    title: "Pipes and Tanks Project 7",
    subtitle: "Rorota workshop - germiston",
    description: "Pipeline inspection and maintenance.",
    image: "/images/portfolio/Pipes & Tanks-7.jpg",
  },
  {
    icon: HardHat,
    title: "Pipes and Tanks Project 8",
    subtitle: "Rorota workshop - germiston",
    description: "Custom tank fabrication solutions.",
    image: "/images/portfolio/Pipes & Tanks-8.jpg",
  },
]

const consultingProjects = [
  {
    icon: FileCheck,
    title: "Consulting Project 1",
    subtitle: "Consulting Services",
    description: "Quality management and certification consulting.",
    image: "/images/portfolio/Consulting-1.jpg",
  },
]

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<"structural" | "pipes" | "consulting">("structural")

  const projects = {
    structural: structuralProjects,
    pipes: pipesAndTanksProjects,
    consulting: consultingProjects,
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Completed Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of our engineering excellence across structural, piping, and consulting projects.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-lg p-1">
            <button
              onClick={() => setActiveTab("structural")}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all",
                activeTab === "structural"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Structural
            </button>
            <button
              onClick={() => setActiveTab("pipes")}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all",
                activeTab === "pipes"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Pipes and Tanks
            </button>
            <button
              onClick={() => setActiveTab("consulting")}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all",
                activeTab === "consulting"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Consulting
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects[activeTab].map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="relative h-[300px] lg:h-[350px] rounded-lg overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-accent font-medium text-sm tracking-wider uppercase">
                    {project.subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <project.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <p className="text-muted-foreground mb-4 sm:mb-0">
              Interested in similar projects for your business?
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
