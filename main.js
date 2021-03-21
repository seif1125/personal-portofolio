const menuDom=document.querySelector(".icon");
const menucontainerDom=document.querySelector(".menu-cont");
const menulistitemDom = document.querySelectorAll(".menu-list-item");
let menuShown=false;

menuDom.addEventListener("click",toggleMenu);

function toggleMenu(){

    if(!menuShown){
        menuDom.className = "icon fas fa-times fa-2x";
      menucontainerDom.classList.add("open")
      menulistitemDom.forEach(items=>items.classList.add('open'));

 
      menuShown=true;
    }
    else{
        menuDom.className = "icon fas fa-bars fa-2x";
           menucontainerDom.classList.remove("open");
menulistitemDom.forEach((items) => items.classList.remove("open"));
           menuShown = false;
    }
}