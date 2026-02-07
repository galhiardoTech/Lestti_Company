import { useState, useEffect } from 'react';
import './Produtos.css';
import produtosData from '../../data/produtos.json';
import config from '../../data/config.json';
import produto1 from '../../assets/fotosFiness/conjuntomarrom1.png';
import produto2 from '../../assets/fotosFiness/180_calca_legging_ausare_cal0137_307_1_3cc24e6c6c1d3c2ec130987cc82860ac.webp';
import produto3 from '../../assets/fotosFiness/180_calca_legging_ausare_cal0157_311_1_d2f4a9b1e4589ec9c9ff589cea0c45ba.webp';
import produto4 from '../../assets/fotosFiness/306525.webp';
import produto5 from '../../assets/fotosFiness/380ef9e12a5d270bf1dbab37afc69e7b_f3190348-e15e-4a5c-b963-8dd6fbc8259e.webp';
import produto6 from '../../assets/fotosFiness/9a0094050c.webp';
import { useNavigate } from 'react-router-dom';

// Mapeamento de imagens
const imagensMap = {
  'conjuntomarrom1.png': produto1,
  '180_calca_legging_ausare_cal0137_307_1_3cc24e6c6c1d3c2ec130987cc82860ac.webp': produto2,
  '180_calca_legging_ausare_cal0157_311_1_d2f4a9b1e4589ec9c9ff589cea0c45ba.webp': produto3,
  '306525.webp': produto4,
  '380ef9e12a5d270bf1dbab37afc69e7b_f3190348-e15e-4a5c-b963-8dd6fbc8259e.webp': produto5,
  '9a0094050c.webp': produto6,
};

const Produtos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const phoneNumber = config.whatsapp.numero;

  // Mapear produtos do JSON com as imagens importadas
  const produtos = produtosData.map(produto => ({
    ...produto,
    imagem: imagensMap[produto.imagem]
  }));

 
  // Função para gerar mensagem do WhatsApp para produto
  // const handleWhatsAppProduto = (produto) => {
  //   let mensagem = `*Olá, Lestti Company!*\n\n`;
  //   mensagem += `Tenho interesse no produto:\n\n`;
  //   mensagem += `*Produto:* ${produto.nome}\n`;
  //   mensagem += `*Preço:* ${produto.preco}\n`;
  //   if (produto.novo) {
  //     mensagem += `*Status:* NOVO\n`;
  //   }
  //   mensagem += `\n--------------------------------\n`;
  //   mensagem += `*Quero garantir este produto!*`;
    
  //   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
  //   window.open(whatsappUrl, '_blank');
  // };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  const openModal = (imagem, nome) => {
    setSelectedImage({ imagem, nome });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
const navigate = useNavigate();
   const changePage = (produtoId) => {
    alert('Mudando de página para o produto: ' + produtoId);
    navigate(`/produto/${produtoId}`);

  }


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
              <div 
                className="produto-image" 
                onClick={() => openModal(produto.imagem, produto.nome)}
              >
                <img src={produto.imagem} alt={produto.nome} />
                <div className="zoom-overlay">
                  <svg 
                    className="zoom-icon" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M10 7V13M7 10H13" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="produto-info">
                <h3 className="produto-nome">{produto.nome}</h3>
                <p className="produto-preco">{produto.preco}</p>
                <button 
                  className="produto-btn"
                  onClick={
                    () => 
                      changePage(produto.id)
                  }
                  // onClick={() => handleWhatsAppProduto(produto)}
                >
                  VER DETALHES
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Zoom */}
        {selectedImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Fechar">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <img src={selectedImage.imagem} alt={selectedImage.nome} className="modal-image" />
              <p className="modal-title">{selectedImage.nome}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Produtos;
