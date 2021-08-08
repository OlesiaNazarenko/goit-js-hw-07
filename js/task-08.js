const controls = {
    inputNumber: document.querySelector('[type="number"]'),
    buttonRender: document.querySelector('[data-action="render"]'),
    buttonDestroy: document.querySelector('[data-action="destroy"]'),
}
const boxes = document.querySelector('#boxes');

function getAmount(event) {
    const amount = Number(event.currentTarget.value);
    createBoxes(amount)
}
function random() {
  return Math.floor(Math.random() * 256);
}
function createBoxes(amount){
   const startlSize = 30;
    //const generalSize = startlSize + 10;
    for (let i = 0; i < amount; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "rgba( ${random()} , ${random()} , ${random()} )";
        // boxes.firstChild.style.width = `${startlSize}px`;
        // boxes.firstChild.style.height = `${startlSize}px`;
         boxes.insertAdjacentHTML('beforeend', newDiv);
       
       
     }
}

function destroyBoxes() {
    boxes.removeChild()
}
 controls.inputNumber.addEventListener('input',getAmount )
controls.buttonRender.addEventListener('click',createBoxes )
controls.buttonDestroy.addEventListener('click', destroyBoxes)