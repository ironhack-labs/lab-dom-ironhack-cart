
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

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
  var productos = document.getElementsByClassName('wrapper');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  function getTotalPrice() {
    var total = 0;
    for (var i = 0; i < productos.length; i++) {
      var totalProduct = document.getElementsByClassName('totalProduct')[i].getElementsByTagName('span')[0];
      var unitPrice = document.getElementsByClassName('price')[i].getElementsByTagName('span')[0].innerHTML;
      var quantity = document.getElementsByClassName('qty')[i].getElementsByTagName('input')[0].value;
      totalProduct.innerHTML = unitPrice * quantity;

      total += totalProduct = unitPrice * quantity;
    }
    document.getElementById('total').innerHTML = total;
    document.getElementById('total-price').style.display = 'flex';
  }
};
