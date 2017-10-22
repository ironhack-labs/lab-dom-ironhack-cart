function deleteItem(e){
 console.log(e.target.parentNode);
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
  // console.log(getPriceByProduct(productPrice));
  // console.log(parseFloat(allProductsQuantity[index].value));
  // console.log(allTotalAmounts[index].innerText);
  allTotalAmounts[index].innerText = "$" + getPriceByProduct(productPrice) * parseFloat(allProductsQuantity[index].value);
}

function getTotalPrice() {
  var totalAmountProduct = document.querySelectorAll(".total-amount");
  var allProductsPrices = document.querySelectorAll(".item-price");
  var totalEl = document.getElementById("final-price");
  allProductsPrices.forEach(function(product, index){
    updatePriceByProduct(product, index);
  });
  // FINAL TOTAL
  var total = 0;
  document.querySelectorAll(".total-amount").forEach(function(subtotal) {
    // console.log(subtotal.innerText);
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
  console.log(myNewElement);
  //select last div
  var lastchild = document.getElementById("items-container");
  console.log(lastchild);
  myNewElement.innerHTML = `<span class="item-name">IronShirt</span>
  <span class="item-price">$15.00</span>
  <input class="quantity" type="number" pattern="[0-9]" name="" value="" placeholder="Quantity">
  <span class="total-amount">$0.00</span>
  <button class="btn btn-delete" type="button">Delete</button>`;
  console.log(myNewElement);
  lastchild.appendChild(myNewElement);
}

function createNewItem(){
  var newProductName = document.getElementById("create-name");
  console.log(newProductName.value);

  var newProductQuantity = document.getElementById("create-quantity");
  console.log(parseFloat(newProductQuantity.value));
  createNewItemRow(newProductName, newProductQuantity);

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var itemPrice = document.querySelector(".item-price");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }


};


