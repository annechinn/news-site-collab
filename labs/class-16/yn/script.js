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

function getHTMLForAnimalType(animalType){
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
    <div>
    ${animalsHTML}
 </div class="animals">
    `;

} 
// {
//   id: 1,
//   name: 'lion',
//   location: 'NE',
//   caretakerId: 1, // Nigel
// }
// Template Literal/ String Literal
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function initAnimalType(animalType) {
console.log("initAnimalType", animalType);
const id = `${animalType.name}-link`;
let button = document.getElementById(id);
button.addEventListener("click", ()=> {
  let div = document.getElementById('main-content');
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
  
  let animals = zoo.animals.filter(x=>x.typeId===animalType.id);
  let animalNames = animals.map(x=>x.name).join(" ,");
  let question = `what ${animalType.name} do you want to see? ${animalNames}`;
  let animalname = window.prompt (question,"all");
  if (animalname === "all"){
    div.innerHTML = getHTMLForAnimalType(animalType); 
  } 
  else {
    let animal= animals.find(x=>x.name===animalname);
    if (animal===undefined){
      alert ("unkown animal,showing all..");
      div.innerHTML=getHTMLForAnimalType(animalType);
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


function getHTMLForSummaryTableRow(animalType) {
  let animals = zoo.animals.filter(x=>x.typeId===animalType.id);
  let animalsSummaryHtml = animals.map(x=>{
    return `<strong> ${x.name} </strong> (${x.sex}, ${x.age})
    `;
  }).join("");
  return `
  <tr>
    <td>${animalType.name}</td>
    <td>${animalType.location}</td>
    <td>${animals.length}</td>
    <td>${animalsSummaryHtml}</td>
  </tr>`;
}
function getHTMLForSummaryTable() {
  let animalTypes = zoo.animalTypes;
  let rowsHTML = animalTypes.map(animalType =>getHTMLForSummaryTableRow(animalType));
  rowsHTML = rowsHTML.join(" ");
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
  let button = document.getElementById("home-link");
  button.addEventListener("click", ()=> {
    showSummaryTable();
  });
}
  function initSummaryButton() {
    let button = document.getElementById("summary-link");
    button.addEventListener("click", ()=> { 
      showSummaryTable();
    });
  }


initSummaryButton();