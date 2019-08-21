function deleteItem(e){

  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
      var indCost = document.querySelectorAll('.cost')
      var qty = document.querySelectorAll('.input-box')
      var totalItemPrice = document.querySelectorAll('.total-price')
      var totalPrice = 0;
      var finalPrice = document.querySelector('.total-total-price')

    for(var i=0; i < indCost.length; i++ ){
      var tempIndCost = indCost[i].innerHTML
      var tempQty = qty[i].value
      var totalTemp = parseFloat(tempIndCost) * parseFloat(tempQty)
      totalItemPrice[i].innerHTML = '$' + totalTemp.toFixed(2)
      totalPrice += totalTemp
    }
    finalPrice.innerHTML = totalPrice.toFixed(2)
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



  // calculatePriceButton.addEventListener('click', function (event) {
  //     var indCost = document.querySelectorAll('.cost')
  //     var qty = document.querySelectorAll('.input-box')
  //     var totalItemPrice = document.querySelectorAll('.total-price')
  //     var totalPrice = 0;
  //     var finalPrice = document.querySelector('.total-total-price')

  //   for(var i=0; i < indCost.length; i++ ){
  //     var tempIndCost = indCost[i].innerHTML
  //     var tempQty = qty[i].value
  //     var totalTemp = parseFloat(tempIndCost) * parseFloat(tempQty)
  //     totalItemPrice[i].innerHTML = '$' + totalTemp.toFixed(2)
  //     totalPrice += totalTemp
  //   }
  //   finalPrice.innerHTML = totalPrice.toFixed(2)
  // });