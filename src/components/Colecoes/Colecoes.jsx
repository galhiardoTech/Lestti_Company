import './Colecoes.css';
import config from '../../data/config.json';

const Colecoes = () => {
  const phoneNumber = config.whatsapp.numero;
  
  // Atualizado para usar os caminhos da pasta public/fotosLooks/
  const colecoes = [
    { id: 1, nome: 'PERFORMANCE', descricao: 'Para treinos intensos', imagem: '/fotosLooks/shorts06.png' },
    { id: 2, nome: 'ELITE', descricao: 'Linha premium exclusiva', imagem: '/fotosLooks/macacaoCurto09.png' },
    { id: 3, nome: 'ESSENTIAL', descricao: 'Essenciais do dia a dia', imagem: '/fotosLooks/topCalca09.png' }
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
              <img 
                src={colecao.imagem} 
                alt={colecao.nome} 
                loading="lazy" 
                className="colecao-image" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x500?text=Lestti+Company";
                }}
              />
              <div className="colecao-content">
                <h3 className="colecao-nome">{colecao.nome}</h3>
                <p className="colecao-descricao">{colecao.descricao}</p>
                <button 
                  className="colecao-btn"
                  onClick={() => handleWhatsAppColecao(colecao)}
                >
                  VER COLEÇÃO
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