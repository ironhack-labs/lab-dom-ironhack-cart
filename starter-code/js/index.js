// delete button will call this function
function deleteItem(e){
  return e.currentTarget;
  // document.querySelector(".product:nth-child(1)").remove()
}

// called by calc-prices-button.  Function for individual line
  //line number starts with `1`
function getPriceByProduct(index){
  let cost = Number(document.querySelector(`.product:nth-child(${index}) .product-cost span`).innerHTML);
  let quantity = Number(document.querySelector(`.product:nth-child(${index}) .product-quantity input`).value);
  return cost * quantity;

}

// productPrice will be from getePriceByProduct(product)
// index is which child we are changing
function updatePriceByProduct(index){
  document.querySelector(`.product:nth-child(${index}) .product-total span`).innerHTML = getPriceByProduct(index);
}

function getTotalPrice() {
  let total = 0;
  for(let i = 1; i <= document.getElementsByClassName("product").length; i++) {
    updatePriceByProduct(i);
    total += getPriceByProduct(i);
  }
  document.querySelector("#total").innerText = total;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  return dataType, itemData
}

function createNewItemRow(itemName, itemUnitPrice){
  return itemName, itemUnitPrice;
}

function createNewItem(){

}
let productsObject = {}
function getProductArray() {
  for(let i = 1; i <= document.getElementsByClassName("product").length; i++) {
    productArray[i-1].push(document.getElementsByClassName('product')[i]);
  }
  return productArray;
}

  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice();
  // createItemButton.onclick = createNewItem;

  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

