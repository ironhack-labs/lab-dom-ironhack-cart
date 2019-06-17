function deleteItem(e){
  let curButton = e.currentTarget;
  let targetProductDiv = curButton.parentNode.parentNode;
  targetProductDiv.parentNode.removeChild(targetProductDiv);

}

function getPriceByProduct(itemNode){
  // product = itemNode;
  // price = document.querySelector(`.price`)
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let shopList = document.getElementById("shop-list");
  console.log(shopList);
  let listTotal = 0.00;
  for(let i = 0; i < 2; i++){
    let product = document.getElementsByClassName('product')[i].innerHTML;
    let price = document.getElementsByClassName('price')[i].innerHTML.replace(`$`,``);
    let quantity = document.querySelectorAll('.quantity > input')[i].value;
    let total = Number((price * quantity).toFixed(2));
    document.getElementsByClassName('total-product-cost')[i].innerHTML = `$` + total;
    listTotal += total;
  }
  document.getElementById("list-total").innerHTML = listTotal;
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
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
