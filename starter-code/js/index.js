function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  
  var prices = document.querySelectorAll(".price-per-unit");
  var inputs = document.querySelectorAll(".quantity-input");
  var total = 0;
  for(i=0; i < prices.length; i++){
    var totalPrices = document.querySelectorAll(".total-price")
    var price = prices[i].children[0].innerHTML;
    var quantity = inputs[i].children[0].children[0].value;
    var totalPerProduct = parseFloat(price)*Number(quantity);
    totalPrices[i].children[0].innerText = totalPerProduct;    
    total += totalPerProduct;    
  }
  var tot = document.getElementById("grand-total") 
  tot.innerText = total;
  
  

  
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
