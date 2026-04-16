const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="logo-text">Lar <span className="logo-accent">Baby</span></h3>
            <p className="footer-desc">
              Moda infantil com amor em cada detalhe. O melhor para o seu pequeno, diretamente de Promissão - SP.
            </p>
          </div>

          <div className="footer-links">
            <h4>Páginas</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#differentials">Diferenciais</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#location">Localização</a></li>
            </ul>
          </div>

          <div className="footer-location">
            <h4>Cidade</h4>
            <p>Promissão - SP</p>
            <p>Brasil</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Lar Baby. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para os pequenos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
