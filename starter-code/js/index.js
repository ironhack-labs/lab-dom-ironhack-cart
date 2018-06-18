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

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

function getTotalPrice(){

    for(i=0; i<2; i++){
      var productPrice = document.getElementById('productPrice'+i);
      var productQuantity = document.getElementById('productQuantity'+i);
      var lineTotal = document.getElementById('lineTotal'+i);
    
      lineTotal.innerHTML = Number(productPrice.innerHTML)*Number(productQuantity.value);
    }
};

// theButton.onclick = function(){

//   var howManyTimes = document.getElementById('quantity');
//   var quantity = howManyTimes.value;
  
//   if(quantity ===""){quantity = 1};

//   for(var i = 0; i < quantity; i++){

//   var theInput = document.getElementById('the-input');

//   var whatToAppend = theInput.value;

//   var newNew = document.createElement('li');

//   newNew.innerHTML = whatToAppend;

//   theList.appendChild(newNew);
//   }

//   theInput.value = "";
//   howManyTimes.value = "";


// }
