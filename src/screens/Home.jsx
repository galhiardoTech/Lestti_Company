import Menu from '../components/Menu/Menu'
import Hero from '../components/Hero/Hero'
import Produtos from '../components/Produtos/Produtos'
import Colecoes from '../components/Colecoes/Colecoes'
import Lancamentos from '../components/Lancamentos/Lancamentos'
import Combos from '../components/Combos/Combos'
import Contato from '../components/Contato/Contato'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'

function Home() {
  return (
    <div className="home">
      <Menu />
      <Hero />
      <Produtos />
      <Colecoes />
      <Lancamentos />
      <Combos />
      <Contato />
      <WhatsAppButton />
    </div>
  )
}
export default Home;