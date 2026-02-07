import { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fecha o menu ao clicar fora ou rolar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se clicar no overlay ou fora dos items, fecha
      if (isMenuOpen && !event.target.closest('.menu-items') && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Usamos mousedown para detectar clique fora mais rápido
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  // Função para abrir/fechar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Trava o scroll do corpo do site quando o menu está aberto no mobile
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  // Função para forçar fechamento
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Navegação suave com fechamento do menu
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    const element = document.querySelector(targetId);
    
    if (element) {
      // Calcula altura do menu para compensar o scroll
      const menuHeight = document.querySelector('.menu')?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - menuHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`menu ${isScrolled ? 'scrolled' : ''}`}>
      {/* Overlay Escuro (Fundo) - Só aparece no Mobile */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
      
      <div className="menu-container">
        {/* Topo: Logo + Botão Hamburger */}
        <div className="menu-top-bar">
          <a href="#inicio" className="menu-logo" onClick={(e) => handleNavClick(e, '#inicio')}>
            {/* Certifique-se que o caminho da imagem está correto na sua pasta public */}
            <img src="/logo_lestti_company_branca.svg" alt="Lestti Company" />
          </a>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span><span></span><span></span>
            </span>
          </button>
        </div>

        {/* Linha Divisória (Aparece apenas no Desktop via CSS) */}
        <div className="menu-divider"></div>

        {/* LINKS DE NAVEGAÇÃO 
           No Mobile: position: fixed (Sidebar)
           No Desktop: position: static (Flex Row)
        */}
        <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <a href="#inicio" className="menu-link default" onClick={(e) => handleNavClick(e, '#inicio')}>
            INÍCIO
          </a>
          
          <a href="#produtos" className="menu-link green-btn" onClick={(e) => handleNavClick(e, '#produtos')}>
            PRODUTOS
          </a>
          
          <a href="#colecoes" className="menu-link default" onClick={(e) => handleNavClick(e, '#colecoes')}>
            COLEÇÕES
          </a>
          
          <a href="#lancamentos" className="menu-link default" onClick={(e) => handleNavClick(e, '#lancamentos')}>
            LANÇAMENTOS <span className="badge green">NOVO</span>
          </a>
          
          <a href="#combos" className="menu-link purple-btn" onClick={(e) => handleNavClick(e, '#combos')}>
            COMBOS <span className="badge transparent">OFERTA</span>
          </a>
          
          <a href="#contato" className="menu-link green-btn" onClick={(e) => handleNavClick(e, '#contato')}>
            CONTATO
          </a>
          
        </div>
      </div>
    </nav>
  );
};

export default Menu;