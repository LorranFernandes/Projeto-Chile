function toggleMenu() {
  var menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function hideMenu() {
  var menu = document.querySelector(".menu");
  menu.style.display = "none";
}

var menuIcon = document.getElementsByClassName("menu-icon")[0];
menuIcon.addEventListener("click", toggleMenu);

var menu = document.querySelector(".menu");
menu.addEventListener("mouseleave", hideMenu);