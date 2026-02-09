import './Lancamentos.css';
import config from '../../data/config.json';
import lancamentoImage from '../../assets/fotosLooks/topCalca07.png';

const Lancamentos = () => {
  const phoneNumber = config.whatsapp.numero;

  // Função para gerar mensagem do WhatsApp para lançamentos
  const handleWhatsAppLancamentos = () => {
    let mensagem = `*Olá, Lestti Company!*\n\n`;
    mensagem += `Tenho interesse em:\n\n`;
    mensagem += `*Coleção Premium 2026*\n`;
    mensagem += `Novidades que chegaram para revolucionar seus treinos\n`;
    mensagem += `\n--------------------------------\n`;
    mensagem += `*Quero explorar as novidades!*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="lancamentos" className="lancamentos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">LANÇAMENTOS</h2>
          <p className="section-subtitle">Novidades que chegaram para revolucionar seus treinos</p>
        </div>
        <div className="lancamentos-banner">
          <img 
            src={lancamentoImage} 
            alt="Lançamentos"
            className="banner-background-image"
            loading='lazy'
          />
          <div className="banner-content">
            <span className="banner-badge">NOVO</span>
            <h3>COLEÇÃO PREMIUM 2026</h3>
            <p>Tecnologia de ponta em cada peça. Design exclusivo para quem busca excelência.</p>
            <button 
              className="banner-btn"
              onClick={handleWhatsAppLancamentos}
            >
              EXPLORAR NOVIDADES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lancamentos;
