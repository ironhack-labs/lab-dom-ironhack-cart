function deleteItem(e){
    var toDelete = e.currentTarget.parentNode.parentNode;
    e.currentTarget.parentNode.parentNode.parentNode.removeChild(toDelete);
    getTotalPrice();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");
  var quantityDiv, totalQuantity, singleProductPrice, price, totalPrice, finalPrice;
  var counter = 0;
  finalPrice = document.getElementById("total");
  for(var i = 0; i<products.length; i++){
    quantityDiv = products[i].getElementsByClassName("quantity")[0];
    totalQuantity = parseInt(quantityDiv.getElementsByTagName("input")[0].value);

    price = products[i].getElementsByClassName("inline")[1];
    singleProductPrice = parseInt(price.getElementsByTagName("span")[0].getAttribute("data-price"));

    totalPrice = products[i].getElementsByClassName("inline")[3].getElementsByTagName("span")[0];
    counter += singleProductPrice*totalQuantity;
    totalPrice.innerHTML = "$" +singleProductPrice*totalQuantity +".00";
    console.log(counter);
  }
  finalPrice.innerHTML = "$" + counter;
}

function createQuantityInput(){
  var div1 = createItemNode("div","inline");
  var label = createItemNode("label");
  label.innerHTML = "QTY";
  var quantityInput = createItemNode("input", "ammount");
  div1.appendChild(label);
  div1.appendChild(quantityInput);
  return div1;
}

function createDeleteButton(){
    var div1 = createItemNode("div","inline");
    var button = createItemNode("button", "btn btn-delete");
    button.innerHTML = "Delete";
    div1.appendChild(button);
    console.log(button);
    return div1;
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
    var newItem = document.createElement(dataType);
    newItem.className = itemData;
    return newItem;
}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var newProduct = document.createElement('div');
  newProduct.className = "product";
  var container = document.getElementById("product-container");
  container.appendChild(newProduct);
  container.appendChild(createQuantityInput());
  container.appendChild(createDeleteButton());
}
var calculatePriceButton, deleteButtons;

window.onload = function(){

  deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton  = document.getElementById('calculate');
  var createItemButton = document.getElementById('new-item-create');


  calculatePriceButton.onclick = getTotalPrice;

  createItemButton.onclick = createNewItem;

   for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }

};
