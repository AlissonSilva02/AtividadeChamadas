import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function App() {


    return (
        <div className="componente-cabecalho">
            <div className="bem_vindo">
                <img src="/assets/images/healp.png" alt="" />
                <h1>Bem vindo, Pedro Moreira</h1>
            </div>
            <div className="sair">
                <Link to={-1}>
                    <p>Sair</p>
                </Link>
            </div>
        </div>
    )
}