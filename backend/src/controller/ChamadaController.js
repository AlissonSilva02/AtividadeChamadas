import * as db from '../repository/ChamadaRepository.js'
import { Router } from 'express'

const endpoints = Router()

endpoints.get('/consultar/chamadas', async (req, resp) => {
    try {
        let resposta = await db.consultarChamadas()

        resp.send(resposta)
    } catch (err) {
        resp.send({
            Error: err.message
        })
    }
})

endpoints.post('/adicionar/chamada', async (req, resp) => {
    try{
        let chamada = req.body
        let resposta = await db.criarChamada(chamada)
        
        resp.send(resposta)
    }catch(err){
        resp.send({
            Error: err.message 
        })
    }
})

export default endpoints;