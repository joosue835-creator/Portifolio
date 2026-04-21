import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Vittapet (Pet Shop)",
    description: "Site completo para Pet Shop com agendamento e lista de serviços.",
    image: "https://i.postimg.cc/Gprqq3f3/Captura-de-tela-2026-04-21-064320.png",
    link: "https://vittapet-website.vercel.app",
  },
  {
    title: "Rede Pop Pet Shop Catalão",
    description: "Higiene completa e saúde em dia para seu pet com a segurança de um atendimento técnico e humanizado.",
    image: "https://i.postimg.cc/cHCjB4KF/Captura-de-tela-2026-04-21-063503.png",
    link: "https://rede-pop-pet-shop-catalao.vercel.app",
  },
  {
    title: "Patas Pet Care",
    description: "Atendimento personalizado com foco no bem-estar animal e orientação completa aos tutores.",
    image: "https://i.postimg.cc/597zr9X5/Captura-de-tela-2026-04-21-064216.png",
    link: "https://patas-pet-care-3na7.vercel.app",
  },
  {
    title: "Geração Pet Shop",
    description: "A Geração Pet Shop atua em Catalão-GO com serviços de banho e tosa, estética animal, acessórios em geral e táxi dog. Cuidamos do seu melhor amigo com muito amor.",
    image: "https://i.postimg.cc/jSsLqGwB/Captura-de-tela-2026-04-21-064542.png",
    link: "https://geracao-pet-shop.vercel.app",
  },
  {
    title: "Clínica 24h Catalão",
    description: "Cuidado e dedicação para proteger seu melhor amigo.",
    image: "https://i.postimg.cc/V6TCdDQj/Captura-de-tela-2026-04-21-063812.png",
    link: "https://clinica-24h-catalao.vercel.app",
  },
  {
    title: "Bigodinhos Petshop",
    description: "Cuidado, carinho e bem-estar para o seu pet 🐾",
    image: "https://i.postimg.cc/sfYSJFW5/Captura-de-tela-2026-04-21-065911.png",
    link: "https://bigodinhos-conex-o-pet.vercel.app",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes. Cada projeto é único e desenvolvido 
            com atenção aos detalhes e foco na experiência do usuário.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
