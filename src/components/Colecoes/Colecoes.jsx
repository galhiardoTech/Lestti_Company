import './Colecoes.css';
import config from '../../data/config.json';
import colecao1 from '../../assets/fotosLooks/shorts06.png';
import colecao2 from '../../assets/fotosLooks/macacaoCurto09.png';
import colecao3 from '../../assets/fotosLooks/topCalca09.png';

const Colecoes = () => {
  const phoneNumber = config.whatsapp.numero;
  
  const colecoes = [
    { id: 1, nome: 'PERFORMANCE', descricao: 'Para treinos intensos', imagem: colecao1 },
    { id: 2, nome: 'ELITE', descricao: 'Linha premium exclusiva', imagem: colecao2 },
    { id: 3, nome: 'ESSENTIAL', descricao: 'Essenciais do dia a dia', imagem: colecao3 }
  ];

  // Função para gerar mensagem do WhatsApp para coleção
  const handleWhatsAppColecao = (colecao) => {
    let mensagem = `*Olá, Lestti Company!*\n\n`;
    mensagem += `Tenho interesse na coleção:\n\n`;
    mensagem += `*Coleção:* ${colecao.nome}\n`;
    mensagem += `*Descrição:* ${colecao.descricao}\n`;
    mensagem += `\n--------------------------------\n`;
    mensagem += `*Quero ver os produtos desta coleção!*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              <img src={colecao.imagem} alt={colecao.nome} loading="lazy" className="colecao-image" />
              <div className="colecao-content">
                <h3 className="colecao-nome">{colecao.nome}</h3>
                <p className="colecao-descricao">{colecao.descricao}</p>
                <button 
                  className="colecao-btn"
                  onClick={() => handleWhatsAppColecao(colecao)}
                >
                  VER COLECÃO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colecoes;
