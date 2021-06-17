
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
 
// {
//   id: 1,
//   name: 'lion',
//   location: 'NE',
//   caretakerId: 1, // Nigel
// }
// Template Literal/ String Literal

// animal type object
// {
//   id: 1,
//   name: 'lion',
//   location: 'NE',
//   caretakerId: 1, // Nigel
// }

// animal object
// {
//   name: "Zena",
//   sex: "female",
//   imageURL: "https://images.unsplash.com/photo-1571835782488-1793036d8887?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
//   age: 12,
//   showcase: false,
//   typeId: 1, // lion
// },
function updateMainContent(html) {
  let div = document.getElementById('main-content');
  div.innerHTML = html;
}

function initAnimalType(animalType) {

  //console.log("initAnimalType", animalType);

  const id = `${animalType.name}-link`;
  let button = document.getElementById(id);

  button.addEventListener("click", ()=> {

    let animals = zoo.animals.filter(x=>x.typeId===animalType.id);
    let animalNames = animals.map(x=>x.name).join(", ");
    let animalName = window.prompt(`Which animal do you want to see? ${animalNames}`, 'all');

    if(animalName === 'all') {
      updateMainContent(getHTMLForAnimalType(animalType));
    }
    else {
      let animal = animals.find(x=>x.name===animalName);

      if(animal === undefined){
        window.alert('unknown animal showing all')
        updateMainContent(getHTMLForAnimalType(animalType)); 
      }
      else { 
        updateMainContent(getHTMLForAnimal(animal));
      }  
    }
  });
}

function initButtons() {
  zoo.animalTypes.forEach(x=>initAnimalType(x));

  let button = document.getElementById('home-link');

  button.addEventListener("click", () => {

    showShowCaseAnimal();
  });
}

// animal object
// {
//   name: "Zena",
//   sex: "female",
//   imageURL: "https://images.unsplash.com/photo-1571835782488-1793036d8887?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
//   age: 12,
//   showcase: false,
//   typeId: 1, // lion
// }

function showShowCaseAnimal(){
  let animal = zoo.animals.find(x=>x.showcase);
  updateMainContent(getHTMLForAnimal(animal));
}

initButtons();
showShowCaseAnimal();