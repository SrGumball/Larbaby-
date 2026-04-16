import { Heart, Home } from './Icons';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container">
            <img src="/assets/girl-premium.png" alt="Sobre Lar Baby" className="about-img" />
            <div className="exp-card">
              <span className="exp-num">100%</span>
              <span className="exp-text">Dedicado ao Carinho</span>
            </div>
          </div>

          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>Nossa História</h2>
            <p className="about-text">
              A <strong>Lar Baby</strong> nasceu do desejo de trazer para Promissão o que há de melhor no universo infantil. Acreditamos que cada peça de roupa conta uma história e deve refletir o amor e o cuidado que temos com nossas crianças.
            </p>
            <p className="about-text">
              Nossa curadoria é feita pensando no conforto absoluto para brincar e no estilo necessário para os momentos especiais. Somos mais que uma loja; somos parceiros dos pais que buscam excelência e um atendimento próximo e humanizado.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon pink"><Heart size={24} /></div>
                <div>
                  <h4>Curadoria Afetiva</h4>
                  <p>Peças escolhidas a dedo com foco na qualidade.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon blue"><Home size={24} /></div>
                <div>
                  <h4>Loja Local</h4>
                  <p>Estamos no coração de Promissão esperando por você.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
