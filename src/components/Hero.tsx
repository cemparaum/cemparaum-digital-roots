import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Workspace digital moderno da 100:1" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8 bounce-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Agência de Marketing Digital</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-title mb-6 leading-tight">
            Transformamos
            <span className="block text-accent">Ideias em Resultados</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto font-work-sans">
            Ajudamos pequenos empreendedores a se digitalizarem de forma acessível e humana. 
            <span className="text-accent font-medium"> Da semente ao crescimento</span>, estamos juntos nessa jornada.
          </p>

          {/* Estatísticas rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="text-2xl font-bold text-accent">3 anos</div>
              <div className="text-sm text-muted-foreground">No Mercado</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="text-2xl font-bold text-accent">24h</div>
              <div className="text-sm text-muted-foreground">Suporte Médio</div>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg hover-glow"
            >
              Começar Meu Projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-6 text-lg font-semibold"
            >
              Ver Nossos Cases
            </Button>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 scroll-indicator">
            <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 scroll-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;