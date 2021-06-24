function processForm() {
    console.log("processForm")

    let form = document.getElementById('form');

    let numAdults = parseInt(form.elements["adults"].value);
    let numSeniors = parseInt(form.elements["seniors"].value);
    let numChildren = parseInt(form.elements["children"].value);

    let adultTotal = zoo.prices.adult * numAdults;
    let seniorTotal = zoo.prices.seniors * numSeniors;
    let childTotal = zoo.prices.children * numChildren;
    let totalCost = adultTotal + seniorTotal + childTotal;

    let div = document.getElementById('ticket-total');
    div.innerHTML = `<h1>Total: ${totalCost}</h1>`;
}

function setupFormEventHandler() {
    document.getElementById('submit-btn').addEventListener('click',(event)=>{
        event.preventDefault();
        processForm();
    });
}

setupFormEventHandler();