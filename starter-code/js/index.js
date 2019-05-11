function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let unitCost = createQuantityInput();
  let unitQty = [...document.querySelectorAll(".product__qty-input")].map(
    e => e.value
  );
  let totalPriceNum = [...unitCost.map((e, index) => e * unitQty[index])];
  let totalPrice = totalPriceNum.map(e => e.toFixed(2));
  let priceLabel =  document.getElementsByClassName('product__price');
  for (let i = 0; i < priceLabel.length; ++i){
    priceLabel[i].innerText = `$ ${totalPrice[i]}`;
  }
  let setTotalPrice = totalPriceNum.reduce((total, num) => total + num);
  document.getElementById('total-price').innerHTML = setTotalPrice.toFixed(2);

  return setTotalPrice;
}

function createQuantityInput() {
  let unitCostLabel = [...document.querySelectorAll(".product__cost")].map(
    element => element.innerHTML
  );
  let unitCostStringArr = unitCostLabel.map(e => e.split(""));
  let unitCostNumArr = unitCostStringArr.map(elemento =>
    elemento.filter(e => e != "$")
  );
  let unitCost = unitCostNumArr.map(e => parseFloat(e.join("")));
  return unitCost;
}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
