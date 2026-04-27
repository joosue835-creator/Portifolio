import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Carina-essencia-beleza",
    description: "stúdio de beleza especializado em mega hair, mechas, alisamentos e tratamentos capilares em Lajeado, RS. Transformamos seu visual com técnicas exclusivas de Carina especialista em mega hair e mechas..",
    image: "https://i.postimg.cc/prncPyVr/Captura-de-tela-2026-04-21-065911.png",
    link: "https://carina-essencia-beleza.vercel.app",
  },
  {
    title: "Rede-pop-pet-shop-catalao",
    description: "Higiene completa e saúde em dia para seu pet com a segurança de um atendimento técnico e humanizado.",
    image: "https://i.postimg.cc/cHCjB4KF/Captura-de-tela-2026-04-21-063503.png",
    link: "https://rede-pop-pet-shop-catalao.vercel.app",
  },
  {
    title: "barbershop-premium",
    description: "PRECISÃO, ESTILO E TRADIÇÃO\nExperiência premium em barbearia masculina. Cada corte é uma obra de arte, cada cliente é exclusivo.",
    image: "https://i.postimg.cc/59v3gX02/Captura-de-tela-2026-04-21-063812.png",
    link: "https://barbershop-premium-mu.vercel.app",
  },
  {
    title: "Geracao-pet-shop",
    description: "A Geração Pet Shop atua em Catalão-GO com serviços de banho e tosa, estética animal, acessórios em geral e táxi dog. Cuidamos do seu melhor amigo com muito amor.",
    image: "https://i.postimg.cc/jSsLqGwB/Captura-de-tela-2026-04-21-064542.png",
    link: "https://geracao-pet-shop.vercel.app",
  },
  {
    title: "Clinica-24h-catalao",
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
