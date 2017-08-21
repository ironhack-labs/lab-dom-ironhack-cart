
function productPrice(){
  var unitPrice = document.getElementsByClassName("unitCost");
  var numberPrice = [];
  var unitPriceText = [];
  for(i=0; i<unitPrice.length; i++){
    unitPriceText.push(unitPrice[i].textContent);
    numberPrice.push(parseFloat(unitPriceText[i]));
  }
  return numberPrice;
}

//get defined quantity
function quantityOfUnits(){
  var quantity = document.getElementsByClassName("quantity");
  var currentQuantity = [];
  var currentQuantityNumber = [];
  for(i=0; i<quantity.length; i++){
    currentQuantity.push(quantity[i].value);
    currentQuantityNumber.push(parseFloat(currentQuantity[i]));
  }
  return currentQuantityNumber;
}


//calculate current price
function currentPrice(){
  var productCost = productPrice();
  var units = quantityOfUnits();
  var current = [];
  for(i=0; i<units.length; i++){
    current.push(productCost[i]*units[i]);
  }
  return current;
}


//manipulate rendered price
function updatePrice(){
  var updateCost = document.getElementsByClassName("currentPrice");
  var current = currentPrice();
  for (i=0; i < current.length; i++) {
    updateCost[i].innerHTML = current[i];
    }
  }

//calcualte total-sum
function totalSum(){
  var current = currentPrice();
  var total = 0;
  for(i=0; i<current.length; i++){
    total += current[i];
  }
  return total;
}

//manipulate printed total-sum
function updateTotal(){
  var updateTotal = document.getElementById("total");
  updateTotal.innerHTML = totalSum();
}





//select product-wrapper
// function deleteProduct(){
//   var product-wrapper = document.getElementsByClassName("productItem");
//
// }

//select parent-wrapper that contains product-wrapper


//delete product-wrapper

//execute deletion by click-event (addEventListener)



//
// function deleteItem(e){
//
// }
//
// var quantity = document.getElementById("quantity");
// var unitCost = document.getElementById("unitCost");
// function getPriceByProduct(itemNode){
//   return unitCost;
// }
//
// var total = document.getElementById("currentPrice");
// function updatePriceByProduct(productPrice, index){
//   currentPrice.innerHtml = quantity * unitCost;
//   return currentPrice;
// }

// function getTotalPrice() {
//   return unitCost * quantity;
// }
//
// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }
//
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
