// function deleteItem(e){

// }

function getPriceByProduct(itemNode){

  var itemQuantity = document.getElementsByTagName('input')[0]; //get user's input
  var itemPrice = getElementsByClassName('price')[0];  //get the item's price
  
  
  var priceByProduct = itemQuantity*itemPrice;  //calculate the total for the quantity of each item 
  console.log(priceByProduct);

  var itemTotals = [];
  itemTotals.push(priceByProduct);

  return priceByProduct;
  return itemTotals;
} 


function getTotalPrice(itemTotals) {

  getPriceByProduct(itemNode);
  
  console.log("calculating total cost of items in the cart now");
  var totalItemsPrice = itemTotals.reduce(function(a, b) { return a + b; }, 0);

console.log(totalItemsPrice); 
return totalItemsPrice; 



}

// function updatePriceByProduct(productPrice, index){

// }



// function createQuantityInput(itemPrice){
  

 

//   }

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

  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');
    
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }

window.onload = function() {
  var calculatePriceButton = document.getElementById('btn-success');

  calculatePriceButton.onclick = getTotalPrice(); 

};




