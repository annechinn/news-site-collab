
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
 
// {
//   id: 1,
//   name: 'lion',
//   location: 'NE',
//   caretakerId: 1, // Nigel
// }
// Template Literal/ String Literal

function initAnimalType(animalType) {

  console.log("initAnimalType", animalType);

  const id = `${animalType.name}-link`;
  let button = document.getElementById(id);

  button.addEventListener("click", ()=> {
    let div = document.getElementById('main-content');
    let animals = zoo.animals.filter(x=>x.typeId===animalType.id);

    let animalNames = animals.map(x=>x.name).join(" ");
  
    let question = `What ${animalType.name} do you want to see? ${animalNames}`;
    let animalName = window.prompt(question, "all");
  
    if (animalName === 'all') {
      div.innerHTML = getHTMLForAnimalType(animalType);
    }
    else {
      let animal = animals.find(x=>x.name===animalName);
      if (animal===undefined) {
        alert("Unknown animal, showing all..");
        div.innerHTML = getHTMLForAnimalType(animalType);
      }
      else {
        div.innerHTML = getHTMLForAnimal(animal);
      }
    }

  });

}

function initButtons() {
  zoo.animalTypes.forEach(x=>initAnimalType(x));
}

initButtons();


 // animalType
    // {
    //   id: 1,
    //   name: 'lion',
    //   location: 'NE',
    //   caretakerId: 1, // Nigel
    // }
    // animal
    // {
    //   name: "Zena",
    //   sex: "female",
    //   imageURL: "https://images.unsplash.com/photo-1571835782488-1793036d8887?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    //   age: 12,
    //   showcase: false,
    //   typeId: 1, // lion
    // },
    // caretaker
    // {
    //   id: 1,
    //   firstName: "Nigel",
    //   lastName: "Nelson",
    //   imageURL: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    // },