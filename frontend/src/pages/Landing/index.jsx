import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecalho from "../../components/cabecalho";


export default function App() {
    const [filtro, setFiltro] = useState();


    function filtros() {

    }

    return (
        <div className="landing">
            <Cabecalho />

            <div className="pesquisar">

                <div className="lupa">
                    <input type="text" placeholder="Filtrar..."  onChange={(e) => setFiltro((e.target.value))} />
                    <button onClick={filtros}> <img src="/assets/images/lupa.png" alt="" /></button>
                </div>
            </div>
        </div>
    )
}