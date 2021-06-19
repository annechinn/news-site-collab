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

function getHTMLForSummaryTableRow(animalType) {

  let animals = zoo.animals.filter(x=>x.typeId===animalType.id);

  console.log("animals", animals);
  let animalsSummaryHTML = animals.map(x=>{
    return `<strong>${x.name}</strong> (${x.sex}, ${x.age})`;
  });

  console.log("animalsSummaryHTML", animalsSummaryHTML);
  animalsSummaryHTML = animalsSummaryHTML.join("");

  console.log("animalsSummaryHTML after join", animalsSummaryHTML);

 return `
  <tr>
    <td>${animalType.name}</td>
    <td>${animalType.location}</td>
    <td>${animals.length}</td>
    <td>${animalsSummaryHTML}</td>
  </tr>
 `;
}

function getHTMLForSummaryTable() {
  let animalTypes = zoo.animalTypes;
  let summaryRows = animalTypes.map(animalType =>getHTMLForSummaryTableRow(animalType));
  let rowsHTML = summaryRows.join(" ");

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

function showSummaryTable() {
  let element = document.getElementById('main-content');
  element.innerHTML = getHTMLForSummaryTable();
}

function initHomeButton() {
  let button = document.getElementById('home-link');
  button.addEventListener('click', ()=> {
    showShowcaseAnimal();
  });
}

function initSummaryButton() {
  let button = document.getElementById('summary-link');
  button.addEventListener('click', ()=> {
    showSummaryTable();
  });
}

function initAnimalButtons() {
  zoo.animalTypes.forEach(x=>initAnimalType(x));
}

initAnimalButtons();
initHomeButton();
initSummaryButton();

