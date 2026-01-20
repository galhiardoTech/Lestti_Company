import './Produtos.css';

const Produtos = () => {
  const produtos = [
    { id: 1, nome: 'Camiseta Performance', preco: 'R$ 89,90', imagem: 'https://picsum.photos/400/500?random=10', novo: false },
    { id: 2, nome: 'Shorts Training', preco: 'R$ 79,90', imagem: 'https://picsum.photos/400/500?random=20', novo: true },
    { id: 3, nome: 'Legging Premium', preco: 'R$ 129,90', imagem: 'https://picsum.photos/400/500?random=30', novo: false },
    { id: 4, nome: 'Top Esportivo', preco: 'R$ 69,90', imagem: 'https://picsum.photos/400/500?random=40', novo: true },
    { id: 5, nome: 'Moletom Elite', preco: 'R$ 159,90', imagem: 'https://picsum.photos/400/500?random=50', novo: false },
    { id: 6, nome: 'Calça Jogger', preco: 'R$ 119,90', imagem: 'https://picsum.photos/400/500?random=60', novo: false },
  ];

  return (
    <section id="produtos" className="produtos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PRODUTOS</h2>
          <p className="section-subtitle">Resistência e Design em cada costura</p>
        </div>
        <div className="produtos-grid">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto-card">
              {produto.novo && (
                <span className="produto-badge">NOVO</span>
              )}
              <div className="produto-image">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <div className="produto-info">
                <h3 className="produto-nome">{produto.nome}</h3>
                <p className="produto-preco">{produto.preco}</p>
                <button className="produto-btn">VER DETALHES</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;
