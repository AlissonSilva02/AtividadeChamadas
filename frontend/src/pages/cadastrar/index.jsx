import "./index.scss";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Cabecalho from "../../components/cabecalho";

export default function Cadastrar() {

    const navigate = useNavigate()
    const { id } = useParams()
    
    const [titulo, setTitulo] = useState('');
    const [informacoes, setInformacoes] = useState('')
    const [impacto, setImpacto] = useState('');
    const [data, setData] = useState('');
    const [atribuir, setAtribuir] = useState('')

    const id_usuario = 1
    const host = 'http://localhost:3007';

    async function cadastrar() {
        let paramCorpo = {
            "titulo" : titulo,
            "info" : informacoes,
            "impacto": impacto,
            "data" : data,
            "atribuir": atribuir,
            "usuario": id_usuario
        }
        
        if (id === undefined) {
            //nova chamada         
            let url = `${host}/chamada/criar`
            await axios.post(url, paramCorpo)
            
            navigate(-1)
        }else{
            //editando
            let url = `${host}/chamada/alterar/${id}`
            let resp = await axios.put(url, paramCorpo)
            navigate(-1)
        }
    }
    
    const buscar = useCallback(async () => {
        let url = `${host}/chamada/consultar?usuario=${id_usuario}&chamada=${id}`
        let info = await axios.get(url)

        setTitulo(info.data.titulo)
        setInformacoes(info.data.informacoes)
        setImpacto(info.data.impacto)
        setData((info.data.data_ocorrencia).split('T')[0])
        setAtribuir(info.data.atribuido)
    
    }, [id])

    useEffect(() => {
        if(id){
            buscar()
        }
    },[id, buscar])


    return (
        <div className="pagina-cadastrar">
            <Cabecalho />

            <img src="/assets/images/negocios.png" alt="" />

            <div className="formulario">
                <h1 className="titulo">Detalhes do Chamado</h1>

                <div className="informacoes">
                    <h2>Título</h2>
                    <input 
                        onChange={(e) => setTitulo(e.target.value)}
                        value={titulo}
                        type="text" 
                        placeholder="Informe um título..." />

                    <h2>Informações</h2>
                    <input
                        onChange={(e) => setInformacoes(e.target.value)} 
                        value={informacoes}
                        className="infor" 
                        type="text" 
                        placeholder="### Insira as informações aqui..." />

                    <div className="opcoes">
                        <div className="abucuxi">
                            <h2>Impacto</h2>
                            <select
                                onChange={(e) => setImpacto(e.target.value)}
                                value={impacto}
                            >
                                <option value="Alto">Alto</option>
                                <option value="Médio">Médio</option>
                                <option value="Baixo">Baixo</option>
                            </select>
                            
                        </div>

                        <div className="abucuxi">
                            <h2>Data da Ocorrência</h2>
                            <input
                                onChange={(e) => setData(e.target.value)}
                                value={data}
                                type="date" 
                                placeholder="01/01/2024" 
                            />
                        </div>

                        <div className="abucuxi">
                            <h2>Atribuir</h2>
                            <input
                                onChange={(e) => setAtribuir(e.target.value)}
                                value={atribuir}
                                type="text" 
                                placeholder="Selecione o usuário responsável..." 
                            />
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
