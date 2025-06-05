import React from 'react';

const ContactInfo = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h3 className="mb-4">Entre em Contato</h3>
          <div className="d-flex justify-content-center gap-4">
            <a 
              href="mailto:harrisonmanoela@gmail.com" 
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-envelope fs-4"></i>
              <span className="ms-2">harrisonmanoela@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/manoelaacharrison" 
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin fs-4"></i>
              <span className="ms-2">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Manoelah20" 
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github fs-4"></i>
              <span className="ms-2">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 