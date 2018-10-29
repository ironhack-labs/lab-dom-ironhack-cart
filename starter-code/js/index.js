function deleteItem(e){
  e.target.parentNode.parentNode.remove()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let itemQuantity = document.getElementsByClassName("itemQuantity");
  console.log(itemQuantity)
  let prices = document.getElementsByClassName("itemPrice");
  console.log(prices)
  let totals = document.getElementsByClassName("totalPrice");
  console.log(totals)
  let finalPrice = document.getElementsByClassName("finalTotal");
  let finalPriceValue = 0;
  for(let i = 0; i < itemQuantity.length; i++){
    let currentQuantity = Number(itemQuantity[i].value).toFixed(2);
    let currentPrice = Number(prices[i].innerHTML).toFixed(2);
    let currentTotal = 0;
    currentTotal += currentQuantity * currentPrice;
    totals[i].innerHTML = currentTotal.toFixed(2);
    finalPriceValue += currentTotal;
  }
  finalPrice[0].innerHTML = finalPriceValue.toFixed(2);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `<div class="wrapper">
  <span>${itemName}</span>
  <span>$<span class="itemPrice">${itemUnitPrice}</span></span>
  <div>
    <label class="quantity" for="">QTY
    <input class="itemQuantity" type="number"></label>
  </div>
  <div>
    <span>$<span class="totalPrice">0</span></span>   
  </div>
  <div>
    <button class="btn btn-delete">Delete</button>
  </div>
</div>
</div>
<div>`;
let productList = document.getElementById("productList");
productList.appendChild(newDiv);
}

function createNewItem(){
  let productPrice = Number(document.getElementById("productPrice").value).toFixed(2);
  let productName = document.getElementById("productName").value;
  createNewItemRow(productName, productPrice);
  let deleteButtons = document.getElementsByClassName('btn-delete');
    deleteButtons[deleteButtons.length - 1].onclick = deleteItem;
}

window.onload = function(){
  let calculatePriceButton = document.getElementsByClassName('calc-prices-button')[0];
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
