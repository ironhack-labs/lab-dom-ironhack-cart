function deleteItem(e){
  let button = e;
  button.target.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  //return document.querySelector('.product-cost');
  
}

function updatePriceByProduct(productPrice, index){
  //return document.getElementsByClassName('total-price');
  document.getElementById("calc-prices-button").addEventListener("click", function(){
    document.getElementById("totalPrice").innerHTML = getTotalPrice();
  });
}

function getTotalPrice() {
  const productInfo = document.getElementsByClassName('product-info');
  for( let i = 0; i < productInfo.length; i++) {
    window.product = productInfo[i];
    let product = productInfo[i].getElementsByClassName('qtyInput');
    console.log(productInfo[i].getElementsByClassName('qtyInput'));
  }
}


//     product.cost * productInfo.qtyInput[0];

//   return getPriceByProduct() * document.getElementsByClassName('qtyInput');
// }

function createQuantityInput(){
  const qtyInput = document.getElementsByClassName('qtyInput');
  window.qtyInput.addEventListener('click', () => {
    qtyInput.textContent = input.value;
  })
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

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

};
