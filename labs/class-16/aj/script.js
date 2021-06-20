
function getHTMLForAnimal(animal) {
  return `
       <div class="card">
              <img src="${
    animal.imageURL
  }" class="card-img-top">
              <div class="card-body">
                     <h5 class="card-title">${
    animal.name
  }</h5>
                     <p class="card-text">sex: ${
    animal.sex
  } age: ${
    animal.age
  }</p>
               </div>
       </div>
           `;
}
function getHTMLForAnimalType(animalType) {
  let animals = zoo.animals.filter(x => x.typeId === animalType.id);
  let caretaker = zoo.caretakers.find(x => x.id === animalType.caretakerId)
  let animalNames = animals.map(x => x.name).join(", ")
  let question = `What ${
    animalType.name
  } do you want to see? ${animalNames}`
  let animalName = window.prompt(question, "all")
  console.log(animalName)
  let animalsHTML = ""
  if (animalName === "all") {
    animals.forEach(x => {
      animalsHTML += getHTMLForAnimal(x)
    });
  } else {
    let animal = animals.find(x => x.name === animalName)

    if (animal === undefined) {
      window.alert("Unkown animal name!")
    } else {
      animalsHTML = getHTMLForAnimal(animal)
    }
  }


  return `
       <h1>${
    animalType.name
  } - ${
    animals.length
  }</h1>
       <h3>Location: ${
    animalType.location
  }</h3>
       <h3>Caretaker: ${
    caretaker.firstName
  } ${
    caretaker.lastName
  }</h3>
        ${animalsHTML}`

}

function initAnimalType(animalType) {

  const id = `${
    animalType.name
  }-link`;

  let button = document.getElementById(id);

  button.addEventListener("click", () => {

    let div = document.getElementById('main-content')
    div.innerHTML = getHTMLForAnimalType(animalType)


  });
}

function initButtons() {
  zoo.animalTypes.forEach(x => initAnimalType(x))

};
initButtons()


function showHome() {
  let showcaseAnimal = zoo.animals.find(x => x.showcase)
  let div = document.getElementById('main-content')
  div.innerHTML = getHTMLForAnimal(showcaseAnimal)
}

function initShowHomeButton() {
  let home = document.getElementById('home-link')
  home.addEventListener('click', (event) => {
    showHome()
  })
}


function getHTMLForSummaryTable(){
let animalTypes = zoo.animalTypes
let summaryRows = animalTypes.map(animalTYpe=> getHTMLForSummaryRow(animalType))
let rowsHTML = summaryRows.join("")
}


function getHMTLForSummaryTableRow(animalType){
  let animal = zoo.animals.filter(x=> x.typeId === animalType.id)

  let animalsSummaryHTML = animals.map(x => {
    return `
    <strong>${x.name}</strong>, ${x.sex}, ${x.age}
    `
  }).join("")

  return `
  <tr>
    <td>${animalType.name}</td>
    <td>${animalType.location}</td>
    <td>${animals.length}</td>
    <td>${animalsSummaryHTML}</td>
  </tr>

  `
}

function showSummaryTable(){
  let button = document.getElementById('main-content');
  element.innerHTML = getHTMLForSummaryTable
}

function initSummaryButton() {
  let home = document.getElementById('summary-link')
  home.addEventListener('click', (event) => {
    showHome()
  })
}


let rowsHTML = zoo.animalTypes
.map(animalType => getHTMLForSummaryTable).join("");


initShowHomeButton()
showHome()
initSummaryButton()
