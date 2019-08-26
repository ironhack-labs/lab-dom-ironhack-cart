let pricePerUnit = [...document.querySelectorAll(".costPerUnit>span")].map(
  price => {
    console.log(+price.innerText)
    return +price.innerText
})
;
let quantity = [...document.querySelectorAll(".nUnits")].map(quantity1=>{

  return +quantity1.value
  });


function deleteItem(e) {}

function getPriceByProduct(itemNode) {
  // this function returns the total price of each line
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice(pricePerUnit, quantity) {
  let totalPrice = pricePerUnit.array.forEach(element => {
    pricePerUnit * quantity
  });
  document.querySelector(".totalPricePerItem").innerHTML = `${totalPrice}`;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {
  return quantity;
}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
