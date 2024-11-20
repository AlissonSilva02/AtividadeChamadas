``` 
drop database if exists db_chamada;
create database db_chamada;
use db_chamada;

create table tb_usuario (
    id_usuario 			int primary key auto_increment,
    nome 				varchar(255),
    senha 				varchar(255)
);

create table tb_chamada (
    id_chamada 			int primary key auto_increment,
    titulo 				varchar(255),
    informacoes 		varchar(255),
    impacto 			varchar(255),
    data_ocorrencia		date,
    atribuido 			varchar(255),
    id_usuario			int,
    foreign key (id_usuario) references tb_usuario(id_usuario)
);

INSERT INTO tb_usuario (nome, senha) VALUES
('Carlos Souza', 'senha123'),
('Fernanda Lima', 'senha456'),
('João Pereira', 'senha789'),
('Ricardo Silva', 'senha012'),
('Luana Costa', 'senha345'),
('Marcos Alves', 'senha678'),
('Eliane Rocha', 'senha901'),
('Paulo Fernandes', 'senha234'),
('Aline Martins', 'senha567'),
('Gustavo Oliveira', 'senha890');

insert into tb_chamada (titulo, informacoes, impacto, data_ocorrencia, atribuido, id_usuario) 
values
('Falha no sistema de login', 'Usuários não conseguem acessar o sistema', 'Alto', '2024-11-18', 'Carlos Souza', 1),
('problema no servidor de e-mail', 'Emails não estão sendo entregues corretamente', 'Médio', '2024-11-17', 'Fernanda Lima', 2),
('erro no módulo de pagamentos', 'Sistema de pagamentos apresenta erro ao processar', 'Alto', '2024-11-16', 'João Pereira', 3),
('Desempenho lento no site', 'Tempo de carregamento do site está muito alto', 'Médio', '2024-11-15', 'Ricardo Silva', 4),
('Interrupção no sistema de backup', 'Processo de backup falhou no último ciclo', 'Crítico', '2024-11-14', 'Luana Costa', 5),
('Erro de autenticação de usuário', 'Usuários estão sendo desconectados automaticamente', 'Alto', '2024-11-13', 'Marcos Alves', 6),
('Falha de segurança no aplicativo', 'Vulnerabilidade detectada em parte do código', 'Crítico', '2024-11-12', 'Eliane Rocha', 7),
('Problema na integração com API externa', 'Integração com API de pagamento falhou', 'Médio', '2024-11-11', 'Paulo Fernandes', 8),
('Erro na atualização de versão do software', 'A versão mais recente não está sendo instalada corretamente', 'Baixo', '2024-11-10', 'Aline martins', 9),
('Falta de espaço em disco no servidor', 'Servidor está com espaço de armazenamento quase cheio', 'Médio', '2024-11-09', 'Gustavo Oliveira', 10);

select * from tb_usuario;
select * from tb_chamada;
```
