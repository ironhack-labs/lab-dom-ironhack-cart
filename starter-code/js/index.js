function deleteItem(e) {
  let isGreaterThanZero = updateDeleteButtonsArray();
  console.log(isGreaterThanZero);
  if (isGreaterThanZero) {
    let target = e.currentTarget;
    console.log(target);
    let divTargeted = target.parentElement;
    console.log(divTargeted);
    let wrapper = divTargeted.parentElement;
    console.log(wrapper);
    let allWrappersParent = wrapper.parentElement;
    console.log(allWrappersParent);
    allWrappersParent.removeChild(wrapper);
    getTotalPrice();
  }
}

function getPriceByProduct(itemNode) {
  let products = document.getElementsByClassName(itemNode);
  let productsArray = [...products];
  let prices = [];
  for (i = 0; i < productsArray.length; i++) {
    prices[i] = parseInt(productsArray[i].dataset.price);
  }
  return prices;
}

function getQuantityByProduct(itemNode) {
  let inputs = document.getElementsByClassName(itemNode);
  let inputsArray = [...inputs];
  let quantities = [];
  for (i = 0; i < inputsArray.length; i++) {
    quantities[i] = parseInt(inputsArray[i].value);
  }
  return quantities;
}

function getSubtotalByProduct(productPrice, productQuantity) {
  let updatedTotalRow = [];
  for (i = 0; i < productPrice.length; i++) {
    updatedTotalRow[i] = productPrice[i] * productQuantity[i];
  }
  return updatedTotalRow;
}

function updateSubtotal(itemNode, subtotalArr) {
  let spansSubtotal = document.getElementsByClassName(itemNode);
  let spansSubtotalArrary = [...spansSubtotal];
  for (i = 0; i < spansSubtotalArrary.length; i++) {
    spansSubtotalArrary[i].innerText = "$" + subtotalArr[i];
  }
}

function updateTotal(itemNode, total) {
  spanTotal = document.getElementById(itemNode);
  spanTotal.innerText = "$" + total.toString();
}

function getTotalPrice() {
  let unitCostArr = getPriceByProduct("unit__cost");
  let quantitiesArr = getQuantityByProduct("input__quantity");
  let subTotalPriceUpdated = getSubtotalByProduct(unitCostArr, quantitiesArr);
  let totalPrice = subTotalPriceUpdated.reduce(function(acumm, currentValue) {
    return (acumm += currentValue);
  });
  updateSubtotal("subtotal__price", subTotalPriceUpdated);
  updateTotal("total__price", totalPrice);
}

function updateDeleteButtonsArray() {
  let updatedDeleteButtons = document.getElementsByClassName("btn-delete");
  let updatedDeleteButtonsArr = [...updatedDeleteButtons];
  let isGreaterThanZero = updatedDeleteButtonsArr.length > 1;
  return isGreaterThanZero;
}

function getInputsValues() {
  let product = document.getElementById("product__input");
  let price = document.getElementById("price__input");
  let productName = product.value;
  let priceValue = price.value;
  console.log(productName, priceValue);
  return [productName, priceValue];
}

function refreshInputValues() {
  let product = document.getElementById("product__input");
  let price = document.getElementById("price__input");
  product.value = "";
  price.value = "";
}

function createNewProduct(productName, priceValue) {
  //creating all new HTML elements
  let newDivProductName = document.createElement("div");
  let newDivUnitPrice = document.createElement("div");
  let newSpanProductName = document.createElement("span");
  let newSpanUnitCost = document.createElement("span");

  //setting all Atributes for the new HTLM elements
  newDivProductName.setAttribute("class", "div__product__name");
  newDivUnitPrice.setAttribute("class", "div__unit__cost");
  newSpanProductName.setAttribute("class", "product__name");
  newSpanProductName.innerText = productName;
  newSpanUnitCost.setAttribute("class", "unit__cost");
  newSpanUnitCost.setAttribute("data-price", priceValue);
  newSpanUnitCost.innerText = "$" + priceValue + ".00";

  //block to create a new productName element, based in product input and price input
  let allWrappers = document.getElementsByClassName("wrapper");
  let allWrappersArr = [...allWrappers];
  let lastWrapper = allWrappersArr[allWrappersArr.length - 1];
  lastWrapper.appendChild(newDivProductName);
  newDivProductName.appendChild(newSpanProductName);
  lastWrapper.appendChild(newDivUnitPrice);
  newDivUnitPrice.appendChild(newSpanUnitCost);
  console.log(lastWrapper);
}

