function collectionToArray(collection){
  var arr = [].slice.call(collection);
  return arr;
}

function deleteItem(e){
  var btn = e.currentTarget;
  var producto = btn.parentElement;
  var productContainer = producto.parentElement;

  productContainer.removeChild(producto);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var precios = document.getElementsByClassName("prices");
  var cantidad = document.getElementsByName("qty");
  var totalPrecios = document.getElementsByClassName("totalPrices");
  
  var preciosArr = collectionToArray(precios);
  var cantidadArr = collectionToArray(cantidad);
  var totalPreciosArr = collectionToArray(totalPrecios);
  
  preciosArr.forEach(function(precio,i){
    var cantidad = cantidadArr[i].value;
    var precio = preciosArr[i].innerHTML;
    totalPrecios[i].innerHTML = cantidad*precio;
  })

  var precioTotal = totalPreciosArr.reduce(function(suma, precio){
    return suma + parseInt(precio.innerHTML);
  }, 0)

  var precioTotalElement = document.getElementById("totalPrice");
  precioTotalElement.innerHTML = precioTotal;
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
  var newArticle = document.createElement("article");
  var itemName = getNameElement();
  var itemPrice = getPriceElement();
  var itemQuantity = getQuantityElement();
  var itemTotalPrice = getTotalPriceElement();
  var itemDelete = getDeleteElement();

  var constructedArticle = constructArticle(newArticle, itemName, itemPrice, itemQuantity, itemTotalPrice, itemDelete);
  var itemContainer = document.getElementById("item-container");
  itemContainer.appendChild(constructedArticle);

  cleanInputs()
  deleteButtonsEvents()
}

function getNameElement(){
  var element = document.createElement("span");
  var text = document.getElementById("productName").value;
  
  element.innerHTML = text;
  
  return element;
}

function getPriceElement(){
  var element = document.createElement("span");
  var text = document.getElementById("productPrice").value;
  
  element.className = "prices"
  element.innerHTML = text;
  
  return element;
}

function getQuantityElement(){
  var container = document.createElement("div");
  var label = document.createElement("label");
  var input = document.createElement("input");

  label.setAttribute("for", "qty");
  label.innerHTML = "QTY";

  input.setAttribute("name", "qty");
  input.setAttribute("type", "number");
  
  container.appendChild(label);
  container.appendChild(input)
  
  return container;
}

function getTotalPriceElement(){
  var element = document.createElement("span");
  
  element.className = "totalPrices"
  element.innerHTML = "0";
  
  return element;
}

function getDeleteElement(){
  var element = document.createElement("button");
  
  element.className = "btn btn-delete"
  element.innerHTML = "Delete";
  
  return element;
}

function constructArticle(a, n, p, q, tp, d){
  a.appendChild(n);
  a.appendChild(p);
  a.appendChild(q);
  a.appendChild(tp);
  a.appendChild(d);
  
  return a;
}

function cleanInputs(){
  var nameInput = document.getElementById("productName");
  var priceInput = document.getElementById("productPrice");

  nameInput.value = "";
  priceInput.value = "";
}

function deleteButtonsEvents(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  deleteButtonsEvents();  
};
