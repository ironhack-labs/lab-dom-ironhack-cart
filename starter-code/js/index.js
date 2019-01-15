calculate = function(){
  var price = document.querySelectorAll(".unit-cost");
  var qty = document.querySelectorAll(".qty"); 
  var total = document.querySelectorAll(".total-price");

  var globalPrice = 0;
  total.forEach(function(element, i){
    total[i].innerHTML = price[i].innerHTML * qty[i].value;
    globalPrice += Number(total[i].innerHTML);
  });

  console.log("$" + globalPrice)
}
var buttonSuccess = document.querySelector(".btn-success");
buttonSuccess.onclick = calculate;


// var button = document.querySelector(".btn-success");
// button.onclick = function() {
//   // var qtyField = document.querySelector(".qty");
//   var containerArray = document.querySelectorAll(".container");

//   containerArray.forEach(function(oneContainer) {
//     getPriceByProduct(oneContainer);
//   });
// };

// function getPriceByProduct(oneContainer) {
//   console.log(oneContainer);
//   var itemQty = oneContainer.querySelector(".qty");
//   var unitCost = oneContainer.querySelector(".unit-cost");
//   var totalPrice = oneContainer.querySelector(".total-price");
//   totalPrice.innerHTML = "$" + Number(unitCost.innerHTML) * itemQty.value;
// }




//total price of all product
function GetTotalPrice()

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}
