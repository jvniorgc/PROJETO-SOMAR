let btnLogin = document.querySelector("#login");
btnLogin.addEventListener('click', function(event) {
  validarLogin(event);
});

function validarLogin(event) {
    event.preventDefault();
    let cpf = document.querySelector("#cpf").value;
    let password = document.querySelector("#senha").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/SENAC-DOJO-2023/controllers/controllerLogin.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Requisição concluída com sucesso");
            let response = JSON.parse(xhr.responseText);
            console.log(response)
            if (response.length === 0 || (response.length > 0 && (response[0].cpf_user !== cpf || response[0].password_user  !== password))) {
              var html = "<p>Dados incorretos, digite novamente</p>";
              document.getElementById('snhError').innerHTML = html;
              let cpf = document.querySelector("#cpf").value ="";
              let password = document.querySelector("#senha").value="";
              document.querySelector("#cpf").focus();
            } else {
              localStorage.setItem("id", response[0].id_user);
              localStorage.setItem("cpf",response[0].cpf_user);
              window.open("../views/inserirProjeto.html");
            }
          } else {
            console.log("Erro na requisição: " + xhr.status);
          }
        }
      };
      
    xhr.send("cpf=" + cpf + "&senha=" + password);
  }