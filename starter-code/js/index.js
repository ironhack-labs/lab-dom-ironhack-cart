function deleteItem(e){
  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  let totalArray = []

  let prodArray = document.getElementsByClassName('row');

  for (i = 0; i < prodArray.length; i++) {

    let prodPrice = prodArray[i].querySelector('.productPrice').innerHTML;
    
    let productQuantity = prodArray[i].querySelector('.quantity').value;

    let prodTotal = (parseFloat((prodPrice.substr(1))*productQuantity));

    let roundedTotal = prodTotal.toFixed(2);

    totalArray.push(roundedTotal);

    prodArray[i].querySelector('.totalPrice').innerHTML = `$ ${roundedTotal}`;
  }

   let grandTotal =  totalArray.reduce((sum, price)=> {

     return sum + parseFloat(price);
   },0);

   let totalSpan = document.getElementById('grandTotalSpan');

   totalSpan.innerHTML = `$ ${grandTotal.toFixed(2)}`

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
