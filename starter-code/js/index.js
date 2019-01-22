function deleteItem(e) {
  let deleteBtn = e.currentTarget;
  let mainDiv = document.querySelector(".main-div");
  let wrapper = deleteBtn.parentElement.parentElement;
  console.log(mainDiv)
  console.log(wrapper);

  mainDiv.removeChild(wrapper);

  getTotalPrice();
}

function getTotalPrice() {

  let unitPrice = document.querySelectorAll(".unit-cost");
  let quantityDesired = document.querySelectorAll(".input");
  let totalPrice = document.querySelectorAll(".total-price");
  let finalTotalPrice = document.querySelector("h2>span");
  let finalPrice = 0;


  if (unitPrice.length != 0) {
    for (let i = 0; i < unitPrice.length; i++) {
      totalPrice[i].textContent = "$" +
        (quantityDesired[i].value * unitPrice[i].textContent.slice(1)).toFixed(2);
    }
    console.log(totalPrice[0].textContent.slice(1));

    for (var i = 0; i < totalPrice.length; i++) {
      finalPrice += parseFloat(totalPrice[i].textContent.slice(1));
    }

    finalTotalPrice.textContent = "$" + finalPrice.toFixed(2);
  } else finalTotalPrice.textContent = "$0.00";

}

function createNewItem(itemName) {
  let newItem = document.createElement("div");
  newItem.className = "product-name";
  newItem.innerHTML = `<span>${(itemName)}</span>`;

  return newItem;
}

function createNewItemPrice(price) {
  let itemPrice = document.createElement("div");
  itemPrice.className = "unit-cost";
  itemPrice.innerHTML = `<span>$${parseFloat(price).toFixed(2)}</span>`;
  return itemPrice;

}

function createQuantityInput() {
  let div = document.createElement("div");
  let newlabel = document.createElement("label");
  newlabel["for"] = "qty";
  newlabel.className = "quantity";
  newlabel.innerHTML = "Qty";

  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = "input"
  newInput.value = "0";
  div.appendChild(newlabel);
  div.appendChild(newInput);

  return div;

}

function createTotalPrice() {
  let newPrice = document.createElement("div");
  newPrice.className = "total-price";
  newPrice.innerHTML = `<span>$0.00</span>`;

  return newPrice;

}

function createDeleteButton() {
  let newDiv = document.createElement("div");
  let newDelete = document.createElement("button");

  newDelete.className = "btn btn-delete";
  newDelete.innerHTML = "Delete";
  newDelete.onclick = deleteItem;

  newDiv.appendChild(newDelete);

  return newDiv;

}


function createNewItemRow(itemName, itemUnitPrice) {
  let newWrap = document.createElement("div");
  newWrap.className = "wrapper";

  let newProduct = createNewItem(itemName);
  let newProductPrice = createNewItemPrice(itemUnitPrice);
  let newQuantity = createQuantityInput();
  let newTotalPrice = createTotalPrice();
  let newDelete = createDeleteButton();

  newWrap.appendChild(newProduct);
  newWrap.appendChild(newProductPrice);
  newWrap.appendChild(newQuantity);
  newWrap.appendChild(newTotalPrice);
  newWrap.appendChild(newDelete);

  return newWrap;
}

function createNewItem1() {
  let newProductInput = document.querySelector(".new-product").value;
  let newProductPriceInput = document.querySelector(".new-product-price").value;

  let newItem = createNewItemRow(newProductInput, newProductPriceInput);
  document.querySelector(".main-div").appendChild(newItem);

}


window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem1;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}; 