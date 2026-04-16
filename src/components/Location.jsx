import { MapPin, Clock, Phone } from './Icons';

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>Venha nos visitar</h2>
            <p className="location-text">
              Estamos localizados no coração de Promissão, prontos para te receber com um café e as melhores roupas para seu pequeno.
            </p>

            <div className="info-cards">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Endereço</h4>
                  <p>Rua Érico de Abreu Sodré, 125<br />Centro, Promissão - SP</p>
                </div>
              </div>
              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h4>Horário</h4>
                  <p>Segunda a Sexta: 09h às 18h<br />Sábado: 09h às 13h</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Telefone</h4>
                  <p>(14) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.411655615783!2d-49.85876542471569!3d-21.432651480164624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496695368a5c363%3A0x6e6e6e6e6e6e6e6e!2sR.%20%C3%89rico%20de%20Abreu%20Sodr%C3%A9%2C%20125%20-%20Centro%2C%20Promiss%C3%A3o%20-%20SP%2C%2016370-000!5e0!3m2!1spt-BR!2sbr!4v1713200000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '30px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
