function deleteItem(e){
  console.log(e.currentTarget);
  e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  //Given a product-wrapper div
  let price = itemNode.getElementsByClassName('price');
  let quantity = itemNode.getElementsByClassName('quantity');
  let total = parseFloat(price[0].outerText) * parseInt(quantity[0].value);
  // if(total === "") total = 0;
  itemNode.getElementsByClassName('total')[0].outerText = total; 
  return total;


}

// function updatePriceByProduct(productPrice, index){
  // index.getElementsByClassName('price').outerText = productPrice;
// }

function getTotalPrice() {

  //Get all products in the form of an htmlCollection (not an array, so we must iterate manually with a for loop)
  let productCollection = document.getElementsByClassName('product-wrapper');
  
  //Create storage for the total price
  let totalPrice = 0;

  //Iterate through the collection and use our getPriceByProduct method to add (price for each product * quantity of each product) to the totalPrice
  for(var i = 0; i < productCollection.length; i++){
    totalPrice += getPriceByProduct(productCollection[i]);
  }
  
  //Update the h2 span total price with the value of totalPrice
  document.querySelector('#final').textContent = totalPrice;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

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
