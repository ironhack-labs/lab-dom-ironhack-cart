var divTag = document.createElement('div');
var formTag = document.createElement('form');
var labelTag = document.createElement('label');
var inputTag = document.createElement('input');
var spanTag = document.createElement('span');
var buttonTag = document.createElement('button');

function deleteItem(e){

  var parent = document.querySelectorAll('.mainContainer')[0];
  var child = e.path[2];
  parent.removeChild(child);

  getTotalPrice();

}

function getPriceByProduct(itemNode){

  var price = itemNode.querySelectorAll(`.price`)[0].innerHTML.split('$')[1];
  var quantity = itemNode.querySelectorAll(`.quantity`)[0].value
  
  return price * quantity

}

function updatePriceByProduct(productPrice, index){

  document.querySelectorAll(`.totalPriceProduct`)[index].innerHTML = '$' + parseFloat(productPrice.toFixed(2));
  return productPrice;
}

function getTotalPrice() {

  var totalPrice = 0;

    document.querySelectorAll('.containerProduct').forEach(function(product, i) {

      totalPrice += updatePriceByProduct(getPriceByProduct(product),i);

    });
  
    document.querySelectorAll(`.totalPrice`)[0].innerHTML = '$' + parseFloat(totalPrice.toFixed(2));

}

function createQuantityInput(){

  

}

function createDeleteButton(){

  divTag = document.createElement('div');
  buttonTag = document.createElement('button');

  var text = document.createTextNode('Delete');
  buttonTag.appendChild(text);
  buttonTag.setAttribute('onclick', `deleteItem(event)`)
  buttonTag.setAttribute('class', 'btn btn-delete');
  divTag.appendChild(buttonTag);
  getLastChild(0).appendChild(divTag);

}


function getLastChild(type) {

  if (type === 0) {
    return document.querySelectorAll(`.containerProduct`)[document.querySelectorAll(`.containerProduct`).length - 1];
  } else {
    return document.querySelectorAll(`.containerProduct`)[document.querySelectorAll(`.containerProduct`).length];
  }
 
}

function createQuantityNode(){

  divTag = document.createElement('div');
  formTag = document.createElement('form');
  labelTag = document.createElement('label');
  inputTag = document.createElement('input');
  spanTag = document.createElement('span');
  
  
  var text = document.createTextNode('QTY');
  
  labelTag.appendChild(text);
  formTag.appendChild(labelTag);
  formTag.appendChild(inputTag);

  inputTag.setAttribute("class", `quantity`);
  inputTag.setAttribute('type', 'number');

  divTag.appendChild(formTag);

  getLastChild(0).appendChild(divTag);


}

function createItemNode(dataType, itemData){

  divTag = document.createElement('div');

  var parent = document.querySelectorAll('.mainContainer')[0];

  divTag.className = "containerProduct";

  parent.appendChild(divTag)

}

function createNewItemRow(itemName, itemUnitPrice){

  var items = [itemName, itemUnitPrice];

  items.forEach(function(item, i) {

    console.log(i);

    divTag = document.createElement('div');
    spanTag = document.createElement('span');

    if (i === 1) {
      var text = document.createTextNode('$' + item);
    } else {
      var text = document.createTextNode(item);
    }

    if (i === 1) {
      spanTag.appendChild(text);
      spanTag.setAttribute('class', `price`)
      divTag.appendChild(spanTag);
      getLastChild(0).appendChild(divTag);
    }

    spanTag.appendChild(text);
    divTag.appendChild(spanTag);
    divTag.setAttribute('class','itemName');
    getLastChild(0).appendChild(divTag);



    console.log(divTag);

  })

  createQuantityNode();

  var text = document.createTextNode('$0.00');
  divTag = document.createElement('div');
  spanTag = document.createElement('span')

  spanTag.appendChild(text);
  spanTag.setAttribute('class', `totalPriceProduct`);
  divTag.appendChild(spanTag);

  getLastChild(0).appendChild(divTag);



}

function createNewItem(){

  var name = document.querySelectorAll(`.newName`)[0].value;
  var price = document.querySelectorAll(`.newPrice`)[0].value;

  createItemNode();
  createNewItemRow(name,price);
  createDeleteButton();

  document.querySelectorAll(`.newName`)[0].value = '';
  document.querySelectorAll(`.newPrice`)[0].value = '';

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
