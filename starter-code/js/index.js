function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let totalNode = document.getElementsByClassName('total-price')[0].childNodes[1]
  let price = document.getElementsByClassName('unit-cost')[0].childNodes[1].innerHTML
  let priceToNumber = Number(price.slice(1))
  let quantity = document.getElementsByClassName('input-quantity')[0].value
  let quantityToNumber = Number(quantity)
  let totalPrice = priceToNumber * quantityToNumber
  totalNode.innerHTML = `$${totalPrice}.00`
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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};





// --------
// let parentNode = document.getElementsByClassName('parent')
//   let parentArr = [...parentNode]
//   console.log(parentNode.childNodes[1])
//   // for(let i = 0; i < parentArr.length; i++) {
//   //   let totalNode = document.getElementsByClassName('parent')
//   // }


//   let totalNode = document.getElementsByClassName('total-price')
//   let totalArr = [...totalNode]
//   //console.log(totalArr)
//   let price = document.getElementsByClassName('unit-cost')[0].childNodes[1].innerHTML
//   //console.log(price)
//   let priceToNumber = Number(price.slice(1))
//   let quantity = document.getElementsByClassName('input-quantity')[0].value
//   let quantityToNumber = Number(quantity)
//   let totalPrice = priceToNumber * quantityToNumber
//   totalNode.innerHTML = `$${totalPrice}.00`