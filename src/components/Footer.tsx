import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  MessageCircle,
  Heart 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Criação de Sites",
    "SEO Profissional", 
    "Google Meu Negócio",
    "Rastreio de Dados",
    "Marketing Digital",
    "Consultoria"
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" }
  ];

  const socialLinks = [
    { 
      icon: MessageCircle, 
      href: "https://wa.me/5527999999999", 
      color: "hover:text-green-500",
      label: "WhatsApp"
    },
    { 
      icon: Instagram, 
      href: "#", 
      color: "hover:text-pink-500",
      label: "Instagram"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      color: "hover:text-blue-500",
      label: "LinkedIn"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === "#inicio" ? "body" : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary/95 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Informações da empresa */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">100</span>
              </div>
              <div>
                <div className="text-title font-montserrat font-bold text-2xl">100:1</div>
                <div className="text-accent">Cem para Um</div>
              </div>
            </div>
            
            <p className="text-foreground/80 font-work-sans leading-relaxed">
              Agência de marketing digital especializada em ajudar pequenos empreendedores 
              a se digitalizarem de forma acessível e humana.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-foreground/80">
                  Av. Eucalipto 764, Vista da Serra 2<br />
                  Serra/ES - CEP: 29176-790
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-foreground/80">(27) 9 9999-9999</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-foreground/80">contato@cemparaum.com.br</span>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-title font-montserrat font-bold text-lg mb-6">
              Nossos Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    className="text-foreground/80 hover:text-accent transition-colors font-work-sans text-left"
                    onClick={() => scrollToSection('#servicos')}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-title font-montserrat font-bold text-lg mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="text-foreground/80 hover:text-accent transition-colors font-work-sans"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter e redes sociais */}
          <div>
            <h3 className="text-title font-montserrat font-bold text-lg mb-6">
              Fique por Dentro
            </h3>
            
            <p className="text-foreground/80 font-work-sans mb-4">
              Receba dicas e novidades sobre marketing digital direto no seu e-mail.
            </p>

            <div className="space-y-4">
              <div className="flex">
                <input 
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-3 bg-card/50 border border-border rounded-l-lg focus:border-accent focus:outline-none text-foreground"
                />
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-r-lg font-semibold transition-colors">
                  Enviar
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-title font-semibold mb-4 font-montserrat">
                Siga-nos
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-card/50 border border-border rounded-lg flex items-center justify-center transition-all hover:bg-accent/10 hover:border-accent/30 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/70 text-sm font-work-sans">
              © {currentYear} 100:1 Agência Digital. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-2 text-foreground/70 text-sm font-work-sans">
              Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> no Espírito Santo
            </div>
            
            <div className="flex gap-6 text-sm">
              <button className="text-foreground/70 hover:text-accent transition-colors">
                Política de Privacidade
              </button>
              <button className="text-foreground/70 hover:text-accent transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;