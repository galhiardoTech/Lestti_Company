import { useParams, Link } from 'react-router-dom';
import produtos from '../data/produtos.json';
import './TelaProduto.css';

function TelaProduto() {
    let { id } = useParams();

    // Find product by ID (handles both string and number comparison safely)
    const produto = produtos.find(p => p.id == id);

    if (!produto) {
        return <div className="produto-container"><h2>Produto não encontrado</h2><Link to="/" className="produto-voltar">Voltar para a home</Link></div>;
    }

    return (
        <div className="produto-bg">
            <div className="produto-container">
                <div className="produto-coluna-esquerda">
                    <div className="produto-imagem-container">
                        <img
                            src={`/src/assets/${produto.imagem}`}
                            alt={produto.nome}
                            className="produto-imagem-principal"
                        />
                    </div>
                </div>

                <div className="produto-coluna-direita">
                    <div className="produto-header-info">
                        {produto.novo ? "Novo" : "Usado"}  |  124 vendidos
                    </div>

                    <h1 className="produto-titulo">{produto.nome}</h1>

                    <div className="produto-preco-container">
                        <span className="produto-preco">{produto.preco}</span>
                    </div>

                    <div className="produto-acoes">
                        <button className="btn-comprar">Comprar agora</button>
                        <button className="btn-carrinho">Adicionar ao carrinho</button>
                    </div>

                    <div className="produto-info-extra">
                        <p>🔒 Compra Garantida via Lestti Pay</p>
                        <p>🚚 Frete grátis chegando amanhã</p>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <Link to="/" className="produto-voltar">Voltar para a lista</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TelaProduto;
