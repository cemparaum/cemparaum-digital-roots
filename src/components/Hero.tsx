import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Heart, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";
import { trackClick } from "@/utils/dataLayer"; // Import tracking function

const Hero = () => {
  const features = [
    {
      icon: Target,
      title: "Foco Total 1:1",
      description: "Atendimento individualizado para entender e atender suas necessidades."
    },
    {
      icon: Heart,
      title: "Atendimento Humano",
      description: "Conversamos de verdade, sem robôs, para criar uma parceria de confiança."
    },
    {
      icon: DollarSign,
      title: "Custo-Benefício",
      description: "O melhor retorno para o seu investimento, com preços justos e acessíveis."
    }
  ];

  const handleCTAClick = () => {
    trackClick("Hero", "Click Comecar Projeto", "#contato");
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section 
      id="inicio" 
      className="relative text-center overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Agência de marketing digital 100:1 em Serra ES - Criação de sites, SEO e Google Meu Negócio" 
          className="w-full h-full object-cover"
          loading="lazy"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col min-h-screen justify-center">

        {/* Main Content Block */}
        <div className="space-y-6 md:space-y-8 text-center pt-24 md:pt-16">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 border border-accent rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-foreground">Agência de Marketing Digital</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-montserrat font-extrabold leading-none bg-gradient-to-b from-title to-accent text-transparent bg-clip-text drop-shadow-md">
            <span className="block">Plante.</span>
            <span className="block">Cresça.</span>
            <span className="block">Colha.</span>
          </h1>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/80 font-work-sans leading-relaxed">
            Transformamos pequenos empreendedores do Espírito Santo em gigantes digitais com <strong className="text-accent">SEO, criação de sites</strong> e <strong className="text-accent">marketing digital</strong>. Sua jornada digital começa com uma semente de <strong className="text-accent">confiança</strong>.
          </p>

          {/* Feature Cards */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:pt-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-md p-4 md:p-5 rounded-xl border-2 border-accent text-center space-y-2 hover-glow"
              >
                <div className="inline-block bg-accent/10 p-2 rounded-full">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h2 className="text-base sm:text-lg font-montserrat font-semibold text-title">{feature.title}</h2>
                <p className="text-foreground/80 font-work-sans text-xs">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6 md:pt-8">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-5 text-sm sm:text-base hover-glow"
                onClick={handleCTAClick}
              >
                Começar Meu Projeto
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mx-auto pt-12 pb-8 hidden sm:block">
            <div className="w-5 h-9 border-2 border-accent rounded-full flex justify-center p-1">
              <div className="w-0.5 h-2 bg-accent rounded-full animate-bounce"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;