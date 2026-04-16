import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Localização', href: '#location' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img src="/assets/logo.png" alt="Lar Baby Logo" className="logo-img" />
        </div>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5514999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            WhatsApp
          </a>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="https://wa.me/5514999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => setIsOpen(false)}>
          <MessageCircle size={20} /> Fale Conosco
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
