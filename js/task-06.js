const inputValidation = document.querySelector("#validation-input");
const dataLength = Number(inputValidation.dataset.length);
function checkDataLength(event) {
    let checkedValue = event.currentTarget.value;
    if (checkedValue.length != dataLength || checkedValue.length === 0  && event.currentTarget.classList.contains('valid')) {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    }
      if (checkedValue.length === '' && event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.remove("invalid");
    }
    if (checkedValue.length === dataLength && event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.replace("invalid", 'valid');         
    }
    if (checkedValue.length === 0) {
        event.currentTarget.classList.remove("invalid");       
    }
    }
inputValidation.addEventListener('change', checkDataLength)