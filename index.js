let a = prompt("Введіть перше число:");
let b = prompt("Введіть друге число:");

if (!a || !b) {
  alert("Немає данних!");
} else {
  a = +a;
  b = +b;

  const sum = a + b;
  const sub = a - b;
  const multiply = a * b;
  let division = a / b;

  if (b === 0) {
    alert(
      `сума: ${sum}\nрізниця: ${sub}\nдобуток: ${multiply}\nчастка: На нуль ділити не можна!`
    );
  } else if (a < b) {
    const confirmMsg = "Ви впевнені, що хочете продовжити операцію?";
    if (confirm(confirmMsg)) {
      alert(
        `сума: ${sum}\nрізниця: ${sub}\nдобуток: ${multiply}\nчастка: ${division}`
      );
    }
  } else {
    alert(
      `сума: ${sum}\nрізниця: ${sub}\nдобуток: ${multiply}\nчастка: ${division}`
    );
  }
}
