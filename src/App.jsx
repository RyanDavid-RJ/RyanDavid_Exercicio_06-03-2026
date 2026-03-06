import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos APENAS as páginas que já existem na sua pasta 'pages'
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* A Home agora é a nossa página inicial (caminho "/") */}
        <Route path="/" element={<Home />} />
        
        {/* Novas rotas para as outras páginas */}
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
