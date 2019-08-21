function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

window.onload = function() {
  // Initialize to assign function to all Delete Button
  deleteItem();

  // Initialize function of Create new Item to Button
  document.querySelector(".btn-create").onclick = createNewItem;

  // function to assign delete function to all button (also when creating a new)
  function deleteItem() {
    document.querySelectorAll(".btn-delete").forEach(function(shit) {
      shit.onclick = function(e) {
        e.currentTarget.parentNode.parentNode.remove();
      };
    });
  }

  // Calculates Prices
  document.querySelector(".btn-success").onclick = function() {
    let numberOfProducts = document.querySelectorAll(".product").length;
    let totalSum = 0;

    for (i = 1; i <= numberOfProducts; i++) {
      let productNum = i;
      let unitPrice = document.querySelector(
        `.product-${productNum} .unit-price`
      ).innerText;
      let userInput = document.querySelector(`.product-${productNum} input`)
        .value;
      let totalProductPrice = unitPrice * userInput;
      document.querySelector(
        `.product-${productNum} .total-price`
      ).innerText = totalProductPrice;

      totalSum += totalProductPrice;
    }
    document.querySelector("h2 span").innerText = totalSum;
  };

  // function to Create New Item
  function createNewItem() {
    // Create document selector  // Take Value of Input in-prod and save in variable // Take Value of Input in-price and save in variable
    let inProd = document.querySelector(".in-prod").value;

    let inPrice = document.querySelector(".in-price").value;
    let newProduct = document.querySelectorAll(".product").length + 1;
    let newItem = document.createElement("div");
    newItem.className = `product product-${newProduct}`;

    //  Create template innerHTML  & Input Variables
    newItem.innerHTML = `
  <div>
    <span class="product-name">${inProd}</span></div>
  <div>$
    <span class="unit-price">${inPrice}</span>
  </div>
  <div>
    <label>QTY</label>
    <input></input>
  </div>
  <div>$
    <span class="total-price">0</span>
  </div>
  <div>
    <button class="btn-delete">Delete</button>
  </div>`;

    // append to child and return new product
    document.querySelector(".allproducts").appendChild(newItem);
    deleteItem();
  }

  function createItemNode(dataType, itemData) {}

  function createNewItemRow(itemName, itemUnitPrice) {}

  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
