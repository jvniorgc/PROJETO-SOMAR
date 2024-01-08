create database DB_somar;
use DB_somar;

create table users (
id_user int not null auto_increment primary key,
nome_user varchar(50) not null,
email_user varchar(50) not null,
cpf_user varchar(11) not null,
password_user varchar(20) not null
);
create table ods (
 id_ods int not null auto_increment primary key,
 nome_ods varchar(50) not null
);
create table parceiros (
id_parceiro int not null auto_increment primary key,
nome_parceiro varchar(45) not null
);
create table projetos(
id_projeto int not null auto_increment primary key,
nome_projeto varchar(45) not null,
cidade_projeto varchar(45) not null,
descricao_projeto longtext not null,
objetivo_projeto varchar(45) not null,
chave_midia varchar(200),
id_criador int not null
);
create table projetos_com_ods_parceiros(
projeto_id int not null,
ods_id int not null,
parceiro_id int not null,
foreign key (projeto_id) references projetos(id_projeto),
foreign key (ods_id) references ods(id_ods),
foreign key (parceiro_id) references parceiros(id_parceiro)
);
