(function() {
  let numberOfProducts = Array.from(document.querySelectorAll(".product"))
    .length;

  function getPriceByProduct(itemNode) {
    //get ID of product
    const productNumber = itemNode.target.id.split("-").slice(-1)[0];
    const numberInput = document.querySelector("#input-" + productNumber); //access input
    const itemPrice = document.querySelector("#product-price-" + productNumber); //access single item price
    const totalItemPrice = document.querySelector("#sum-" + productNumber); //access total item price

    totalItemPrice.innerHTML = numberInput.value * itemPrice.innerHTML;
    getTotalPrice();
  }

  function getTotalPrice() {
    let allPrices = Array.from(document.querySelectorAll(".sum")).map(el =>
      parseInt(el.innerHTML)
    );
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    allPrices = allPrices.reduce(reducer, 0);
    var calculatePriceButton = document.getElementById("total-price-value");
    calculatePriceButton.innerHTML = allPrices.toFixed(2);
  }
  function updatePriceByProduct(productPrice, index) {}

  function createQuantityInput() {}

  function createDeleteButton() {}

  function createQuantityNode() {}

  function createItemNode(dataType, itemData) {}

  function createNewItemRow(itemName, itemUnitPrice) {}

  function createNewItem() {
    let newProductName = document.querySelector("#new-product-name");
    let newProductPrice = document.querySelector("#new-product-price");
    const shop = document.querySelector("#shop");

    if (newProductName.value && newProductPrice.value) {
      let div = document.createElement("div");
      div.innerHTML = `<div class="product" id="product-${numberOfProducts +
        1}">
      <div class="product-title">
        <span>${newProductName.value}</span>
        <span>$</span>
        <span id='product-price-${numberOfProducts + 1}'>${
        newProductPrice.value
      }</span>
      </div>
      <div class="product-quantity">
        <label for="product">Quantity</label>
        <input id='input-${numberOfProducts +
          1}' type="number" name="product" class="quantity" />
      </div>
      <div class="product-sum">
        <span>$</span>
        <span class="sum" id='sum-${numberOfProducts + 1}'>0</span>
      </div>
      <button id="delete-${numberOfProducts +
        1}" class="btn-delete">DELETE PRODUCT</button>
    </div>`;

      shop.appendChild(div);
      updateFields();

      newProductName.value = "";
      newProductPrice.value = "";
      numberOfProducts++;
    }
  }

  function deleteItem(itemNode) {
    let productNumber = itemNode.target.id.split("-").slice(-1)[0];
    let element = document.querySelector("#product-" + productNumber);

    element.parentElement.removeChild(element);

    //Update total price
    getTotalPrice()
  }

  function updateFields() {
    let allQuantityInputs = Array.from(document.querySelectorAll(".quantity"));
    allQuantityInputs.forEach(el => {
      el.onkeyup = getPriceByProduct;
      //in firefox input fields don't get cleared after page reload
      el.value = "";
    });

    let allDeleteButtons = Array.from(document.querySelectorAll(".btn-delete"));
    allDeleteButtons.forEach(button => (button.onclick = deleteItem));
  }

  window.onload = function() {
    var createItemButton = document.getElementById("new-item-create");
    var deleteButtons = document.getElementsByClassName("btn-delete");

    updateFields();
    createItemButton.onclick = createNewItem;

    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = deleteItem;
    }
  };
})();
