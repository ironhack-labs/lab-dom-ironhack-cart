function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var item = document.getElementById(itemNode);
  console.log(item)
  var price = item.getElementsByClassName('productPrice').textContent;
  // var price = document.getElementsByClassName('productPrice').textContent;
  console.log(price);
  return price;
}

function getQuantityByProduct(itemNode){
  // var quantityObject = document.getElementsByTagName('input');
  // var quantity =quantityObject.value
  var item = document.getElementById(itemNode)
  var quantity = document.getElementsByClassName('input').value;
  console.log(quantity);
  return quantity;
}

function updatePriceByProductRefresh(productPrice, index){

  var price = document.getElementsByClassName('productPrice')[0].textContent;
  var quantityObject = document.getElementsByTagName('input')[0];
  var quantity = quantityObject.value;
  var itemTotalPrice = quantity * price;
  document.getElementsByClassName('TotalPriceItem')[0].textContent = "Total Price: $ " + itemTotalPrice;
  return(itemTotalPrice);

  //length of amount of rows to loop the index and place the total price for each item
}

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
    id = "cart_" + elements[i].getAttribute('id').toString();
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
