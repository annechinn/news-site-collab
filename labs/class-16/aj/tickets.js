function showForm(event) {
  event.preventDefault();
  let form = document.getElementById("form");
  form.style.display = "block";
  document.getElementById("main-content").innerHTML = "";
}
function hideForm(event) {
  event.preventDefault();
  document.getElementById("form").style.display = "none";
}
function getHTMLForTableRow(type, number, cost, total) {
  return `
    <tr>
      <td>${type}</td>
      <td>${number}</td>
      <td>${cost}</td>
      <td>${total}</td>
    </tr>
  `;
}
function processForm(event) {
  event.preventDefault();
  let form = document.getElementById("form");
  let numAdults = parseInt(form.elements.adults.value);
  let numSeniors = parseInt(form.elements.seniors.value);
  let numChildren = parseInt(form.elements.children.value);
  let coupon = form.elements.coupon.value;
  let numTickets = numAdults + numSeniors + numChildren;
  let adultTotal = zoo.prices.adult * numAdults;
  let seniorTotal = zoo.prices.senior * numSeniors;
  let childTotal = zoo.prices.child * numChildren;
  let totalCost = (adultTotal + seniorTotal + childTotal);
  let totalCostAfterDiscount = 0;
  let discountHTML = "";
  let discountRate = .10;
  let discount = 0;
  if (coupon === "ZOOPASS") {
    discount = (totalCost*discountRate);
    totalCostAfterDiscount= totalCost - discount;
    discountHTML = `
      <tr>
        <td>Discount</td>
        <td></td>
        <td></td>
        <td>-${discount.toFixed(2)}</td>
      </tr>
      <tr>
      <td colspan="3">Total After Discount</td>
      <td>${totalCostAfterDiscount.toFixed(2)}</td>
    </tr>
    `;
  }
  discount = discount.toFixed(2);
  totalCost = totalCost.toFixed(2);
  let div = document.getElementById('ticket-total');
  div.innerHTML = `
  <table class='table table-striped'>
    <thead>
      <th>Type</th>
      <th>Number</th>
      <th>Cost</th>
      <th>Total</th>
    </thead>
    <tbody>
    <tr>
      <td>Adult</td>
      <td>${numAdults}</td>
      <td>${zoo.prices.adult}</td>
      <td>${adultTotal}</td>
    </tr>
    <tr>
      <td>Senior</td>
      <td>${numSeniors}</td>
      <td>${zoo.prices.senior}</td>
      <td>${seniorTotal}</td>
    </tr>
    <tr>
      <td>Child</td>
      <td>${numChildren}</td>
      <td>${zoo.prices.child}</td>
      <td>${childTotal}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>${numTickets}</td>
      <td></td>
      <td>${totalCost}</td>
    </tr>
    ${discountHTML}
    </tbody>
  </table>
`;
}
function getHTMLForCauroselItem(animal, index) {
  return `
    <div class='carousel-item ${index===0?"active":""}'>
      <img src="${animal.imageURL}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${animal.name}</h5>
        <p>Age: ${animal.age} Sex: ${animal.sex}</p>
      </div>
    </div>
  `;
}
function setupFormCaurosel() {
  let lions = zoo.animals.filter(x=>x.typeId==1);
  let div = document.getElementById('carousel-content'); 
  div.innerHTML = lions.map((x,index)=> {
      return getHTMLForCauroselItem(x, index);
    }).join("");
}
function setupFormEventHandler() {
  // when user clicks "Submit" on form
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", (event)=> {
    processForm(event);
  });
}
setupFormEventHandler();
setupFormCaurosel();
React
Reply















