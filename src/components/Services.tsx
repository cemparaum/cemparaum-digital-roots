import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Search, 
  MapPin, 
  BarChart3, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Criação de Sites",
      description: "Sites modernos, responsivos e otimizados que convertem visitantes em clientes.",
      features: [
        "Design responsivo e moderno",
        "Otimização para conversão",
        "Carregamento ultrarrápido",
        "SEO básico incluído"
      ],
      price: "A partir de R$ 997"
    },
    {
      icon: Search,
      title: "SEO Profissional",
      description: "Posicione seu negócio no topo do Google e aumente sua visibilidade online.",
      features: [
        "Análise de palavras-chave",
        "Otimização on-page",
        "Link building estratégico",
        "Relatórios mensais"
      ],
      price: "A partir de R$ 497/mês"
    },
    {
      icon: MapPin,
      title: "Google Meu Negócio",
      description: "Otimização completa do seu perfil para aparecer nas buscas locais.",
      features: [
        "Configuração completa",
        "Gestão de avaliações",
        "Posts regulares",
        "Relatórios de desempenho"
      ],
      price: "A partir de R$ 297/mês"
    },
    {
      icon: BarChart3,
      title: "Rastreio de Dados",
      description: "Análise detalhada do comportamento dos usuários para otimizar resultados.",
      features: [
        "Google Analytics 4",
        "Facebook Pixel",
        "Relatórios personalizados",
        "Insights estratégicos"
      ],
      price: "A partir de R$ 197/mês"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-title mb-4">
            Nossos Serviços
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-work-sans">
            Soluções completas de marketing digital pensadas especialmente para 
            <span className="text-accent font-medium"> pequenos empreendedores</span> que querem crescer online.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover-glow transition-all duration-300 group"
            >
              {/* Ícone */}
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-montserrat font-bold text-title mb-3">
                {service.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 font-work-sans">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Preço */}
              <div className="text-accent font-bold text-lg mb-6">
                {service.price}
              </div>

              {/* Botão */}
              <Button 
                className="w-full bg-accent/10 hover:bg-accent text-accent hover:text-accent-foreground border border-accent/20"
                variant="outline"
              >
                Saber Mais
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Seção de destaque */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12">
          {/* Imagem de fundo */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src={servicesImage} 
              alt="Serviços digitais da 100:1" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-title mb-4">
              Pacote Completo de Digitalização
            </h3>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Tenha todos os serviços integrados com desconto especial. 
              <span className="text-accent font-semibold"> Economia de até 30%</span> contratando o pacote completo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg hover-glow"
              >
                Ver Pacote Completo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-accent">R$ 1.497/mês</div>
                <div className="text-sm text-foreground/70">Em vez de R$ 1.988/mês</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;