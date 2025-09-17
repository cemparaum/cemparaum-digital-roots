import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === "#inicio" ? "body" : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">100</span>
            </div>
            <div>
              <div className="text-title font-montserrat font-bold text-xl">100:1</div>
              <div className="text-xs text-accent">Cem para Um</div>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-accent transition-colors font-work-sans font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-accent/30 text-accent hover:bg-accent/10"
              onClick={() => window.open('tel:+5527999999999')}
            >
              <Phone className="w-4 h-4 mr-2" />
              (27) 9 9999-9999
            </Button>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold hover-glow"
              onClick={() => scrollToSection('#contato')}
            >
              Começar Projeto
            </Button>
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-foreground/80 hover:text-accent transition-colors font-work-sans font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-accent/30 text-accent hover:bg-accent/10"
                  onClick={() => window.open('tel:+5527999999999')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (27) 9 9999-9999
                </Button>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() => scrollToSection('#contato')}
                >
                  Começar Projeto
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;