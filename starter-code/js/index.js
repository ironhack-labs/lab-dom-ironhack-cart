
window.onload = function(){

function deleteItem(e){

}

function getPriceByProduct(){

  let unitClass = document.querySelectorAll(".unit");
  let qtyID = document.querySelectorAll("#qty");


  for (var i = 0; i < unitClass.length; i++) {
    let unitPrice = unitClass[i].innerHTML;
    unitPrice = unitPrice.slice(1);
    let quantity = qtyID[i].value;
    console.log(`${unitPrice} + ${quantity}`);

    // console.log(`Count #${i + 1}: ${unitprice} & ${amount}`);

  }

// document.querySelector(".price").innerHTML = `$${product}`;





}

document.querySelector('.btn-success').addEventListener("click", getPriceByProduct);

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

}

function createNewItem(){

}


  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
