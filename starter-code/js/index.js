function deleteItem(e){
  var product = e.currentTarget.parentNode;
  product.parentNode.removeChild(product);

}

function getPriceByProduct(itemNode){

  return parseFloat(itemNode.querySelector('.price').textContent) * parseInt(itemNode.querySelector('.quantity').value);

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    var totalPrice = 0;
        document.querySelectorAll('.product').forEach(function(product){
        var totalProductPrice = getPriceByProduct(product);
        product.querySelector(".totalByProduct").innerHTML = totalProductPrice;
        totalPrice += totalProductPrice;

    });  
    document.querySelector('#totalSum').innerHTML = totalPrice;

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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
