document.addEventListener("DOMContentLoaded", function () 
{
 verifyLogin();
});





function verifyLogin()
    {
    if(sessionStorage.getItem("id")==null){ window.location.href=("../index.html")}
    else
    {
        displayDataUser();
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
    const office= document.querySelector("#office")
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
           if(response[0][5]==1){office.value = "Administrador";}
           else if(response[0][5]==2){office.value = "Usuário";}
           company.value = response[0][6];
        }
    };
    xhr.send();
}

let btnSendUser = document.querySelector("#btnDeleteUser")
btnSendUser.addEventListener('click', function () {
    sendDeleteUser(event);
});

function sendDeleteUser()
{
    event.preventDefault();
    var urlParams = new URLSearchParams(window.location.search);
    var idUserSelected = urlParams.get("id");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerDeleteUser.php?idUser="+idUserSelected, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200)
        {
            response = xhr.responseText;
            console.log(response)
            alert("Usuario deletado com sucesso")
            window.location.href=('../views/restrictArea.html')
        }
    } 
    xhr.send();
}