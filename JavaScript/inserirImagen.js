// Initialize Firebase
const firebaseConfig = {
   apiKey: "AIzaSyDbJkjHpLfcgbItvzmGsPB2jA4nr4jlJgQ",
   authDomain: "projeto-somar.firebaseapp.com",
   projectId: "projeto-somar",
   storageBucket: "projeto-somar.appspot.com",
   messagingSenderId: "94713736245",
   appId: "1:94713736245:web:ff0b13d0a825308dfed57c"
 };
firebase.initializeApp(firebaseConfig);
function uploadImage() {
   event.preventDefault();
   // Get a reference to the storage service
   var storage = firebase.storage();
   const ref = firebase.storage().ref();
   // Create a reference to the folder you want to create
   let nomePasta = document.querySelector('#nomeProjeto').value;
   console.log(nomePasta);
   if(nomePasta == null || nomePasta == "")
   {
      alert('adcione nome para o projeto');
      nomePasta.focus();
   }
   else{   
   var folderRef = storage.ref().child(nomePasta);
   let input= document.getElementById("photo");
   let arquivos= Array.from(input.files);
   for (let i = 0; i < arquivos.length; i++) {
      var photoFile = arquivos[i];
      var photoRef = folderRef.child(photoFile.name);
      photoRef.put(photoFile).then(function(snapshot) {
      })
      alert("arquivos enviados para -> "+folderRef)
   }
}
}
