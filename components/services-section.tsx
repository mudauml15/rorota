"use client"

import { useState } from "react"
import { 
  FileCheck, 
  Shield, 
  Leaf, 
  Flame, 
  ClipboardCheck, 
  Search,
  Gauge,
  Camera,
  GraduationCap,
  Microscope,
  Factory,
  Pipette,
  Container,
  Building,
  Thermometer,
  Sparkles,
  Cylinder,
  CircleDot
} from "lucide-react"
import { cn } from "@/lib/utils"

const consultationServices = [
  { icon: FileCheck, name: "ISO 9001 Consultations", description: "Quality Management System" },
  { icon: Shield, name: "ISO 45001 Consultations", description: "Safety Management System" },
  { icon: Leaf, name: "ISO 14001 Consultations", description: "Environmental Management System" },
  { icon: Flame, name: "ISO 3834 Consultations", description: "Welding Management System" },
  { icon: ClipboardCheck, name: "Welding Procedures", description: "PQR, WPS & WQR Documentation" },
  { icon: Search, name: "Engineering Inspections", description: "Vendor, Product & Process" },
  { icon: Gauge, name: "NDT Services", description: "MPI, PT, UT, RT, Pressure Testing" },
  { icon: Camera, name: "Endoscope Inspection", description: "Pipeline Inspections" },
  { icon: GraduationCap, name: "Skills Development Testing", description: "Training & Assessment" },
  { icon: Microscope, name: "Metallurgical Investigations", description: "Failure Analysis" },
]

const workshopServices = [
  { icon: Factory, name: "Steel Fabrication & Erection", description: "Structural Steel Works" },
  { icon: Pipette, name: "Steel Pipe Fabrication", description: "Installation Services" },
  { icon: Container, name: "Pressure Vessels", description: "Fabrication & Installation" },
  { icon: Building, name: "Civil Works", description: "Construction Services" },
  { icon: Thermometer, name: "Boiler Maintenance", description: "Repair & Service" },
  { icon: Sparkles, name: "Industrial Cleaning", description: "Specialized Cleaning" },
  { icon: Cylinder, name: "Tank Fabrication & Repair", description: "Storage Solutions" },
  { icon: CircleDot, name: "HDPE Pipe Supply & Welding", description: "Plastic Pipeline Solutions" },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"consultation" | "workshop">("consultation")

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Services</span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From consultations to full-scale fabrication, we provide end-to-end engineering 
            services that meet the highest industry standards.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-lg p-1">
            <button
              onClick={() => setActiveTab("consultation")}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all",
                activeTab === "consultation"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Head Office (Consultations)
            </button>
            <button
              onClick={() => setActiveTab("workshop")}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all",
                activeTab === "workshop"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Workshop (Fab & Installations)
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === "consultation" ? consultationServices : workshopServices).map((service) => (
            <div
              key={service.name}
              className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="inline-flex p-3 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Strategic Alignment */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Strategic Alignment with Industrial Drivers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                driver: "Regulatory Compliance",
                solution: "ISO-aligned quality solutions, NDT, and strict adherence to technical mandates.",
              },
              {
                driver: "Operational Efficiency",
                solution: "High-precision welding and structural engineering to reduce maintenance downtime.",
              },
              {
                driver: "Transformation Targets",
                solution: "100% Black-Owned empowered status for tier-one supplier entry.",
              },
              {
                driver: "Technical Complexity",
                solution: "Advanced metallurgical expertise and certified deployment of specialized alloys.",
              },
            ].map((item) => (
              <div key={item.driver} className="p-6 bg-primary rounded-lg">
                <h4 className="text-lg font-semibold text-accent mb-3">{item.driver}</h4>
                <p className="text-sm text-primary-foreground/80">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
