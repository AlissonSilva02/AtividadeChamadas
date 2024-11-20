import React, { useState, useEffect, useCallback } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecalho from "../../components/cabecalho";

export default function App() {
    const [filtro, setFiltro] = useState();
	const [registros, setRegistros] = useState([]);

    function filtros() {}

	const host = 'localhost:3007'
	const id = 1 //O usuario de id 1 esta logado

	const buscar = useCallback(
        async () => {
            let url = `http://${host}/chamadas/consultar/${id}`
			let resp = await axios.get(url)

            const itens = Array.isArray(resp.data) ? resp.data : [];

			setRegistros(itens);
        },
        []
    );


	useEffect(() => {
		buscar()
	}, [buscar])

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
                    <hr />
                    <button onClick={filtros}>
                        <img
                            className="imag"
                            src="/assets/images/lupa.png"
                            alt=""
                        />
                    </button>
                </div>
            </div>

            <div className="tabela">
                <table>
					<thead>
						<tr>
							<th>Titulo</th>
							<th className="centralizar">Impacto</th>
							<th className="centralizar">Data Ocorrência</th>
							<th>Atribuído</th>
						</tr>
					</thead>
					<tbody>
						{registros.map((item, index) => (
							<tr key={index}>
								<td>{item.titulo}</td>
								<td className="centralizar">{item.impacto}</td>
								<td className="centralizar">{item.data_ocorrencia}</td>
								<td>{item.atribuido}</td>
							</tr>
						))}
					</tbody>
					
				</table>
            </div>

            <div className="botao">
                <div className="cadastrar">
                    <Link to={"/cadastrar"}>
                        <h1>Novo chamado</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}
