
/*Iteration 1,2,3 */
/*Retrieves the unit price of the product*/
function getPriceByProduct(){
  var costOneUnit = document.querySelectorAll(".cost-one-unit span");
  var valueCostOneUnit = [];
  costOneUnit.forEach(function(item){
    valueCostOneUnit.push(parseFloat(item.innerHTML));
    
  })
  console.log(valueCostOneUnit);
  return valueCostOneUnit;
}

/*Retrieves the quantity of items desired*/
function getQuantityValue() {
  var qty = document.querySelectorAll(".get-qty");
  var currentValQty = [];
  qty.forEach(function(item){
   currentValQty.push(parseFloat(item.value));
  });
  console.log(currentValQty);
  return currentValQty;
}

/*
Calculates the total price based on this data
Updates the total price in the DOM

When you click on the Calculate Prices button, 
the total prices for all products update their values based on each quantity specified.
*/
function updatePriceByProduct() {
var qtyRows = document.querySelectorAll(".row-style").length;
console.log(qtyRows);

for (i = 0; i < qtyRows; i++){
  calculatedPriceByProduct = getPriceByProduct()[i] * getQuantityValue()[i];
  console.log(calculatedPriceByProduct);
  document.querySelectorAll(".total-price span")[i].innerHTML = calculatedPriceByProduct.toFixed(2);
    }
}
