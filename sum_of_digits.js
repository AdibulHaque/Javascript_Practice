function calculate_sum_of_digits(a) {
  let conver_number = a.toString();
  let splitted_number = conver_number.split("");
  console.log(splitted_number);
  length = conver_number.length;
  let result = 0;
  for (let digit of splitted_number) {
    result += parseInt(digit);
  }
  console.log(result);
}
calculate_sum_of_digits(333);
