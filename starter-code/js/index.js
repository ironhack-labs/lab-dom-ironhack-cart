function deleteItem(e) {
  console.log(e);
  // const parent = document.getElementsByTagName("div");
  // const child = parent.childNodes[1];
  e.currentTarget.parentNode.parentNode.remove();

  // parentNode
  // const pTag = document.getElementsByClassName("product-container")[0];
  // const container = document.querySelector("div");
  // container.removeChild(pTag);
  // e.currentTarget.parentNode.removeChild();
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  // Retrieves the unit price of the product
  let totalPrice = 0;
  for (const key in products) {
    // get units
    const pricePerUnit = parseFloat(
      document
        .querySelectorAll(".cost-per-unit span")
        [key].innerText.replace("$", "")
    );

    // Retrieves the quantity of items desired
    const quantity = document.querySelectorAll(".quantity input")[key].value;

    // Calculates the total price based on this data
    const totalPriceProduct = Number(pricePerUnit * quantity);

    // update total price
    totalPrice += totalPriceProduct;

    // Updates the total price in the DOM
    document.querySelectorAll(".total-price span")[key].innerText =
      "$" + totalPriceProduct.toFixed(2);
  }

  // updates the Total Price
  document.querySelector("#sum h2").innerText =
    "Total Price: " + " $" + totalPrice.toFixed(2);
}

// class Products {
//   constructor(itemName, itemUnitPrice) {
//     this.itemName = itemName;
//     this.itemUnitPrice = itemUnitPrice;
//   }

//   createNewItemRow(itemName, itemUnitPrice) {
//     document.body.appendChild(div).innerText = itemName;
//   }
// }

// let product1 = new Products("IronBubble-head", "25");
// let product2 = new Products("Washingmashine", "75");

// original -> tested with class Products

const product = [
  {
    name: "Ironbubble-head",
    pricePerUnit: 25
    //
  },
  {
    name: "Washingmashine",
    pricePerUnit: 75
    //
  }
];

function createQuantityInput() {}
product.forEach(function(element) {});
function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  // creates new product
  product.unshift({
    name: document.getElementById("product-name").value,
    pricePerUnit: Number(document.getElementById("cost-per-unit").value)
  });
  // creates new div class=flex product-container and displays price per unit
  let div = document.createElement("div");
  div.textContent = "$" + product[0].pricePerUnit;
  div.setAttribute("class", "flex product-container");
  document.body.appendChild(div);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  // assign click event for each button
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
