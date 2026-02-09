import './Combos.css';
import { Star } from 'lucide-react';
import combosData from '../../data/combos.json';
import config from '../../data/config.json';

const Combos = () => {
  const phoneNumber = config.whatsapp.numero;

  // Gera o caminho correto para imagens dentro de src/assets
  const getImageUrl = (name) => new URL(`../../assets/fotosCombos/${name}`, import.meta.url).href;

  // Função para gerar mensagem do WhatsApp para combo
  const handleWhatsAppCombo = (combo) => {
    let mensagem = `*Olá, Lestti Company!*\n\n`;
    mensagem += `Tenho interesse no combo:\n\n`;
    mensagem += `*Combo:* ${combo.nome}\n`;
    mensagem += `*Preço:* ${combo.preco}\n`;
    mensagem += `*De:* ${combo.precoOriginal}\n`;
    mensagem += `*Desconto:* ${combo.desconto}\n`;
    mensagem += `*${combo.economia}*\n\n`;
    mensagem += `*Itens incluídos:*\n`;
    combo.itens.forEach(item => {
      mensagem += `- ${item}\n`;
    });
    if (combo.popular) {
      mensagem += `\n*MAIS POPULAR*\n`;
    }
    mensagem += `\n--------------------------------\n`;
    mensagem += `*Quero garantir este combo!*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="combos" className="combos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">COMBOS EXCLUSIVOS</h2>
          <p className="section-subtitle">Economize com nossos combos especiais</p>
        </div>
        <div className="combos-grid">
          {combosData.map((combo) => (
            <div key={combo.id} className={`combo-card ${combo.popular ? 'popular' : ''}`}>
              {combo.popular && (
                <div className="combo-popular">
                  <Star className="popular-icon" size={16} fill="currentColor" />
                  <span>MAIS POPULAR</span>
                </div>
              )}
              <div className="combo-image-wrapper">
                <div className="combo-image">
                  <img src={getImageUrl(combo.imagem)} alt={combo.nome} />
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
                <button 
                  className="combo-btn"
                  onClick={() => handleWhatsAppCombo(combo)}
                >
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
