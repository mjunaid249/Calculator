let buttons = document.querySelectorAll(".btn-row");

let button_array = Array.from(buttons);

let input = document.querySelector("input");

button_array.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      input.value = eval(input.value);
    } else if (e.target.innerHTML == "Clear") {
      input.value = "";
    } else if (e.target.innerHTML == "x") {
      input.value += "*";
    } else {
      input.value += e.target.innerHTML;
    }
  });
});
