import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      business: "Loja de Roupas Femininas",
      location: "Vila Velha, ES",
      text: "A 100:1 transformou minha pequena loja em um negócio digital de sucesso. Em 3 meses, minhas vendas online triplicaram!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      business: "Oficina Mecânica",
      location: "Serra, ES", 
      text: "Eles não apenas criaram meu site, mas se tornaram parceiros reais. O suporte é excepcional e os resultados apareceram rapidamente.",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      business: "Consultório Odontológico",
      location: "Vitória, ES",
      text: "Profissionais incríveis! Me ajudaram a entender o mundo digital de forma simples e consegui atrair muito mais pacientes.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Carlos Mendes",
      business: "Restaurante",
      location: "Cariacica, ES",
      text: "O Google Meu Negócio que eles configuraram fez meu restaurante aparecer nas buscas. Agora recebo clientes todos os dias!",
      rating: 5,
      avatar: "CM"
    }
  ];

  const stats = [
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "150%", label: "Aumento Médio em Vendas" },
    { number: "30 dias", label: "Para Ver Resultados" },
    { number: "24/7", label: "Suporte Disponível" }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-title mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-work-sans">
            Histórias reais de empreendedores que transformaram seus negócios 
            <span className="text-accent font-medium"> com nossa ajuda</span>.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/70 font-work-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover-glow group relative"
            >
              {/* Ícone de aspas */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Texto do depoimento */}
              <p className="text-foreground/90 mb-6 font-work-sans text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Informações do cliente */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                
                {/* Info */}
                <div>
                  <div className="font-semibold text-title font-montserrat">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {testimonial.business}
                  </div>
                  <div className="text-xs text-accent">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold text-title mb-4">
              Quer Ser o Próximo Caso de Sucesso?
            </h3>
            <p className="text-foreground/80 mb-6 font-work-sans">
              Junte-se a centenas de empreendedores que já transformaram seus negócios conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg hover-glow transition-all">
                Quero Meu Depoimento Aqui
              </button>
              <button className="border border-accent/30 text-accent hover:bg-accent/10 font-semibold px-8 py-4 rounded-lg transition-all">
                Ver Mais Cases
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;