document.addEventListener("click", function(event) {
    const menuToggle = document.getElementById("menu__toggle");
    const menuBox = document.querySelector(".menu__box");
    
    if (menuToggle.checked && !menuBox.contains(event.target) && event.target !== menuToggle) {
      menuToggle.checked = false;
    }
  });
  
  document.addEventListener("scroll", function() {
    const menuToggle = document.getElementById("menu__toggle");
    
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  });
  