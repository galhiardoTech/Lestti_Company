import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
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
          <div className="hero-cta">
            <a href="#produtos" className="btn btn-primary">
              EXPLORAR PRODUTOS
            </a>
            <a href="#combos" className="btn btn-secondary">
              VER COMBOS
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://picsum.photos/600/400?random=1" 
            alt="Treino com estilo"
            className="hero-main-image"
          />
          <div className="hero-badge">
            <span>NOVO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
