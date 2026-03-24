const clients = [
  "Tampech Engineering",
  "Kenfore Engineering and Project Management",
  "Beyond Engineering Services",
  "Eagle Technik",
  "Public Bonds & Projects (Pty) Ltd",
  "Vanedi (Pty) Ltd",
  "GPWG Engineering",
  "Lekanka Mining Construction and Supply",
  "Arc Contractors",
  "Superfecta Spartan Group",
  "Mogogudi Construction Projects",
  "Onsite Hydro and Pneamatic",
  "Heating Systems",
  "Mkhandisi Construction & Property Developers",
  "Sukuma Engineering",
  "Sigma Industries",
  "Samancor (MFC)",
  "FM Infrastructure",
  "CSIR",
  "Leloba Bright",
]

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Trusted Partners</span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Valued Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to have partnered with leading organizations across various industries in South Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="p-4 bg-card border border-border rounded-lg text-center hover:border-accent/50 hover:shadow-md transition-all"
            >
              <p className="text-sm font-medium text-foreground">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
