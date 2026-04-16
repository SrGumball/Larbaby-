import { Instagram, MessageCircle, ChevronDown } from './Icons';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid container">
        <div className="hero-content fade-in">
          <span className="badge">Moda Infantil Premium</span>
          <h1 className="hero-title">
            Roupas infantis com <br />
            <span className="text-gradient">estilo, conforto e carinho</span>
          </h1>
          <p className="hero-subtitle">
            Para quem quer ver seu filho bem vestido em todos os momentos. 
            Moda pensada com amor para os pequenos de Promissão e região.
          </p>
          <div className="hero-btns">
            <a href="https://wa.me/5514999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={22} /> Fale no WhatsApp
            </a>
            <a href="https://instagram.com/larbaby" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Instagram size={22} /> Ver Instagram
            </a>
          </div>
        </div>

        <div className="hero-images">
          <div className="img-card main-img">
            <img src="/assets/hero-baby.png" alt="Bebê com estilo" />
          </div>
          <div className="img-card second-img">
            <img src="/assets/girl-premium.png" alt="Criança bem vestida" />
          </div>
          <div className="floating-blob"></div>
        </div>
      </div>

      <div className="scroll-hint">
        <ChevronDown size={30} className="bounce" />
      </div>
    </section>
  );
};

export default Hero;
