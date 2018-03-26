
function calculatePrice () {
  var buttonElement = document.querySelector('.buttonPrice');
  var handleClick = function (event) {
    getPriceByProduct();
    ('click', getPriceByProduct)
  }

   

}

function deleteItem(e){

}

function getPriceByProduct(){
  var priceProduct = document.querySelector('.product-price').innerHTML;
  // console.log(priceProduct)
  return Number(priceProduct);
}

function updatePriceByProduct(productPrice, index){


}

function getTotalPrice() {
  return getPriceByProduct()*createQuantityInput();


}

function createQuantityInput(){
  var quantityItem = document.querySelector('.qty').value;
  return Number(quantityItem);

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
