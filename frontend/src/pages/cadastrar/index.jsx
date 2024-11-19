import React, { useState, useEffect } from "react"; // Mantenha apenas esta linha
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecalho from "../../components/cabecalho";

export default function Cadastrar() {

    function cadastrar(){

    }
  return (
    <div className="pagina-cadastrar">
      <Cabecalho />

      <img src="/assets/images/negocios.png" alt="" />

      <div className="formulario">
        <h1 className="titulo">Detalhes do Chamado</h1>

        <div className="informacoes">
          <h2>Título</h2>
          <input type="text" placeholder="Informe um título..." />

          <h2>Informações</h2>
          <input type="text" placeholder="### Insira as informações aqui..." />

          <div className="opcoes">
            <h2>Impacto</h2>
            <input type="text" />

            <h2>Data da Ocorrência</h2>
            <input type="date" placeholder="01/01/2024" />

            <h2>Atribuir</h2>
            <input type="" placeholder="Selecione o usuário responsável..." />
          </div>
        </div>

        <Link to={-1}>
          <div className="voltar">
            <p>Voltar</p>
          </div>
        </Link>

        <Link to={"/"}>
                <div className="salvar">

                    <button onClick={cadastrar}>Salvar</button>

                </div>
            </Link>
      </div>
    </div>
  );
}
