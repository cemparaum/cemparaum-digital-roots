import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Sobre Nós",
      links: [
        { label: "Nossa História", href: "#sobre" },
        { label: "Valores", href: "#sobre" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { label: "Criação de Sites", href: "#servicos" },
        { label: "SEO", href: "#servicos" },
        { label: "Google Meu Negócio", href: "#servicos" },
        { label: "Rastreamento de Dados", href: "#servicos" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Facebook, href: "#", name: "Facebook" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === "#inicio" ? "body" : href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          {/* Coluna 1: Logo e Descrição */}
          <div className="md:col-span-4 lg:col-span-2 space-y-4">
            <button
              onClick={() => scrollToSection("#inicio")}
              className="flex items-center space-x-3 text-left cursor-pointer"
              aria-label="Voltar ao início"
            >
              <img
                src="https://storage.googleapis.com/gpt-engineer-file-uploads/0XnzoAmIYDdsuGNKMG41GWHbgc73/uploads/1758074566465-logo100p1.png"
                alt="100:1 Logo"
                className="w-12 h-12"
              />
              <div>
                <div className="text-2xl font-montserrat font-bold text-title">
                  100:1
                </div>
                <div className="text-sm text-accent">Cem para Um</div>
              </div>
            </button>
            <p className="text-primary-foreground/80 font-work-sans max-w-sm">
              Agência de marketing digital em Serra/ES, focada em transformar a
              presença online de pequenos negócios locais.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Colunas de Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-montserrat font-semibold text-title uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors font-work-sans text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Coluna de Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-semibold text-title uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3 font-work-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Av. Eucalipto 764, Vista da Serra 2 - Serra/ES
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <a
                  href="tel:+5527999999999"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (27) 9 9999-9999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <a
                  href="mailto:contato@cemparaum.com.br"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  contato@cemparaum.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70 font-work-sans">
          <p>
            &copy; {new Date().getFullYear()} 100:1 Agência Digital. Todos os
            direitos reservados.
          </p>
          <p className="mt-1">
            Desenvolvido com ❤️ no Espírito Santo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;