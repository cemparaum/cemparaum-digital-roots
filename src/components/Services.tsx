import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Search, 
  MapPin, 
  BarChart3, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { trackClick } from "@/utils/dataLayer";

const Services = ({ fullpackImageSrc }: { fullpackImageSrc: string }) => {
  const services = [
    {
      icon: Globe,
      title: "Criação de Sites",
      slug: "criacao-de-sites",
      description: "Sites modernos, responsivos e otimizados que convertem visitantes em clientes.",
      features: [
        "Design responsivo e moderno",
        "Otimização para conversão",
        "Carregamento ultrarrápido",
        "SEO básico incluído"
      ],
    },
    {
      icon: Search,
      title: "SEO Profissional",
      slug: "seo-profissional",
      description: "Posicione seu negócio no topo do Google e aumente sua visibilidade online.",
      features: [
        "Análise de palavras-chave",
        "Otimização on-page",
        "Link building estratégico",
        "Relatórios mensais"
      ]
    },
    {
      icon: MapPin,
      title: "Google Meu Negócio",
      slug: "google-meu-negocio",
      description: "Otimização completa do seu perfil para aparecer nas buscas locais.",
      features: [
        "Configuração completa",
        "Gestão de avaliações",
        "Posts regulares",
        "Relatórios de desempenho"
      ]
    },
    {
      icon: BarChart3,
      title: "Rastreamento de Dados",
      slug: "rastreamento-de-dados",
      description: "Análise detalhada do comportamento dos usuários para otimizar resultados.",
      features: [
        "Google Analytics 4",
        "Facebook Pixel",
        "Relatórios personalizados",
        "Insights estratégicos"
      ]
    }
  ];

  const handleCTAClick = () => {
    trackClick("Services", "Click Comecar Projeto Pacote Completo", "#contato");
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-title mb-4">
            Serviços de Marketing Digital em Serra ES
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-work-sans">
            Soluções completas de <strong>criação de sites, SEO e Google Meu Negócio</strong> pensadas para 
            <a href="#sobre" className="text-accent font-medium hover:underline"> pequenos empreendedores do Espírito Santo.</a>
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <a 
              key={index}
              href={`/servicos/${service.slug}`}
              className="bg-card border border-accent/70 rounded-2xl p-8 hover-glow transition-all duration-300 group flex flex-col no-underline text-current"
              onClick={() => trackClick("Service Card", `Click ${service.title}`, `/servicos/${service.slug}`)}
            >
              {/* Ícone */}
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-montserrat font-bold text-title mb-3">
                {service.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 font-work-sans flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botão Saiba Mais */}
              <div className="mt-auto">
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Saiba Mais <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </a>
          ))}
        </div>

        {/* Seção de destaque */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12">
          {/* Imagem de fundo */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src={fullpackImageSrc} 
              alt="Pacote Completo de Digitalização da 100:1 - Marketing Digital em Serra ES" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-title mb-4">
              Pacote Completo de Digitalização
            </h3>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Transforme sua presença online com nossa solução completa. 
              <span className="text-accent font-semibold"> Otimize seu tempo e investimento</span> ao integrar todos os serviços que seu negócio precisa para crescer de forma sustentável.
            </p>
            
            <div className="flex justify-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg hover-glow"
                onClick={handleCTAClick}
              >
                Começar Meu Projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
