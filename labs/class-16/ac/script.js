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
    let animals = zoo.animals.filter((x) => x.typeId === animalType.id);
    let caretaker = zoo.caretakers.find((x) => x.id === animalType.caretakerId);
    let animalsHTML = "";
    
    animals.forEach((x) => animalsHTML+=getHTMLForAnimal(x));

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
    let button = document.getElementById(`${animalType.name}-link`);

    button.addEventListener("click", () => {

      let animals = zoo.animals.filter((x) => x.typeId === animalType.id);
      let animalNames = animals.map(x=>x.name).join(" ");
      //animals.forEach(x=>animalNames+=`${x.name} `);

      let animalName = window.prompt(`Which ${animalType.name} do you want to see? ${animalNames}`, 'all');
      let element = document.getElementById("main-content");
 
      if (!animalName) {
        // don't do anything if they clicked Cancel
        return;
      }

      if (animalName === 'all') {
        element.innerHTML = getHTMLForAnimalType(animalType);
      }
      else {
        let animal = animals.find(x=>x.name===animalName);
        if (!animal) {
          alert("Unknown name entered. Showing all.");
          element.innerHTML = getHTMLForAnimalType(animalType);
        }
        else {
          element.innerHTML = getHTMLForAnimal(animal);
        }
      }
    });
  }

  function initAnimalTypes() {
    zoo.animalTypes.forEach((x) => initAnimalType(x));
  }

  function showHome() {
    let showcaseAnimal = zoo.animals.find(x=>x.showcase);
    let element = document.getElementById('main-content');
    element.innerHTML = getHTMLForAnimal(showcaseAnimal);
  }

  function initHomeButton() {
    let button = document.getElementById('home-link');
    button.addEventListener("click", ()=> {
      showHome();
    });
  }

  initAnimalTypes();
  initHomeButton();
  showHome();
