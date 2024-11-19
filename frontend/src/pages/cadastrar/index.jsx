import React, { useState, useEffect } from "react"; // Mantenha apenas esta linha
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecalho from "../../components/cabecalho";

export default function Cadastrar() {

    function cadastrar() {

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
                    <input className="infor" type="text" placeholder="### Insira as informações aqui..." />

                    <div className="opcoes">
                        <div className="abucuxi">
                            <h2>Impacto</h2>
                            <input type="text" placeholder="Baixo | Medio | Alto" />
                        </div>

                        <div className="abucuxi">
                            <h2>Data da Ocorrência</h2>
                            <input type="date" placeholder="01/01/2024" />
                        </div>

                        <div className="abucuxi">
                            <h2>Atribuir</h2>
                            <input type="text" placeholder="Selecione o usuário responsável..." />
                        </div>

                    </div>
                </div>


                <div className="botoes">

                    <div className="voltar">
                        <Link to={-1}>
                            <button>Voltar</button>
                        </Link>
                    </div>



                    <div className="salvar">
                            <button onClick={cadastrar}>Salvar</button>
                    </div>

                </div>

            </div>
        </div>
    );
}
