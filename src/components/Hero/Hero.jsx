import { useEffect, useState } from 'react';
import './Hero.css';
import heroImage from '../../assets/fotosFiness/mulher-com-conjunto-de-moda-fitness-branco.webp';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              <span className="feature-icon">⚡</span>
              <span className="feature-text">Tecnologia Dry-Fit</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span className="feature-text">Conforto Extremo</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💪</span>
              <span className="feature-text">Performance Máxima</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#produtos" className="btn btn-primary">
              <span>EXPLORAR PRODUTOS</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#combos" className="btn btn-secondary">
              <span>VER COMBOS</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>

          {/* Estatísticas Sociais */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Produtos Premium</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Avaliação Média</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Treino com estilo - Conjunto fitness branco Lestti Company"
            className="hero-main-image"
            loading="eager"
          />

          {/* Badge "NOVO" */}
          <div className="hero-badge">
            <span>NOVO</span>
          </div>

          {/* Elementos decorativos */}
          <div className="hero-decoration hero-decoration-1"></div>
          <div className="hero-decoration hero-decoration-2"></div>
          <div className="hero-decoration hero-decoration-3"></div>
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
