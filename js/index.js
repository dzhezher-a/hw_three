const operators = ["add", "sub", "mult", "div"];

const userOperator = prompt(`Choose the arithmetic operator:
add
sub
mult
div`).toLowerCase();

if (operators.includes(userOperator)) {
  const x = parseFloat(prompt("Enter the first number: "));
  const y = parseFloat(prompt("Enter the second number: "));

  if (Number.isNaN(x) || Number.isNaN(y)) {
    alert("Invalid data: please enter the number");
  } else {
    const add = x + y;
    const sub = x - y;
    const mult = x * y;
    const div = x / y;

    switch (userOperator) {
      case "add":
        alert(`${x} + ${y} = ${add}`);
        break;
      case "sub":
        alert(`${x} - ${y} = ${sub}`);
        break;
      case "mult":
        alert(`${x} * ${y} = ${mult}`);
        break;
      case "div":
        alert(`${x} / ${y} = ${div}`);
        break;
    }
  }
} else {
  alert("Invalid data: please enter valid operator");
}
