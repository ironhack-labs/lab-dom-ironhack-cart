function deleteItem(e){

}

function getPriceByProduct(itemNode){
    var priceNode = itemNode.getElementsByClassName('price');
    var price = priceNode[0].innerHTML;
    return parseInt(price.replace('$', ''), 10);
}

function getQuantityByProduct(itemNode){
    var qntNode = itemNode.getElementsByClassName('qnt-value');
    return parseInt(qntNode[0].value, 10);
}

function updatePriceByProduct(productPrice, index){
    var totPrices = document.getElementsByClassName('tot-price');
    totPrices[index].innerHTML = '$'+ productPrice;
}

function getTotalPrice() {
    var items = document.getElementsByClassName('item');
    
    for (var i=0; i<items.length; i++) {
        var itemNode = items[i];
        var price = getPriceByProduct(itemNode);
        var quantity = getQuantityByProduct(itemNode);
        
        var totPrice = price * quantity;
        updatePriceByProduct(totPrice, i);
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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
