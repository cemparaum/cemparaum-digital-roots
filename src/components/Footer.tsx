import { Instagram, Facebook, Heart, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/assets/logo.webp';

const Footer = () => {

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const socialLinks = [
      { icon: Instagram, href: "https://www.instagram.com/agenciacemparaum/", label: "Instagram" },
      { icon: Facebook, href: "#", label: "Facebook" }, // Replace with actual link
    ];

    const quickLinks = [
      { label: "Início", href: "#inicio" },
      { label: "Serviços", href: "#servicos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Contato", href: "#contato" },
    ];

    const servicesLinks = [
      { label: "Criação de Sites", href: "#servicos" },
      { label: "SEO", href: "#servicos" },
      { label: "Google Meu Negócio", href: "#servicos" },
      { label: "Rastreamento de Dados", href: "#servicos" },
    ];

    return (
      <footer className="bg-background text-foreground pt-20 pb-8 font-work-sans">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            
            {/* Col 1: Logo and Social */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-4 flex items-center space-x-3">
                <img src={Logo.src} alt="100:1 Logo" className="h-12 w-auto" />
                <div>
                  <div className="font-montserrat font-bold text-2xl text-title">100:1</div>
                  <div className="text-sm text-accent">Cem para Um</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Uma agência de marketing digital focada em ajudar pequenos negócios no Espírito Santo a prosperar online.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-title mb-4">Navegação</h3>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-title mb-4">Serviços</h3>
              <ul className="space-y-3">
                {servicesLinks.map(link => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-title mb-4">Contato</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Serra, Espírito Santo, Brasil</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-4 h-4 mr-3 mt-1 text-accent flex-shrink-0" />
                  <a href="mailto:cemparaum@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">cemparaum@gmail.com</a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-4 h-4 mr-3 mt-1 text-accent flex-shrink-0" />
                  <a href="https://wa.me/5527995271995" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">+55 (27) 99527-1995</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} 100:1 Agência Digital. Todos os direitos reservados.</p>
            <p className="flex items-center justify-center mt-2">
              Desenvolvido com <Heart className="w-4 h-4 mx-1.5 text-red-500 fill-current" /> no Espírito Santo.
            </p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;