let counterPartners=-1;
let counterOds=-1;
let textPartners;
let textOds;
let countImg=0;
var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id");
 
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
const storage = firebase.storage();
const folder = storage.ref(id);

async function ImageURL(item){
    const url = await item.getDownloadURL(); // Pegar a URL da imagem em específico
    if(countImg<5){//if para evitar que de comandos para locais do carroussel que n existam
      divCarrosel = document.querySelector('#carouselExampleCaptions');
      divCarrosel.style.height = '480px';
      divCarrosel.style.display = 'block';
      const img= document.getElementsByClassName("changeImg");
      switch (countImg){
        case 0:img[0].src=url;
        case 1:img[1].src=url;
        case 2:img[2].src=url;
        case 3:img[3].src=url;
        case 4:img[4].src=url;
      }
      countImg++;
  }
}
async function VideoURL(item){
  const url = await item.getDownloadURL(); // Pegar a URL do video em específico
  console.log(url);
  let video= document.getElementById("iframe");
  video.style.width="720px"
  video.style.height="480px"
  video.src=url;
  console.log(video)
  //video.src=url;
}
function datas(html){
  return new Promise ((resolve)=>{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/senac-dojo-2023/controllers/controllerShowProject.php?id=" + id, true);
  
  xhr.onreadystatechange = function() {
   if (xhr.readyState === 4 && xhr.status === 200) {
     let response = JSON.parse(xhr.responseText);
     console.log(response);
     if (response.length == 0) {
       alert("Nenhum dado encontrado");
     } else {
       html+=`<div>
       <h2>Projeto: <span>${response[0].nome_projeto}</span></h2>
   </div>
   <div>
       <h2>Cidade de realização: <span>${response[0].cidade_projeto+"/"+response[0].estado_projeto}</span></h2>
   </div>
   <div>
       <h2>Causa de atuação: <span>${response[0].objetivo_projeto}</span></h2>
   </div>
   <div class="texto">
                   <h2>Objetivo do Projeto:</h2>
                   <p>${response[0].descricao_projeto}</p>
   </div>`;
   for (let i = 0; i < response.length; i++) {
     if(response[i].nome_parceiro==null||response[i].nome_parceiro==""){//verificar se esta vazio o parceiro esta vazio
     }
     else{
       if(i==0){counterPartners=0;}//apenas para zerar o valor para deixar válido
       else{
         counterPartners++;//adicionar ao valor do contador que tem um valor valido de parceiro
       }
     }

     if(response[i].nome_ods==null||response[i].nome_ods==""){//verificar se esta vazio a ods
     }
     else{
       if(i==0){counterOds=0;}//apenas para zerar o valor para deixar válido
       else{
         counterOds++;//adicionar ao valor do contador que tem um valor valido de ods
       }
     }
   }//fim for
   for(let i=0;i<response.length; i++){//for para inserir os dados do parceiro e ods(apenas os validos) e estruturar o texto com ",", "e" e "."
     //primeiro parceiro
       if(counterPartners==-1){
       textPartners="Este Projeto não possui parceiros";
     }
     else if(i==0){
       textPartners=response[i].nome_parceiro;
     }
     else if(i==counterPartners){
       textPartners+=" ; "+response[i].nome_parceiro;
     }        
     else if(i<counterPartners){
       textPartners+="; "+response[i].nome_parceiro;
     }
     
     //agora as ods
     if(counterOds==-1){
       textOds="Este Projeto não possui ods";
     }
     else if(i==0){
       textOds=response[i].nome_ods;
     }
     else if(i==counterOds){
       textOds+="; "+response[i].nome_ods;
     }        
     else if(i<counterOds){
       textOds+="; "+response[i].nome_ods;
     }
     }
     textPartners+=".";
     textOds+="";
     html+=`
     <div>
     <h2>Parceiros: <span>${textPartners}</span></h2>
     </div>
     <div class="texto">
               <h2>ODSs vinculados: <span>${textOds}</span>.</h2>
     </div>
   </div>`;
   resolve(html);
 }
}
};//fim da parte dos dados agora vai começar a parte das imagens
xhr.send();
})
}//fim da função
async function executar(){
  let html= "";
  html+=`<div class="container-texto">`;
  html = await datas(html);
    html+=`<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false" style="display: none;">`;
    html+=`<div class="carousel-indicators">
          <button id="indicator0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
          // A lista de itens na pasta
          
          //linkar o carroussel e o iframe com const
folder.listAll()
.then(function(res) {
  // A lista de itens na pasta
  var items = res.items;

  
  for (let i = 0; i < 4; i++) {
    if(i<4){
    html+=`<button id="indicator${i+1}" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}" aria-label="Slide ${i+2}"></button>`
    }
  }//fim for 
  html+=`</div>
  <div class="carousel-inner" style="height: 480px;">
  <div id="carousel0" class="carousel-item active">
                    <img src="" class="d-block w-100 img-project changeImg" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                  </div>`
  for (let i = 0; i < 4; i++) {
    if(i<4){
      html+=`<div id="carousel${i+1}" class="carousel-item">
    <img src="" class="d-block w-100 img-project changeImg" alt="...">
    <div class="carousel-caption d-none d-md-block">
    </div>
  </div>`
    }
  }
    html+=`</div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="video">
  <iframe id="iframe" name="janela" src="" frameborder="0" width="0" height="0" allow="accelerometer; autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div>`
  document.getElementById("projeto").innerHTML = html;
  // Iterar sobre os itens para obter as informações desejadas
  items.forEach(function(item) {
    // Aqui é para lidar com cada item separadamente
    item.getMetadata().then(function(metadata) {
      // Obtendo o tipo do arquivo
      const contentType = metadata.contentType;
  
      // Verificar o tipo para determinar se é uma imagem ou um vídeo
      if (contentType.startsWith("image/")) {
        // É uma imagem
        ImageURL(item);
      }
      else if (contentType.startsWith("video/")) {
        VideoURL(item);
      }
    }).catch(function(error) {
      console.error("Erro ao obter metadados do arquivo:", error);
    });
  });
})
.catch(function(error) {
  // Ocorreu um erro ao obter a lista de itens
}); 
}
document.addEventListener("DOMContentLoaded", function() {
  executar();
});