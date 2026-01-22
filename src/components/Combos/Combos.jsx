import './Combos.css';
import combo1Image from '../../assets/fotosFiness/1200x1200--6--vtp06is6pe.webp';
import combo2Image from '../../assets/fotosFiness/306525.webp';
import combo3Image from '../../assets/fotosFiness/380ef9e12a5d270bf1dbab37afc69e7b_f3190348-e15e-4a5c-b963-8dd6fbc8259e.webp';

const Combos = () => {
  const combos = [
    {
      id: 1,
      nome: 'COMBO ELITE',
      itens: ['Camiseta Performance', 'Shorts Training', 'Legging Premium'],
      preco: 'R$ 249,90',
      precoOriginal: 'R$ 357,00',
      desconto: '30% OFF',
      popular: true,
      imagem: combo1Image,
      economia: 'Economize R$ 107,10'
    },
    {
      id: 2,
      nome: 'COMBO POWER',
      itens: ['Top Esportivo', 'Legging Premium', 'Moletom Elite'],
      preco: 'R$ 299,90',
      precoOriginal: 'R$ 399,70',
      desconto: '25% OFF',
      popular: false,
      imagem: combo2Image,
      economia: 'Economize R$ 99,80'
    },
    {
      id: 3,
      nome: 'COMBO COMPLETO',
      itens: ['Kit Completo 5 Peças', 'Acessórios Premium', 'Garantia Estendida'],
      preco: 'R$ 449,90',
      precoOriginal: 'R$ 692,30',
      desconto: '35% OFF',
      popular: false,
      imagem: combo3Image,
      economia: 'Economize R$ 242,40'
    }
  ];

  return (
    <section id="combos" className="combos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">COMBOS EXCLUSIVOS</h2>
          <p className="section-subtitle">Economize com nossos combos especiais</p>
        </div>
        <div className="combos-grid">
          {combos.map((combo) => (
            <div key={combo.id} className={`combo-card ${combo.popular ? 'popular' : ''}`}>
              {combo.popular && (
                <div className="combo-popular">
                  <span className="popular-icon">⭐</span>
                  <span>MAIS POPULAR</span>
                </div>
              )}
              <div className="combo-image-wrapper">
                <div className="combo-image">
                  <img src={combo.imagem} alt={combo.nome} />
                </div>
                <div className="combo-badge-desconto">
                  <span className="desconto-value">{combo.desconto}</span>
                </div>
              </div>
              <div className="combo-content">
                <div className="combo-header">
                  <h3 className="combo-nome">{combo.nome}</h3>
                </div>
                <div className="combo-economia">
                  <span className="economia-text">{combo.economia}</span>
                </div>
                <ul className="combo-itens">
                  {combo.itens.map((item, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="combo-preco-wrapper">
                  <div className="combo-preco-label">Por apenas</div>
                  <div className="combo-preco-original">{combo.precoOriginal}</div>
                  <div className="combo-preco">{combo.preco}</div>
                </div>
                <button className="combo-btn">
                  <span>GARANTIR AGORA</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;
