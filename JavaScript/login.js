document.addEventListener('DOMContentLoaded',()=>
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/senac-dojo-2023/assets/header.html", false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById("header").innerHTML = this.responseText;
}
}
xhr.send()
})
document.addEventListener('DOMContentLoaded',()=>
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/senac-dojo-2023/assets/footerRestrict.html", false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById("footer").innerHTML = this.responseText;
}
}
xhr.send()
})

let btnLogin = document.querySelector("#login");
btnLogin.addEventListener('click', function(event) {
  validateLogin(event);
});

function validateLogin(event) {
    event.preventDefault();
    const cpf = document.querySelector("#cpf").value;
    const password = document.querySelector("#senha").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/SENAC-DOJO-2023/controllers/controllerLogin.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {     
            let response = JSON.parse(xhr.responseText);
            console.log(response)
            if (response.length === 0 || (response.length > 0 && (response[0].cpf_user !== cpf || response[0].password_user  !== password))) {
              var html = "<p>Dados incorretos, digite novamente</p>";
              document.getElementById('snhError').innerHTML = html;
              cpf.setValue=""
              password.setValue=""
              document.querySelector("#cpf").focus();
            } else {
              sessionStorage.setItem("id", response[0].id_user);
              sessionStorage.setItem("cpf",response[0].cpf_user);
              sessionStorage.setItem("user",response[0].nome_user);
              sessionStorage.setItem("office",response[0].cargo);
              sessionStorage.setItem("company",response[0].empresa_id);
              window.location.href=("../views/restrictArea.html");
            }
          } else {
            console.log("Erro na requisição: " + xhr.status);
          }
        }
      };
      
    xhr.send("cpf=" + cpf + "&senha=" + password);
  }