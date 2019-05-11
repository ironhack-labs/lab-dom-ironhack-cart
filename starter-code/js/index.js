function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

// function getTotalPrice() {

//   let unitCost = createQuantityInput();
//   let unitQty = document.getElementById('product__qty-input').value;
//   let totalPrice = (unitCost * unitQty).toFixed(2);

//   document.getElementById('product__price').innerText = `$${totalPrice}`;

//   return totalPrice;
// }
//
// function createQuantityInput(){
//   let unitPriceLabel = document.getElementById('product__cost').innerText;
//   let unitPriceStringArr = unitPriceLabel.split('');
//   let unitPriceNumArr = unitPriceStringArr.filter(e => e != '$');
//   let unitPrice = parseFloat(unitPriceNumArr.join(''));

//   return unitPrice;
// }

function getTotalPrice() {
  let unitCost = createQuantityInput();
  let unitQty = [...document.querySelectorAll(".product__qty-input")].map(
    element => element.value
  );
  let totalPrice = [...unitCost.map((e, index) => e * unitQty[index])].map(e => e.toFixed(2));
  
  let priceLabel =  document.getElementsByClassName('product__price');
  for (let i = 0; i < priceLabel.length; ++i){
    console.log(priceLabel[i].value, totalPrice[i])
    priceLabel[i].innerText = `$${totalPrice[i]}`;
  }

  return totalPrice;
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
