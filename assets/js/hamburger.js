document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburgerMenu");
  const navbarNav = document.getElementById("navbarNav");

  hamburger.addEventListener("click", function() {
      navbarNav.classList.toggle("show"); 
      hamburger.classList.toggle("active"); 
  });
});