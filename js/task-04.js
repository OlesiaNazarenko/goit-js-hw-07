const div = document.querySelector("#counter");
const counterValue = document.querySelector("#value");
const buttonDecrement = div.firstElementChild;
const buttonIncrement = div.lastElementChild;
console.log(buttonIncrement);
let counter = 0;
  function decrement() {
   counterValue.textContent = counter-= 1;
}
function increment() {
    counterValue.textContent =counter  += 1;
}

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);