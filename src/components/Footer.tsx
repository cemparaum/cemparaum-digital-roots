import { trackClick } from "@/utils/dataLayer";
import { Instagram, Facebook, MapPin, Phone, Mail, Heart, MessageCircle } from "lucide-react";
import Logo from "@/assets/logo.webp";

const Footer = () => {
  const whatsappLink = "https://wa.me/5527995271995";

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/agenciacemparaum/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61581129239277",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: whatsappLink,
    },
  ];

  const aboutLinks = [
    { label: "Nossa História", href: "#sobre" },
    { label: "Valores", href: "#sobre" },
    { label: "Blog", href: "#" },
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
                <img src={Logo} alt="100:1 Logo" className="h-12 w-auto" />
                <div>
                    <div className="font-montserrat font-bold text-2xl text-title">100:1</div>
                    <div className="text-sm text-accent">Cem para Um</div>
                </div>
            </div>
            <p className="text-sm mb-6 max-w-xs text-muted-foreground">
                Agência de marketing digital em Serra/ES, focada em transformar a presença online de pequenos negócios locais.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick("Footer", `Click Social ${link.name}`, link.url)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-muted/50 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Sobre Nós */}
          <div>
            <h3 className="font-montserrat font-bold text-lg text-title mb-4">SOBRE NÓS</h3>
            <ul className="space-y-3 text-muted-foreground">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Serviços */}
          <div>
            <h3 className="font-montserrat font-bold text-lg text-title mb-4">SERVIÇOS</h3>
            <ul className="space-y-3 text-muted-foreground">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h3 className="font-montserrat font-bold text-lg text-title mb-4">CONTATO</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-accent" />
                <span>Av. Eucalipto 764, Vista da Serra 2 - Serra/ES</span>
              </li>
              <li className="flex items-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"  onClick={() => trackClick("Footer", "Click WhatsApp Phone", whatsappLink)} className="flex items-center hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  <span>(27) 99527-1995</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="mailto:cemparaum@gmail.com" onClick={() => trackClick("Footer", "Click Email", "mailto:cemparaum@gmail.com")} className="flex items-center hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  <span>cemparaum@gmail.com</span>
                 </a>
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
