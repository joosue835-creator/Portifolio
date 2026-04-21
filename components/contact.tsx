import { MessageCircle, Mail, MapPin } from "lucide-react"

export function Contact() {
  const whatsappNumber = "5564999488669"
  const whatsappMessage = encodeURIComponent("Olá Josué, vi seu portfólio e gostaria de um orçamento.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section id="contato" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
          Contato
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade. 
          Estou sempre aberto a novos desafios e parcerias.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <span>joosue835@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Catalão, Goais</span>
          </div>
        </div>
      </div>
    </section>
  )
}
