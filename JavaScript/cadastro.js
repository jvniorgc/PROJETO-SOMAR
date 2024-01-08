document.addEventListener("DOMContentLoaded", () => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/senac-dojo-2023/assets/headerRestrict.html", false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("header").innerHTML = this.responseText;
    }
  };
  xhr.send();

  var xhrfooter = new XMLHttpRequest();
  xhrfooter.open("GET", "http://localhost/senac-dojo-2023/assets/footerRestrict.html", false);
  xhrfooter.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhrfooter.onreadystatechange = function () {
    if (xhrfooter.readyState === 4 && xhrfooter.status === 200) {
      document.getElementById("footer").innerHTML = this.responseText;
    }
  };
  xhrfooter.send();
  verifyLogin();
});

const enviar = document.getElementById("cadastrar");
console.log(enviar)
enviar.addEventListener('click', cadastrar);

function cadastrar(event) {
  event.preventDefault();
  let cargo = document.getElementsByName("cargo");
  let cargoSelecionado = 0; 
  let nome = document.getElementById("nomeCompleto").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let senha = document.getElementById("senha").value;
  cargo.forEach(valor => {
    if (valor.checked) { 
      cargoSelecionado = valor.value; 
    }
  });
  if (cargoSelecionado == 0 || nome == "" || email == "" || cpf == "" || senha == "") {
    alert("Favor preencher todos os campos.");
  } else {
    //enviar para o controller
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('cpf', cpf);
    formData.append('senha', senha);
    formData.append('cargo', cargoSelecionado);
    formData.append('empresa', sessionStorage.getItem("company"))

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost/senac-dojo-2023/controllers/controllerUser.php', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert("Cadastro realizado com sucesso!");
        window.location.href='../views/restrictArea.html'
      } else {
        alert("Erro ao cadastrar. Tente novamente mais tarde.");
      }
    };
    xhr.send(formData);
  }
}
function verifyLogin()
{
if(sessionStorage.getItem("id")==null){ window.location.href=("../index.html")}

}
