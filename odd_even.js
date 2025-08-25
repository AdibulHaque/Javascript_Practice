// function check_number(number) {
//   if (number % 2 == 0) {
//     console.log("Its a Even Number");
//   } else if (number % 2 != 0) {
//     console.log("It's a Odd number");
//   }
// }

// check_number(-4);

`function check_number(number) {
  let reminder = number % 2;
  if (reminder == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(check_number(-6));
`;
// Ternary Operator
function check_number(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(check_number(-6));
