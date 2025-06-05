import React from "react";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CardProjeto = ({ titulo, descricao }) => {
    return (
        <div className="card bg-dark text-light p-3">
            <h5>{titulo}</h5>
            <p>{descricao}</p>
            <button className="btn btn-primary">Ver Mais</button>
        </div>
    );
};

export default CardProjeto;
