import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecalho from "../../components/cabecalho";

export default function App() {
  const [filtro, setFiltro] = useState();

  function filtros() {}

  return (
    <div className="landing">
      <Cabecalho />

      <div className="pesquisar">
        <div className="lupa">
          <input
            type="text"
            placeholder="Filtrar..."
            onChange={(e) => setFiltro(e.target.value)}
          />
          <button onClick={filtros}>
            {" "}
            <img src="/assets/images/lupa.png" alt="" />
          </button>
        </div>
      </div>

      <div className="tabela">
        <div className="titulos">
          <h1>Título</h1>
          <h1>Impacto</h1>
          <h1>Data Ocorrência</h1>
          <h1>Atribuído</h1>
        </div>

        {/*fazer o .map para retornar os resultados*/}
      </div>

      <Link to={"/cadastrar"}>
        <div className="cadastrar">
          <h1>Novo chamado</h1>
        </div>
      </Link>
      
    </div>
  );
}
