import './Lancamentos.css';

const Lancamentos = () => {
  return (
    <section id="lancamentos" className="lancamentos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">LANÇAMENTOS</h2>
          <p className="section-subtitle">Novidades que chegaram para revolucionar seus treinos</p>
        </div>
        <div className="lancamentos-banner">
          <img 
            src="https://picsum.photos/1200/600?random=500" 
            alt="Lançamentos"
            className="banner-background-image"
          />
          <div className="banner-content">
            <span className="banner-badge">NOVO</span>
            <h3>COLEÇÃO PREMIUM 2024</h3>
            <p>Tecnologia de ponta em cada peça. Design exclusivo para quem busca excelência.</p>
            <a href="#produtos" className="banner-btn">EXPLORAR NOVIDADES</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lancamentos;
