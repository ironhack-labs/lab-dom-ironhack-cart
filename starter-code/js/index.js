function deleteItem(e){
  e.target.parentNode.parentNode.innerHTML = ""
}

function getPriceByProduct(itemNode){
  let unitCost = itemNode.querySelector(".unit-cost").innerHTML
  let quantity = itemNode.querySelector(".quantity").value
  return unitCost * quantity
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  document.querySelectorAll(".products").forEach(product => {
    product.querySelector(".total-price").innerHTML = getPriceByProduct(product)
  });
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

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
