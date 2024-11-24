import * as db from '../repository/ChamadaRepository.js'
import { Router } from 'express'

const endpoints = Router()

//Retorna todas as Chamadas de um usuário
endpoints.get('/chamadas/consultar/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let resposta = await db.consultarChamadas(id)

        resp.send(resposta)
    } catch (err) {
        resp.send({
            Error: err.message
        })
    }
})

//retorna uma chamada de um usuario
endpoints.get('/chamada/consultar/', async (req, resp) =>{
    try {
        const id_usuario = req.query.usuario
        const id_chamada = req.query.chamada

        const resposta = await db.consultarChamada(id_usuario, id_chamada)

        resp.send(resposta)
    } catch (err) {
        resp.send({
            error: err.message
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
        let id_chamada = req.params.id
        let chamada = req.body        

        let resposta = await db.alterarChamada(chamada, id_chamada)
        
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