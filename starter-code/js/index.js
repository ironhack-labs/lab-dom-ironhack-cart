function deleteItem(e){
  var product = document.getElementById('')
}

function getPriceByProduct(itemNode){
  for (var i = 0; i < itemNode.length; i++){
    let product = itemNode[i];
    let price = product.children[1].innerText.replace("$","");
        price = parseFloat(price);
    let quantity = product.children[2].children[1].value;
        quantity = parseInt(quantity);
    let priceByProduct = price * quantity;
        priceByProduct = "$" + priceByProduct;
    updatePriceByProduct(priceByProduct, i)
  }
}

function updatePriceByProduct(productPrice, index){
  let updatePrice = document.getElementsByClassName('total')[index]
  updatePrice.innerText = productPrice;
}


function getTotalPrice(){
  let product = document.getElementsByClassName('item-nodo');
  getPriceByProduct(product);
  let totalsPrice = document.getElementsByClassName('total');
  let sumTotal = 0;
  for(var i = 0; i < totalsPrice.length; i++){
    let price = totalsPrice[i].innerText.replace("$","");
        price = parseFloat(price);
     sumTotal +=  price;
  }
  document.getElementById('sum-total').innerText = "$" + sumTotal;
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
