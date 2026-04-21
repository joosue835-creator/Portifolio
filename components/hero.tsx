import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/10">
            <Image
              src="/profile.jpg"
              alt="Josué Alberto - Desenvolvedor Web"
              width={320}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
        </div>
        
        <div className="text-center md:text-left max-w-xl">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Desenvolvedor Web
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Olá, eu sou <span className="text-primary">Josué Alberto</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
            Transformo ideias em experiências digitais únicas. Especializado em criar sites modernos, 
            responsivos e de alta performance que encantam usuários.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projetos"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
