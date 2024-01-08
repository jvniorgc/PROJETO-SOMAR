document.addEventListener("DOMContentLoaded", function () 
{
 verifyLogin();
});





function verifyLogin()
    {
    if(sessionStorage.getItem("id")==null){ window.location.href=("../index.html")}
    else
    {
        displayAllUsers();
    }
    } 

    function displayAllUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerShowUsers.php?company="+sessionStorage.getItem("company"), false);
    xhr.send();
    if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
      console.log(response)
      if(response.length == 0)
      {
        alert("Atualmente não possui nenhuma conta no nível de usuário cadastrada.")
        window.location.href=('../views/restrictArea.html')
      }
      else{
        var html=""
        //posições do response
        //0 -> id
        //1 -> nome
        //2 -> email
        //3 -> cpf
        //4 -> senha
        //5 -> cargo
        for(let i=0; i < response.length; i++)
      {
        //construção dos cards com os usuarios
        html += `<link rel="stylesheet" href="../public/stylesheets/usersList.css">`
        html += `<div class="cardUsuario">`
        html += `<h1>LISTAR USUÁRIO</h1>`
        html += `<img src="../public/img/perfil-usuario.png">`
        html += `<a> Usuário: ${response[i][1]}</a>`;
        html +=`<a href=../views/editUser.html?id=${response[i][0]}><button>Editar dados do usuario</button></a>`
        html +=`<a href=../views/deleteUser.html?id=${response[i][0]}><button id=deleteUser>Apagar usuario</button></a>`
        html +=`</div>`

      }//for
      }//else
      document.getElementById('usuarios').innerHTML = html;
    }
    }