function deleteItem(e){
  var table = e.currentTarget.parentNode.parentNode.parentNode;
  var row = e.currentTarget.parentNode.parentNode;
  table.removeChild(row);
  console.log(row);
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
  var newProdName = document.getElementById("new-prod-name").value;
  var newProdPrice = document.getElementById("new-prod-price").value;
  var table = document.querySelector(".product-table");
  var row = document.querySelector(".product-row");
  var clonedRow = row.cloneNode(true);
  clonedRow.children[0].children[0].innerText = newProdName;
  clonedRow.children[1].children[0].innerText = newProdPrice;
  table.appendChild(clonedRow);
  console.log('vavavooma')

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
