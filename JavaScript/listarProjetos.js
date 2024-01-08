document.addEventListener("DOMContentLoaded", function () {
  requestAllProjects()
  sessionStorage.removeItem("cpf")
		sessionStorage.removeItem("office")
		sessionStorage.removeItem("user")
		sessionStorage.removeItem("id")
});
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

const buttons = document.querySelectorAll('button[name="btn"]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    sendOdsValue(button.value);
  });
});

function sendOdsValue(buttonValue) {
  window.location.href = "../views/projetos.html?ods=" + buttonValue;
}

function requestAllProjects() {
  filtro = "*"
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerAllProjects.php", false);
  xhr.send();
  if (xhr.readyState === 4 && xhr.status === 200) {
    var responseJson = JSON.parse(xhr.responseText);
    var html = '';
    if (responseJson.length < 1) {
      html += '<h1 class=textoODs> Atualmente não existem projetos cadastrados.</h1>';
    }
    else {
      html += `<h1 class=textoODs> TOTAL DE PROJETOS:<span> ${responseJson.length} </span>  </h1>`;
    }
    document.getElementById('totalOds').innerHTML = html;
  }
}