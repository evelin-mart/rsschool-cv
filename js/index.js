function reverse() {
  let string = prompt("Type anything", "");
  let i = string.length;
  let reversed = "";
  while (i) reversed += string[--i];
  alert(reversed);
}

const example = document.querySelector(".example");
example.addEventListener("click", reverse);
