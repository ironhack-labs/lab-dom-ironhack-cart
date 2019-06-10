function deleteItem(e) {
  let rowSelector = e.currentTarget.parentElement.parentElement;
  rowSelector.remove();
  return getTotalPrice();
}

function getPriceByProduct(anyProductRow) {
  // let productRow = document.querySelectorAll(`.product-row`)
  let priceUnits = anyProductRow.querySelectorAll(`span`);
  let priceValue = parseInt(priceUnits[1].innerHTML);

  let productNumberInput = document.querySelectorAll(`div input`);
  let productNumberTotal = parseInt(productNumberInput[0].value);

  return productNumberTotal * priceValue;
}

function updatePriceByProduct(productPrice, index) {
  let productRow = document.querySelectorAll(`.product-row`);
  let productRowSpan = productRow[index].querySelectorAll(`div span`);

  productRowSpan[2].innerText = productPrice;
}

function getTotalPrice() {
  // let priceVal = parseInt(document.querySelector(`#unit-price`).innerHTML)
  // let quantityVal = parseInt(document.querySelector(`#quantity`).value)
  // document.querySelector(`#total-price`).innerHTML = priceVal * quantityVal

  let productRowOrder = document.querySelectorAll(`.product-row`);

  // let  sumPrices = 0
  let totalPrice = 0;
  let priceUnit = 0;

  for (let i = 0; i < productRowOrder.length; i++) {
    priceUnit = getPriceByProduct(productRowOrder[i]);
    totalPrice = totalPrice += priceUnit;
    updatePriceByProduct(priceUnit, i);
  }

  let totalPriceValue = document.querySelector(`#total-price-value`);
  totalPriceValue.innerHTML = totalPrice;

}

function createQuantityNode() {
  let inputDiv = document.createElement(`div`);

  let labelTag = document.createElement(`label`);
  labelTag.innerText = `QTY`;

  let inputField = createQuantityInput();

  inputDiv.appendChild(labelTag);
  inputDiv.appendChild(inputField);

  return inputDiv;
}

function createQuantityInput() {
  let inputField = document.createElement(`input`);
  inputField.setAttribute(`type`, `number`);
  // inputField.setAttribute(`parameter`, `0`);
  return inputField;
}

function createItemNode(dataType, itemData) {
  let divSpan = document.createElement(`div`);
  if (dataType === `number`) {
    divSpan.innerText = `$ `;
  }

  let spanTag = document.createElement(`span`);
  spanTag.innerText = itemData;

  divSpan.appendChild(spanTag);

  return divSpan;
}

function createDeleteButton() {
  let deleteButton = document.createElement(`button`);
  deleteButton.innerText = `Delete`;
  // deleteButton.className.add(`btn`)
  // deleteButton.className.add(`btn-delete`)

  deleteButton.classList.add(`btn`);
  deleteButton.classList.add(`btn-delete`);

  let buttonDiv = document.createElement(`div`);
  buttonDiv.appendChild(deleteButton);

  // return deleteButton
  return buttonDiv;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let divRowContainer = document.createElement(`div`);

  // divRowContainer.className.add("product-row")

  divRowContainer.classList.add("product-row");
  divRowContainer.appendChild(createItemNode(`text`, itemName));
  divRowContainer.appendChild(createItemNode(`number`, itemUnitPrice));

  divRowContainer.appendChild(createQuantityNode());

  divRowContainer.appendChild(createItemNode(`number`, `0.00`));

  divRowContainer.appendChild(createDeleteButton());


  let rowSelector = document.querySelectorAll(`.product-row`);
  rowSelector[rowSelector.length-1].insertAdjacentElement(
    `afterend`,
    divRowContainer
  );
}

function createNewItem() {
  createDeleteButton();

  let newItemName = document.getElementById(`new-item-name`);
  let newItemPrice = document.getElementById(`new-item-price`);

  if (newItemName.value && newItemPrice) {
    createNewItemRow(newItemName.value, newItemPrice.value);  
  }
}

window.onclick = function() {
  var calculatePriceButton = document.querySelector(`#calc-prices-button`);
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
