function deleteItem(element){ 
  let product = document.getElementById("container-products");
  product.removeChild(element.target.parentNode.parentNode); // also could be used currentTarget instead of target
}

function getPriceByProduct(product){
  let quantity = product.querySelector('.quantity').value;
  let price = parseFloat(product.querySelector('.unitPrice').innerText);
  return quantity * price;
}

function updatePriceByProduct(productPrice, product){
  let updateTotalPrice = product.querySelector('.subTotal');
  updateTotalPrice.innerText = productPrice;
}

function getTotalPrice() {
  let products = document.querySelectorAll('.product'); // Saving just the product DIV wrapper (so each product) to the variable.
  let totalPrice = 0;

  products.forEach(function(product){ // forEach can be used as querySelectorAll returns an array.
    let totalProductPrice = getPriceByProduct(product); // Saving product individual subtotal price in variable obtained by calling the function. Note that for each iteration (product) will be different.
    updatePriceByProduct(totalProductPrice, product); // Updating price to each product.  
    totalPrice += totalProductPrice; // Total price from all products to be shown in the product cart.
  });
  document.querySelector('.total-price').innerText = totalPrice;
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
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
