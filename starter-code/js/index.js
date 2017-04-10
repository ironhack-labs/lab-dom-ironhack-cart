function deleteItem(e){
  var container = document.getElementsByClassName("info-container")[0];
  var actualButton = e.currentTarget;
  var actualCol = actualButton.parentElement;
  var actualItem = actualCol.parentElement;
  container.removeChild(actualItem);
}

function getPriceByProduct(itemNode){

  var input = itemNode.getElementsByTagName('input')[0];
  var price = itemNode.getElementsByClassName("price")[0];

  return parseInt(input.value) * parseInt(price.innerHTML);
}

function updatePriceByProduct(productPrice, index){

  var itemNodes = document.getElementsByClassName("item");
  var price = itemNodes[index].getElementsByClassName('final-product-price')[0];
  price.innerHTML = productPrice.toString();
}

function getTotalPrice() {

  var itemNodes = document.getElementsByClassName("item");
  var totalPrice = 0;

  for(var i=0; i < itemNodes.length; i++){

      var price = getPriceByProduct(itemNodes[i]);
      updatePriceByProduct(price, i);

      totalPrice += price;

    }

  var displayTotalPrice = document.getElementById('display-total-price');
  displayTotalPrice.innerHTML = totalPrice.toString();
}


function createQuantityInput(){

  var container = document.getElementsByClassName("info-container")[0];
  var rowitem = container.lastChild;

  var pTag6 = document.createElement('div');
  pTag6.setAttribute('class','col-xs-4');
  var pTag7 = document.createElement('p');
  pTag7.setAttribute('class','label-quantity');
  pTag7.innerHTML = "QTY";
  var pTag8 = document.createElement('input');
  pTag8.setAttribute('class','quantity');
  pTag8.setAttribute('value','0');
  pTag6.appendChild(pTag7);
  pTag6.appendChild(pTag8);

  rowitem.appendChild(pTag6);

}

function createDeleteButton(){

  var container = document.getElementsByClassName("info-container")[0];
  var rowitem = container.lastChild;

  var pTag11 = document.createElement('div');
  pTag11.setAttribute('class','col-xs-7');
  var pTag12 = document.createElement('button');
  pTag12.setAttribute('class','btn btn-delete');
  var pTag13 = document.createElement('p');
  pTag13.innerHTML = "DELETE";
  pTag12.appendChild(pTag13);
  pTag11.appendChild(pTag12);

  rowitem.appendChild(pTag11);

}

function createQuantityNode(){

  var container = document.getElementsByClassName("info-container")[0];
  var rowitem = container.lastChild;

  var pTag9 = document.createElement('div');
  pTag9.setAttribute('class','col-xs-5');
  var pTag10 = document.createElement('p');
  pTag10.setAttribute('class','final-product-price');
  pTag10.innerHTML = "0";
  pTag9.appendChild(pTag10);

  rowitem.appendChild(pTag9);

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

  var container = document.getElementsByClassName("info-container")[0];
  var rowitem = container.lastChild;

  console.log(rowitem);

  var pTag2 = document.createElement('div');
  pTag2.setAttribute('class','col-xs-2');
  var pTag3 = document.createElement('p');
  pTag3.setAttribute('class','name');
  pTag3.innerHTML = itemName;
  pTag2.appendChild(pTag3);

  var pTag4 = document.createElement('div');
  pTag4.setAttribute('class','col-xs-3');
  var pTag5 = document.createElement('p');
  pTag5.setAttribute('class','price');
  pTag5.innerHTML = itemUnitPrice;
  pTag4.appendChild(pTag5);

  rowitem.appendChild(pTag2);
  rowitem.appendChild(pTag4);
}

function createNewItem(){

  var creationNode = document.getElementById("create-new-item");
  var inputName = creationNode.getElementsByClassName("item-name")[0];
  var inputPrice= creationNode.getElementsByClassName("item-price")[0];

  var container = document.getElementsByClassName("info-container")[0];
  var pTag = document.createElement('div');
  pTag.setAttribute('class','row item');

  container.appendChild(pTag);

  createNewItemRow(inputName.value, inputPrice.value);
  createQuantityInput();
  createQuantityNode();
  createDeleteButton();

  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  // var pTag2 = document.createElement('div');
  // pTag2.setAttribute('class','col-xs-2');
  // var pTag3 = document.createElement('p');
  // pTag3.setAttribute('class','name');
  // pTag3.innerHTML = inputName.value;
  // pTag2.appendChild(pTag3);
  //
  // var pTag4 = document.createElement('div');
  // pTag4.setAttribute('class','col-xs-3');
  // var pTag5 = document.createElement('p');
  // pTag5.setAttribute('class','price');
  // pTag5.innerHTML = inputPrice.value;
  // pTag4.appendChild(pTag5);
  //
  // var pTag6 = document.createElement('div');
  // pTag6.setAttribute('class','col-xs-4');
  // var pTag7 = document.createElement('p');
  // pTag7.setAttribute('class','label-quantity');
  // pTag7.innerHTML = "QTY";
  // var pTag8 = document.createElement('input');
  // pTag8.setAttribute('class','quantity');
  // pTag8.setAttribute('value','0');
  // pTag6.appendChild(pTag7);
  // pTag6.appendChild(pTag8);
  //
  // var pTag9 = document.createElement('div');
  // pTag9.setAttribute('class','col-xs-5');
  // var pTag10 = document.createElement('p');
  // pTag10.setAttribute('class','final-product-price');
  // pTag10.innerHTML = "0";
  // pTag9.appendChild(pTag10);
  //
  // var pTag11 = document.createElement('div');
  // pTag11.setAttribute('class','col-xs-7');
  // var pTag12 = document.createElement('button');
  // pTag12.setAttribute('class','btn btn-delete');
  // var pTag13 = document.createElement('p');
  // pTag13.innerHTML = "DELETE";
  // pTag12.appendChild(pTag13);
  // pTag11.appendChild(pTag12);
  //
  //
  // pTag.appendChild(pTag2);
  // pTag.appendChild(pTag4);
  // pTag.appendChild(pTag6);
  // pTag.appendChild(pTag9);
  // pTag.appendChild(pTag11);



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
