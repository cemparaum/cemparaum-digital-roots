import { Heart, Target, Users, Zap } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Tratamos cada cliente como parte da nossa família, oferecendo suporte humano e próximo."
    },
    {
      icon: Users,
      title: "Amizade",
      description: "Construímos relações duradouras baseadas na confiança e parceria genuína."
    },
    {
      icon: Target,
      title: "Acessibilidade",
      description: "Soluções econômicas e eficazes que cabem no orçamento de qualquer empreendedor."
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Tecnologia de ponta com simplicidade, unindo o melhor dos dois mundos."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Imagem */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={teamImage} 
                alt="Equipe 100:1 trabalhando em colaboração" 
                className="w-full h-96 object-cover"
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
                Quem Somos
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
              
              <p className="text-lg text-foreground/90 mb-6 font-work-sans leading-relaxed">
                Somos a <span className="text-accent font-semibold">100:1</span>, uma agência de marketing digital 
                que acredita no poder da digitalização acessível. Inspirados na parábola do semeador, 
                nossa missão é <span className="text-title font-medium">plantar, colher e semear</span> junto 
                com empreendedores do Espírito Santo.
              </p>
              
              <p className="text-lg text-foreground/80 mb-8 font-work-sans leading-relaxed">
                Não somos apenas prestadores de serviço - somos parceiros de crescimento. 
                Combinamos tecnologia de ponta com o calor humano, criando soluções que realmente 
                fazem a diferença na vida dos nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover-glow"
                >
                  <value.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-montserrat font-semibold text-title mb-2">
                    {value.title}
                  </h3>
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