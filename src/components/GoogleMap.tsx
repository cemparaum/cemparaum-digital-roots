import { MapPin } from "lucide-react";

const GoogleMap = () => {
  return (
    <section className="py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-montserrat font-bold text-title mb-4">
            Nossa Localização em Serra ES
          </h3>
          <p className="text-foreground/80 font-work-sans">
            Visite nossa agência de marketing digital no Espírito Santo
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8751853654896!2d-40.2638879!3d-20.1286111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzQzLjAiUyA0MMKwMTUnNTAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1695000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da 100:1 Agência Digital em Serra ES - Av. Eucalipto 764, Vista da Serra 2"
            className="w-full"
          />
        </div>
        
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 text-foreground/80">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-work-sans">
              Av. Eucalipto 764, Vista da Serra 2 - Serra/ES - CEP: 29176-790
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;