function deleteItem(e){

}

function getPriceByProduct(itemNode){
  //Selecciona una clase y convierte su valor en numero
  var productSpan = document.getElementsByClassName("product-price");
  var arr = [].slice.call(productSpan)
  var priceProduct = parseFloat(arr[0].innerHTML, 10);
  //Selecciona un clase y convierte el atributo de su valor en numero
  var amount = document.getElementsByClassName("units");
  var arr2 = [].slice.call(amount)
  var amountTotal = parseInt(arr2[0].getAttribute("value"), 10);
  //Selecciona una clase calcula el multiplo de los dos numeros anteriores e introduce una string en ese selector 
  var priceLabel = document.getElementsByClassName(itemNode);
  var arr3 = [].slice.call(priceLabel);
  var finalProductPrice = priceProduct * amountTotal;
  finalProductPrice = finalProductPrice.toFixed(2);
  priceLabel[0].innerHTML =  finalProductPrice;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //Mete todos los precios finales de producto en un array convertidos en numeros
  var pricesCollection = document.getElementsByClassName("total-product-price");
  var arr = [].slice.call(pricesCollection);
  arr = arr.map(function(item) {
    var price = parseFloat(item.innerHTML, 10);
    return price;
  });
  //Calcula el precio total de los productos
  var orderPrice = arr.reduce(function(a, b){
    return a + b;
  }, 0);
  orderPrice = orderPrice.toFixed(2)
  //Create output of total price
  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "title");
  console.log(createDiv);
  var createh1 = document.createElement("h1");
  var text = document.createTextNode("Total price: $" + orderPrice);
  createh1.appendChild(text);
  console.log(createh1);
  createDiv.appendChild(createh1);
  console.log(createDiv);
  document.getElementById("body").appendChild(createDiv);  
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
