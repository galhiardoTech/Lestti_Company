import { useEffect, useState } from 'react';
import './Hero.css';
import { Zap, Target, Dumbbell } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Função para scroll suave até a seção
  const handleScrollTo = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
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
    <section id="inicio" className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">TREINE COM</span>
            <span className="title-line highlight">ESTILO</span>
            <span className="title-line">VENÇA COM</span>
            <span className="title-line highlight">CONFORTO</span>
          </h1>
          <p className="hero-subtitle">
            Feito para quem não para. O outfit do seu próximo nível.
          </p>

          {/* Indicadores de Benefícios */}
          <div className="hero-features">
            <div className="feature-item">
              <Zap className="feature-icon" size={20} />
              <span className="feature-text">Tecnologia Dry-Fit</span>
            </div>
            <div className="feature-item">
              <Target className="feature-icon" size={20} />
              <span className="feature-text">Conforto Extremo</span>
            </div>
            <div className="feature-item">
              <Dumbbell className="feature-icon" size={20} />
              <span className="feature-text">Performance Máxima</span>
            </div>
          </div>

          <div className="hero-cta">
            <a 
              href="#produtos" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#produtos');
              }}
            >
              <span>EXPLORAR PRODUTOS</span>
              <span className="btn-arrow">→</span>
            </a>
            <a 
              href="#combos" 
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#combos');
              }}
            >
              <span>VER COMBOS</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>

          {/* Estatísticas Sociais */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Produtos Premium</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5.0★</span>
              <span className="stat-label">Avaliação Média</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            // AGORA BUSCANDO DA PASTA PUBLIC:
            src="/fotosLooks/macacaoCurto08.png"
            alt="Treino com estilo - Conjunto fitness branco Lestti Company"
            className="hero-main-image"
            // Mantido eager para priorizar o carregamento no topo
            loading="eager"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/600x800?text=Lestti+Company";
            }}
          />

          {/* Badge "NOVO" */}
          <div className="hero-badge">
            <span>NOVO</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Role para descobrir</span>
      </div>
    </section>
  );
};

export default Hero;