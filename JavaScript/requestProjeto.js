var inserirCPF= document.querySelector("#idCriador");
inserirCPF.value= localStorage.getItem("cpf");

let btnEnviar = document.querySelector("#btnEnviar")
btnEnviar.addEventListener('click', function () {
   EnviarProjeto(event);
})
function EnviarProjeto() {
    event.preventDefault();
    let opcaosOds = document.querySelectorAll("#opcaoOds input[type='checkbox']")
    let odsSelecionadas = [];

    for (let i = 0; i < opcaosOds.length; i++) {
        if (opcaosOds[i].checked) {
            odsSelecionadas.push(opcaosOds[i].value)
        }
    }
    let opcaosPatrocinadores = document.querySelectorAll("#opcaoPartiners input[type='checkbox']")
    let PatrocinadoresSelecionados = [];

    for (let i = 0; i < opcaosPatrocinadores.length; i++) {
        if (opcaosPatrocinadores[i].checked) {
            PatrocinadoresSelecionados.push(opcaosPatrocinadores[i].value)
        }
    }

    let nomeProjeto = document.querySelector("#nomeProjeto").value;
    let cidadeProjeto = document.querySelector("#cidadeProjeto").value;
    let descricaoProjeto = document.querySelector("#descricaoProjeto").value;
    let objetivoProjeto = document.querySelector("#objetivoProjeto").value;
    let idCriador = localStorage.getItem("id");
    let opOds = odsSelecionadas;
    let opPartiners = PatrocinadoresSelecionados;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/senac-dojo-2023/controllers/controllerProjeto.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Requisição concluída com sucesso");
            alert("Projeto inserido com sucesso");
           console.log(xhr.responseText);
        }
    };
    xhr.send("nomeProjeto="+encodeURIComponent(nomeProjeto)+
             "&cidadeProjeto="+encodeURIComponent(cidadeProjeto)+
             "&descricaoProjeto="+encodeURIComponent(descricaoProjeto)+
             "&objetivoProjeto="+encodeURIComponent(objetivoProjeto)+
             "&idCriador="+encodeURIComponent(idCriador)+
             "&opcaoOds="+encodeURIComponent(JSON.stringify(opOds))+
             "&opcaoPatrocinador="+encodeURIComponent(JSON.stringify(opPartiners)) 
    );    
}// function project
