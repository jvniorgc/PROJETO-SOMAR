document.addEventListener('DOMContentLoaded', () => {
  reqHeader();
  reqFooter();
});

function reqHeader() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/senac-dojo-2023/assets/header.html", false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("header").innerHTML = this.responseText;
    }
  }
  xhr.send();
}

function reqFooter() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/senac-dojo-2023/assets/footerRestrict.html", false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("footer").innerHTML = this.responseText;
    }
  }
  xhr.send();
}
