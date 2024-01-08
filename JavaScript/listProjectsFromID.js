document.addEventListener("DOMContentLoaded", function () 
{
 verifyLogin();
});
document.addEventListener('DOMContentLoaded',()=>
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/senac-dojo-2023/assets/headerRestrict.html", false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById("header").innerHTML = this.responseText;
}
}
xhr.send()
let cargo;
	switch (sessionStorage.office){
		case "1": cargo="Administrador"
		break;
		case "2": cargo="Usuário"
		break;
	}
	var html = "";
	html+=`<div class="containerUser">`
	html+=`<img src="../public/img/perfil-usuario.png">`
	html+=`<div class="containerLinks">`
	html +=`<a href='inserirProjeto.html'>Inserir Projeto</a>`
	if(sessionStorage.office==1){
	html +=`<a href='cadastro.html'>Cadastrar Usuário</a>`
  html +=`<a href='usersList.html'>Administrar Usuários</a>`
	}
	html +=`<a href='../index.html'>Sair</a>`
	html+=`</div>`
	html+=`<div class="containerInfos">`
	html+= `<p>Olá, <b>${sessionStorage.user} </b></p>`
	html+=`<p>Seu cargo é: <b>${cargo}</b></p>`
	html+=`</div>`

	document.getElementById("nameUser").innerHTML = html;
  })
function displayAllProjects() {
    const idCreator = sessionStorage.getItem("id");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerProjectsFromIdUser.php?id=" + idCreator, false);
    xhr.send();
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      console.log(response)
      if(response.length == 0)
      {
        var html=""
        html += `<div class="cardSemProjeto">`
        html += `<img class="imgCardSemProjeto" src="../public/img/semProjeto.png">`
        html += `<p>Não existem Projetos Cadastrados.</p>`
        html += `</div>`
        document.getElementById('container').innerHTML = html;
      }
      else{
      var html=""
      for(let i=0; i < response.length; i++)
      {
        html += `<div class="cardProjeto">`
        html += `<img class="imgCard" src="../public/img/SDG-Wheel.png">`
        html += `<div class="conteudoCard">`
        html += `<p>Projeto: </p>`
        //html += `<span class="span2">${response[i].nome_projeto}</span>`
        html += `<a href=../views/telaProjeto.html?id=${response[i].id_projeto}><span class="span2">${response[i].nome_projeto}</span></a>`;
        html += `<p>ID do projeto: </p>`
        html += `<span class="span2">${response[i].id_projeto}</span>`
        html += `<p>Cidade de realização: </p>`
        html += `<span class="span2">${response[i].cidade_projeto}</span>`
        html += `<div class"buttonsCard">`
        html += `<a href="./editProject.html?id=${response[i].id_projeto}"><button class="material-symbols-outlined">edit</button></a> <a href="./deleteProject.html?id=${response[i].id_projeto}" ><button class="material-symbols-outlined">Delete</button></a>`
        html += `</div>`
        html += `</div>`
        html += `</div>`
      }
      }
      document.getElementById('container').innerHTML = html;
    }
    }// method request allProjects
    function verifyLogin()
    {
    if(sessionStorage.getItem("id")==null){ window.location.href=("../index.html")}
    else
    {
        displayAllProjects();
    }
    }    