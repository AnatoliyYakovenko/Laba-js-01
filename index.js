const a = +prompt("Введіть число:");
if (a == "") {
  alert("Error: Немає данних!");
} else {
  const b = +prompt("Введіть друге число:");
  if (b == "") {
    alert("Error: Немає данних!");
  }
}

if (b === 0) {
  alert("Error: Ділення на нуль неможливе.");
} else if (a < b) {
  const confirmResult = confirm("Ви впевнені, що хочете продовжити операцію?");
  if (confirmResult) {
    const difference = a - b;
    alert("Різниця: " + difference);
  }
} else {
  const sum = a + b;
  const difference = a - b;
  const multiply = a * b;
  const division = a / b;
  const result =
    "сума: " +
    sum +
    "\nрізниця: " +
    difference +
    "\nдобуток: " +
    multiply +
    "\nчастка: " +
    division;
  alert(result);
}
