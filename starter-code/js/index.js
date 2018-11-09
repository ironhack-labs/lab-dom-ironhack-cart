function getPriceByProduct(product) {
  return parseFloat(
   product.querySelector('.product-price span').innerHTML
 );
}

function updatePriceByProduct(productPrice, product) {
  var quantityProduct = parseInt(product.querySelector('.qty').value);

  var productTotalPrice = productPrice * quantityProduct;

   product.querySelector('.product-total-price span').innerHTML = productTotalPrice.toFixed(2);
   
   return productTotalPrice;
}

var totalPrices = 0;

function getTotalPrice() {
  var products = Array.from(document.querySelectorAll('.product'));

  products.forEach(function(product) {
   productTotalPrice = updatePriceByProduct(
     getPriceByProduct(product),
     product
   );
   totalPrices += productTotalPrice;
    });
    document.querySelector("h2 span").innerHTML = totalPrices.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
  var deleteBtn = document.getElementById('delete-product');
  deleteBtn.onclick = deleteItem;
});

function deleteItem(element) {
  var deleteProducts = document.querySelector('.product');
  deleteProducts.remove(element.target.parentNode);
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
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};