const botoes = document.querySelectorAll('button[name="btn"]');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        teste(botao.value);
    });
});

function teste(valorBotao) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerOds.php?valor=" + valorBotao, false);
    xhr.send();
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseJson = JSON.parse(xhr.responseText);
      console.log(responseJson);
      var html = ''; // Variável para armazenar o HTML gerado
      if(responseJson.length <1){
        html += '<h1 class=textoODs> Atualmente não existem projetos vinculados a esse ODS</h1>';
      }
      else
      {
        html += '<h1 class=textoODs> TOTAL DE PROJETOS DA ODS: ' +'<span>'+ responseJson.length+'</span>' + '</h1>';
        for(i=0;i<responseJson.length;i++)
        {
          html += '<a href="./telaProjeto.html"><p>Nome do Projeto: ' + responseJson[i] + '</p></a>';
        }
      }
      document.getElementById('demo').innerHTML = html;
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    RequisitarTodosProjetos()
  });
  function RequisitarTodosProjetos()
  {
    filtro = "*"
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerAllProjetos.php", false);
    xhr.send();
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseJson = JSON.parse(xhr.responseText);
      console.log(responseJson);
      var html = ''; // Variável para armazenar o HTML gerado
      if(responseJson.length <1){
        html += '<h1 class=textoODs> Atualmente não existem projetos </h1>';
      }
      else
      {
        html += '<h1 class=textoODs> TOTAL DE PROJETOS: ' +'<span>'+ responseJson.length+'</span>' + '</h1>';
      }
      document.getElementById('totalOds').innerHTML = html;
    }
  }
  
  
  
  
 
 
 
 
 

