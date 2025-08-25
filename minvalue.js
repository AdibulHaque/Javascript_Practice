// function minValue(a, b, c) {
//   let numbers = [a, b, c];
//   return Math.min(...numbers); //spread operator
// }

// console.log(minValue(3, 6, 1));

function minValue(a, b, c) {
  if (a < b && a < c) {
    console.log("smallest number is ", a);
  } else if (b < a && b < c) {
    console.log("smallest number is ", b);
  } else {
    console.log("smallest number is ", c);
  }
}

minValue(2, 5, -2);
