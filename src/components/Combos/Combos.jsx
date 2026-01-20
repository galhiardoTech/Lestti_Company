import './Combos.css';

const Combos = () => {
  const combos = [
    {
      id: 1,
      nome: 'COMBO ELITE',
      itens: ['Camiseta + Shorts + Legging'],
      preco: 'R$ 249,90',
      desconto: '30% OFF',
      popular: true
    },
    {
      id: 2,
      nome: 'COMBO POWER',
      itens: ['Top + Legging + Moletom'],
      preco: 'R$ 299,90',
      desconto: '25% OFF',
      popular: false
    },
    {
      id: 3,
      nome: 'COMBO COMPLETO',
      itens: ['Kit Completo 5 Peças'],
      preco: 'R$ 449,90',
      desconto: '35% OFF',
      popular: false
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
                <div className="combo-popular">MAIS POPULAR</div>
              )}
              <div className="combo-header">
                <h3 className="combo-nome">{combo.nome}</h3>
                <span className="combo-desconto">{combo.desconto}</span>
              </div>
              <ul className="combo-itens">
                {combo.itens.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="combo-preco">{combo.preco}</div>
              <button className="combo-btn">GARANTIR AGORA</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;
