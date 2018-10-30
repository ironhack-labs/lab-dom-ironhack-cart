let buttonForDeletingItem  = document.getElementById('deleteButton');


buttonForDeletingItem.onclick = function(){

    let removeContent = document.getElementById('firstProduct');

  removeContent.innerHTML = '';


}

function deleteItem(e){
  
}

let buttonForGettingPricesByProduct  = document.getElementById('calculatePricesButton');



//document.getElementById('QTY').getAttribute('value');

buttonForGettingPricesByProduct.onclick = function() {

  let writtenValue = document.getElementById("QTY").value;

  let writtenPriceOfTheProduct = document.getElementById('price').value;
  
  let getThePrice = Number(writtenValue) * Number(writtenPriceOfTheProduct);

  let nameOfTheWrittenProduct = document.getElementById('name').value;

  let writtenValue2 = document.getElementById("QTY2").value;

  let writtenPriceOfTheProduct2 = document.getElementById('price2').value;
  
  let getThePrice2 = Number(writtenValue2) * Number(writtenPriceOfTheProduct2);

  let nameOfTheWrittenProduct2 = document.getElementById('name2').value;



  document.getElementById('priceNumber').innerHTML = '$' + getThePrice;

  document.getElementById('nameOfTheProduct').innerHTML = nameOfTheWrittenProduct;

  document.getElementById('priceOfTheProduct').innerHTML = '$' + writtenPriceOfTheProduct;

  document.getElementById('inputBar').innerHTML = 'QTY: ' + writtenValue;

  document.getElementById('priceNumber2').innerHTML = '$' + getThePrice2;

  document.getElementById('nameOfTheProduct2').innerHTML = nameOfTheWrittenProduct2;

  document.getElementById('priceOfTheProduct2').innerHTML = '$' + writtenPriceOfTheProduct2;

  document.getElementById('inputBar2').innerHTML = 'QTY: ' + writtenValue2;
}






let buttonForDeletingItem2  = document.getElementById('deleteButton2');


buttonForDeletingItem2.onclick = function(){

    let removeContent2 = document.getElementById('secondProduct');

  removeContent2.innerHTML = '';


}

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

function createNewItem(){}



// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
