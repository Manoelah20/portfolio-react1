import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';

const Projetos = () => {
  const [visibleDescriptionId, setVisibleDescriptionId] = useState(null);

  const handleToggleDescription = (projectId) => {
    setVisibleDescriptionId(prevId => (prevId === projectId ? null : projectId));
  };

  const projetos = [
    {
      id: 1,
      titulo: "Portfólio",
      descricao: "Portfólio pessoal desenvolvido com React e Tailwind CSS",
      tecnologias: ["React", "Tailwind CSS", "JavaScript"],
      imagem: process.env.PUBLIC_URL + '/assets/images/portfolio.JV.png',
      link: "https://github.com/manoelah20/portfolio-react"
    },
    {
      id: 2,
      titulo: "Blog",
      descricao: "Blog desenvolvido com React e Firebase",
      tecnologias: ["React", "JavaScript", "CSS"],
      imagem: process.env.PUBLIC_URL + '/assets/images/blog.vivi.png',
      link: "https://github.com/manoelah20/blog-react"
    },
    {
      id: 3,
      titulo: "Landing Page",
      descricao: "Landing page desenvolvida com HTML, CSS e JavaScript",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      imagem: process.env.PUBLIC_URL + '/assets/images/landing2.png',
      link: "https://github.com/manoelah20/landing-page"
    },
    {
      id: 4,
      titulo: "Eco Site",
      descricao: "Site institucional desenvolvido com HTML, CSS e JavaScript",
      tecnologias: ["React", "Node.js", "MongoDB"],
      imagem: process.env.PUBLIC_URL + '/assets/images/Lp.png',
      link: "https://github.com/manoelah20/eco-site"
    },
    {
      id: 5,
      titulo: "Logo",
      descricao: "Desenvolvimeto de um logo para cliente",
      tecnologias: ["Figma", "Adobe Photoshop"],
      imagem: process.env.PUBLIC_URL + '/assets/images/logo.FA.png',
      link: "https://github.com/manoelah20/logo-design"
    }
  ];

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
              </li> */}
              {/* Adicionando link "Entre em Contato" no header */}
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

      <section className="container py-5">
        <h2 className="text-center mb-4" style={{ color: '#FF7518' }}>Meus Projetos</h2>
          
        <div className="row">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{projeto.titulo}</h5>
                  <div className="mb-3">
                    <h6 className="text-decoration-none" style={{ color: 'white' }}>Tecnologias utilizadas:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {projeto.tecnologias.map((tech, index) => (
                        <span
                          key={index}
                          className="badge"
                          style={{ backgroundColor: '#FF7518' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="btn mt-auto"
                    style={{ 
                      backgroundColor: '#FF7518', 
                      borderColor: '#FF7518',
                      color: 'white'
                    }}
                    onClick={() => handleToggleDescription(projeto.id)}
                  >
                    {visibleDescriptionId === projeto.id ? 'Ocultar Descrição' : 'Ver Descrição'}
                  </button>

                  {visibleDescriptionId === projeto.id && (
                    <div className="mt-3">
                      <h6>Descrição:</h6>
                      <p>{projeto.descricao}</p>
                      {projeto.link && (
                         <a
                           href={projeto.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="btn btn-sm mt-2 text-decoration-none"
                           style={{ 
                             color: '#FF7518', 
                             borderColor: '#FF7518',
                             border: '1px solid #FF7518'
                           }}
                         >
                           Ver no GitHub
                         </a>
                       )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Voltar para o Início */}
        <div className="text-center mt-5">
          <Link 
            to="/" 
            className="btn text-decoration-none"
            style={{ 
              backgroundColor: '#FF7518', 
              borderColor: '#FF7518',
              color: 'white'
            }}
          >
            Voltar para o Início
          </Link>
        </div>

        {/* Footer */}
        <footer className="footer mt-auto py-3 bg-dark text-white">
          <div className="container text-center">
            <ContactInfo />
            <span className="mt-3 d-block">&copy; {new Date().getFullYear()} Manoela Harrison. Todos os direitos reservados.</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Projetos;
