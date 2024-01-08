create database DB_somar;
use DB_somar;

create table empresa(
id_empresa int not null auto_increment primary key,
nome_empresa varchar(50) not null
);

create table users (
id_user int not null auto_increment primary key,
nome_user varchar(50) not null,
email_user varchar(50) not null,
cpf_user varchar(11) not null,
password_user varchar(20) not null,
cargo int not null,
empresa_id int not null,
foreign key (empresa_id) references empresa(id_empresa)
);
create table causas_atuacao(
id_causa_atuacao int not null auto_increment primary key,
nome_atuacao varchar(45)not null
);
create table ods (
 id_ods int not null  auto_increment primary key,
 nome_ods varchar(50) not null,
 texto_ods varchar(4000) not null,
 causa_atuacao_id int not null,
 foreign key (causa_atuacao_id) references causas_atuacao(id_causa_atuacao)
);
create table parceiros (
id_parceiro int not null auto_increment primary key,
nome_parceiro varchar(45) not null
);
create table projetos(
id_projeto int not null auto_increment primary key,
nome_projeto varchar(45) not null,
estado_projeto varchar(2) not null,
cidade_projeto varchar(45) not null,
descricao_projeto longtext not null,
objetivo_projeto varchar(45) not null,
user_id int not null,
foreign key (user_id) references users(id_user)
);
create table projetos_com_ods_parceiros(
projeto_id int not null,
ods_id int,
parceiro_id int,
foreign key (projeto_id) references projetos(id_projeto),
foreign key (ods_id) references ods(id_ods),
foreign key (parceiro_id) references parceiros(id_parceiro)
);
insert into empresa values (null,'SOMAR');
insert into users values (null,'Discípulos do G.A.S.®','pedrosolucas1745@gmail.com','12345','teste',1,1);
insert into users values (null,'Fulano','pedrosolucas1745@gmail.com','111','111',2,1);
insert into causas_atuacao values (null,'pessoas'),
								  (null,'educação'),
								  (null,'economia'),
								  (null,'natureza');
                                  
