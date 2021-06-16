
function getHTMLForAnimal(animal) {
  return `
    <div class="card">
      <img src="${animal.imageURL}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${animal.name}</h5>
        <p class="card-text">sex: ${animal.sex} age: ${animal.age}</p>
      </div>
    </div>
`;
}

function getHTMLForAnimalType(animalType) {

  let animals = zoo.animals.filter(x=>x.typeId===animalType.id);

  let caretaker = zoo.caretakers.find(x=>x.id===animalType.caretakerId);

  let animalsHTML = "";

  animals.forEach(x=>{
    // <h3>Zena age: 15 sex: female</h3><h3>Max age: 15 sex: female</h3> 
    animalsHTML+=getHTMLForAnimal(x);
  });

  return `
    <h1>${animalType.name} - ${animals.length}</h1>
    <h3>Location: ${animalType.location}</h3>
    <h3>Caretaker: ${caretaker.firstName} ${caretaker.lastName}</h3>

    <div class="animals">
    ${animalsHTML}
    </div>
  `;
}

function initAnimalType(animalType) {

  //console.log("initAnimalType", animalType);

  const id = `${animalType.name}-link`;
  let button = document.getElementById(id);

  button.addEventListener("click", ()=> {
    let div = document.getElementById('main-content');

    let animals = zoo.animals.filter(x=>x.typeId===animalType.id);
  
    // console.log(animals);
    // console.log(animals.map(x=>x.name));
    // console.log(animals.map(x=>x.name).join(", "));
    let animalNames = animals.map(x=>x.name).join(", ");
  
    let question = `What ${animalType.name} do you want to see? ${animalNames}`;
    let animalName = window.prompt(question, "all");
  
    if (animalName === 'all') {
      div.innerHTML = getHTMLForAnimalType(animalType);
    }
    else {
      let animal = animals.find(x=>x.name===animalName);
      if (animal===undefined) {
        window.alert("Unknown animal, showing all..");
        div.innerHTML = getHTMLForAnimalType(animalType);
      }
      else {
        div.innerHTML = getHTMLForAnimal(animal);
      }
    }

  });

}

function showShowcaseAnimal() {
  let div = document.getElementById('main-content');
  let animal = zoo.animals.find(x=>x.showcase);
  div.innerHTML = getHTMLForAnimal(animal);
}

function initHomeButton() {
  let button = document.getElementById('home-link');
  button.addEventListener('click', ()=> {
    showShowcaseAnimal();
  });
}

function initButtons() {
  zoo.animalTypes.forEach(x=>initAnimalType(x));
}

initButtons();
initHomeButton();

