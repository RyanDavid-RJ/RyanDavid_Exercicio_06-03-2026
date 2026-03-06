import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu-container">
     
      <div className="menu-logo">
        <Link to="/">
          <img 
            src="https://assets-fluminense.s3.amazonaws.com/assets/fluminense-d99518426e66fb3576697742f31b8b1d2b8b53d34f409072c52711764f1bdf32.svg" 
            alt="Escudo do Fluminense" 
          />
        </Link>
      </div>

     
      <ul className="menu-lista">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;