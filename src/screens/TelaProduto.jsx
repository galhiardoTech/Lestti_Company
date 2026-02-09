import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { BadgeDollarSign, ShoppingCart } from 'lucide-react';
import produtos from '../data/produtos.json';
import config from '../data/config.json';
import './TelaProduto.css';

function TelaProduto() {
    const { id } = useParams();
    const [imagemAtual, setImagemAtual] = useState(0);

    // 1. Busca o produto pelo ID (converte para número para garantir a comparação)
    const produto = produtos.find(p => p.id === Number(id));

    // 2. Fallback caso o produto não seja encontrado
    if (!produto) {
        return (
            <div className="produto-container">
                <div className="produto-not-found">
                    <h2>Ops! Produto não encontrado.</h2>
                    <Link to="/" className="btn-voltar">Voltar para a página inicial</Link>
                </div>
            </div>
        );
    }

    const totalImagens = produto.imagens.length;

    // 3. Funções de navegação do carrossel (com loop infinito)
    const irProxima = () => {
        console.log('Próxima clicada. Atual:', imagemAtual, 'Total:', totalImagens);
        setImagemAtual((atual) => {
            const proxima = (atual + 1) % totalImagens;
            console.log('Nova imagem:', proxima);
            return proxima;
        });
    };

    const irAnterior = () => {
        console.log('Anterior clicada. Atual:', imagemAtual, 'Total:', totalImagens);
        setImagemAtual((atual) => {
            const anterior = atual === 0 ? totalImagens - 1 : atual - 1;
            console.log('Nova imagem:', anterior);
            return anterior;
        });
    };

    // 4. Lógica de redirecionamento para o WhatsApp da Lestti Company
    const handleWhatsApp = () => {
        const phoneNumber = config.whatsapp.numero;
        const mensagem = `*Olá, Lestti Company!*\n\nTenho interesse no produto: *${produto.nome}*\nPreço: *${produto.preco}*\n\nNovidades que chegaram para revolucionar meus treinos!`;
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="produto-bg">
            <div className="produto-container">
                <header className="produto-header">
                    <Link to="/" className="btn-voltar-topo">← Voltar para a loja</Link>
                </header>

                <main className="produto-layout">
                    {/* Galeria de Fotos (Carrossel) */}
                    <section className="produto-col-esquerda">
                        <div className="carrossel-container">
                            <img 
                                // CAMINHO CORRETO: Busca direto da raiz da pasta public
                                src={`/fotosLooks/${produto.imagens[imagemAtual]}`} 
                                alt={`${produto.nome} - Vista ${imagemAtual + 1}`} 
                                loading="lazy"
                                className="produto-imagem" 
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = "https://via.placeholder.com/600x800?text=Imagem+Indisponível";
                                }}
                            />
                            
                            {totalImagens > 1 && (
                                <div className="carrossel-controles">
                                    <button className="carrossel-btn carrossel-btn-anterior" onClick={irAnterior}>‹</button>
                                    <button className="carrossel-btn carrossel-btn-proxima" onClick={irProxima}>›</button>
                                </div>
                            )}
                            
                            <div className="carrossel-contador">
                                {imagemAtual + 1} / {totalImagens}
                            </div>
                        </div>
                    </section>

                    {/* Informações do Produto */}
                    <section className="produto-col-direita">
                        <div className="produto-info-header">
                            {produto.novo && <span className="badge-novo">Lançamento</span>}
                            <h1 className="produto-titulo">{produto.nome}</h1>
                            <div className="produto-preco-wrapper">
                                <BadgeDollarSign className="produto-preco-icone" size={24} />
                                <span className="produto-preco-valor">{produto.preco}</span>
                            </div>
                        </div>
                        
                        <div className="produto-detalhes-bloco">
                            <h3>Sobre o produto</h3>
                            <p className="produto-descricao">
                                Este <strong>{produto.nome}</strong> foi desenvolvido para oferecer a máxima performance 
                                em seus treinos, unindo durabilidade e o conforto que a <strong>Lestti Company</strong> proporciona.
                            </p>
                        </div>

                        <button className="btn-comprar" onClick={handleWhatsApp}>
                            <ShoppingCart size={20} />
                            Comprar via WhatsApp
                        </button>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default TelaProduto;