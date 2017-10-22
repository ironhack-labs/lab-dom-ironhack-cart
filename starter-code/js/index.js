function deleteItem(e){
 var elToRemove = e.target.parentNode;
 elToRemove.parentNode.removeChild(elToRemove);
}

function getPriceByProduct(itemNode){
  // QUITAMOS EL "$" Y CONVERTIMOS A NÚMERO
  return parseFloat(itemNode.innerText.substr(1));
}

function updatePriceByProduct(productPrice, index){
  var allProductsQuantity = document.querySelectorAll(".quantity");
  var allTotalAmounts = document.querySelectorAll(".total-amount");
  allTotalAmounts[index].innerText = "$" + getPriceByProduct(productPrice) * parseFloat(allProductsQuantity[index].value);
}

function getTotalPrice() {
  var totalAmountProduct = document.querySelectorAll(".total-amount");
  var allProductsPrices = document.querySelectorAll(".item-price");
  var totalEl = document.getElementById("final-price");
  allProductsPrices.forEach(function(product, index){
    updatePriceByProduct(product, index);
  });
  var total = 0;
  document.querySelectorAll(".total-amount").forEach(function(subtotal) {
    total += parseFloat(subtotal.innerText.substr(1));
  });

  total = total >= 0 ? total : 0;
  totalEl.innerText = "Total Price: $" + total;
}

function createQuantityInput(){
  var quantityInput = document.createElement('input');

  return quantityInput;
}

function createDeleteButton(){
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
 if (dataType === 'text') {
   var name = document.createTextNode(itemData);
 } else {
   var quantity = document.createTextNode(itemData);
 }
}

function createNewItemRow(itemName, itemUnitPrice){
  var myNewElement = document.createElement("div");
  myNewElement.classList.add('item');
  var itemsContainer = document.getElementById("items-container");
  myNewElement.innerHTML = `<span class="item-name">${itemName}</span>
  <span class="item-price">$${itemUnitPrice}</span>
  <input class="quantity" type="number" pattern="[0-9]" name="" value="0">
  <span class="total-amount">$0.00</span>
  <button class="btn btn-delete" type="button">Delete</button>`;

  itemsContainer.appendChild(myNewElement);
  createDeleteButton();
}

function createNewItem(){
  var newProductName = document.getElementById("create-name").value;
  var newProductPrice = parseFloat(document.getElementById("create-price").value) + ".00";
  var createBtn = document.getElementById("new-item-create");

  if(newProductName && newProductPrice) {
    createNewItemRow(newProductName, newProductPrice);
  } else console.log("Please fill both fields");
  document.getElementById("create-name").value = "";
  document.getElementById("create-price").value = "";

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var itemPrice = document.querySelector(".item-price");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  createDeleteButton();
};
