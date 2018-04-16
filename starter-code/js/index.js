function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var item = document.getElementById(itemNode);
  var price = item.getElementsByClassName('productPrice')[0].textContent;
  // var price = document.getElementsByClassName('productPrice').textContent;
  console.log(price);
  return price;
}

function getQuantityByProduct(itemNode){
  // var quantityObject = document.getElementsByTagName('input');
  // var quantity =quantityObject.value
  var item = document.getElementById(itemNode);
  console.log(item);
  var quantity = item.getElementsByTagName('input')[0].value;
  console.log(quantity);
  return quantity;
}

function updatePriceByProductRefresh(){
    var elements = document.getElementsByClassName('product')
    for (var i=0; i<elements.length; i++) {
    var price = elements[i].getElementsByClassName('productPrice')[0].textContent;
    var quantityObject = elements[i].getElementsByTagName('input')[0];
    console.log(quantityObject)
    var quantity = quantityObject.value;
    console.log(quantity)
    var itemTotalPrice = quantity * price;
    elements[i].getElementsByClassName('TotalPriceItem')[0].textContent = "Total Price: $ " + itemTotalPrice;
  //length of amount of rows to loop the index and place the total price for each item
}}

function getNumberElements(){
  var total = 0
  var elements = document.getElementsByClassName('product')
  for (var i=0; i<elements.length; i++) {
    total++;
  }
  return total;
}

function getTotalPrice()   {
  var totalCart = 0;
  var elements = document.getElementsByClassName('product')
  for (var i=0; i<elements.length; i++) {
    id = elements[i].getAttribute('id');
    console.log(id);  
    var price = getPriceByProduct(id);
    var quantity = getQuantityByProduct(id);
    var total = quantity * price;
    totalCart += total;
    // updatePriceByProduct(total, id);
  }
  document.getElementById('total-Cart').textContent = "Total Cart: $ " + totalCart;

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
  var calculateItemButton = document.getElementById('calc-items-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  calculateItemButton.onclick = updatePriceByProductRefresh;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
