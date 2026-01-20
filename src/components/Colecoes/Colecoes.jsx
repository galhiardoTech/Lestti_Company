import './Colecoes.css';

const Colecoes = () => {
  const colecoes = [
    { id: 1, nome: 'PERFORMANCE', descricao: 'Para treinos intensos', imagem: 'https://picsum.photos/600/400?random=100' },
    { id: 2, nome: 'ELITE', descricao: 'Linha premium exclusiva', imagem: 'https://picsum.photos/600/400?random=200' },
    { id: 3, nome: 'ESSENTIAL', descricao: 'Essenciais do dia a dia', imagem: 'https://picsum.photos/600/400?random=300' }
  ];

  return (
    <section id="colecoes" className="colecoes">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">COLEÇÕES</h2>
          <p className="section-subtitle">Cada coleção foi pensada para um momento especial</p>
        </div>
        <div className="colecoes-grid">
          {colecoes.map((colecao) => (
            <div key={colecao.id} className="colecao-card">
              <img src={colecao.imagem} alt={colecao.nome} className="colecao-image" />
              <div className="colecao-content">
                <h3 className="colecao-nome">{colecao.nome}</h3>
                <p className="colecao-descricao">{colecao.descricao}</p>
                <a href="#produtos" className="colecao-btn">VER COLECÃO</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colecoes;
