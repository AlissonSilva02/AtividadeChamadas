import con from './connection.js'

export async function consultarChamadas(id) {
    let comando = ` 
    select 
        id_chamada,
        titulo, 
        informacoes, 
        impacto, 
        data_ocorrencia, 
        atribuido
    from tb_chamada
    where id_usuario = ?
    `

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0]

    return registros
}

export async function consultarChamada(id_usuario, id_chamada){
    let comando = `
    select 
        titulo, 
        informacoes, 
        impacto, 
        data_ocorrencia,
        atribuido
    from tb_chamada
    where id_usuario = ? and id_chamada = ?
    `

    let resposta = await con.query(comando, [id_usuario, id_chamada]);
    let registros = resposta[0]

    return registros[0]
}

export async function criarChamada(chamada) {
    let comando = ` 
    insert into tb_chamada (titulo, informacoes, impacto, data_ocorrencia, atribuido, id_usuario) 
    values(?, ?, ?, ?, ?, ?);
    `

    let resposta = await con.query(comando, [chamada.titulo, chamada.info, chamada.impacto, chamada.data, chamada.atribuir, chamada.usuario]);

    let registros = resposta[0]
    let info = registros.affectedRows

    return info
}

export async function alterarChamada(chamada, id) {
    let comando = ` 
        update tb_chamada 
        set
            titulo = ?,
            informacoes = ?,
            impacto = ?,
            data_ocorrencia = ?,
            atribuido = ?,
            id_usuario = ?
        where id_chamada = ?;
    `

    let resposta = await con.query(comando, [chamada.titulo, chamada.info, chamada.impacto, chamada.data, chamada.atribuir, chamada.usuario, id]);

    let registros = resposta[0]

    return registros.affectedRows
}

export async function removerChamada(id) {
    let comando = `
    delete from tb_chamada
    where id_chamada = ?;
    `
    let resposta = await con.query(comando, [id]);

    let registros = resposta[0]
    let info = registros.affectedRows
    
    return info
}