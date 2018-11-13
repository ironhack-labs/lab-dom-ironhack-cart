function deleteItem(e){
//   var lineDelete = document.getElementById('line'); 
//   lineDelete.removeChild(e.currentTarget.parentNode.parentNode); 
//    getTotalPrice();
}

function getPriceByProduct(product){
  var priceProduct = product.querySelector('.price-und span').innerHTML;
  var qtyProduct =  product.querySelector('input[name="qty"]').value;
  return priceProduct * qtyProduct;
}

function updatePriceByProduct(product, productPrice){
  product.querySelector('.total-price span').innerHTML = productPrice;
}

function getTotalPrice() {
  var products = document.querySelectorAll('.product');
  var priceTotal = 0;
  for (var i = 0, l = products.length; i < l; i++){
    var productPrice = getPriceByProduct(products[i]);
    updatePriceByProduct(products[i], productPrice);
    priceTotal += productPrice;
   }
   document.querySelector('h2 span').innerHTML = priceTotal;
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
 
  var total = document.getElementsByClassName(".calc-prices-button span");
  var priceProduct = document.getElementsByClassName(".price-und");
 
  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

 for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};