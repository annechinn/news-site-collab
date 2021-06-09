function addAnimal(name, age, type, imageURL, sex) {

  let animal = {
    name: name,
    age: age,
    sex: sex,
    typeId: type,
    imageURL: imageURL
  };

  zoo.animals.push(animal);
}

function setupFormEventHandlers() {

  // when user clicks "Add"
  let formBtn = document.getElementById("form-btn");
  
  formBtn.addEventListener("click", (event)=> {
    event.preventDefault();
  
    let form = document.getElementById("form");
    form.style.display = "block";
  
    let mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
  });
  

  // when user clicks "Close" on form
  let closeBtn = document.getElementById("close-btn");

  closeBtn.addEventListener("click", (event)=> {
    event.preventDefault();
  
    let form = document.getElementById("form");
    form.style.display = "none";
  })
  
  // when user clocks "Submit" on form
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", (event)=> {
    event.preventDefault();
  
    let form = document.getElementById("form");
    form.style.display = "none";
  
    let name = form.elements["animalName"].value;
    let age = parseInt(form.elements["animalAge"].value);
    let type = parseInt(form.elements["animalType"].value);
    let sex =form.elements["animalSex"].value;
    let imageURL = form.elements["animalImageURL"].value;
  
    addAnimal(name, age, type, imageURL, sex);
  });
}

setupFormEventHandlers();
