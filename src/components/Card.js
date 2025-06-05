import React from 'react';

const Card = ({ projeto }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img 
          src={projeto.imagem} 
          className="card-img-top" 
          alt={projeto.titulo}
        />
        <div className="card-body">
          <h5 className="card-title">{projeto.titulo}</h5>
          <p className="card-text">{projeto.descricao}</p>
          <div className="mb-3">
            {projeto.tecnologias.map((tech, index) => (
              <span 
                key={index} 
                className="badge bg-secondary me-2"
              >
                {tech}
              </span>
            ))}
          </div>
          <a 
            href={projeto.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card; 