//Only string
function reverseString(a) {
  let text = "";
  let length = a.length;
  for (let i = length - 1; i >= 0; i--) {
    text += a[i];
  }
  console.log(text);
}
reverseString("Software Development");

// String + Numbers

function reverseString2(a) {
  let splitted_input = a.split("");
  let reversed_input = splitted_input.reverse();
  let joined_input = reversed_input.join("");
  console.log(joined_input);
}
reverseString2("123445Adibul Haque");
