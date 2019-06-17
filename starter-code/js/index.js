function deleteItem(e){

}

function getPriceByProduct(itemNode){
  // product = itemNode;
  // price = document.querySelector(`.price`)
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let listTotal = Number(document.getElementById('list-total').innerHTML);
  console.log(listTotal);
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

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
