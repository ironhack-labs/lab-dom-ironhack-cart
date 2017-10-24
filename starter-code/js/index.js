function deleteItem(e){
  var button = e.currentTarget;
  var row = button.parentNode.parentNode;
  var parent = row.parentNode;
  parent.removeChild(row);
}

function getTotalPrice() {
  var unitPrice = document.querySelectorAll('.unit-price');//.innerHTML
  var quantity = document.querySelectorAll('input');//.value
  var itemTotal = [ ...document.querySelectorAll('.item-total') ];
  unitPrice.forEach(function(price, index){
  itemTotal[index].innerHTML = price.innerHTML * quantity[index].value;
});
var totalPrice = document.querySelector('.total-price');

totalPrice.innerHTML = itemTotal.reduce(function(sum, tag) {
  return sum + Number(tag.innerHTML);
},0);
}
function deleteNode(){
var node = document.createElement('button');
node.className = "btn btn-delete";
node.innerHTML = "Delete";
return node;
}
function totalPrice(){
  var node = document.createElement('span');
  node.className ="item-total";
  node.innerHTML = "Total Price";
  return node;
}
function quantityInput(){
  var node = document.createElement('input');
  node.className = "quantity";
  node.htmlType = "text";
  node.htmlName ="qty";
  node.value = "0";
  return node;
}
function quantityLabel(){
  var node = document.createElement('label');
  node.innerHTML = "QTY";
  node.htmlFor ="qty";
  return node;
}
function priceNode(){
  var node = document.createElement('span');
    var itemUnitPrice = document.querySelector('.new-item-price').value;
    node.innerHTML = itemUnitPrice;
    node.className = "unit-price";
    return node;
}
function nameNode(){
  var node = document.createElement('span');
  var itemName = document.querySelector('.new-item-name').value;
  node.innerHTML = itemName;
  return node;
}
function create5Divs(){
  var divArray = [];
  for(var i = 0; i <5; i++){
    var div = document.createElement('div');
    divArray.push(div);
  }
  divArray[0].appendChild(nameNode());
  divArray[1].appendChild(priceNode());
  divArray[2].appendChild(quantityLabel());
  divArray[2].appendChild(quantityInput());
  divArray[3].appendChild(totalPrice());
  divArray[4].appendChild(deleteNode());
  return divArray;
}

function createNewItem(){
  var newRow = document.createElement('div');
  newRow.className = "row";
  var parent = newRow;
  var divArray = create5Divs();
  divArray.forEach(function(div){
    parent.appendChild(div);
  });
  parent = document.querySelector('body');
  //parent.appendChild(newRow);
  var x = parent.childNodes.length - 8;
  parent.insertBefore(newRow,parent.childNodes[x]);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.querySelector('.new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
