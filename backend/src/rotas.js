import ChamadaControllerController from './controller/ChamadaController.js'
import usuarioController from './controller/UsuarioController.js'



export default function adicionarRotas (servidor) {
    servidor.use(chamadaController);
    servidor.use(usuarioController);

}

