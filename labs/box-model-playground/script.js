
function getBoxes() {
    let boxes = document.getElementsByClassName('box');
    return Array.from(boxes);
}

function updateCurrentValue(prop, value) {

  getBoxes().forEach((box)=>box.style[prop] = `${value}px`);

  let el = document.getElementById(prop);
  el.innerText = `${value}px`;
}

function updatePadding(value){
  updateCurrentValue('padding', value);
}

function updateMargin(value){
  updateCurrentValue('margin', value);
}

function updateBorder(value){
  updateCurrentValue('borderWidth', value);
}
