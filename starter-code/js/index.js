// DE MEX Felipe Parra

// Capturing DOM
let subtotalVal = document.getElementsByClassName('item__subtotal')
let inputVal    = document.getElementsByClassName('quantity')


function selectText() {
  const input = document.getElementsByClassName('quantity');
  input.focus();
  input.select();
}

function deleteItem(e){

}

function getPriceByProduct(itemNode){
  let element = document.getElementsByClassName(itemNode)

  let prices = []
  if (element.length === 0) {
    return 0
  } else if(element.length > 1){
    for (let i = 0; i < element.length; i++) {

      prices.push(Number(element[i].innerText.split('$')[1]))
      subtotalVal[i].innerText = prices[i]
    }
    return prices.reduce((a,b) => {return a+b},0)
  } else{
    return Number(element[1].innerText.split('$')[1])
  }
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  console.log(getPriceByProduct('item__cost-unit'));
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
let getProductPrice = document.getElementsByClassName('item__cost-unit')


window.onload = function(){
  const calculatePriceButton = document.getElementById('calc-prices-button');
  const createItemButton = document.getElementById('new-item-create');
  const deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
