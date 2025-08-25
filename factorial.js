function calculate_factorial(a) {
  if (a < 0) {
    throw new Error("Factorial Cannot Be Negative Numbers:");
  }
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
}

console.log("The Factorial result of  " + 4 + " is", calculate_factorial(4));
