

function deleteItem(e){
  var remove = e.currentTarget.parentNode.parentNode;
  var container = remove.parentNode;
  container.removeChild(remove);
}

function getPriceByProduct(itemNode){
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var singlePrice = document.getElementsByClassName('single-price');
  var quantity = document.getElementsByClassName('quantity');

  for(i=0;i<singlePrice.length;i++){
    document.getElementsByClassName('price-per-product')[i].innerHTML = singlePrice[i].innerHTML * quantity[i].value;
  }

  var pricePerProduct = document.getElementsByClassName('price-per-product');
  var num = 0;
  for(i=0;i<singlePrice.length;i++){
    num += parseInt(pricePerProduct[i].innerHTML);
    document.getElementById('total').innerHTML = num;
  }
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
  var orig = document.getElementById('original');
  var copy = orig.cloneNode(true);

  console.log(copy);

  var newName = document.getElementById('name').value;
  var newPrice = document.getElementById('price').value;
  
  var div = document.createElement('div');

  document.getElementsByClassName('body').appendChild(div).appendChild(copy);

 
  // var div = document.createElement('div');
  // var text = document.createTextNode('ciao');
  // document.getElementsByClassName('item')[0].appendChild(div).appendChild(newName);

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