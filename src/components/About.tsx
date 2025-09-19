import { Heart, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/about_us.webp";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Tratamos cada projeto com a dedicação que ele merece, oferecendo um suporte humano e próximo."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Queremos ser seu parceiro de crescimento. Construímos relações duradouras baseadas na confiança e na colaboração."
    },
    {
      icon: Target,
      title: "Acessibilidade",
      description: "Oferecemos soluções que cabem no seu orçamento, mostrando que é possível ter alta qualidade sem gastar muito."
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Unimos o melhor da tecnologia com a simplicidade, para que você possa focar no que realmente importa: seu negócio."
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-card/30 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Imagem */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={teamImage} 
                alt="Equipe da 100:1 Agência Digital em Serra ES - Especialistas em criação de sites, SEO e Google Meu Negócio para empreendedores do Espírito Santo" 
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Card flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hover-glow">
              <div className="text-2xl font-bold">100:1</div>
              <div className="text-sm opacity-90">Cem para Um</div>
            </div>
          </div>

          {/* Lado direito - Conteúdo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-title mb-4">
                Conheça a 100:1 - Agência Digital em Serra ES
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
              
              <p className="text-lg text-foreground/90 mb-8 font-work-sans leading-relaxed">
                Nascemos para te ajudar. Somos a <span className="text-accent font-semibold">100:1</span>, uma <strong>agência de marketing digital em Serra ES</strong> 
                que acredita que a digitalização deve ser para todos. Nossa missão é 
                <span className="text-title font-medium"> plantar, colher e semear</span> junto 
                com você, oferecendo <strong>criação de sites, SEO e consultoria digital</strong> para que sua marca floresça no mundo online.
              </p>
              
              <div className="flex justify-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg hover-glow"
                  onClick={() => scrollToSection('#contato')}
                >
                  Começar Meu Projeto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Título da seção de valores */}
            <div className="mb-8">
              <h3 className="text-3xl font-montserrat font-bold text-title mb-4">
                Nossos Valores
              </h3>
            </div>

            {/* Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover-glow"
                >
                  <value.icon className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-montserrat font-semibold text-title mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-foreground/80 font-work-sans">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;