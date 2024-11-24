import React, { useState, useEffect, useCallback } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecalho from "../../components/cabecalho";

export default function App() {
    const [registros, setRegistros] = useState([]);
    const [filtro, setFiltro] = useState('');


    const filtrar = 
        filtro.length > 0 
            ? registros.filter((produto) => 
                produto.titulo.toLowerCase().includes(filtro))
            : [];

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

    async function deletar(id) {
        let url = `http://${host}/chamada/remover/${id}`
        await axios.delete(url)

        await buscar()
    }

    function formatarData(data) {
        
        const dataFormatada = new Date(data).toLocaleDateString('pt-BR')

        return dataFormatada;
    }

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
                    <button>
                        <img
                            src="/assets/images/lupa.svg"
                            alt="lupa"
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
						{ filtro.length > 0 ? (
                            filtrar.map((item) => (
                                
                                <tr key={item.id_chamada}>
                                    <td>{item.titulo}</td>
                                    <td className="centralizar">{item.impacto}</td>
                                    <td className="centralizar">{formatarData(item.data_ocorrencia)}</td>
                                    <td className="alinhar">{item.atribuido} 
                                        <div>
                                            <img src="/assets/images/Editar.svg" alt="editar" /> 
                                            <img src="/assets/images/Remover.svg" alt="excluir" onClick={() => deletar(item.id_chamada)} /> 
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ):
                          (
                            registros.map((item) => (
                                <tr key={item.id_chamada}>
                                    <td>{item.titulo}</td>
                                    <td className="centralizar">{item.impacto}</td>
                                    <td className="centralizar">{formatarData(item.data_ocorrencia)}</td>
                                    <td className="alinhar">{item.atribuido} 
                                        <div>
                                            <Link to={`/cadastrar/${item.id_chamada}`}>
                                                <img src="/assets/images/Editar.svg" alt="editar" /> 
                                            </Link>
                                            <img src="/assets/images/Remover.svg" alt="excluir" onClick={() => deletar(item.id_chamada)} /> 
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                        
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
    )
}
