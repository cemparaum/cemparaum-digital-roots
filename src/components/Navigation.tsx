import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  activePaths?: string[];
}

const Navigation = ({ currentPath, logoSrc }: { currentPath: string, logoSrc: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = currentPath === "/";

  const menuItems: MenuItem[] = [
    { label: "Início", href: isHomePage ? "#inicio" : "/" },
    { label: "Serviços", href: isHomePage ? "#servicos" : "/#servicos", activePaths: ["/servicos"] },
    { label: "Sobre", href: isHomePage ? "#sobre" : "/#sobre" },
    { label: "Blog", href: "/blog", activePaths: ["/blog"] },
    { label: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href === "#inicio" ? "body" : href;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleCtaClick = (e: React.MouseEvent) => handleScrollClick(e, "#contato");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center h-full py-2 space-x-3" aria-label="100:1 Cem para Um - Voltar para a página inicial">
            <img src={logoSrc} alt="" className="h-full w-auto" width="64" height="64" />
            <div className="text-left" aria-hidden="true">
              <div className="text-title font-montserrat font-bold text-2xl">100:1</div>
              <div className="text-sm text-accent">Cem para Um</div>
            </div>
          </a>

          {/* Menu Desktop (Centralizado) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = item.activePaths?.some(path => currentPath.startsWith(path));
              const className = `font-medium rounded-md px-4 py-2 transition-colors font-work-sans ${isActive ? 'text-accent' : 'text-foreground/80 hover:text-accent'}`;

              if (item.href.startsWith("#")) {
                return (
                  <button key={item.label} onClick={(e) => handleScrollClick(e, item.href)} className={className}>
                    {item.label}
                  </button>
                );
              }
              return (
                <a key={item.label} href={item.href} className={className}>
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Desktop & Botão Mobile */}
          <div className="flex items-center">
            <Button onClick={handleCtaClick} className="hidden lg:flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold hover-glow">
              Começar Meu Projeto
            </Button>
            <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle mobile menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {menuItems.map((item) => {
                 const className = "block w-full text-left py-3 px-4 rounded-md text-lg text-foreground/80 hover:text-accent hover:bg-white/5 transition-colors font-work-sans font-medium";
                 if (item.href.startsWith("#")) {
                   return (
                    <button key={item.label} onClick={(e) => handleScrollClick(e, item.href)} className={className}>
                      {item.label}
                    </button>
                   );
                 }
                 return (
                   <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className={className}>
                    {item.label}
                   </a>
                 );
              })}
              <div className="pt-4">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" onClick={handleCtaClick}>
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
