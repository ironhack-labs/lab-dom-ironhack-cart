function deleteItem(index) {
  document.getElementById("someTable").deleteRow(index);
}

function getPriceByProduct(itemNode) {
  let row = document.getElementsByTagName("tr")[itemNode];
  let priceCell = row.getElementsByTagName("td")[1].innerText;
  let productPrice = priceCell.replace("$", "");
  return productPrice;
}

function updatePriceByProduct(productPrice, index) {
  let qtyidString = "qty" + index;
  let quantity = document.getElementById(qtyidString).value;
  let productCost = quantity * productPrice;
  pcidString = "productCost" + index;
  document.getElementById(pcidString).innerHTML = "$" + productCost;
}

function getTotalPrice() {
  let numberOfRows = document.getElementById("someTable").rows.length;
  sum = 0;
  for (let i = 1; i < numberOfRows - 1; i++) {
    let row = document.getElementsByTagName("tr")[i];
    // for each row that exists
    let productCostCell = row.getElementsByTagName("td")[3].innerText;
    let productCostPrice = productCostCell.replace("$", "");
    if (productCostCell === "") {
      sum += 0;
    } else {
      productCostPrice = parseInt(productCostPrice);
      sum += productCostPrice;
    }
  }
  document.getElementById("grandTotal").innerHTML = "Total Price: $" + sum;
}
function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  let numberOfRows = document.getElementById("someTable").rows.length;
  // a function that creates a new row with input values
  let newRow = table.insertRow(numberOfRows.length);
  // cell creation for loop
  for (i = 0; i < 6; i++) {
    let cellVariable = "cell" + i;
    newRow.insertCell(i);
    return cellVariable;
  }
  cell0.innerHTML = document.getElementById("creationName");
  cell1.innerHTML = document.getElementById("creationPrice");
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
