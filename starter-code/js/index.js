function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

// let divTotal = document.getElementById('total-div')
// const totalPrice = document.getElementById("total-price")
// let divTotal2 = document.getElementById('total-div2')
// const totalPrice2 = document.getElementById("total-price2")
 let calcPrice = document.getElementById('calcprice');
// let bigTotal = document.getElementById('big-total')
// let bigTotalLine = document.getElementById('big-total-line')




calcPrice.onclick = () => {
  let total = 0
  let bigTotal = 0
  let prices = document.getElementsByClassName('price')
  let quantitys = document.getElementsByClassName('quantity')
  let totals = document.getElementsByClassName('total-price')
  for(let i = 0; i<prices.length; i++){
    total = prices[i]*quantitys[i]
    bigTotal += total
    totals[i].innerHTML = total
    totals[i].parentNode.appendChild(totals[i])
  }


console.log(total)
  // const price1 = document.getElementById("price").innerHTML
  // const quantity = document.getElementById("qty").value
  // const price2 = document.getElementById("price2").innerHTML
  // const quantity2 = document.getElementById("qty2").value
  // let totalObjects1 = price * quantity
  // let totalObjects2 = price2 * quantity2
  // totalPrice.innerHTML = totalObjects1
  // totalPrice2.innerHTML = totalObjects2
  // bigTotal.innerHTML = totalObjects1 + totalObjects2
  // divTotal.appendChild('totalPrice')
  // divTotal2.appendChild('totalPrice2')
  // bigTotalLine.appendChild('bigTotal')
}

let delButtons = document.getElementsByClassName('btn-delete')

for (let i=0; i<delButtons.length; i++) {
  delButtons[i].onclick = function(e) {
    let parent = e.currentTarget.parentNode.parentNode;
   parent.removeChild(e.currentTarget.parentNode)
  }
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

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
