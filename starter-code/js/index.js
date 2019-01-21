function deleteItem(e){
  

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(){ //, index
  let prices = document.getElementsByClassName('price')
  let quantities = document.getElementsByClassName('quantity')
  let totals = document.getElementsByClassName('total')
  
  for (num in prices) {
    let quantity = quantities[num].value
    let price = prices[num].innerText.substring(1,prices[num].innerText.length)
    totals[num].innerText = "$"+(price*quantity)
}
}

function getTotalPrice() {
   let accum = 0
  for (num in prices) {
    let price = parseFloat(prices[num].slice(prices[num].indexOf('$')+1,prices[num].length))
    let quantity = parseFloat(quantities[num])
    accum += (price*quantity)
  }
  totalPrice.value = "Total Price: $"+accum
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
  var calculatePriceButton = document.getElementById('btn-success');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  let prices = document.getElementsByClassName('price')
  let quantities = document.getElementsByClassName('quantity')
  let totals = document.getElementsByClassName('total')
  let totalPrice = document.getElementById('total-price');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}
