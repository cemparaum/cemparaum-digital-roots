import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { trackClick } from "@/utils/dataLayer";
import Logo from "@/assets/logo.webp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, label: string) => {
    trackClick("Navigation", `Scroll to ${label}`, href);
    const element = document.querySelector(href === "#inicio" ? "body" : href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#inicio", "Logo")}
            className="flex items-center h-full py-2 space-x-3 cursor-pointer"
            aria-label="Voltar ao início"
          >
            <img src={Logo.src} alt="100:1 Logo" className="h-full w-auto" />
            <div className="text-left">
              <div className="text-title font-montserrat font-bold text-2xl">
                100:1
              </div>
              <div className="text-sm text-accent">Cem para Um</div>
            </div>
          </button>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.label)}
                className="text-foreground/80 hover:text-accent transition-colors font-work-sans font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold hover-glow"
              onClick={() => handleNavClick("#contato", "Comecar Projeto CTA")}
            >
              Começar Meu Projeto
            </Button>
          </div>

          {/* Botão Mobile */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className="block w-full text-left py-2 text-foreground/80 hover:text-accent transition-colors font-work-sans font-medium"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 space-y-3">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() =>
                    handleNavClick("#contato", "Comecar Projeto CTA Mobile")
                  }
                >
                  Começar Meu Projeto
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
