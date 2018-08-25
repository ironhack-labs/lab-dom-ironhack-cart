function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var priceOne = itemNode.getElementsByClassName('price')[0].innerHTML;
  return priceOne;
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName('products')[0].getElementsByClassName('product');
  //console.log(products.length);
  var total=[];
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var price = product.getElementsByClassName('price')[0].innerHTML;
    var quantity = product.getElementsByClassName('quantity')[0].value;  
    total.push(price*quantity)
    product.getElementsByClassName("total-price")[0].innerHTML=price*quantity;
    //console.log(price, quantity);
  }
  total=total.reduce(function(acc,actual){
    return acc+=actual
  })
  console.log(total)
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
