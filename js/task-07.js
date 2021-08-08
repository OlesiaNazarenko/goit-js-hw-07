const inputSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
function changeFontSize(event) {
    const textSize = event.target.value;
    text.style.fontSize = `${textSize}%`;
}
inputSizeControl.addEventListener('input', changeFontSize);