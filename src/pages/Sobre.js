import React from 'react';

const Sobre = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Sobre Mim</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Espaço para sua foto */}
          <div className="text-center mb-4">
            {/* Substitua "/assets/images/sua-foto.jpg" pelo caminho da sua foto e adicione classes Bootstrap para estilo */}
            <img 
              src="/public/assets/images/notebook.jpg" 
              alt="Sua Foto"
              className="img-fluid rounded-circle" 
              style={{ maxWidth: '250px' }}
            />
          </div>
          {/* Espaço para o texto sobre você */}
          <p className="lead text-center">
            Sou uma desenvolvedora web front-end com experiência na criação de interfaces modernas e responsivas. 
            Tenho domínio em HTML, CSS, JavaScript e frameworks como React e Bootstrap .. 
            Minha paixão é transformar designs em experiências digitais envolventes, priorizando acessibilidade e performance. 
            Atualmente, busco oportunidades para colaborar em projetos inovadores e contribuir com soluções criativas..
            Estou sempre buscando aprimorar minhas habilidades e me manter atualizado com as últimas tendências do mercado.
          </p>
          {/* Você pode adicionar mais parágrafos ou seções aqui */}
        </div>
      </div>
    </section>
  );
};

export default Sobre; 