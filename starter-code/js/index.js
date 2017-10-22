function deleteItem(e){

}

function getPriceByProduct(itemNode){ //call with "product-cost"
  var elements = document.getElementsByClassName(itemNode);
  var prices = [];
  for (var i=0; i < elements.length ; i++){
    prices.push(elements[i].innerText);
    prices[i] = Number(prices[i].replace("$",""));
  }
  return prices;
}

function getQtyByProduct(itemNode){ //call with "quantity"
  var elements = document.getElementsByClassName(itemNode);
  var quantities = [];
  for (var i=0; i < elements.length ; i++){
    var nodeValue = document.getElementsByTagName('input')[i];
    nodeValue = nodeValue.value;
    if(nodeValue === ""){
      quantities.push(0);
    }
    else{
      quantities.push(Number(nodeValue));
    }
  }
  return quantities;
}

function updatePriceByProduct(productPrice, index){
  var elements = document.getElementsByClassName("total-cost");
  for(var i = 0; i < index+1; i++){
    elements[i].innerText = "$" + productPrice[i].toString();
  }
}

function updateTotalPrice(totalPrice){
  var element =  document.getElementById("total-price");
  element.innerText = "Total Price: $" + totalPrice.toString();
}

function getTotalPrice() {
  var prices = getPriceByProduct("product-cost");
  var quantities = getQtyByProduct("quantity");
  var index = -1;
  var elemTotalPrice = prices.map(function(element){
    index++;
    return element * quantities[index];
  });

  updatePriceByProduct(elemTotalPrice, index);

  var total = elemTotalPrice.reduce(function(previous, current){
    return previous + current;	
  }, 1);

  updateTotalPrice(total);
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
