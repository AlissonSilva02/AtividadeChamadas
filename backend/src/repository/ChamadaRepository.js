import con from './connection.js'

export async function consultarChamadas() {
    let comando = ` 
    select 
        id_chamada,
        titulo, 
        informacoes, 
        impacto, 
        data_ocorrencia, 
        atribuido
    from tb_chamada;
    `

    let resposta = await con.query(comando, []);

    let registros = resposta[0]

    return registros
}

