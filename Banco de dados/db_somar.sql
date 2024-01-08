create database db_projetos_somar;
use db_projetos_somar;

create table logins (
id_logins int not null auto_increment primary key,
nome_user varchar(45) not null,
cpf_user varchar(11) not null,
email_user varchar(45) not null,
senha_user varchar(45) not null
);

create table ODs(
 id_ods int not null auto_increment primary key,
 nome_ods varchar(45)
);

create table parceiros (
id_parceiros int not null auto_increment primary key,
nome_parceiro varchar(45) not null
);

create table projetos(
id_projetos int not null auto_increment primary key,
nome_projeto varchar(45) not null,
cidade_projeto varchar(45) not null,
descricao_projeto longtext not null,
objetivo_projeto varchar(45) not null,
chave_midias varchar(200),
login_criador_projeto int not null,
ods_id_1 int not null,
foreign key (login_criador_projeto) references logins(id_logins),
foreign key (ods_id_1) references ODs(id_ods)
);

create table projetos_com_parceiros(
projetos_id int not null,
ods_id int not null,
foreign key (projetos_id) references projetos(id_projetos),
foreign key (ods_id) references ods(id_ods)
);

                                           
insert into logins values (null,'lucas pedroso','12345','pedrosolucas1745@gmail.com','teste');
insert into ODs values  (null,'Erradicação da pobreza'),
					    (null,'Fome zero e agricultura sustentável'),
                        (null,'Saúde e bem-estar'),
                        (null,'Educação de qualidade'),
                        (null,'Igualdade de gênero'),
                        (null,'Água potável e saneamento'),
                        (null,'Energia limpa e acessível'),
                        (null,'Trabalho decente e crescimento econômico'),
                        (null,'Industria,Inovação e Infrestutura'),
                        (null,'Redução das desigualdades'),
                        (null,'Cidade e comunidades sustentáveis'),
                        (null,'Consumo e produção responsaveis'),
                        (null,'Ação contra a mudança global do clima'),
                        (null,'Vida na água'),
                        (null,'Vida terrestre'),
                        (null,'Paz, justiça e instituições eficazes'),
                        (null,'Parceria e meios de implementação');
                        
select * from projetos where nome_projeto = 'teste de projeto';
select * from projetos ;
select * from ODs;
select * from logins;
select * from projetos;
select * from parceiros;
select * from projetos_com_parceiros;
select * from projetos where login_criador_projeto = 1;
select * from projetos where ods_id = 15;
delete from projetos where id_projetos = 1;
delete  from logins where id_logins =2;
delete  from logins where id_logins = 2;
drop database db_projetos_somar; 
drop table projetos;