function reverse() {
  let string = prompt("Type anything", "");
  let i = string.length;
  let reversed = "";
  while (i) reversed += string[--i];
  alert(reversed);
}

const example = document.querySelector(".example");
example.addEventListener("click", reverse);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const body = document.body;
const menuAddictedElements = [hamburger, nav, body];

function editClass(array, method, cl) {
  array.forEach((elem) => {
    elem.classList[method](cl);
  });
}
function toggleClass() {
  nav.classList.toggle("nav-open");
  editClass(menuAddictedElements, "toggle", "menu-open");
}
hamburger.addEventListener("click", toggleClass);

function deleteClass(event) {
  if (event.target.classList.contains("menu__link")) {
    nav.classList.remove("nav-open");
    editClass(menuAddictedElements, "remove", "menu-open");
  }
}
nav.addEventListener("click", deleteClass);
