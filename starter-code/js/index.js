function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

  function getTotalPrice() {
    const allProducts = document.getElementsByClassName("wrapper-product")
    let sum = 0;
    for (let product of allProducts){
      let unitPriceSpan = product.querySelector(".price");
      let unitPrice = parseFloat(unitPriceSpan.textContent)
  
      let quantity = product.querySelector("input").value;
      quantity = parseFloat(quantity);
  
      let totalPrice = quantity * unitPrice;
      sumTotal = totalPrice;
      let totalPriceString = totalPrice.toFixed(2) + "€";
  
      let totalPriceSpan = product.querySelector(".total-value");
      totalPriceSpan.textContent = totalPriceString;
    }
  let sumTotalSpan = document.querySelector(".calc-prices-button");
  let sumTotalString = sumTotal.toFixed(2) + "€";
  sumTotalSpan.textContent = sumTotalString;

}

// function getTotalPrice() {
//   const allProducts = document.getElementsByClassName("wrapper-product")
//   let totalPrice = 0;
//   for (let product of allProducts){
//     let unitPrice = product.querySelector(".price");
//     let quantity = product.querySelector("input").value;
//     totalPrice = (quantity * unitPrice).toFixed(2) + "€";
//   }
//   let sumTotalSpan = document.querySelector(".calc-prices-button");
//   let sumTotalString = sumTotal.toFixed(2) + "€";
//   sumTotalSpan.textContent = sumTotalString;
// }



function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


