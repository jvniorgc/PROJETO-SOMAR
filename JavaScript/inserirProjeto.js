document.addEventListener('DOMContentLoaded',async ()=>
{
    const citys = document.querySelector("#cidadeProjeto");
    verifyLogin();
    const urlCitys = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/43/municipios';
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
})
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
    verifyInputfiles(event);
})
 
function sendProject() {
    //Filtro de imagem/video
    var input = document.getElementById("photo");
    var files = input.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const type = file.type;
        if (type.startsWith('video/') || type.startsWith('image/')) {
            // Verificação de se o arquivo especifico é vídeo
        } else {
            alert("Tipo de arquivo inválido");
            input.value = ''; // Limpar a seleção do arquivo
            return; // Terminar a função
        }
    }


    //fim do filtro de imagem/video
    event.preventDefault();
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

    const nameProject = document.querySelector("#nomeProjeto").value;
    const stateProject = document.querySelector("#estadoProjeto").value;
    const cityProject = document.querySelector("#cidadeProjeto").value;
    const descriptionProject = document.querySelector("#descricaoProjeto").value;
    const objectProject = document.querySelector("#objetivoProjeto").value;
    const idCreator = sessionStorage.getItem("id");
    const optionsOdsFinal = selectedOds;
    const optionPartinersFinal = selectedPartiners;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/senac-dojo-2023/controllers/controllerProject.php", false);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Requisição concluída com sucesso");
            alert("Você será redirecionado após a conclusão do envio dos arquivos. Favor aguarde.")
            console.log(xhr.responseText);

            // Pegar o ID do projeto
        var response = xhr.responseText;
        var startIndex = response.indexOf("id: ") + 4; // Obter o índice inicial do ID
        var endIndex = response.indexOf(" ", startIndex); // Obter o índice final do ID
        var idProject = response.substring(startIndex, endIndex);
            // Verificar se o ID do projeto é válido
            if (idProject) {
                // Criando a referência da pasta com base no ID do projeto
                var folderRef = storage.ref().child(idProject);

                // Obtendo os arquivos selecionados no input de fotos e vídeos
                //var input = document.getElementById("photo");
                //var files = input.files;

                // Fazendo o upload dos arquivos para a pasta com o nome do projeto
                let contador=0;
                for (let i = 0; i < files.length; i++) {
                    console.log(files[i]);
                    var file = files[i];
                    var fileRef = folderRef.child(file.name);
                    //---------
                    fileRef.put(file).on(
                        "state_changed",
                        function(snapshot) {
                            // Atualizar a barra de progresso
                            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log("Progresso do upload:", progress + "%");
                
                            var progressBar = document.getElementById("progressBar");
                            progressBar.value = progress;
                        },
                        function(error) {
                            // Tratar erros, se necessário
                        },
                        function() {
                            // Upload do arquivo concluído com sucesso
                            console.log("Upload do arquivo", file.name, "concluído com sucesso!");
                            contador++;
                            if (contador == files.length) {
                                alert("Arquivos enviados para a pasta -> " + idProject);
                                window.location.href = "../views/restrictArea.html";
                            }
                        }
                    );
                    //---------esses - foram usados para delimitar o código que iria ser substituido para teste
                }
            }
        }
    };
    xhr.send("nomeProjeto="+encodeURIComponent(nameProject)+
             "&estadoProjeto="+encodeURIComponent(stateProject)+
             "&cidadeProjeto="+encodeURIComponent(cityProject)+
             "&descricaoProjeto="+encodeURIComponent(descriptionProject)+
             "&objetivoProjeto="+encodeURIComponent(objectProject)+
             "&idCriador="+encodeURIComponent(idCreator)+
             "&opcaoOds="+encodeURIComponent(JSON.stringify(optionsOdsFinal))+
             "&opcaoPatrocinador="+encodeURIComponent(JSON.stringify(optionPartinersFinal)) 
    );   
}// function project
function verifyLogin()
{
if(sessionStorage.getItem("id")==null){ window.location.href=("../index.html")}

}
function verifyInputfiles(event) {
    let input = document.getElementById("photo");
    if (input.files.length == 0) {
        alert("Favor inserir pelo menos 1 imagem para o projeto.");
        input.style.borderColor = 'red';
        input.focus();
        event.preventDefault();
    } else {
        sendProject();
    }
}