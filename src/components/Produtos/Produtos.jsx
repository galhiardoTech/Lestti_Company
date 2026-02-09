import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Produtos.css';
import produtosData from '../../data/produtos.json';

const Produtos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Função dinâmica para buscar a imagem na pasta assets
  const getImageUrl = (name) => {
    return new URL(`../../assets/fotosLooks/${name}`, import.meta.url).href;
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
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

  return (
    <section id="produtos" className="produtos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">PRODUTOS</h2>
          <p className="section-subtitle">Resistência e Design em cada costura</p>
        </div>

        <div className="produtos-grid">
          {produtosData.map((produto) => {
            const urlFinal = getImageUrl(produto.capa);
            return (
              <div key={produto.id} className="produto-card">
                {produto.novo && <span className="produto-badge">NOVO</span>}
                
                <div 
                  className="produto-image" 
                  onClick={() => setSelectedImage({ imagem: urlFinal, nome: produto.nome })}
                >
                  <img src={urlFinal} alt={produto.nome} loading="lazy" />
                  <div className="zoom-overlay">
                    <svg className="zoom-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 7V13M7 10H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="produto-info">
                  <h3 className="produto-nome">{produto.nome}</h3>
                  <p className="produto-preco">{produto.preco}</p>
                  <button className="produto-btn" onClick={() => navigate(`/produto/${produto.id}`)}>
                    VER DETALHES
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal de Zoom */}
        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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