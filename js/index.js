function reverse(string) {
  let i = string.length;
  let reversed = "";
  while (i) reversed += string[--i];
  return reversed;
}

//let string = prompt('Type anything', '');
//alert(reverse(string));
