import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { BadgeDollarSign, ShoppingCart } from 'lucide-react';
import produtos from '../data/produtos.json';
import './TelaProduto.css';
import config from '../data/config.json';

function TelaProduto() {
    const { id } = useParams();
    const [imagemAtual, setImagemAtual] = useState(0);

    // 1. Busca o produto
    const produto = produtos.find(p => p.id === Number(id));

    // 2. Se não achar, retorna erro
    if (!produto) {
        return (
            <div className="produto-container">
                <h2>Produto não encontrado</h2>
                <Link to="/" className="produto-voltar">Voltar para a home</Link>
            </div>
        );
    }

    // 3. FUNÇÃO MÁGICA: Gera o caminho correto para imagens dentro de src/assets
    // Isso resolve o problema do React não achar a imagem pelo nome no JSON
    const getImageUrl = (name) => {
        return new URL(`../assets/fotosLooks/${name}`, import.meta.url).href;
    };

    // 4. Funções para controlar o carrossel
    const totalImagens = produto.imagens.length;
    
    const irProxima = () => {
        if (imagemAtual < totalImagens - 1) {
            setImagemAtual(imagemAtual + 1);
        }
    };

    const irAnterior = () => {
        if (imagemAtual > 0) {
            setImagemAtual(imagemAtual - 1);
        }
    };

    const phoneNumber = config.whatsapp.numero;
    
      // Função para gerar mensagem do WhatsApp para telaProduto
      const handleWhatsApp = () => {
        let mensagem = `*Olá, Lestti Company!*\n\n`;
        mensagem += `Tenho interesse em:\n\n`;
        mensagem += `*${produto.nome}*\n`;
        mensagem += `Novidades que chegaram para revolucionar seus treinos\n`;
        mensagem += `\n--------------------------------\n`;
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappUrl, '_blank');
      };

    return (
        <div className="produto-bg">
            <div className="produto-container">
                <Link to="/" className="btn-voltar-topo">← Voltar para a loja</Link>

                <div className="produto-layout">
                    <div className="produto-col-esquerda">
                        <div className="carrossel-container">
                            <img 
                                src={getImageUrl(produto.imagens[imagemAtual])} 
                                alt={produto.nome} 
                                className="produto-imagem" 
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = "https://via.placeholder.com/400?text=Imagem+Nao+Encontrada";
                                }}
                            />
                            
                            {/* Botões de Navegação */}
                            <button 
                                className="carrossel-btn carrossel-btn-anterior"
                                onClick={irAnterior}
                                disabled={imagemAtual === 0}
                                aria-label="Imagem anterior"
                            >
                                ‹
                            </button>
                            <button 
                                className="carrossel-btn carrossel-btn-proxima"
                                onClick={irProxima}
                                disabled={imagemAtual === totalImagens - 1}
                                aria-label="Próxima imagem"
                            >
                                ›
                            </button>
                            
                            {/* Indicador de Progresso */}
                            <div className="carrossel-contador">
                                {imagemAtual + 1} / {totalImagens}
                            </div>
                        </div>
                    </div>

                    <div className="produto-col-direita">
                        {produto.novo && <span className="badge-novo">Lançamento</span>}
                        <h1 className="produto-titulo">{produto.nome}</h1>
                        <p className="produto-preco-detalhes">
                            <BadgeDollarSign className="produto-preco-icone" aria-hidden="true" />
                            {produto.preco}
                        </p>
                        
                        <div className="produto-detalhes">
                            <h3>Sobre o produto</h3>
                            <p className="produto-descricao">
                                Este {produto.nome} é ideal para seus treinos, unindo conforto e alta performance.
                            </p>
                        </div>

                        <button className="btn-comprar" onClick={handleWhatsApp}>
                            <ShoppingCart className="btn-comprar-icone" aria-hidden="true" />
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TelaProduto;