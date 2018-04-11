// function deleteItem(e){

// }
// all the prices
var allPrices = document.getElementsByClassName('single-item-price');
console.log("all prices: ", allPrices);

// all the products
var allProducts = document.getElementsByClassName('product-name');
console.log("======: ", allProducts)

// all the quantities
var allQuantities = document.getElementsByClassName('quantity-input');

function getPriceByProduct() {
  for (var i = 0; i < allProducts.length; i++) {
    var totalSingleItemPrice = Number(allPrices[i].innerHTML) * allQuantities[i].value;
    console.log(totalSingleItemPrice);
    document.getElementsByClassName('total-single-item-price')[i].innerHTML = totalSingleItemPrice;
  }
}

// function updatePriceByProduct(productPrice, index){

// }

var updatedPricesArray = document.getElementsByClassName('total-single-item-price');

console.log("updated array: ", updatedPricesArray);

function sumOfTwoNumbers(a, b) {
  return a + b;
}



function getTotalPrice() {
  getPriceByProduct();
  var newPricesArray = [];
  for (var i = 0; i < allProducts.length; i++) {
    var singleProductTotalPrice = Number(updatedPricesArray[i].innerHTML);
    console.log("blah: ", singleProductTotalPrice);
    newPricesArray.push(singleProductTotalPrice);
    console.log("newPricesArray: ", newPricesArray)
  }
  var total = newPricesArray.reduce(sumOfTwoNumbers, 0);
  console.log("total is: ", total);
  document.getElementById('final-price').innerHTML = total;
}




// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// 
window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};