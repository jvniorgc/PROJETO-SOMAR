document.addEventListener("DOMContentLoaded", function () 
{
 verifyLogin();
 var xhr = new XMLHttpRequest();
 xhr.open("GET", "http://localhost/senac-dojo-2023/assets/headerRestrict.html", false);
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
   document.getElementById("header").innerHTML = this.responseText;
}
 }
});

function verifyLogin()
    {
    if(sessionStorage.getItem("id")==null){ window.location.href=("../index.html")}
    else
    {
        displayDataUser();
        displayAllProjects();
    }
    } 

function displayDataUser(){
    var urlParams = new URLSearchParams(window.location.search);
    var idUserSelected = urlParams.get("id");
    const idUser = document.querySelector('#idUser')
    const name = document.querySelector("#name");
    const email= document.querySelector("#email")
    const cpf= document.querySelector("#cpf")
    const password= document.querySelector("#password")
    const company= document.querySelector("#company")
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    console.log(id);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerShowUserData.php?id="+idUserSelected, false);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Requisição concluída com sucesso");
           response = JSON.parse(xhr.responseText);
           console.log(response)
           /*
           0->id
           1->nome
           2->email
           3->cpf
           4->senha
           5->cargo
           6->empresa
           */ 
           idUser.value = response[0][0];
           name.value = response[0][1];
           email.value = response[0][2];
           cpf.value = response[0][3];
           password.value = response[0][4];
           company.value = response[0][6];
        }
    };
    xhr.send();
}


//parte para exibir os projetos(peguei o mesmo código que esta na area restrita e só alterei o id que usa de base)
function displayAllProjects() {
    var urlParams = new URLSearchParams(window.location.search);
  var idUserSelected = urlParams.get("id");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerProjectsFromIdUser.php?id=" + idUserSelected, false);
    xhr.send();
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      console.log(response)
      if(response.length == 0)
      {
        var html=""
        html += `<div class="cardSemProjeto">`
        html += `<link rel="stylesheet" href="../public/stylesheets/editUser.css">`
        html += `<link rel="stylesheet" href="../public/stylesheets/usersList.css">`
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
        html += `<link rel="stylesheet" href="../public/stylesheets/usersList.css">`
        html += `<link rel="stylesheet" href="../public/stylesheets/editUser.css">`
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
        html += `<a href="./editProject.html?id=${response[i].id_projeto}"><button class="">Editar</button></a> <a href="./deleteProject.html?id=${response[i].id_projeto}" ><button class="">Deletar</button></a>`
        html += `</div>`
        html += `</div>`
        html += `</div>`
      }
      }
      document.getElementById('container').innerHTML = html;
    }
    }// method request allProjects


    let btnEditUser = document.querySelector("#btnEditUser")
    btnEditUser.addEventListener('click', function () {
    sendEditUser(event);
});

function sendEditUser()
{
    event.preventDefault();
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    const name = document.querySelector("#name").value;
    const email= document.querySelector("#email").value;
    const cpf= document.querySelector("#cpf").value;
    const password= document.querySelector("#password").value;
    const office= document.querySelector("#office").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerEditUser.php?"+
    "id="+encodeURIComponent(id)+
    "&name="+encodeURIComponent(name)+
    "&email="+encodeURIComponent(email)+
    "&cpf="+encodeURIComponent(cpf)+
    "&password="+encodeURIComponent(password)+
    "&office="+encodeURIComponent(office), true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200)
        {
            response = xhr.responseText;
            console.log(response)
            alert("Dados do usuário alterados com sucesso")
            window.location.href=('../views/restrictArea.html')
        }
    } 
    xhr.send();
}