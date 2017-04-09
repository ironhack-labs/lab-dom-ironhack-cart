function deleteItem(e){
  var del = e.currentTarget.parentElement.parentElement;
  var parent = del.parentElement;
  parent.removeChild(del);
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  return parseInt(itemNode.getElementsByTagName("span")[0].innerHTML.slice(1));
}

function updatePriceByProduct(productPrice, index){
  var update = document.getElementsByClassName('product-total');
  update[index].getElementsByTagName("span")[0].innerHTML = "$" + productPrice;
}

function getTotalPrice() {
  var quantity = document.getElementsByClassName("quantity");
  var subtotal = document.getElementsByClassName("product-total");
  var price = document.getElementsByClassName("product-price");
  var total = document.getElementById("total");
  var tot = 0;
  for(var i = 0; i < price.length; i++){
    var failsafe = quantity[i].value;
    if(isNaN(failsafe)) failsafe = 0;
    updatePriceByProduct(getPriceByProduct(price[i]) * failsafe, i);
    tot += parseInt(subtotal[i].getElementsByTagName("span")[0].innerHTML.slice(1));
  }
  total.getElementsByTagName("span")[0].innerHTML = "$" + tot;

}

function createDeleteButton(){
  var container = document.createElement("div");
  container.setAttribute("class", "product-delete");
  var element = document.createElement("button");
  element.innerHTML = "Delete";
  element.setAttribute("class", "btn btn-delete");
  container.appendChild(element);
  return container;
}

function createSubTotal(){
  var container = document.createElement("div");
  container.setAttribute("class", "product-total");
  var element = document.createElement("span");
  element.innerHTML = "$0";
  container.appendChild(element);
  return container;
}

function createQuantityNode(){
  var container = document.createElement("div");
  container.setAttribute("class", "product-quantity");
  var element = document.createElement("span");
  element.innerHTML = "QTY ";
  container.appendChild(element);
  element = document.createElement("input");
  element.setAttribute("class", "quantity");
  element.setAttribute("type", "text");
  element.setAttribute("name", "QTY");
  element.setAttribute("value", 0);
  container.appendChild(element);
  return container;
}

function createItemNode(itemName, itemUnitPrice){
  var container = document.createElement("div");
  container.setAttribute("class", "product");
  container.appendChild(createNewItemName(itemName));
  container.appendChild(createNewItemPrice(itemUnitPrice));
  container.appendChild(createQuantityNode());
  container.appendChild(createSubTotal());
  container.appendChild(createDeleteButton());
  return container;
}

function createNewItemName(itemName){
  var container = document.createElement("div");
  container.setAttribute("class", "product-name");
  var element = document.createElement("span");
  element.innerHTML = itemName;
  container.appendChild(element);
  return container;
}

function createNewItemPrice(itemUnitPrice){
  var container = document.createElement("div");
  container.setAttribute("class", "product-price");
  var element = document.createElement("span");
  element.innerHTML = "$" + itemUnitPrice;
  container.appendChild(element);
  return container;
}

function createNewItem(){
  var name = document.getElementById("p-name").value;
  var price = document.getElementById("p-price").value;
  var parent = document.getElementById("shop");
  if(name.length && price.length && !isNaN(price)) parent.appendChild(createItemNode(name, price));
  var deleteButtons = document.getElementsByClassName('btn-delete');
  refreshItems(deleteButtons);
}

function refreshItems(deleteButtons){
  for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
      }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  calculatePriceButton.onclick = getTotalPrice;
  var createItemButton = document.getElementById('new-item-create');
  createItemButton.onclick = createNewItem;
  var deleteButtons = document.getElementsByClassName('btn-delete');
  refreshItems(deleteButtons);
};