function createQtyProductElement() {
  let newDivQty = document.createElement("div");
  let newLabel = document.createElement("label");
  let newInput = document.createElement("input");
  newDivQty.setAttribute("class", "div__quantity");
  newLabel.setAttribute("class", "label__quantity");
  newLabel.setAttribute("for", "quantity");
  newLabel.innerText = "Qty:";
  newInput.setAttribute("class", "input__quantity");
  newInput.setAttribute("type", "number");
  newInput.setAttribute("min", "0");
  newInput.setAttribute("placeholder", "0");
  newInput.setAttribute("value", "0");
  let allWrappers = document.getElementsByClassName("wrapper");
  let allWrappersArr = [...allWrappers];
  let lastWrapper = allWrappersArr[allWrappersArr.length - 1];
  lastWrapper.appendChild(newDivQty);
  newDivQty.appendChild(newLabel);
  newDivQty.appendChild(newInput);
}

function createSubtotalElement() {
  let newDivSubTotal = document.createElement("div");
  let newSpanSubTotal = document.createElement("span");
  newDivSubTotal.setAttribute("class", "div__subtotal__price");
  newSpanSubTotal.setAttribute("class", "subtotal__price");
  newSpanSubTotal.innerText = "$0.00";
  let allWrappers = document.getElementsByClassName("wrapper");
  let allWrappersArr = [...allWrappers];
  let lastWrapper = allWrappersArr[allWrappersArr.length - 1];
  lastWrapper.appendChild(newDivSubTotal);
  newDivSubTotal.appendChild(newSpanSubTotal);
}

function createDeleteButton() {
  let newButton = document.createElement("button");
  let newDivButton = document.createElement("div");
  newButton.innerText = "Delete";
  newButton.setAttribute("class", "btn btn-delete");
  newDivButton.setAttribute("class", "div__btn-delete");
  let allWrappers = document.getElementsByClassName("wrapper");
  let allWrappersArr = [...allWrappers];
  let lastWrapper = allWrappersArr[allWrappersArr.length - 1];
  lastWrapper.appendChild(newDivButton);
  newDivButton.appendChild(newButton);
}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewDivItem() {
  // let referencePoint = document.getElementById("new__item__btn__div");
  let newDiv = document.createElement("div");
  let parent = document.getElementById("wrapper__container");
  newDiv.setAttribute("class", "wrapper");
  console.log(newDiv);
  console.log(parent);
  parent.appendChild(newDiv);
}

function createCompleteNewItem() {
  let [productName, priceValue] = getInputsValues();
  if (productName.length == 0 || priceValue.length == 0) {
    console.log("Al menos un valor");
  } else {
    createNewDivItem();
    createNewProduct(productName, priceValue);
    createQtyProductElement();
    createSubtotalElement();
    createDeleteButton();
    refreshDeleteButtonArray();
    refreshInputValues();
  }

  // let deleteButtons = document.getElementsByClassName("btn-delete");
  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
}

function refreshDeleteButtonArray() {
  deleteButtons = document.getElementsByClassName("btn-delete");
  console.log(deleteButtons);
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function() {
  let calculatePriceButton = document.getElementById("calc-prices-button");
  var deleteButtons = document.getElementsByClassName("btn-delete");
  let createItemButton = document.getElementById("new-item-create");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createCompleteNewItem;
  console.log(deleteButtons);
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
  // createItemButton.onclick = createNewItem;

  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
