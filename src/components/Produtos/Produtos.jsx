import { useState, useEffect } from 'react';
import './Produtos.css';
import produto1 from '../../assets/fotosFiness/1200x1200--6--vtp06is6pe.webp';
import produto2 from '../../assets/fotosFiness/180_calca_legging_ausare_cal0137_307_1_3cc24e6c6c1d3c2ec130987cc82860ac.webp';
import produto3 from '../../assets/fotosFiness/180_calca_legging_ausare_cal0157_311_1_d2f4a9b1e4589ec9c9ff589cea0c45ba.webp';
import produto4 from '../../assets/fotosFiness/306525.webp';
import produto5 from '../../assets/fotosFiness/380ef9e12a5d270bf1dbab37afc69e7b_f3190348-e15e-4a5c-b963-8dd6fbc8259e.webp';
import produto6 from '../../assets/fotosFiness/9a0094050c.webp';

const Produtos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const produtos = [
    { id: 1, nome: 'Camiseta Performance', preco: 'R$ 89,90', imagem: produto1, novo: false },
    { id: 2, nome: 'Shorts Training', preco: 'R$ 79,90', imagem: produto2, novo: true },
    { id: 3, nome: 'Legging Premium', preco: 'R$ 129,90', imagem: produto3, novo: false },
    { id: 4, nome: 'Top Esportivo', preco: 'R$ 69,90', imagem: produto4, novo: true },
    { id: 5, nome: 'Moletom Elite', preco: 'R$ 159,90', imagem: produto5, novo: false },
    { id: 6, nome: 'Calça Jogger', preco: 'R$ 119,90', imagem: produto6, novo: false },
  ];

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
                <button className="produto-btn">VER DETALHES</button>
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
