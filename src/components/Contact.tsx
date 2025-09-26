import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
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
  Facebook
} from "lucide-react";
import { trackLeadGeneration, trackClick } from '@/utils/dataLayer';

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const contactInfo = [
    { icon: Phone, title: "Telefone & WhatsApp", info: "(27) 99527-1995", href: "https://wa.me/5527995271995", eventLabel: "Contact Info - Phone & WhatsApp" },
    { icon: Mail, title: "E-mail", info: "cemparaum@gmail.com", href: "mailto:cemparaum@gmail.com", eventLabel: "Contact Info - Email" },
    { icon: MapPin, title: "Endereço", info: "Av. Eucalipto 764, Vista da Serra 2 - Serra/ES", href: "https://www.google.com/maps/search/Av.+Eucalipto+764,+Vista+da+Serra+2+-+Serra/ES", eventLabel: "Contact Info - Address" },
    { icon: Clock, title: "Horário de Atendimento", info: "Segunda a Sexta: 8h às 18h", href: "#", eventLabel: "Contact Info - Opening Hours" }, // No direct link for opening hours
  ];

  const socialLinks = [
    { icon: MessageCircle, name: "WhatsApp", color: "text-green-500", eventName: "Click Social WhatsApp", href: "https://wa.me/5527995271995" },
    { icon: Instagram, name: "Instagram", color: "text-pink-500", eventName: "Click Social Instagram", href: "https://www.instagram.com/agenciacemparaum/" },
    { icon: Facebook, name: "Facebook", color: "text-blue-500", eventName: "Click Social Facebook", href: "https://www.facebook.com/profile.php?id=61581129239277" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setFeedbackMessage('');
    setWhatsappUrl('');

    const formData = { name, company, email, phone, service, message };

    // Track the form submission attempt
    trackClick('Contact Form', 'Attempt Submit', 'Contact Form Submission');

    const { error } = await supabase.from('contacts').insert([formData]);

    if (error) {
      console.error('Supabase Error:', error);
      setStatus('error');
      setFeedbackMessage(`Erro ao salvar seus dados: ${error.message}. Por favor, tente novamente.`);
      trackClick('Contact Form', 'Submission Error', error.message);
    } else {
      setStatus('success');
      trackLeadGeneration({ name, email, phone, company, service });

      const whatsappNumber = "5527995271995";
      const whatsappMessage = `Olá! Gostaria de um orçamento.\n\n*Nome:* ${name}\n*Empresa:* ${company || 'N/A'}\n*Email:* ${email}\n*Telefone:* ${phone}\n*Serviço de Interesse:* ${service || 'N/A'}\n\n*Mensagem:*\n${message}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      setWhatsappUrl(url);

      // Reset form fields
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
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-title mb-4">Vamos Conversar?</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-work-sans">Pronto para dar o próximo passo? Preencha o formulário e vamos construir algo incrível juntos.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-title mb-4">Envie sua Mensagem</h3>
              <p className="text-foreground/80 font-work-sans">Preencha o formulário abaixo e nossa equipe entrará em contato.</p>
            </div>

            {status === 'success' ? (
              <div className="text-center bg-green-100/60 border border-green-300 rounded-lg p-8 flex flex-col items-center">
                <h3 className="text-2xl font-montserrat font-bold text-green-900 mb-3">Obrigado!</h3>
                <p className="text-green-800/90 mb-6 max-w-sm">
                  Seus dados foram salvos. O próximo passo é nos chamar no WhatsApp para finalizarmos seu atendimento.
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
                  onClick={() => trackClick('Contact Form', 'Click WhatsApp CTA - After Submit', whatsappUrl)}
                >
                  <MessageCircle className="mr-3 w-6 h-6" />
                  Chamar no WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name-input" className="block text-sm font-medium text-title mb-2">Nome *</label>
                        <Input id="name-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" className="bg-card/50 border-border focus:border-accent" required />
                    </div>
                    <div>
                        <label htmlFor="company-input" className="block text-sm font-medium text-title mb-2">Empresa</label>
                        <Input id="company-input" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nome da sua empresa" className="bg-card/50 border-border focus:border-accent" />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email-input" className="block text-sm font-medium text-title mb-2">E-mail *</label>
                        <Input id="email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className="bg-card/50 border-border focus:border-accent" required />
                    </div>
                    <div>
                        <label htmlFor="phone-input" className="block text-sm font-medium text-title mb-2">Telefone *</label>
                        <Input id="phone-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(27) 99527-1995" className="bg-card/50 border-border focus:border-accent" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="service-select" className="block text-sm font-medium text-title mb-2">Serviço de Interesse</label>
                    <select id="service-select" value={service} onChange={(e) => setService(e.target.value)} className="w-full p-3 bg-card/50 border border-border rounded-lg focus:border-accent focus:outline-none text-foreground">
                        <option value="">Selecione um serviço</option>
                        <option value="site">Criação de Site</option>
                        <option value="seo">SEO</option>
                        <option value="gmb">Google Meu Negócio</option>
                        <option value="analytics">Rastreamento de Dados</option>
                        <option value="completo">Pacote Completo</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message-input" className="block text-sm font-medium text-title mb-2">Mensagem *</label>
                    <Textarea id="message-input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Conte-nos sobre seu projeto e objetivos..." className="bg-card/50 border-border focus:border-accent min-h-32" required />
                </div>

                {status === 'error' && <div className="p-4 rounded-md text-sm bg-red-100 text-red-800">{feedbackMessage}</div>}
                
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 hover-glow" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando...' : <><Send className="mr-2 w-5 h-5" /> Enviar Mensagem</>}
                </Button>
              </form>
            )}
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
                      {item.href && item.href !== "#" ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : "_self"}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                          className="text-foreground/80 font-work-sans hover:text-accent transition-colors"
                          onClick={() => trackClick("Contact Info", `Click - ${item.eventLabel}`, item.href)}
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-foreground/80 font-work-sans">{item.info}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold text-title font-montserrat mb-4">Siga-nos nas Redes Sociais</h3>
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
