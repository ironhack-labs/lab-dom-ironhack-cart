

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}


function getTotalPrice(number) {
  var origPrice = document.getElementsByClassName('productPrice')[number].innerHTML;
  var qtyInput = document.getElementsByClassName('user-input')[number].value;
  var total = origPrice *  qtyInput;
  var spanTotal = document.getElementsByClassName('span-total')[number];
  spanTotal.innerHTML = total;
  elementList = document.querySelectorAll(".span-total");
  var allSpans = [].slide.call(elementList);
  console.log(elementList);
}

//var array = [];
//array.push(parseInt(allSpans));
//console.log(array);


//function updatePriceByProduct(){
//  for(i = 0; i < document.getElementsByClassName('span-total'); i++){
//    sum = sum + number[i];
//  }


//  var subTotal = FIRST PRODUCT + SECOND PRODUCT;
//  var finalTotal = document.getElementById('span-total');
//  finalTotal.innerHTML = subTotal;
//};


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
  var calculatePriceButton = document.getElementsByClassName('btn-success')[0];
  var createItemButton = document.getElementsByClassName('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = function (){
    for (var i = 0; i < document.getElementsByClassName('first-product').length; i++){
      getTotalPrice(i);

    }
  };

  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }


};
