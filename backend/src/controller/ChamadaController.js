import * as db from '../repository/ChamadaRepository.js'
import { Router } from 'express'

const endpoints = Router()

endpoints.get('/chamadas/consultar', async (req, resp) => {
    try {
        let resposta = await db.consultarChamadas()

        resp.send(resposta)
    } catch (err) {
        resp.send({
            Error: err.message
        })
    }
})

endpoints.post('/chamada/criar', async (req, resp) => {
    try{
        let chamada = req.body        

        let resposta = await db.criarChamada(chamada)
        
        resp.send({
                LinhasAfetadas: resposta
            })
    }catch(err){
        resp.send({
            Error: err.message 
        })
    }
})

endpoints.put('/chamada/alterar/:id', async (req, resp) => {
    try{
        let id = req.params.id
        let chamada = req.body        

        let resposta = await db.alterarChamada(chamada, id)
        
        resp.send({
                LinhasAfetadas: resposta
            })
    }catch(err){
        resp.send({
            Error: err.message 
        })
    }
})

endpoints.delete('/chamada/remover/:id', async (req, resp) => {
    try{
        let id = req.params.id
        let resposta = await db.removerChamada(id)

        resp.send({
            LinhasAfetadas: resposta
        })
        
    }catch(err){
        resp.send({
            Error: err.message
        })
    }
})

export default endpoints;