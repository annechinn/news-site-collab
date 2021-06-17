function processForm(){


    let form = document.getElementById('form');
    let numSeniors=parseInt(form.elements['seniors'].value);
    let numAdults=parseInt(form.elements['adults'].value);
     let numChildren=parseInt(form.elements['children'].value);
     let coupon= form.elements["coupon"].value;
     let adultTotal = zoo.prices.adult*numAdults;
    let seniorTotal = zoo.prices.senior*numSeniors;
    let childTotal = zoo.prices.child*numChildren;
    let totalCostBeforeDiscount= adultTotal + seniorTotal + childTotal;
    let totalCostAfterDiscount = 0;
    let numTickets = numAdults+numSeniors+numChildren;
    let div = document.getElementById('ticket-total');
    let discount = 0
    let discountRate = .1;
    let discountRowHTML = "";
    if (coupon==="Zoopass"){
        discount = totalCostBeforeDiscount * discountRate; 
        totalCostAfterDiscount = totalCostBeforeDiscount -discount; 
        discountRowHTML=`
        <tr>
        <td>Discount</td>
        <td></td>
        <td></td>
        <td>${discount.toFixed(2)}</td>
      </tr>
        `;
    } 


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
    <td><strong>Total Before Discount</strong></td>
    <td>${numTickets}</td>
    <td></td>
    <td><strong>${totalCostBeforeDiscount.toFixed(2)}</strong></td>
  </tr>
    ${discountRowHTML}
    <tr>
      <td><strong>Total</strong></td>
      <td>${numTickets}</td>
      <td></td>
      <td><strong>${totalCostAfterDiscount.toFixed(2)}</strong></td>
    </tr>
    </tbody>
  </table>
`;
}
function setupFormEventHandler(){
    document.getElementById('submit-btn').addEventListener('click',(event)=>{
        event.preventDefault();
        processForm();
    })
 }

setupFormEventHandler();