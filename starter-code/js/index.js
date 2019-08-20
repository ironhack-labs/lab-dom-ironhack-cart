function deleteItem(e) {
  let wrapper = e.currentTarget.parentNode.parentNode;
  wrapper.parentNode.removeChild(wrapper);
}

function getPriceByProduct(itemNode) {
  return itemNode.querySelector(".unit-price").innerText.slice(1);
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  // const unitPrice = document.querySelector(".unit-price").innerText.slice(1);

  // const quantity = document.getElementsByTagName("input")[0].value;

  // const totalPrice = unitPrice * quantity;

  const products = document.querySelectorAll(".product");

  let totalPriceForAllProducts = 0;

  products.forEach(product => {
    let unitPrice = getPriceByProduct(product);
    // console.log(unitPrice);

    const quantity = product.getElementsByTagName("input")[0].value;

    const totalPrice = unitPrice * quantity;

    totalPriceForAllProducts += totalPrice;

    product.querySelector(".total-price").innerText = `$${parseFloat(
      totalPrice
    ).toFixed(2)}`; // remember to get float
  });

  document.querySelector("h2 span").innerText = `$${totalPriceForAllProducts}`;

  // console.log(product);
  // console.log(quantity);
  // console.log(totalPrice);
}

getTotalPrice();

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
