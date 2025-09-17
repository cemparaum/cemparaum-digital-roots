import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Instagram,
  Linkedin
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone & WhatsApp",
      info: "(27) 9 9999-9999",
      action: "tel:+5527999999999"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@cemparaum.com.br",
      action: "mailto:contato@cemparaum.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Eucalipto 764, Vista da Serra 2 - Serra/ES",
      action: "https://maps.google.com/search/Av.+Eucalipto+764+Serra+ES"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda a Sexta: 8h às 18h",
      action: null
    }
  ];

  const socialLinks = [
    { icon: MessageCircle, name: "WhatsApp", color: "text-green-500" },
    { icon: Instagram, name: "Instagram", color: "text-pink-500" },
    { icon: Linkedin, name: "LinkedIn", color: "text-blue-500" }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-title mb-4">
            Vamos Conversar?
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-work-sans">
            Estamos prontos para ouvir sua ideia e transformá-la em 
            <span className="text-accent font-medium"> resultados digitais</span>. 
            Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-title mb-4">
                Envie sua Mensagem
              </h3>
              <p className="text-foreground/80 font-work-sans">
                Preencha o formulário abaixo e entraremos em contato em até 24 horas.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-title mb-2">
                    Nome *
                  </label>
                  <Input 
                    placeholder="Seu nome completo"
                    className="bg-card/50 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-title mb-2">
                    Empresa
                  </label>
                  <Input 
                    placeholder="Nome da sua empresa"
                    className="bg-card/50 border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-title mb-2">
                    E-mail *
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-card/50 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-title mb-2">
                    Telefone *
                  </label>
                  <Input 
                    placeholder="(27) 9 9999-9999"
                    className="bg-card/50 border-border focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  Serviço de Interesse
                </label>
                <select className="w-full p-3 bg-card/50 border border-border rounded-lg focus:border-accent focus:outline-none text-foreground">
                  <option value="">Selecione um serviço</option>
                  <option value="site">Criação de Site</option>
                  <option value="seo">SEO</option>
                  <option value="gmb">Google Meu Negócio</option>
                  <option value="analytics">Rastreio de Dados</option>
                  <option value="completo">Pacote Completo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  Mensagem *
                </label>
                <Textarea 
                  placeholder="Conte-nos sobre seu projeto e objetivos..."
                  className="bg-card/50 border-border focus:border-accent min-h-32"
                />
              </div>

              <Button 
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 hover-glow"
              >
                <Send className="mr-2 w-5 h-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-title mb-4">
                Informações de Contato
              </h3>
              <p className="text-foreground/80 font-work-sans">
                Prefere falar diretamente? Use uma das opções abaixo:
              </p>
            </div>

            {/* Cards de contato */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card/50 border border-border rounded-xl p-6 hover-glow group cursor-pointer"
                  onClick={() => item.action && window.open(item.action, '_blank')}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-title font-montserrat mb-1">
                        {item.title}
                      </h4>
                      <p className="text-foreground/80 font-work-sans">
                        {item.info}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div>
              <h4 className="font-semibold text-title font-montserrat mb-4">
                Nos Siga nas Redes Sociais
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button 
                    key={index}
                    className="w-12 h-12 bg-card/50 border border-border rounded-lg flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all hover-glow"
                  >
                    <social.icon className={`w-6 h-6 ${social.color}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Call to action especial */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6">
              <h4 className="font-semibold text-title font-montserrat mb-2">
                Atendimento Prioritário
              </h4>
              <p className="text-sm text-foreground/80 mb-4 font-work-sans">
                Precisa de uma resposta urgente? Chame no WhatsApp e fale diretamente conosco!
              </p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/5527999999999?text=Olá! Gostaria de saber mais sobre os serviços da 100:1', '_blank')}
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;