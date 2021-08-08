const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function onInputChange(newValue) {
nameOutput.textContent = newValue.currentTarget.value.trim() || "незнакомец";   
}
nameInput.addEventListener('input', onInputChange);
