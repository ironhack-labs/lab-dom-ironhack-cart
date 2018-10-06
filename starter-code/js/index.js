var IHProduct = [
  // {name = 'Iron BubbleHead', price= 49.99 }
  // {name = 'Iron Shirt', price= 9.99 }
  // {name = 'Iron Cup', price= 6.99 }
  // {name = 'Iron Cup Holder', price= 5.99 }
  // {name = 'Iron Sticker', price= 3.99 }
  // {name = 'Iron Sticker', price= 0.10 }
  // {name = 'Iron Axe', price= 4.99 }

]




function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

  calculatePriceButton.onclick = calculateSubTotal;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};




// function addNeweProduct(){
//   var productName = {name};
//   var addProductHTML = productName.replace({name
// })


function calculateSubTotal() {
  var qty = document.getElementById('orderQty').value;
  var productCost = document.getElementById('productCost').textContent;
  var subTotal = qty * productCost;
  var displaySubTotal = document.getElementById('subTotal');
  displaySubTotal.textContent = subTotal;
 console.log(subTotal)
}


