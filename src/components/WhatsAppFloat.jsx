import { MessageCircle } from './Icons';

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/5514999999999" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={30} />
      <span className="tooltip">Fale Conosco!</span>
    </a>
  );
};

export default WhatsAppFloat;
