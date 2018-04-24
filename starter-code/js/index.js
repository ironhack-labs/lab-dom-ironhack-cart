function deleteItem(e){
  // var parent = document.getElementsByClassName("flex-product");
  var clickLocation = e.currentTarget.parentNode;
  var product = clickLocation.parentNode;
  var parentDiv = product.parentNode;
  parentDiv.removeChild(product);
}

function getPriceByProduct(){
  var allUnitPrices = document.getElementsByClassName('unitPrice');
  var unitPriceArray = [];
  for (i=0; i<allUnitPrices.length; i++) {
  var unitPrice = allUnitPrices[i].innerText;
  unitPriceArray.push(unitPrice); 
  }
  return unitPriceArray;
}

function updatePriceByProduct(){
  var unitPrices = getPriceByProduct();
  var allQtyInputs = document.getElementsByTagName('input');
  var subTotals = document.getElementsByClassName("subTotal");
  var subTotalArray = [];
  for (i=0; i<allQtyInputs.length-2; i++){
    var input = allQtyInputs[i].value;
    var total = input * unitPrices[i];
    subTotalArray.push(total);
    subTotals[i].innerHTML = total; 
  }
  return subTotalArray;
}

function getTotalPrice() {
  var subTotalPrices = updatePriceByProduct(); 
  var total = document.getElementById("totalPrice");
  var totalPrice = 0;
  for (i=0;i<subTotalPrices.length;i++){
    totalPrice += subTotalPrices[i];
  }
    total.innerHTML = totalPrice;
}

function createQuantityInput(){
var html = "<div class=\"flex-items\"><label class=\"label-spacing\">QTY</label><input></div>";
// var element = document.createElement('div');
// element.setAttribute("class", "flex-items");
// var element2 = document.createElement('label');
// element2.setAttribute('class', 'label-spacing');
// var text = document.createTextNode('QTY');
// element2.appendChild(text);
// var element3 = document.createElement('input');
// element.appendChild(element2);
// element.appendChild(element3);
// html += element;
return html;
/* <div class="flex-items"><label class="label-spacing">QTY</label><input></div> */
}

function createDeleteButton(){
var html = "<div class=\"flex-items flex-column5\"><button class=\"btn btn-delete\">Delete</button></div>";
// var element = document.createElement('div');
// element.setAttribute("class", "flex-items flex-column5");
// var element2 = document.createElement('label');
// element2.setAttribute('class', 'label-spacing');
// var text = document.createTextNode('QTY');
// element2.appendChild(text);
// var element3 = document.createElement('input');
// element.appendChild(element2);
// element.appendChild(element3);
// html += element;
return html;
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
// console.log(createQuantityInput());
var newDiv = document.createElement('div');
var parent = document.getElementsByClassName('flex-main')[0];
var firstChild = document.getElementsByClassName('flex-input')[0];
var newProduct = createQuantityInput(); 

console.log(newProduct);
// + createDeleteButton();
// var html = document.createElement('p');
// var text = document.createTextNode('This text is created dynamically');

newDiv.appendChild(newProduct);
parent.insertBefore(newDiv, firstChild);
//   createQuantityInput();
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
