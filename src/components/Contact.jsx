import { MessageCircle, Instagram, Facebook, Phone } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <h2 className="cta-title">Pronta para ver seu filho ainda mais lindo?</h2>
            <p className="cta-text">
              Fale agora mesmo com nossa equipe pelo WhatsApp. Tire dúvidas sobre tamanhos, cores e disponibilidade.
            </p>
            <div className="cta-btns">
              <a href="https://wa.me/5514999999999" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp-large">
                <MessageCircle size={24} /> Chamar no WhatsApp
              </a>
              <div className="social-row">
                <a href="#" className="social-icon"><Instagram size={24} /></a>
                <a href="#" className="social-icon"><Facebook size={24} /></a>
                <a href="tel:5514999999999" className="social-icon"><Phone size={24} /></a>
              </div>
            </div>
          </div>
          <div className="contact-visual">
             <div className="circle circle-1"></div>
             <div className="circle circle-2"></div>
             <MessageCircle size={100} className="floating-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
