// function getTotalPrice() {
//   let quant = Number.parseInt(document.getElementsByClassName('quantity')[0].value)
//   let price = Number.parseInt(document.getElementsByClassName('product-cost')[0].innerText.substr(1,document.getElementsByClassName('product-cost')[0].innerText.lenght))
//   let total = quant * price
//   document.getElementsByClassName("total")[0].innerText = '$' + (total).toFixed(2)
// }

function getTotalPrice() {
  quantityArray = [...document.getElementsByClassName("quantity")];
  priceArray = [...document.getElementsByClassName("product-cost")];

  for (i = 0; i < quantityArray.length; i++) {
    let quant = Number.parseInt(quantityArray[i].value);
    let price = priceArray[i].innerText.substr(1, 5);
    let total = quant * price;
    document.getElementsByClassName("total")[i].innerText =
      "$" + total.toFixed(2);
  }

  SumArray = [...document.getElementsByClassName("total")];

  let myNewDiv = document.createElement("div");
  myNewDiv.innerText = "Total Price: " + SumArray;
}

function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function createQuantityInput() {}

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

  const nodeList = document.getElementsByClassName("quantity");
  [...nodeList].forEach(node => {
    node.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        getTotalPrice();
      }
    });
  });
};
