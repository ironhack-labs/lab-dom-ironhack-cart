function deleteItem(){
  var p = this.parentNode.parentNode.parentNode;
  var c = this.parentNode.parentNode;
  p.removeChild(c);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName('product');
  var price;
  var qty;
  var totalProductPrice;
  var totalPrice = 0;
  for(var i = 0; i < products.length ; i++){
    price = products[i].getElementsByClassName('price')[0].innerHTML;
    qty = products[i].getElementsByClassName('qty')[0].value;
    totalProductPrice = price * qty;
    products[i].getElementsByClassName('totalProductPrice')[0].innerHTML = totalProductPrice.toFixed(2);
    totalPrice += totalProductPrice;
  }
  return document.getElementById('total-price').textContent = totalPrice.toFixed(2);
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
  var p = this.parentNode.parentNode.parentNode;
  var c = this.parentNode.parentNode.parentNode.childNodes[3];
  var product = document.getElementById('nameProduct').value;
  var price = parseFloat(document.getElementById('asignedPrice').value).toFixed(2);
  if (product === '' || isNaN(price)){
    alert('Please, insert correct values to create a product')
  } else {
    var name = document.getElementsByClassName('name')[0].innerHTML;
    var productPrice = document.getElementsByClassName('price')[0].innerHTML;
    var productInfo = c.cloneNode(true);
    productInfo.getElementsByClassName('name')[0].innerHTML = product;
    productInfo.getElementsByClassName('price')[0].innerHTML = price;
    var products = document.getElementsByClassName('product');
    p.insertBefore(productInfo, products[(products.length-1)].nextSibling);
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  /*console.log(document.getElementById('total-price').textContent)*/

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  /*for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = function(){
      console.log("PULSADO")
    }
  }*/

};

/*var prices = document.getElementsByClassName(price);

var qty = document.getElementsByClassName(qty).value = 0;*/
