import React, { useState, useEffect} from "react"; // Mantenha apenas esta linha
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecalho from "../../components/cabecalho";

export default function Cadastrar() {

    return(
        <div className="pagina-cadastrar">
            <Cabecalho/>
        </div>
    )
}