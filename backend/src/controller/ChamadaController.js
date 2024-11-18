import * as db from '../repository/ChamadaRepository.js'
import { Router } from 'express'

const endpoints = Router()

endpoints.get('/consultar/chamadas', async (req, resp) => {
    try {
        let chamadas = await db.consultarChamadas()

        resp.send(chamadas)
    } catch (err) {
        resp.send({
            Error: err.message
        })
    }

})


export default endpoints;