import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-title mb-4">
            Nossas Parcerias
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-work-sans mb-8">
            Conheça histórias de quem já está construindo o futuro conosco.
          </p>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto font-work-sans">
            Nossos clientes são nossos melhores portfólios. Por sermos uma empresa em crescimento, 
            nosso foco está em construir cada case de sucesso com a dedicação de quem se importa de verdade. 
            <span className="text-accent font-medium"> O próximo depoimento pode ser o seu.</span>
          </p>
        </div>

        {/* Call to action principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-title mb-6">
              Vamos Construir o Futuro Juntos?
            </h3>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-work-sans">
              Junte-se aos empreendedores que já confiam na nossa parceria. 
              <span className="text-accent font-medium"> Queremos que sua história seja a próxima a ser contada aqui.</span>
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg hover-glow"
            >
              Começar Meu Projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;