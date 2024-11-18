import { Link } from "react-router-dom";
import './index.scss'


export default function Cabecalho() {


    return (
        <div className="componente-cabecalho">
            <div className="bem_vindo">
                <img src="/assets/images/healp.png" alt="" />
                <h2>Bem vindo, Pedro Moreira</h2>
            </div>

            <Link to={-1}>
                <div className="sair">

                    <p>Sair</p>

                </div>
            </Link>
        </div>
    )
}