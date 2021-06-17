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
  let animalsHTML = animals.map(x=>getHTMLForAnimal(x)).join("");

  return `
    <h1>${animalType.name} - ${animals.length}</h1>
    <h3>Location: ${animalType.location}</h3>
    <h3>Caretaker: ${caretaker.firstName} ${caretaker.lastName}</h3>
    <div class="animals">
    ${animalsHTML}
    </div>
  `;
}

function updateMainContent(html) {
  document.getElementById('main-content').innerHTML = html;
}

function initAnimalType(animalType) {
  const id = `${animalType.name}-link`;
  let button = document.getElementById(id);

  button.addEventListener("click", ()=> {
    let animals = zoo.animals.filter(x=>x.typeId===animalType.id);
    let animalNames = animals.map(x=>x.name).join(", ");
  
    let question = `What ${animalType.name} do you want to see? ${animalNames}`;
    let animalName = window.prompt(question, "all");
  
    if (animalName === 'all') {
      updateMainContent(getHTMLForAnimalType(animalType));
    }
    else {
      let animal = animals.find(x=>x.name===animalName);
      if (animal===undefined) {
        window.alert("Unknown animal, showing all..");
        updateMainContent(getHTMLForAnimalType(animalType));
      }
      else {
        updateMainContent(getHTMLForAnimal(animal));
      }
    }
  });
}

function showShowcaseAnimal() {
  let animal = zoo.animals.find(x=>x.showcase);
  updateMainContent(getHTMLForAnimal(animal));
}

function initHomeButton() {
  let button = document.getElementById('home-link');
  button.addEventListener('click', ()=> {
    showShowcaseAnimal();
  });
}

function initAnimalButtons() {
  zoo.animalTypes.forEach(x=>initAnimalType(x));
}

initAnimalButtons();
initHomeButton();

