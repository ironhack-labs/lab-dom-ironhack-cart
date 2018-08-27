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

function createDeleteButton() { }

function createQuantityNode() { }

function createItemNode(dataType, itemData) { }

function createNewItemRow(itemName, itemUnitPrice) { }


function createQuantityInput() {
  let table = document.getElementById("someTable");
  let rowNum = table.rows.length - 2;
  let itemPrice = creationPrice.value;
  let qtyString = "qty" + rowNum;
  // change price and row number
  let finalString = String.raw`<td><input type="text" id=${qtyString} onchange="updatePriceByProduct(${itemPrice},${rowNum})" value=""></td>`;
  return finalString;
}

function createNewItem() {
  let table = document.getElementById("someTable");
  let rowNum = table.rows.length - 1;
  let newRow = table.insertRow(rowNum);

  let newCell0 = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  // let newCell3 = newRow.insertCell(3);
  // let newCell4 = newRow.insertCell(4);
  //      <td><input type="text" id="qty4" onchange="updatePriceByProduct(1,4)" value=""></td>

  let creationName = document.getElementById("creationName");
  let itemName = document.createTextNode(creationName.value);
  let itemPrice = document.createTextNode(creationPrice.value);
  let itemPriceFinal = "$" + itemPrice.textContent;

  newCell0.append(itemName);
  newCell1.append(itemPriceFinal);
  // newCell2 create input
  let finalString = createQuantityInput();
  // newCell2.append(finalString);
  newCell2.innerHTML = finalString;
}

window.onload = function () {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
