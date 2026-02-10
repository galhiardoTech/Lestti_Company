import './App.css'
import Home from './screens/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import TelaProduto from './screens/TelaProduto.jsx';
import { useParams } from "react-router";

function App() {
  let params = useParams();
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />,
          <Route path='/produto/:id' element={<TelaProduto/>} />
        </Routes>
      </BrowserRouter>,

       </div>
  )
}

export default App
