import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Carina-essencia-beleza",
    description: "stúdio de beleza especializado em mega hair, mechas, alisamentos e tratamentos capilares em Lajeado, RS. Transformamos seu visual com técnicas exclusivas de Carina especialista em mega hair e mechas..",
    image: "https://i.postimg.cc/prncPyVr/Captura-de-tela-2026-04-21-065911.png",
    link: "https://carina-essencia-beleza.vercel.app",
  },
  {
    title: "decarli-petshop.vercel.app",
    description: "Cuidado completo e humanizado para quem é parte da sua família\nDo banho e tosa ao atendimento hospitalar 24h, seu pet recebe o melhor em um só lugar.",
    image: "https://i.postimg.cc/fyFBmnCW/Captura-de-tela-2026-04-28-101719.png",
    link: "https://decarli-petshop.vercel.app",
  },
  {
    title: "barbershop-premium",
    description: "PRECISÃO, ESTILO E TRADIÇÃO\nExperiência premium em barbearia masculina. Cada corte é uma obra de arte, cada cliente é exclusivo.",
    image: "https://i.postimg.cc/59v3gX02/Captura-de-tela-2026-04-21-063812.png",
    link: "https://barbershop-premium-mu.vercel.app",
  },
  {
    title: "elite-advocacia",
    description: "Excelência Jurídica & Estratégia\nDefesa estratégica para decisões que não podem falhar.",
    image: "https://i.postimg.cc/HdNMnYsN/Captura-de-tela-2026-04-21-064542.png",
    link: "https://elite-advocacia.vercel.app",
  },
  {
    title: "Precisionauto---centro-automotivo",
    description: "SEU CARRO NO ÁPICE DA PERFORMANCE\nMecânica especializada, alinhamento 3D e tecnologia avançada para quem não aceita menos que a perfeição técnica.",
    image: "https://i.postimg.cc/cxDRcQ0H/Captura-de-tela-2026-04-27-203817.png",
    link: "https://precisionauto-premium.vercel.app",
  },
  {
    title: "clinica-vitta-premium",
    description: "Cuidado profissional com foco na sua saúde real.\nOferecemos atendimento médico de alta precisão com infraestrutura moderna, unindo ciência e humanização para sua total segurança.",
    image: "https://i.postimg.cc/gzZpyP9Y/Captura-de-tela-2026-04-27-213415.png",
    link: "https://clinica-vitta-premium.vercel.app",
  },
  {
    title: "Novo Projeto",
    description: "Em breve: Mais um projeto incrível sendo desenvolvido para o portfólio.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
    link: "#",
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
