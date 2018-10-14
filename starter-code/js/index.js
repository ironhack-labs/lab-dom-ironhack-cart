var inputs = document.querySelectorAll('.input');
var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('new-item-create');
var deleteButtons = document.getElementsByClassName('btn-delete');
var totalItems = document.querySelectorAll('.total-item');

function deleteItem(e){

}

function getPriceByProduct(itemNode){
  updatePriceByProduct(itemNode.dataset.price, itemNode.value, itemNode);
}

function updatePriceByProduct(productPrice, amount, node){
  const total = productPrice * amount
  const totalSpan = node.parentElement.nextElementSibling.children[0];
  totalSpan.innerText = total.toString();
  node.value = '';
}

function getTotalPrice() {
  let total = 0;
  totalItems.forEach(el => {
    total+= Number(el.innerHTML);
  });


  console.log(total);

  document.getElementById('total').innerHTML = total;



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



calculatePriceButton.onclick = function(){

  inputs.forEach(e => {
    getPriceByProduct(e);
    
  })

  getTotalPrice();
};


