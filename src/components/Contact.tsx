import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client'; // Importa o cliente Supabase
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
import { trackLeadGeneration, trackClick } from '@/utils/dataLayer'; // Import our tracking functions

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone & WhatsApp",
      info: "(27) 9 9999-9999",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@cemparaum.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Eucalipto 764, Vista da Serra 2 - Serra/ES",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda a Sexta: 8h às 18h",
    }
  ];

  const socialLinks = [
    { icon: MessageCircle, name: "WhatsApp", color: "text-green-500", eventName: "Click Social WhatsApp", href: "https://wa.me/5527999999999" },
    { icon: Instagram, name: "Instagram", color: "text-pink-500", eventName: "Click Social Instagram", href: "https://instagram.com" },
    { icon: Linkedin, name: "LinkedIn", color: "text-blue-500", eventName: "Click Social LinkedIn", href: "https://linkedin.com" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setFeedbackMessage('');

    const formData = { name, company, email, phone, service, message };

    // Salva diretamente no Supabase
    const { error } = await supabase
      .from('contacts')
      .insert([formData]);

    if (error) {
      console.error('Supabase Error:', error);
      setStatus('error');
      setFeedbackMessage(`Erro ao salvar seus dados: ${error.message}. Por favor, tente novamente.`);
    } else {
      setStatus('success');
      setFeedbackMessage('Obrigado pelo seu contato! Retornaremos em breve.');
      
      // --- TRACK CONVERSION ---
      trackLeadGeneration({
        name, 
        email, 
        phone, 
        company, 
        service 
      });
      
      // Limpar o formulário
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setService('');
      setMessage('');
    }
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-title mb-4">
            Vamos Conversar? - Contato 100:1 Serra ES
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-work-sans">
            <strong>Agência de marketing digital em Serra ES</strong> pronta para ouvir sua ideia e transformá-la em resultados. 
            <span className="text-accent font-medium"> Entre em contato conosco!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-title mb-4">
                Envie sua Mensagem
              </h3>
              <p className="text-foreground/80 font-work-sans">
                Preencha o formulário abaixo e nossa equipe entrará em contato.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-title mb-2">Nome *</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" className="bg-card/50 border-border focus:border-accent" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-title mb-2">Empresa</label>
                  <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nome da sua empresa" className="bg-card/50 border-border focus:border-accent" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-title mb-2">E-mail *</label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className="bg-card/50 border-border focus:border-accent" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-title mb-2">Telefone *</label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(27) 9 9999-9999" className="bg-card/50 border-border focus:border-accent" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-title mb-2">Serviço de Interesse</label>
                <select value={service} onChange={(e) => setService(e.target.value)} className="w-full p-3 bg-card/50 border border-border rounded-lg focus:border-accent focus:outline-none text-foreground">
                  <option value="">Selecione um serviço</option>
                  <option value="site">Criação de Site</option>
                  <option value="seo">SEO</option>
                  <option value="gmb">Google Meu Negócio</option>
                  <option value="analytics">Rastreamento de Dados</option>
                  <option value="completo">Pacote Completo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-title mb-2">Mensagem *</label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Conte-nos sobre seu projeto e objetivos..." className="bg-card/50 border-border focus:border-accent min-h-32" required />
              </div>
              {feedbackMessage && <div className={`p-4 rounded-md text-sm ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{feedbackMessage}</div>}
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 hover-glow" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : <><Send className="mr-2 w-5 h-5" /> Enviar Mensagem</>}
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-title mb-4">Informações de Contato</h3>
              <p className="text-foreground/80 font-work-sans">Prefere falar diretamente? Use uma das opções abaixo:</p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-card/50 border border-border rounded-xl p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center transition-colors">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-title font-montserrat mb-1">{item.title}</h4>
                      <p className="text-foreground/80 font-work-sans">{item.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-title font-montserrat mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick('Social', social.eventName, social.href)}
                    className="w-12 h-12 bg-card/50 border border-border rounded-lg flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all hover-glow"
                    aria-label={`Visite nosso ${social.name}`}
                  >
                    <social.icon className={`w-6 h-6 ${social.color}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
