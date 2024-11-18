import ChamadaController from './controller/ChamadaController.js'



export default function adicionarRotas (servidor) {
     servidor.use(ChamadaController);
}

