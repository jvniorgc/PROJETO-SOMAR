function EnviarProjeto() {
    let nomeProjeto = document.querySelector("#nomeProjeto");
    let cidadeProjeto = document.querySelector("#cidadeProjeto");
    let descricaoProjeto = document.querySelector("#descricaoProjeto");
    let objetivoProjeto = document.querySelector("#objetivoProjeto");
    let idCriador = document.querySelector("#idCriador");
    let ods = document.querySelector("#ods");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/senac-dojo-2023/controllers/controllerProjeto.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Requisição concluída com sucesso");
            alert("Projeto inserido com sucesso");
        }
    };
    xhr.send("nomeProjeto=" + nomeProjeto.value + "&cidadeProjeto=" + cidadeProjeto.value + "&descricaoProjeto=" + descricaoProjeto.value + "&objetivoProjeto=" + objetivoProjeto.value + "&idCriador=" + idCriador.value + "&ods=" + ods.value);
}