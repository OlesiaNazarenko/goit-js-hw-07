const inputValidation = document.querySelector("#validation-input");
const dataLength = Number(inputValidation.dataset.length);
function checkDataLength(event) {
    if (event.currentTarget.value.length === dataLength) {
        event.currentTarget.classList.add("valid");
    } else {
         event.currentTarget.classList.add("invalid");
    }
}
inputValidation.addEventListener('blur', checkDataLength)