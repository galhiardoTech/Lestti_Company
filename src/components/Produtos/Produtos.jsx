import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import produtosData from '../../data/produtos.json';
import './Produtos.css';

const Produtos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Gerenciamento do Scroll e Tecla ESC para o Modal
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
        <header className="section-header">
          <h2 className="section-title">PRODUTOS</h2>
          <p className="section-subtitle">Resistência e Design em cada costura</p>
        </header>

        <div className="produtos-grid">
          {produtosData.map((produto) => {
            // CAMINHO SIMPLIFICADO: Aponta para public/fotosLooks/
            const urlFinal = `/fotosLooks/${produto.capa}`;

            return (
              <article key={produto.id} className="produto-card">
                {produto.novo && <span className="produto-badge">NOVO</span>}
                
                <div 
                  className="produto-image" 
                  onClick={() => setSelectedImage({ imagem: urlFinal, nome: produto.nome })}
                >
                  <img 
                    src={urlFinal} 
                    alt={produto.nome} 
                    loading="lazy" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x500?text=Lestti+Company";
                    }}
                  />
                  
                  <div className="zoom-overlay">
                    <svg className="zoom-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 8V14M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                <div className="produto-info">
                  <h3 className="produto-nome">{produto.nome}</h3>
                  <p className="produto-preco">{produto.preco}</p>
                  <button 
                    className="produto-btn" 
                    onClick={() => navigate(`/produto/${produto.id}`)}
                  >
                    VER DETALHES
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal de Zoom */}
        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
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