function deleteItem(event){
  var chooseParent = event.target.parentNode.parentNode;
  chooseParent.remove();
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
    var nodeValue = elements[i].getElementsByTagName('input')[0];
    nodeValue = nodeValue.value;
    if(nodeValue === "" || Number(nodeValue) !== Number(nodeValue)){
      quantities.push(0);
    }
    else{
      quantities.push(Number(nodeValue));
    }
  }
  return quantities;
}

function updatePriceByProduct(productPrice, length){
  var elements = document.getElementsByClassName("total-cost");
  for(var i = 0; i < length; i++){
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
  var elemTotalPrice = prices.map(function(element, index){
    return element * quantities[index];
  });

  updatePriceByProduct(elemTotalPrice, quantities.length);

  var total = elemTotalPrice.reduce(function(previous, current){
    return previous + current;	
  }, 0);

  updateTotalPrice(total);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createNewItemRow(itemName, itemUnitPrice) {
  var container = document.createElement("div");
  container.setAttribute("class", "product-container");

  
  
  var products = document.querySelectorAll(".products")[0];
  products.appendChild(container);
}

function createNewItem(event) {
  event.preventDefault();
  var itemName = document.getElementById("new-product-name").value;
  var itemUnitPrice = document.getElementById("new-product-price").value;
  createNewItemRow(itemName, itemUnitPrice);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.addEventListener("click", getTotalPrice);
  createItemButton.addEventListener("click", createNewItem);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener("click", deleteItem);
  }
 
  var forms = document.querySelectorAll("form");
  for(var i = 0; i<forms.length ; i++){
    forms[i].addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }
};
