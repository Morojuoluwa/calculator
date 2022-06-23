alert("Time to use mj's calculator. click ok to continue");
let num1 = Number(prompt("enter the first number: "));
let operator = prompt("choose an operator(+, -, *, /)");

let num2 = Number(prompt("enter the second number: "));

if (operator === "+") {
  let result = Number(num1 + num2);
  alert(result);
} else if (operator === "-") {
  let result = num1 - num2;
  alert(result);
} else if (operator === "*") {
  let result = num1 * num2;
  alert(`${result} is the answer`);
} else if (operator === "/") {
  let ans = num1 / num2;
  alert(`${ans} is the answer`);
}

alert(
  "Thank you for using my calculator. kindly reload to perform another arithmetic operation"
);
