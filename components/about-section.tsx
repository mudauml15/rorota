import { Target, Eye, Heart, Zap, Users, CheckCircle } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passionate",
    description: "Our executives are passionate about quality and performance in every project we undertake.",
  },
  {
    icon: Users,
    title: "Empowering",
    description: "We empower our staff to be self-managed, fully understanding our vision and mission.",
  },
  {
    icon: CheckCircle,
    title: "Excellent",
    description: "We excel in what we do, delivering exceptional results that exceed expectations.",
  },
  {
    icon: Zap,
    title: "Pro-Active",
    description: "We ensure all necessary measures are considered before any job starts.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-accent font-medium text-sm tracking-wider uppercase">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Engineering Excellence Since 2018
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Rorota Quality Solutions is a registered 100% Black-owned and 60% Black women-owned 
              engineering company in South Africa. We were established in 2018 with the aim of 
              helping clients with project planning and ensuring projects are executed with 
              dignity and high quality standards.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We strive to deliver turnkey quality from precise material procurement to final 
              ISO-compliant documentation — minimizing downtime and ensuring zero-harm operations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Black Owned</p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-bold text-accent">60%</p>
                <p className="text-sm text-muted-foreground">Black Women Owned</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Vision Statement</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier engineering, welding, and quality solutions provider in South Africa, 
                delivering excellence through passion, empowerment, and proactive service.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mission Statement</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Meeting client requirements and exceeding their expectations. We effectively 
                provide our clients with clear and actionable recommendations that improve 
                their operations and outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-card border border-border rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 bg-accent/10 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
