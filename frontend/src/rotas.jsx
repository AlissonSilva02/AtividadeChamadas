import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Landing/index.jsx";
import Cadastrar from "./pages/cadastrar/index.jsx";



export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/cadastrar/:id" element={<Cadastrar />} />
                
            </Routes>
        </BrowserRouter>
    )
}