import './Colecoes.css';
import colecao1 from '../../assets/fotosFiness/images (1).jpg';
import colecao2 from '../../assets/fotosFiness/images.jpg';
import colecao3 from '../../assets/fotosFiness/Moda-Fitness-2024-Imagem-Youfit-Aju.jpg';

const Colecoes = () => {
  const colecoes = [
    { id: 1, nome: 'PERFORMANCE', descricao: 'Para treinos intensos', imagem: colecao1 },
    { id: 2, nome: 'ELITE', descricao: 'Linha premium exclusiva', imagem: colecao2 },
    { id: 3, nome: 'ESSENTIAL', descricao: 'Essenciais do dia a dia', imagem: colecao3 }
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
