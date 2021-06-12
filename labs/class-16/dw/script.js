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
  
  function initLionButton() {
  
   // each animal object has the following properties
    // 
    // {
    //   name: "Zena",
    //   sex: "female",
    //   imageURL: "https://images.unspl....",
    //   age: 12,
    //   showcase: false,
    //   typeId: 1, // lion
    // }
  
    // step 1: create a variable to hold the DOM element
    // that represents the button with id='lion-link'.
    // use the document.getElementById method to retrieve it.
    let button = document.getElementById('lion-link')

    // step 2: create an event-handler for when the button 
    // in step 1 is clicked.

    // use the Element.addEventLister method to register the
    // event handler.
    // https://www.w3schools.com/jsref/met_document_addeventlistener.asp
    button.addEventListener("click", () =>{
      let animal = zoo.animals.find(x=>x.showcase)
      let html = getHTMLForAnimal(animal)
      let div = document.getElementById('main-content')
      div.innerHTML = html

    })
  
    // within the body of the event handler....
  
    // step 3: create a variable to hold the animal
    // that has the property showcase: true. 
    // use the Array.find method to find it.
  
    // step 4: create a variable to hold the DOM element
    // that represents the div with the id='main-content'.
    // use the document.getElementById method to retrieve it.
  
    // step 5: assign the innerHTML of the variable holding the
    // main-content DOM element returned in step 4
    // the value returned from calling the function getHTMLForAnimal.
    // [var-name].innerHTML = getHTMLForAnimal([animal object from step 3]);
    
    // these modifications should result in the main-content div being
    // update to contain the HTML for the specific animal.
  }
  
  initLionButton();
  
  