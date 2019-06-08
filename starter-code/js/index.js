
//developer.mozilla.org/es/docs/Web/API/GlobalEventHandlers/onload

https: window.onload = function() {
  function deleteItem(element) {
    element.currentTarget.parentNode.parentNode.remove();
    
  }

  function getPriceByProduct(itemNode) {}

  function updatePriceByProduct(productPrice, index) {}

  function createQuantityInput() {}

  function createDeleteButton() {}

  function createQuantityNode() {}

  function createItemNode(dataType, itemData) {}

  function createNewItemRow(itemName, itemUnitPrice) {}

  function createNewItem() {}

  function getTotalPrice() {
    let allPrices = document.querySelectorAll(".price").length;
    let price = 0;
    let quantity = 0;
    let total = 0;

    for (var i = 0; i < allPrices; i++) {
      price = document.querySelectorAll(".price")[i].innerHTML;
      quantity = document.querySelectorAll(".quantity")[i].value;

      let rowPrice = price * quantity;
      document.querySelectorAll(".total")[i].innerHTML = rowPrice;
      total += price * quantity;
    }

    document.querySelector("#total-price").style.display = "block";
    document.querySelector("#total-price").innerHTML = `<h1>Total Price: ${total}$</h1>`;
  }

  var calculatePriceButton = document.getElementById("calc-prices-button");
  // var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  //  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
