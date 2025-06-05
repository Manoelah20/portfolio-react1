import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';

const NotFound = () => {
  return (
    <div>
      {/* Header com Logo no topo esquerdo e Navbar sempre visível */}
      <header className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src="/portfolio-react1/assets/images/M.png" 
              alt="Logo MH" 
              className="img-fluid rounded-circle me-2" 
              style={{ maxWidth: '60px', marginTop: '15px' }}
            />
          </Link>

          {/* Links de Navegação sempre visíveis */}
          <div id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item me-3">
                <Link className="nav-link fw-bold fs-5" to="/">Início</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link fw-bold fs-5" to="/projetos">Projetos</Link>
              </li>
              {/* Removendo o link 'Contato' */}
              {/* <li className="nav-item me-3">
                <Link className="nav-link fw-bold fs-5" to="/contato">Contato</Link>
              </li> */}
              {/* Adicionando link "Entre em Contato" no header */}
              <li className="nav-item">
                <Link className="nav-link fw-bold fs-5" to="/contato#contact-form-section">Entre em Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="container text-center py-5">
        <h1 className="display-4">404</h1>
        <p className="lead">Página não encontrada.</p>
        {/* Botão Voltar para o Início */}
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary">Voltar para o Início</Link>
        </div>
        {/* Footer */}
        <footer className="footer mt-auto py-3 bg-dark text-white">
          <div className="container text-center">
            <span>&copy; {new Date().getFullYear()} Manoela Harrison. Todos os direitos reservados.</span>
            {/* Adicionando informações de contato no rodapé */}
            <ContactInfo />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NotFound;
