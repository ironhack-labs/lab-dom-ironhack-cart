function deleteItem(e){
    var toDelete = e.currentTarget.parentNode.parentNode;
    e.currentTarget.parentNode.parentNode.parentNode.removeChild(toDelete);
    getTotalPrice();
}

function getPriceByProduct(itemNode){
  var products = document.getElementsByClassName("product");
  price = products[itemNode].getElementsByClassName("inline")[1];
  singleProductPrice = parseInt(price.getElementsByTagName("span")[0].getAttribute("data-price"));
  return singleProductPrice;
}

function updatePriceByProduct(productPrice, index){
  var products = document.getElementsByClassName("product");
  var quantityDiv; var totalQuantity; var singleProductPrice; var totalPrice;
  var counter = 0;
  for(var i = 0; i<products.length; i++){
    quantityDiv = products[i].getElementsByClassName("quantity")[0];
    totalQuantity = parseInt(quantityDiv.getElementsByTagName("input")[0].value);

    singleProductPrice = getPriceByProduct(i);

    totalPrice = products[i].getElementsByClassName("inline")[3].getElementsByTagName("span")[0];
    counter += singleProductPrice*totalQuantity;
    totalPrice.innerHTML = "$" +singleProductPrice*totalQuantity +".00";
    console.log(counter);
  }
  return counter;
}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");
  var quantityDiv, totalQuantity, singleProductPrice, price, totalPrice, finalPrice;
  // var counter = 0;
   finalPrice = document.getElementById("total");
  finalPrice.innerHTML = "$" + updatePriceByProduct();
}

function createQuantityInput(){
  var div1 = createItemNode("div","inline  quantity");
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
    button.onclick = deleteItem;
    button.innerHTML = "Delete";
    div1.appendChild(button);
    return div1;
}

function createQuantityNode(){
  var div1 = createItemNode("div","inline");
  var quantity = createItemNode("span","");
  quantity.innerHTML = "$0.00";
  div1.appendChild(quantity);
  return div1;
}

function createItemNode(dataType, itemData){
    var newItem = document.createElement(dataType);
    newItem.className = itemData;
    return newItem;
}

function createNewItemRow(itemName, itemUnitPrice){
    var newProductRow = document.createElement('div');
    var divInlineName = createItemNode("div", "inline");
    var spanName = document.createElement("span");
    var divInlineQuantity = createItemNode("div","inline");
    var spanQuantity = document.createElement("span");
    // var atribute = document.createAttribute("data-price");
    // atribute.value = itemUnitPrice;
    spanQuantity.setAttribute("data-price", itemUnitPrice);

    spanName.innerHTML = itemName;
    spanQuantity.innerHTML = "$"+itemUnitPrice+".00";
    divInlineName.appendChild(spanName);

    divInlineQuantity.appendChild(spanQuantity);

    newProductRow.appendChild(divInlineName);
    newProductRow.appendChild(divInlineQuantity);
    newProductRow.className = "product";
    newProductRow.appendChild(createQuantityInput());
    newProductRow.appendChild(createQuantityNode());
    newProductRow.appendChild(createDeleteButton());
    return newProductRow;
}

function createNewItem(){
  var newName = document.getElementById("enter-name").value;
  var newPrice = document.getElementById("enter-price").value;
  var container = document.getElementById("product-container");
  container.appendChild(createNewItemRow(newName,newPrice));

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
      console.log("Im working");
    }

};
