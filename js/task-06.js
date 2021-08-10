const inputValidation = document.querySelector("#validation-input");
const dataLength = Number(inputValidation.dataset.length);
function checkDataLength(event) {
    if (event.currentTarget.value.length === dataLength && !event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.add("valid");
        return;
    }
    if(event.currentTarget.value.length != dataLength && event.currentTarget.classList.contains('valid')){
        event.currentTarget.classList.add("invalid");
         return;
    }
    
    if (event.currentTarget.value.length === dataLength && event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.replace("invalid", 'valid');
         return;
    }

    }


inputValidation.addEventListener('change', checkDataLength)