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
}
await searchProject()
})

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
    sendEditProject(event);
})
function verifyLogin()
{
if(sessionStorage.getItem("id")==null){ window.location.href=("../index.html")}
}
function seacrhSetProject()
{
    const idProjeto = document.querySelector('#idProjeto')
    const nameProject = document.querySelector("#nomeProjeto");
    const stateProject = document.querySelector("#estadoProjeto")
    const cityProject = document.querySelector("#cidadeProjeto")
    const descriptionProject = document.querySelector("#descricaoProjeto")
    const objectProject = document.querySelector("#objetivoProjeto")
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerSearchProject.php?id="+id, false);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           responseSearchProject = JSON.parse(xhr.responseText);
           idProjeto.value = responseSearchProject[0].id_projeto;
           nameProject.value = responseSearchProject[0].nome_projeto;
           stateProject.value = responseSearchProject[0].stateProject;
           cityProject.value = responseSearchProject[0].cidade_projeto;
           descriptionProject.value = responseSearchProject[0].descricao_projeto;
           objectProject.value = responseSearchProject[0].objetivo_projeto;
        }
    };
    xhr.send();
} 
 async function searchProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProjetoSearch = urlParams.get("id");
    const idProjeto = document.querySelector('#idProjeto')
    const nameProject = document.querySelector("#nomeProjeto");
    const stateProject = document.querySelector("#estadoProjeto")
    const cityProject = document.querySelector("#cidadeProjeto")
    const descriptionProject = document.querySelector("#descricaoProjeto")
    const objectProject = document.querySelector("#objetivoProjeto")
    fetch(`http://localhost/senac-dojo-2023/controllers/controllerAllDataProject.php?id=${idProjetoSearch}`)
      .then((response) => response.json())
      .then((data) => {
        idProjeto.value = data[0].id_projeto;
        nameProject.value = data[0].nome_projeto;
        stateProject.value = data[0].estado_projeto;
        cityProject.value = data[0].cidade_projeto;
        descriptionProject.value = data[0].descricao_projeto;
        objectProject.value = data[0].objetivo_projeto;
        if (Array.isArray(data)) {
          const odsSelecionados = [];
          const parceirosSelecionados = [];
          data.forEach((item) => {
            if (item.id_ods) {
              odsSelecionados.push(item.id_ods);
            }
            if (item.nome_parceiro) {
              parceirosSelecionados.push(item.nome_parceiro);
            }
          });
          var htmlODs = ""; 
          if(odsSelecionados.length == 0)
          {
            htmlODs += `<p> Não existem ODS no projeto</p>`
            document.getElementById('oldOds').innerHTML = htmlODs;
          }
          else
          {
            htmlODs += `<p> ODS presentes no projeto</p>`
            for(let i=0; i<odsSelecionados.length; i++)
         {
            htmlODs += `<p> ODS: ${odsSelecionados[i]}</p>`
         }
         document.getElementById('oldOds').innerHTML = htmlODs;
        }
         var htmlPartiners = "";
         if(parceirosSelecionados.length ==0)
         {
            htmlPartiners += `<p> Não existem Parceiros no projeto</p>`
            document.getElementById('oldPartiners').innerHTML = htmlPartiners;
         }
         else
         {
            htmlPartiners += `<p>Parceiros presentes no projeto</p>`
            for(let j=0; j<parceirosSelecionados.length; j++)
         {
            htmlPartiners += `<p>${parceirosSelecionados[j]}</p>`
         }
         document.getElementById('oldPartiners').innerHTML = htmlPartiners;
         }
        } else {
          console.error('Dados do projeto não estão no formato esperado.');
        }
      })
      .catch((error) => {
        console.error('Erro ao obter os dados do projeto:', error);
      });
}
function sendEditProject()
{ 
const optionsOds = document.querySelectorAll("#opcaoOds input[type='checkbox']")
let selectedOds= [];

for (let i = 0; i < optionsOds.length; i++) {
    if (optionsOds[i].checked) {
        selectedOds.push(optionsOds[i].value)
    }
}
const optionsPartiners = document.querySelectorAll("#opcaoPartiners input[type='checkbox']")
let selectedPartiners = [];

for (let i = 0; i < optionsPartiners.length; i++) {
    if (optionsPartiners[i].checked) {
        selectedPartiners.push(optionsPartiners[i].value)
    }
}
    event.preventDefault();
    const idProjeto = document.querySelector('#idProjeto').value
    const nameProject = document.querySelector("#nomeProjeto").value;
    const stateProject = document.querySelector("#estadoProjeto").value
    const cityProject = document.querySelector("#cidadeProjeto").value
    const descriptionProject = document.querySelector("#descricaoProjeto").value
    const id = document.querySelector("#CPF").value
    const objectProject = document.querySelector("#objetivoProjeto").value
    const optionsOdsFinal = selectedOds
    const optionPartinersFinal = selectedPartiners
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/senac-dojo-2023/controllers/controllerEditProject.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200)
        {   alert("Você será redirecionado após a conclusão do envio dos arquivos. Favor aguarde.")
        }
    } 
    xhr.send("idProjeto="+encodeURI(idProjeto)+
             "&nomeProjeto="+encodeURIComponent(nameProject)+
             "&estadoProjeto="+encodeURIComponent(stateProject)+
             "&cidadeProjeto="+encodeURIComponent(cityProject)+
             "&descricaoProjeto="+encodeURIComponent(descriptionProject)+
             "&objetivoProjeto="+encodeURIComponent(objectProject)+
             "&idCriador="+encodeURIComponent(id)+
             "&opcaoOds="+encodeURIComponent(JSON.stringify(optionsOdsFinal))+
             "&opcaoPatrocinador="+encodeURIComponent(JSON.stringify(optionPartinersFinal)) 
    ); 
    const storageRef = storage.ref();
    const namefolder = idProjeto;
    storageRef.child(namefolder).listAll()
    .then(function(result) {
        const promisesExclusao = result.items.map(function(item) {
            return item.delete().catch(function(erro) {
                console.error("Erro ao excluir arquivo:", erro);
            });
        });
        return Promise.all(promisesExclusao);
    })
    .then(function() {
        const arquivos = document.querySelector("#photo").files;
        const uploadPromises = [];
        for (const arquivo of arquivos) {
            const referenciaArquivo = storageRef.child(namefolder + "/" + arquivo.name);
            const uploadTask = referenciaArquivo.put(arquivo);
            uploadTask.on("state_changed", function(snapshot) {
                const progresso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                const progressBar = document.querySelector("#progressBar");
                progressBar.value = progresso;
            });
            uploadPromises.push(uploadTask);
        }
        return Promise.all(uploadPromises).then(function() {
                window.location.href = "../views/restrictArea.html";
        });
    })
    .catch(function(erro) {
        console.error("Erro:", erro);
    });
}