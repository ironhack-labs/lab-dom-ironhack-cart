// delete button will call this function
function deleteItem(e) {
  e.currentTarget.parentElement.parentElement.remove();
}

// called by calc-prices-button.  Function for individual line
//line number starts with `1`
function getPriceByProduct(index) {
  let cost = Number(document.querySelector(`.product:nth-child(${index}) .product-cost span`).innerHTML);
  let quantity = Number(document.querySelector(`.product:nth-child(${index}) .product-quantity input`).value);
  return cost * quantity;

}

// productPrice will be from getePriceByProduct(product)
// index is which child we are changing
function updatePriceByProduct(index) {
  document.querySelector(`.product:nth-child(${index}) .product-total span`).innerHTML = getPriceByProduct(index);
}

function getTotalPrice() {
  let total = 0;
  for (let i = 1; i <= document.getElementsByClassName("product").length; i++) {
    updatePriceByProduct(i);
    total += getPriceByProduct(i);
  }
  document.querySelector("#total").innerText = total;
}

function createQuantityInput() {
  quantityInputHTML = `<div class="product-quantity">
  <label for="quantity-label">Qty</label
  ><input class="quantity" type="number" value="0" />
</div>`;
  return quantityInputHTML;
}

function createDeleteButton() {
  deleteButtonHTML = `<div class="product-delete">
  <button onclick="deleteItem" class="btn btn-delete">Delete</button>
</div>`;
  return deleteButtonHTML;
}

function createProductTotalNode() {
  productTotalHTML = `<div class="product-total">$<span>0</span></div>`;
  return productTotalHTML;
}

// function createItemNode(dataType, itemData) {
//   return dataType, itemData
// }

function createNewItemRow(itemName, itemUnitPrice) {
  itemNameHTML = `<div class="product-name"><span>${itemName}</span></div>`;
  itemUnitPriceHTML = `<div class="product-cost">$<span>${itemUnitPrice}</span></div>`;
  itemRowHTML =
    `<div class='product>
      ${itemNameHTML}
      ${itemUnitPriceHTML}
      ${createQuantityInput()}
      ${createProductTotalNode()}
      ${createDeleteButton()}
    </div>`;
  return itemRowHTML;
}

function createNewItem() {
  console.log('test');
}



let productsObject = {}
function getProductArray() {
  for (let i = 1; i <= document.getElementsByClassName("product").length; i++) {
    productArray[i - 1].push(document.getElementsByClassName('product')[i]);
  }
  return productArray;
}

let calculatePriceButton = document.getElementById('calc-prices-button');
let createItemButton = document.getElementById('new-item-create');
let createItemButtonDiv = document.getElementById("create-new-item-div");
let deleteButtons = document.getElementsByClassName('btn-delete');

// calculatePriceButton.onclick = getTotalPrice();
// createItemButton.onclick = createNewItem;

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;
}


