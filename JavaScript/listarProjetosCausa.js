document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var valor = urlParams.get("causa");
    if(valor)
    {
      displayAllProjects();
    }
    else 
    {
      displayAllProjects();
      displayAllprojectsFromCityofCause();
    }  
    let checkFilter = document.querySelector("#ActivateFilter");
    checkFilter.addEventListener("change", verifyfilter);
  });
var urlParams = new URLSearchParams(window.location.search);
var valor = urlParams.get("causa");
let totalProjects;
function displayAllProjects() {
    var xhrProjectData = new XMLHttpRequest();
    xhrProjectData.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerProjectFromCause.php?cause=" + valor, true);
    xhrProjectData.send();
    xhrProjectData.onreadystatechange = function () {
      if (xhrProjectData.readyState === 4 && xhrProjectData.status === 200) {
        let responseProjects = JSON.parse(xhrProjectData.responseText);
         totalProjects = responseProjects.length;
        console.log("total de projetos -> "+totalProjects);
        var html = "";
          if(responseProjects.length === 0)
          {
          html += '<div class="cardSemProjeto">';
          html += `<img class="imgCardSemProjeto" src="../public/img/semProjeto.png">`
          html += `<h1>Não existem Projetos Cadastrados.</h1>`
          html += "</div>";
            
          }
          for (let i = 0; i < responseProjects.length; i++) {
            html += '<div class="containerProjetos">';
            html += '<link rel="stylesheet" href="../public/stylesheets/listarProjetosOds.css">';
            html += '<div class="cardProjetos">';
            html += '<img src="../public/img/SDG-Wheel.png">';
            html += `<a href=../views/telaProjeto.html?id=${responseProjects[i].id_projeto}>Nome do projeto: ${responseProjects[i].nome_projeto}</a>`;
            html += `<p>Cidade do projeto: ${responseProjects[i].cidade_projeto}</p>`;
            html += `<p>ODS do projeto: ${responseProjects[i].nome_ods}</p>`;
            html += "</div>";
            html += "</div>";
            html += "<br>";
          }
          document.getElementById("divNomeProjeto").innerHTML = html;
      }
    };
  }

  function displayAllprojectsFromCityofCause() {
    const citys = document.querySelector("#cidadeProjeto");
    const urlCitys = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/43/municipios`;
    var xhrcitys = new XMLHttpRequest();
    xhrcitys.open("GET", urlCitys, true);
    xhrcitys.send();
    xhrcitys.onreadystatechange = function () {
      if (xhrcitys.readyState === 4 && xhrcitys.status === 200) {
        let responsecitys = JSON.parse(xhrcitys.response);
        const optionsCitys = document.createElement("optgroup");
        optionsCitys.innerHTML += `<option>Selecione uma cidade</option>`;
        responsecitys.forEach((city) => {
          optionsCitys.innerHTML += `<option>${city.nome}</option>`;
        });
        citys.innerHTML = "";
        citys.appendChild(optionsCitys);
      }
    };
  
    // Registrando o evento change apenas uma vez
    citys.addEventListener("change", handleCityChange);
  
    function handleCityChange() {
      var xhrProject = new XMLHttpRequest();
      var urlParams = new URLSearchParams(window.location.search);
      var cause = urlParams.get("causa");
      xhrProject.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerProjectFromCause.php?cause=" + cause, true);
      xhrProject.send();
      xhrProject.onreadystatechange = function () {
        if (xhrProject.readyState === 4 && xhrProject.status === 200) {
          const valueCitys = document.querySelector("#cidadeProjeto").value;
          let responseProject = JSON.parse(xhrProject.responseText);
          responseProject = responseProject.filter((res) => res.cidade_projeto == valueCitys);
          var html = "";
          if(responseProject.length === 0)
          {
          html += '<div class="cardSemProjeto">';
          html += `<img class="imgCardSemProjeto" src="../public/img/semProjeto.png">`
          html += `<h1>Não existem Projetos Cadastrados.</h1>`
          html += "</div>";
          }
          for (let i = 0; i < responseProject.length; i++) {
            html += '<div class="containerProjetos">';
            html += '<link rel="stylesheet" href="../public/stylesheets/listarProjetosOds.css">';
            html += '<div class="cardProjetos">';
            html += '<img src="../public/img/SDG-Wheel.png">';
            html += `<a href=../views/telaProjeto.html?id=${responseProject[i].id_projeto}>Nome do projeto: ${responseProject[i].nome_projeto}</a>`;
            html += `<p>ODS do projeto: ${responseProject[i].nome_ods}</p>`;
            html += "</div>";
            html += "</div>";
          }
          document.getElementById("divNomeProjeto").innerHTML = html;
        }
      };
    }
  }

  function verifyfilter()
{
  let checkFilter = document.querySelector("#ActivateFilter");
  if (checkFilter.checked) {
    displayAllprojectsFromCityofCause();
  }
  else
  {
    displayAllProjects();
  }
}