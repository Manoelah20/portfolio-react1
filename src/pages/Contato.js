import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Esconder a mensagem de sucesso se o usuário começar a digitar novamente
    setShowSuccessMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica real para enviar o formulário (por exemplo, usando EmailJS)
    console.log('Dados do formulário:', formData);

    // Simular envio bem-sucedido
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
    setShowSuccessMessage(true);

    // Ocultar a mensagem de sucesso após alguns segundos (opcional)
    // setTimeout(() => {
    //   setShowSuccessMessage(false);
    // }, 5000); // Oculta após 5 segundos
  };

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
        <h2 className="text-center mb-4" style={{ color: '#FF7518' }}>Entre em Contato</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="contact-box" id="contact-form-section">
              {/* Mensagem de sucesso condicional */}
              {showSuccessMessage ? (
                <div className="alert alert-success" role="alert">
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label" style={{ color: 'white' }}>
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ color: 'white' }}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label" style={{ color: 'white' }}>
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="form-control"
                      placeholder="Digite sua mensagem..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn"
                    style={{ 
                      backgroundColor: '#FF7518', 
                      borderColor: '#FF7518',
                      color: 'white'
                    }}
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
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
            {/* Informações de contato primeiro */}
            <ContactInfo />
            {/* Copyright depois */}
            <span className="mt-3 d-block">&copy; {new Date().getFullYear()} Manoela Harrison. Todos os direitos reservados.</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Contato;
