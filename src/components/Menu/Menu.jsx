import { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-container') && !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    // Detectar scroll para mudar estilo do menu
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevenir scroll do body quando menu está aberto
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const menuHeight = document.querySelector('.menu')?.offsetHeight || 100;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - menuHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`menu ${isScrolled ? 'scrolled' : ''}`} id="menu">
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
      <div className="menu-container">
        <div className="menu-header">
          <a 
            href="#inicio" 
            className="menu-logo" 
            onClick={(e) => handleNavClick(e, '#inicio')}
          >
            <img src="/logo_lestti_company_branca.svg" alt="Logo Lestti Company" />
          </a>
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-items"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <hr className="menu-divider" />
        <div 
          id="menu-items"
          className={`menu-items ${isMenuOpen ? 'open' : ''}`}
        >
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')} 
            className="menu-link"
          >
            <span>Início</span>
          </a>
          <a 
            href="#produtos" 
            onClick={(e) => handleNavClick(e, '#produtos')} 
            className="menu-link highlight"
          >
            <span>Produtos</span>
          </a>
          <a 
            href="#colecoes" 
            onClick={(e) => handleNavClick(e, '#colecoes')} 
            className="menu-link"
          >
            <span>Coleções</span>
          </a>
          <a 
            href="#lancamentos" 
            onClick={(e) => handleNavClick(e, '#lancamentos')} 
            className="menu-link new"
          >
            <span>Lançamentos</span>
            <span className="badge">Novo</span>
          </a>
          <a 
            href="#combos" 
            onClick={(e) => handleNavClick(e, '#combos')} 
            className="menu-link cta"
          >
            <span>Combos</span>
            <span className="badge">Oferta</span>
          </a>
          <a 
            href="#contato" 
            onClick={(e) => handleNavClick(e, '#contato')} 
            className="menu-link contact"
          >
            <span>Contato</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
