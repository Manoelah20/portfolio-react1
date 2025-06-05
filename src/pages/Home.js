import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';

const Home = () => {
  return (
    <div>
      {/* Header com Logo no topo esquerdo e Navbar sempre visível */}
      <header className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src={process.env.PUBLIC_URL + '/assets/images/M.png'} 
              alt="Logo MH" 
              className="img-fluid rounded-circle me-2" 
              style={{ maxWidth: '60px', marginTop: '15px' }}
            />
          </Link>

          {/* Links de Navegação sempre visíveis */}
          <div id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item me-3">
                <Link 
                  className="nav-link fw-bold fs-5 text-decoration-none" 
                  to="/"
                  style={{ color: 'white' }}
                  onMouseOver={(e) => e.target.style.color = '#FF7518'}
                  onMouseOut={(e) => e.target.style.color = 'white'}
                >
                  Início
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link 
                  className="nav-link fw-bold fs-5 text-decoration-none" 
                  to="/projetos"
                  style={{ color: 'white' }}
                  onMouseOver={(e) => e.target.style.color = '#FF7518'}
                  onMouseOut={(e) => e.target.style.color = 'white'}
                >
                  Projetos
                </Link>
              </li>
              {/* Removendo o link 'Contato' */}
              {/* <li className="nav-item me-3">
                <Link className="nav-link fw-bold fs-5" to="/contato">Contato</Link>
              </li> */
              /* Adicionando link "Entre em Contato" no header */}
              <li className="nav-item">
                <Link 
                  className="nav-link fw-bold fs-5 text-decoration-none" 
                  to="/contato#contact-form-section"
                  style={{ color: 'white' }}
                  onMouseOver={(e) => e.target.style.color = '#FF7518'}
                  onMouseOut={(e) => e.target.style.color = 'white'}
                >
                  Entre em Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="container text-center py-5">
        {/* Seção Sobre Mim: Texto e Foto 3x4 lado a lado */}
        {/* Última atualização: 2024 */}
        <section className="row align-items-center mb-5">
          {/* Texto Sobre Mim */}
          <div className="col-md-8 text-center">
            <h1 className="display-4 mb-4" style={{ color: '#FF7518' }}>Bem-vindo ao meu portfólio</h1>
            <p className="lead">
              Sou uma desenvolvedora web front-end com experiência na criação de interfaces modernas e responsivas. 
              Tenho domínio em HTML, CSS, JavaScript e frameworks como React e Bootstrap .. 
              Minha paixão é transformar designs em experiências digitais envolventes, priorizando acessibilidade e performance. 
              Atualmente, busco oportunidades para colaborar em projetos inovadores e contribuir com soluções criativas..
              Estou sempre buscando aprimorar minhas habilidades e me manter atualizado com as últimas tendências do mercado.
            </p>

            {/* Links para tecnologias */}
            <div className="tech-links mt-4"><br></br>
              <h4 className="mb-3" style={{ color: '#FF7518' }}>Tecnologias que utilizo:</h4><br></br>
              <div className="d-flex justify-content-center gap-4">
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-html5 fa-3x" style={{ color: '#E34F26' }}></i>
                </a>
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-css3-alt fa-3x" style={{ color: '#1572B6' }}></i>
                </a>
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-js fa-3x" style={{ color: '#F7DF1E' }}></i>
                </a>
                <a 
                  href="https://reactjs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-react fa-3x" style={{ color: '#61DAFB' }}></i>
                </a>
                <a 
                  href="https://getbootstrap.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-bootstrap fa-3x" style={{ color: '#7952B3' }}></i>
                </a>
                <a 
                  href="https://nodejs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-node-js fa-3x" style={{ color: '#339933' }}></i>
                </a>
                <a 
                  href="https://www.canva.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fas fa-palette fa-3x" style={{ color: '#00C4CC' }}></i>
                </a>
                <a 
                  href="https://www.figma.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fas fa-pencil-ruler fa-3x" style={{ color: '#F24E1E' }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Imagem 3x4 */}
          <div className="col-md-4 text-center">
            <img 
              src={process.env.PUBLIC_URL + '/assets/images/3x4.jpg'} 
              alt="Sua Foto 3x4" 
              className="img-fluid" 
              style={{ maxWidth: '300px', marginTop: '-100px', borderRadius: '10px' }}
            />
          </div>
        </section>
        {/* Seção de Blog e Notebook */}
        <div className="row align-items-center mb-5">
          {/* Imagem do Notebook */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img 
              src={process.env.PUBLIC_URL + '/assets/images/tela.code.jpg'} 
              alt="Notebook code"
              className="img-fluid mt-4" 
              style={{ maxWidth: '300px', width: '70%', height: '90%' }} 
            />
          </div>

          {/* Seção de Blog */}
          <div className="col-md-6">
            <h3 className="mb-4" style={{ color: '#FF7518' }}>Artigos Técnicos: Saiba mais</h3>
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-12">
                <div className="card bg-dark text-light">
                  <div className="card-body">
                    <h5 className="card-title">React Hooks: Um Guia Prático</h5>
                    <p className="card-text">Aprenda como utilizar os Hooks mais importantes do React para melhorar a performance e organização do seu código.</p>
                    <a 
                      href="https://pt-br.react.dev/reference/react" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-light text-decoration-none"
                      style={{ color: '#FF7518', borderColor: '#FF7518' }}
                    >
                      Ler mais
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-12">
                <div className="card bg-dark text-light">
                  <div className="card-body">
                    <h5 className="card-title">CSS Grid vs Flexbox</h5>
                    <p className="card-text">Entenda as diferenças entre Grid e Flexbox e quando usar cada um para criar layouts responsivos.</p>
                    <a 
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-light text-decoration-none"
                      style={{ color: '#FF7518', borderColor: '#FF7518' }}
                    >
                      Ler mais
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-12">
                <div className="card bg-dark text-light">
                  <div className="card-body">
                    <h5 className="card-title">JavaScript Moderno</h5>
                    <p className="card-text">Recursos modernos do JavaScript que todo desenvolvedor front-end precisa conhecer.</p>
                    <a 
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-light text-decoration-none"
                      style={{ color: '#FF7518', borderColor: '#FF7518' }}
                    >
                      Ler mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer mt-auto py-3 bg-dark text-white">
          <div className="container text-center">
            {/* Informações de contato primeiro */}
            <ContactInfo />
            {/* Copyright depois */}
            <span className="mt-3 d-block">&copy; {new Date().getFullYear()} Manoela Harrison. Todos os direitos reservados.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
