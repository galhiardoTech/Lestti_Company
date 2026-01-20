import { useState } from 'react';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    interesse: '',
    mensagem: ''
  });

  const phoneNumber = '5511950869006';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatPhoneNumber = (phone) => {
    // Remove tudo que não é número
    const numbers = phone.replace(/\D/g, '');
    // Se começar com 0, remove
    if (numbers.startsWith('0')) {
      return numbers.substring(1);
    }
    // Se não começar com 55, adiciona
    if (!numbers.startsWith('55')) {
      return '55' + numbers;
    }
    return numbers;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const telefoneFormatado = formatPhoneNumber(formData.telefone);
    
    // Criar mensagem personalizada
    let mensagem = `👋 *Olá, Lestti Company!*\n\n`;
    mensagem += `Meu nome é *${formData.nome}*\n\n`;
    
    if (formData.email) {
      mensagem += `📧 *Email:* ${formData.email}\n`;
    }
    
    if (formData.telefone) {
      mensagem += `📱 *WhatsApp:* ${formData.telefone}\n\n`;
    }
    
    if (formData.interesse) {
      mensagem += `🎯 *Tenho interesse em:* ${formData.interesse}\n\n`;
    }
    
    if (formData.mensagem) {
      mensagem += `💬 *Mensagem:*\n${formData.mensagem}\n\n`;
    }
    
    mensagem += `━━━━━━━━━━━━━━━━━━━━\n`;
    mensagem += `🚀 *Quero evoluir meu estilo!*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário após enviar
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      interesse: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">CONTATO</h2>
          <p className="section-subtitle">Entre em contato conosco</p>
        </div>
        <div className="contato-content">
          <div className="contato-info">
            <h3>Fale Conosco</h3>
            <p>Estamos prontos para ajudar você a encontrar o outfit perfeito para seus treinos.</p>
            <div className="contato-item">
              <strong>WhatsApp:</strong>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">(11) 95086-9006</a>
            </div>
            <div className="contato-item">
              <strong>Email:</strong>
              <a href="mailto:contato@lestti.com.br">contato@lestti.com.br</a>
            </div>
          </div>
          <form className="contato-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="nome"
              placeholder="Seu Nome Completo" 
              value={formData.nome}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Seu Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="tel" 
              name="telefone"
              placeholder="Seu WhatsApp (com DDD)" 
              value={formData.telefone}
              onChange={handleChange}
              required 
            />
            <select 
              name="interesse"
              value={formData.interesse}
              onChange={handleChange}
              className="contato-select"
              required
            >
              <option value="">Selecione seu interesse</option>
              <option value="Produtos">Produtos</option>
              <option value="Coleções">Coleções</option>
              <option value="Lançamentos">Lançamentos</option>
              <option value="Combos e Ofertas">Combos e Ofertas</option>
              <option value="Dúvidas sobre Tamanhos">Dúvidas sobre Tamanhos</option>
              <option value="Trocas e Devoluções">Trocas e Devoluções</option>
              <option value="Parcerias">Parcerias</option>
              <option value="Outro">Outro</option>
            </select>
            <textarea 
              name="mensagem"
              placeholder="Conte-nos como podemos ajudar você..." 
              rows="5" 
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="form-btn">
              📱 ENVIAR VIA WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
