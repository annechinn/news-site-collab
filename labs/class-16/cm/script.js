
function getHTMLForAnimal(animal) {
      return `
        <h3>${animal.name} - age: ${animal.age} sex: ${animal.sex}</h3>`;
    }

    function getHTMLForAnimalType(animalType){
        let animals = zoo.animals.filter((x) => x.typeId === animalType.id);
        let caretaker = zoo.caretakers.find((x) => x.id === animalType.caretakerId);

        let animalsHTML = animals.map(x=>getHTMLForAnimals(x)).join("");

        return `
        <h1>${animalType.name} - ${animals.length}<h1/>
        <h3>Location: ${animalType.location}<h3/>
        <h3>Caretaker: ${caretaker.firstName} ${caretaker.lastName}</h3>
        
        <div>
          ${animalsHTML}
        </div>`;

    //div.innerHTML = `
      //<h1>${animalType.name} - ${animals.length}</h1>
      //<h3>Location: ${animalType.location}</h3>
      //<h3>Caretaker: ${caretaker.firstName} ${caretaker.lastName}</h3>
      //${animalsHTML}
    //`;
  }
  
function initAnimalType(animalType){

    const id = `${animalType.name}-link`;

    let button = document.getElementById(id);

    button.addEventListener("click", ()=>{
        let div = document.getElementById('main-content');
        div.innerHTML = getHTMLForAnimalType(animalType);
  });
    

function initButtons() {
    
    zoo.animalTypes.forEach(x=>initAnimalType(x));
  }

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

function showSummaryTable(){
  let element = document.getElementById('main-content');
  element.innerHTML = getHTMLForSummaryTable();

}

function initSummaryButton() {
  let button = document.getElementById('summary-link');
  button.addEventListener('click', ()=> {
    showSummaryTable();
  });
}

initSummaryButton();

function getHTMLForSummaryTable() {

  let rowsHTML = "";

  let html = `
    <table class="table table-striped">
      <thead>
        <th>Type</th>
        <th>Location</th>
        <th>Number</th>
        <th>Residents</th>
      </thead>
      <tbody>
        ${rowsHTML}
      </tbody>
    </table>
  `;

  return html;
}

function getHTMLForSummaryTableRow(animalType) {
  
  let animals = zoo.animals.filter(x=>x.typeId===animalType.id);
  
  console.log("animals", animals);
  let animalsSummaryHTML = animals.map(x=> {
    return `<strong>${x.name}</strong> (${x.sex}, ${x.age})`;
  })

  console.log("animalsSummaryHTML", animalsSummaryHTML);
  animalsSummaryHTML = animalsSummaryHTML.join("");

  console.log("animalsSummaryHTML after join", animalsSummaryHTML);

  return `
  <tr>
    <td>${animalType.name}</td> 
    <td>${animalType.location}</td>
    <td>${animals.length}</td>
    <td>${"animals"}</td> 
  </tr>  
  `;
}

function initHomeButton()

function showHome()

  initButtons();