INSERT INTO ods VALUES (null,'Erradicação da pobreza', 'Em 2000, o mundo comprometeu-se em reduzir pela metade o número de pessoas vivendo em extrema pobreza e alcançou ganhos notáveis no desenvolvimento humano. Até 2015, a pobreza havia sido reduzida significativamente, o acesso ao ensino básico e os resultados da saúde melhoraram, bem como foram realizados progressos na promoção da igualdade de gênero e no empoderamento das mulheres e meninas. No entanto, a erradicação da pobreza extrema continua a ser um desafio, com mais de 700 milhões de pessoas vivendo, globalmente, com menos de US$ 1,90 (PPP) por dia e mais da metade da população global vivendo com menos de US$ 8,00 por dia. Em um mundo confrontado pelos crescentes desafios para o desenvolvimento, a Agenda 2030 reconhece que a erradicação da pobreza, em todas as suas formas, é o maior desafio global para atingirmos o desenvolvimento sustentável. Por isso, a grande prioridade do desenvolvimento sustentável deve ser os mais pobres e vulneráveis: ninguém será deixado para trás!', 1),
					   (null,'Fome Zero e Agricultura Sustentável', 'Durante as duas últimas décadas, o rápido crescimento econômico e o desenvolvimento da agricultura foram responsáveis pela redução pela metade da proporção de pessoas subnutridas no mundo. Entretanto, ainda há 795 milhões de pessoas no mundo que, em 2014, viviam sob o espectro da desnutrição crônica. O ODS 2 pretende acabar com todas as formas de fome e má-nutrição até 2030, de modo a garantir que todas as pessoas – especialmente as crianças – tenham acesso suficiente a alimentos nutritivos durante todos os anos. Para alcançar este objetivo, é necessário promover práticas agrícolas sustentáveis, por meio do apoio à agricultura familiar, do acesso equitativo à terra, à tecnologia e ao mercado.', 3),
					   (null,'Saúde e bem-estar', 'Desde os ODM foram registrados progressos históricos na redução da mortalidade infantil, na melhoria da saúde materna e na luta contra o HIV/Aids, a tuberculose, a malária e outras doenças. Em 15 anos, o número de pessoas infectadas pelo HIV anualmente caiu de 3,1 milhões para 2 milhões e mais de 6,2 milhões de vidas foram salvas da malária. Apesar do progresso, as doenças crônicas e aquelas resultantes de desastres continuam a ser os principais fatores que contribuem para a pobreza e para a privação dos mais vulneráveis. Atualmente, 63% de todas as mortes do mundo provêm de doenças não transmissíveis, principalmente cardiovasculares, respiratórias, câncer e diabetes. Estima-se que as perdas econômicas para os países de renda média e baixa provenientes destas doenças ultrapassaram US$ 7 trilhões até 2025. Os ODS propõem metas integradas que abordam a promoção da saúde e bem estar como essenciais ao fomento das capacidades humanas.', 1),
                       (null,'Educação de qualidade', 'Desde 2000, houve enorme progresso na promoção do acesso universal à educação primária para as crianças ao redor do mundo. Para além do foco na educação básica, todos os níveis de educação estão contemplados no objetivo de desenvolvimento sustentável 4, que enxerga como fundamental a promoção de uma educação inclusiva, igualitária e baseada nos princípios de direitos humanos e desenvolvimento sustentável. A promoção da capacitação e empoderamento dos indivíduos é o centro deste objetivo, que visa ampliar as oportunidades das pessoas mais vulneráveis no caminho do desenvolvimento.', 2),
                       (null,'Igualdade de gênero', 'A igualdade de gênero não é apenas um direito humano fundamental, mas a base necessária para a construção de um mundo pacífico, próspero e sustentável. O esforço de alcance do ODS 5 é transversal à toda Agenda 2030 e reflete a crescente evidência de que a igualdade de gênero tem efeitos multiplicadores no desenvolvimento sustentável. Muitos avanços em termos de assegurar melhores condições de vida a mulheres e meninas são um importante legado dos ODM. Os Objetivos de Desenvolvimento Sustentável visam intensificar estas realizações, não apenas nas áreas de saúde, educação e trabalho, mas especialmente no combate às discriminações e violências baseadas no gênero e na promoção do empoderamento de mulheres e meninas para que possam atuar enfaticamente na promoção do desenvolvimento sustentável, por meio da participação na política, na economia, e em diversas áreas de tomada de decisão. O desenvolvimento sustentável não será alcançado se as barreiras tangíveis e intangíveis que impedem o pleno desenvolvimento e exercício das capacidades de metade da população não forem eliminadas.', 2),
					   (null,'Água potável e saneamento', 'A água está no centro do desenvolvimento sustentável e das suas três dimensões – ambiental, econômica e social. Os recursos hídricos, bem como os serviços a eles associados, sustentam os esforços de erradicação da pobreza, de crescimento econômico e da sustentabilidade ambiental. O acesso à água e ao saneamento importa para todos os aspectos da dignidade humana: da segurança alimentar e energética à saúde humana e ambiental. A escassez de água afeta mais de 40% da população mundial, número que deverá subir ainda mais como resultado da mudança do clima e da gestão inadequada dos recursos naturais. É possível trilhar um novo caminho que nos leve à realização deste objetivo, por meio da cooperação internacional, proteção às nascentes, rios e bacias e compartilhamento de tecnologias de tratamento de água.', 4),
                       (null,'Energia limpa e acessível', 'De 2000 a 2013, mais de 5% da população mundial obteve acesso à eletricidade (de 79,313% para 84,58%). Para os próximos anos a tendência é aumentar a demanda por energia barata. Contudo, combustíveis fósseis e suas emissões de gases de efeito estufa provocam mudanças drásticas no clima. Atender às necessidades da economia e proteger o meio ambiente é um dos grandes desafios para o desenvolvimento sustentável. Nesse sentido, o ODS 7 reconhece a importância e traça metas focadas na transição energética, de fontes não renováveis e poluidoras, para fontes renováveis limpas, com especial atenção às necessidades das pessoas e países em situação de maior vulnerabilidade.', 4),
					   (null,'Trabalho decente e Crescimento econômico', 'No longo prazo, a desigualdade de renda e de oportunidades prejudica o crescimento econômico e o alcance do desenvolvimento sustentável. Os mais vulneráveis, muitas vezes, têm menores expectativas de vida e apresentam dificuldades de se libertarem de um círculo vicioso de insucesso escolar, baixas qualificações e poucas perspectivas de empregos de qualidade. A revitalização econômica contribui para criar melhores condições para a estabilidade e a sustentabilidade do país. É possível promover políticas que incentivem o empreendedorismo e a criação de empregos de forma sustentável e inclusiva. O ODS 8 reconhece a urgência de erradicar o trabalho forçado e formas análogas ao do trabalho escravo, bem como o tráfico de seres humanos, de modo a garantir a todos e todas o alcance pleno de seu potencial e capacidades.', 3),
					   (null,'Indústria, Inovação e Infraestrutura', 'Investimentos em infraestrutura e em inovação são condições básicas para o crescimento econômico e para o desenvolvimento das nações. Garantir uma rede de transporte público e infraestrutura urbana de qualidade são condições necessárias para o desenvolvimento sustentável. Por meio da promoção de eficiência energética e inclusão social, o progresso tecnológico é também uma das chaves para as soluções dos desafios econômicos e ambientais. Garantir a igualdade de acesso à tecnologias é crucial para promover a informação e conhecimento para todos. O ODS 9 lista metas que visam à construção de estruturas resilientes e modernas, ao fortalecimento industrial de forma eficiente, ao fomento da inovação, com valorização da micro e pequena empresa e inclusão dos mais vulneráveis aos sistemas financeiros e produtivos.', 3),
					   (null,'Redução das desigualdades', 'O mundo é mais desigual hoje do que em qualquer momento da história desde 1940. A desigualdade de renda e na distribuição da riqueza dentro dos países têm disparado, incapacitando os esforços de alcance dos resultados do desenvolvimento e de expansão das oportunidades e habilidades das pessoas, especialmente dos mais vulneráveis. A desigualdade é um problema global que requer soluções integradas. A visão estratégica deste objetivo se constrói sob o objetivo da erradicação da pobreza em todas suas dimensões, na redução das desigualdades socioeconômicas e no combate às discriminações de todos os tipos. Seu alcance depende de todos os setores na busca pela promoção de oportunidades para as pessoas mais excluídas no caminho do desenvolvimento.', 2),
                       (null,'Cidade e comunidades sustentáveis', 'Em 2014, 54% da população mundial vivia em áreas urbanas, com projeção de crescimento para 66% em 2050. Em 2030, são estimadas 41 megalópoles com mais de 10 milhões de habitantes. Considerando que a pobreza extrema muitas vezes se concentra nestes espaços urbanos, as desigualdades sociais acabam sendo mais acentuadas e a violência se torna uma consequência das discrepâncias no acesso pleno à cidade. Transformar significativamente a construção e a gestão dos espaços urbanos é essencial para que o desenvolvimento sustentável seja alcançado. Temas intrinsecamente relacionados à urbanização, como mobilidade, gestão de resíduos sólidos e saneamento, estão incluídos nas metas do ODS 11, bem como o planejamento e aumento de resiliência dos assentamentos humanos, levando em conta as necessidades diferenciadas das áreas rurais, periurbanas e urbanas. O objetivo 11 está alinhado à Nova Agenda Urbana, acordada em outubro de 2016, durante a III Conferência das Nações Unidas sobre Moradia e Desenvolvimento Urbano Sustentável.', 4),
                       (null,'Consumo e produção responsáveis', 'Para alcançar as metas deste ODS, a mudança nos padrões de consumo e produção se configuram como medidas indispensáveis na redução da pegada ecológica sobre o meio ambiente. Essas medidas são a base do desenvolvimento econômico e social sustentável. As metas do ODS 12 visam a promoção da eficiência do uso de recursos energéticos e naturais, da infraestrutura sustentável, do acesso a serviços básicos. Além disso, o objetivo prioriza a informação, a gestão coordenada, a transparência e a responsabilização dos atores consumidores de recursos naturais como ferramentas chave para o alcance de padrões mais sustentáveis de produção e consumo.', 4),
					   (null,'Ação contra a mudança global do clima', 'A mudança do clima é um evento transnacional, cujos impactos estão desregulando economias nacionais e afetando pessoas em todos os lugares, principalmente aquelas em situação de maior vulnerabilidade nos países em desenvolvimento. Sem a ação imediata frente à mudança do clima, a temperatura terrestre está projetada para aumentar mais de 3 ºC até o final do século XXI. Uma das metas para esse objetivo é mobilizar 100 milhões de dólares por ano até 2020 para ajudar os países em desenvolvimento no plano de mitigação de desastres relacionados ao clima. O estabelecimento do ODS 13 apenas para lidar com a questão do clima é encarado como estratégico para a mobilização dos atores capazes de promover as mudanças necessárias para impedir estas projeções de se tornarem realidade.', 4),
                       (null,'Vida na água', 'Os oceanos tornam a vida humana possível por meio da provisão de segurança alimentar, transporte, fornecimento de energia, turismo, dentre outros. Além, por meio da regulação da sua temperatura, química, correntes e formas de vida, os oceanos regulam muitos dos dos serviços ecossistêmicos mais críticos do planeta, como ciclo do carbono e nitrogênio, regulação do clima, e produção de oxigênio. Além, os oceanos representam aproximadamente US$ 3 trilhões da economia global por ano, ou 5% do PIB global. 40% dos oceanos estão sendo afetados incisiva e diretamente por atividades humanas, como poluição e pesca predatória, o que resulta, principalmente, em perda de habitat, introdução de espécies invasoras e acidificação. Nosso lixo também ajuda na degradação dos oceanos – há 13.000 pedaços de lixo plástico em cada quilômetro quadrado. É frente a esses desafios que os Objetivos de Desenvolvimento Sustentável indicam metas para gerenciar e proteger a vida na água.', 4),
					   (null,'Vida terrestre', 'Os seres humanos e outros animais dependem da natureza para terem alimento, ar puro, água limpa e também como um meio de combate à mudança do clima. As florestas, que cobrem 30% da superfície da Terra, ajudam a manter o ar e a água limpa e o clima da Terra em equilíbrio – sem mencionar que são o lar de milhões de espécies. Promover o manejo sustentável das florestas, o combate à desertificação, parar e reverter a degradação da terra, interromper o processo de perda de biodiversidade são algumas das metas que o ODS 15 promove. Usar sustentavelmente os recursos naturais em cadeias produtivas e em atividades de subsistência de comunidades, e integrá-los em políticas públicas é tarefa central para o atingimento destas metas e a promoção de todos os outros ODS.', 4),
                       (null,'Paz, justiça e instituições eficazes', 'Promover instituições fortes, inclusivas e transparentes, a manutenção da paz e o respeito aos direitos humanos baseados no Estado de direito são a base para o desenvolvimento humano sustentável. Estes são alguns dos princípios que sustentam as metas do ODS 16, que também inclui temas sensíveis, como o combate à exploração sexual, ao tráfico de pessoas e à tortura. Outros temas incluídos nas metas do ODS 16 são o enfrentamento à corrupção, ao terrorismo, a práticas criminosas, especialmente aquelas que ferem os direitos humanos.', 3),
                       (null,'Parceria e meios de implementação', 'Os ODS só serão realizados mediante um compromisso renovado de cooperação entre a comunidade internacional e uma parceria global ampla que inclua todos os setores interessados e as pessoas afetadas pelos processos de desenvolvimento. Os meios de implementação e as parcerias para o desenvolvimento sustentável são vitais para o crescimento sustentado e para o desenvolvimento sustentável das nações. O ODS 17 propõe o caminho para a realização efetiva da Agenda 2030 por todos os países, e a coordenação de esforços na arena internacional é essencial para isso. A Cooperação Sul-Sul e triangular, a transferência de tecnologia, o intercâmbio de dados e capital humano, bem como a assistência oficial ao desenvolvimento são alguns dos principais meios para o alcance dos ODS.', 3);

