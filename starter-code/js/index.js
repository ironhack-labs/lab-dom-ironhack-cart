function deleteItem(){

  var deleteItemArray = document.querySelectorAll(".btn-delete");

  deleteItemArray.forEach(function (oneButton) {
      oneButton.onclick = function () {
  
        var parentContainer = oneButton.parentNode;
  console.log(parentContainer);
        parentContainer.parentNode.remove();
      }
   
  
  })


}

deleteItem();









function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

var calcBtn = document.querySelector(".btn-success");
calcBtn.onclick = function getTotalPrice() {

var quantityArray =[];
var quantity= document.querySelectorAll(".quantity");
var itemUnitPriceArray = [];
var itemUnitPrice = document.querySelectorAll(".price");
var totalPriceArray =[];
var totalPrice = document.querySelectorAll(".total");

// Loop in quantity 
quantity.forEach(function (oneQuantity) {
quantityArray.push(oneQuantity.value);
  })
// console.log(quantityArray);

//Loop in itemUnitPrice
itemUnitPrice.forEach(function(onePrice) {
  console.log(onePrice.innerHTML)
  itemUnitPriceArray.push(Number(onePrice.innerHTML.substring(2)))

})

console.log(itemUnitPriceArray)
 
// totalPrice.innerHTML = "$" + (quantity.value * parseFloat(convertPrice).toFixed(2));


for(var i=0; i <quantityArray.length; i++) {

  totalPrice[i].innerHTML ="$" + (quantityArray[i] * itemUnitPriceArray[i]);

totalPriceArray.push((quantityArray[i] * itemUnitPriceArray[i]))

}
console.log(totalPrice)

var displayPrice = document.querySelector(".total-price");

console.log(displayPrice);
displayPrice.innerHTML = totalPriceArray.reduce(function (sum, currentValue){
  
   displayPrice = sum + currentValue;

   return "$" + displayPrice;

})


}



function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

// var createButton = document.querySelector(".create-btn")
// createButton.onclick = function () {

//   console.log("Coucou new item");

//   // var newDiv = document.createElement("div");
//   // console.log(newDiv);
//   var newProductInput = document.querySelector(".newProductName")
//   console.log(newProductInput);

// // var newPriceInput = document.querySelector(".newPrice")

//  var newProduct = document.createElement("span");
//  console.log(newProduct);

//  newProduct.innerHTML = newProductInput.value;

//  var newCheckout = document.querySelector(".All-product")

//  newCheckout.appendChild(productInput);

function createNewItemRow(itemName, itemUnitPrice){

}


// }

// var newProductInput = document.querySelector(".newProductName")
// var newPriceInput = document.querySelector(".newPrice")

//  var newProduct = document.createElement("span");

//  newProduct.innerHTML = newProductInput.value

//  var newCheckout = document.querySelector(".new-checkout")

//  newCheckout.appendChild(".checkout");

// function createNewItemRow(itemName, itemUnitPrice){

// }

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
