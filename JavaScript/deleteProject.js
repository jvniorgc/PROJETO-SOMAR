document.addEventListener('DOMContentLoaded',async ()=>
{
    const citys = document.querySelector("#cidadeProjeto");
    verifyLogin();
    const urlCitys = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/43/municipios`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", urlCitys, false);
    xhr.send();
    if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.response);
    const optionsCitys = document.createElement('optgroup')
    response.forEach(citys =>
        {
            optionsCitys.innerHTML +=`<option>${citys.nome}</option>` 
        })
        citys.appendChild(optionsCitys);
}// if request
seacrhProject()
})// event DOM
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
	})
// Inicializar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDyZVF1WDjTLkKcnDhz1e-wKGVOl9g5Hn8",
    authDomain: "teste-170423.firebaseapp.com",
    projectId: "teste-170423",
    storageBucket: "teste-170423.appspot.com",
    messagingSenderId: "564787693295",
    appId: "1:564787693295:web:c7e7590016eace397cbd1a"
  };
 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();//Fim da inicialização

var inserirCPF= document.querySelector("#CPF");
inserirCPF.value= sessionStorage.getItem("cpf");

let btnSendProject = document.querySelector("#btnEnviar")
btnSendProject.addEventListener('click', function () {
    sendDeleteProject(event);
})
function verifyLogin()
{
if(sessionStorage.getItem("id")==null){ window.location.href=("../index.html")}

}
function seacrhProject()
{
    const idProjeto = document.querySelector('#idProjeto')
    const nameProject = document.querySelector("#nomeProjeto");
    const stateProject = document.querySelector("#estadoProjeto")
    const cityProject = document.querySelector("#cidadeProjeto")
    const descriptionProject = document.querySelector("#descricaoProjeto")
    const objectProject = document.querySelector("#objetivoProjeto")
    const idCreator = sessionStorage.getItem("id");
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    console.log(id);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerSearchProject.php?id="+id, false);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Requisição concluída com sucesso");
           responseSearchProject = JSON.parse(xhr.responseText);
           console.log(responseSearchProject)
           idProjeto.value = responseSearchProject[0].id_projeto;
           nameProject.value = responseSearchProject[0].nome_projeto;
           stateProject.value = responseSearchProject[0].estado_projeto;
           cityProject.value = responseSearchProject[0].cidade_projeto;
           descriptionProject.value = responseSearchProject[0].descricao_projeto;
           objectProject.value = responseSearchProject[0].objetivo_projeto;
        }
    };
    xhr.send();
} 

function sendDeleteProject()
{
    event.preventDefault();
    const idProjeto = document.querySelector('#idProjeto').value
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/senac-dojo-2023/controllers/controllerDeleteProject.php?idProjeto="+idProjeto, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200)
        {
            response = xhr.responseText;
            console.log(response)
            alert("Projeto deletado com sucesso")
            window.location.href=('../views/restrictArea.html')
        }
    } 
    xhr.send("idProjeto="+encodeURIComponent(idProjeto));  
    const storageRef = storage.ref();
    const namefolder = idProjeto;//alterar para algum id fixo para realizar os testes 
    
    storageRef.child(namefolder).listAll().then(function(result) {//Parte de apagar
        // Usando Promise.all para aguardar a exclusão de todos os arquivos
        return Promise.all(result.items.map(function(item) {
          return item.delete();
        }));
      }).catch(function(error) {
        console.error("Erro ao excluir os arquivos:", error);
      });
}