insert into parceiros values (null,'ONU'),
							 (null,'SENAC'),
                             (null,'SESC');
                             
insert into projetos_com_ods_parceiros values(1,1,null);
                            
select id_user,cpf_user,password_user from users where cpf_user = '12345' and password_user='teste';

SELECT projetos.*, ods.nome_ods , ods.texto_ods,ods.causa_atuacao_id, parceiros.nome_parceiro
FROM projetos
LEFT JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
LEFT JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
WHERE id_ods =2;

SELECT projetos.*, ods.nome_ods, parceiros.nome_parceiro
FROM projetos
LEFT JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
LEFT JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
where id_ods =1;

select * from ods where id_ods = 1;

SELECT projetos.*, ods.nome_ods, parceiros.nome_parceiro
FROM projetos
LEFT JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
LEFT JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
where id_ods =1 and id_ods =2;

SELECT projetos.*, ods.nome_ods, parceiros.nome_parceiro
FROM projetos
JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
JOIN causas_atuacao ON ods.causa_atuacao_id = causas_atuacao.id_causa_atuacao
LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
WHERE causas_atuacao.id_causa_atuacao = 1;

SELECT DISTINCT projetos.*, ods.nome_ods, parceiros.nome_parceiro
FROM projetos
JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
JOIN causas_atuacao ON ods.causa_atuacao_id = causas_atuacao.id_causa_atuacao
LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
WHERE causas_atuacao.id_causa_atuacao = 1
group by projetos.id_projeto;

SELECT projetos.*, ods.id_ods, parceiros.nome_parceiro
        FROM projetos
        LEFT JOIN projetos_com_ods_parceiros ON projetos.id_projeto = projetos_com_ods_parceiros.projeto_id
        LEFT JOIN ods ON projetos_com_ods_parceiros.ods_id = ods.id_ods
        LEFT JOIN parceiros ON projetos_com_ods_parceiros.parceiro_id = parceiros.id_parceiro
        where id_projeto = 3;

select * from ods where causa_atuacao_id = 1;

select * from projetos where user_id =1;

drop database db_somar;




