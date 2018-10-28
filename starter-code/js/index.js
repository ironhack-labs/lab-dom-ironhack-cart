
/*Version2: Iteration 1,2,3 */
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
  var qty = Array.from(document.querySelectorAll(".get-qty"));
  var currentValQty = qty.map(function(item){
   return parseFloat(item.value);
  });
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

/*Version2: Iteration 1,2,3 in one function*/
function updatePriceByProductNew() {
  var items = document.querySelector("#productsList").children;
for (var x=0;x<items.length;x++){
  var itemQty = parseInt(items[x].getElementsByClassName("get-qty")[0].value);
  var itemCostPerUnit = parseFloat(items[x].getElementsByClassName("cost-one-unit")[0].getElementsByTagName("span")[0].innerHTML);
  items[x].getElementsByClassName("total-price")[0].getElementsByTagName("span")[0].innerHTML = (itemQty * itemCostPerUnit).toFixed(2);
  
}
}

window.onload = function () {
  document.querySelectorAll(".remove-product").forEach(function(btn){
  btn.addEventListener("click",deleteElement);
});
};

/*Iteration4 */
function deleteElement(e) {
  document.getElementById("productsList").removeChild(e.currentTarget.parentNode);
}

