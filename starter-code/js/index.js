


function deleteItem(e){
 var elem = document.querySelector('item'+e);
 elem.innerHTML = '';
}

function getPriceByProduct(itemNode,item){
  var result=0;
  var price = document.querySelector(itemNode).innerText; 
  var priceLine = '.itemUnits'+ item + ' input[name="units"]';
  console.log(priceLine);
  var quantity = document.querySelector(priceLine).value;
  console.log(price);
  console.log(quantity);
  result += price * quantity;
  updatePriceByProduct(result,'.total-item-price span'+item);
  return result;
}

function updatePriceByProduct(productPrice, index){
  document.querySelector(index).innerText = productPrice;
}

function getTotalPrice() { 
  //cargo en una lista todos los productos que hay que son una item line
  var items = document.getElementsByClassName("item-line");
  var totalDomPrice = 0;
  for(var i=0; i<items.length; i++){
    //entramos en la lista y la recorremos
    var line =  '.item-price'+ i;
    totalDomPrice += getPriceByProduct(line,i);
  }
  return totalDomPrice;
}

function createQuantityInput(item, elem){
  document.querySelector(item).appendChild('<div class="item-units'+ elem +'"><label for="Units">QTY</label><input type="text" name="units"></div>');

}

function createDeleteButton(item,elem){
  document.querySelector(item).appendChild('<div><button name="deleteButton" class="btn btn-delete" id="delete'+elem+'">Delete</button> </div>');
}


function createItemNode(item,elem){
  document.querySelector(item).appendChild('<div class="item-line item'+elem+'"></div>');
  
}

function createNewItemRow(itemName, itemUnitPrice){
  document.appendChild('<div><span class="item-name">'+itemName+'</span></div>')
  document.appendChild('<div><span class="item-price0">'+itemUnitPrice+'25</span></div>');
}

function createNewItem(elem){
  var newItem = createItemNode(elem);
  createNewItemRow(newItem, elem);
  createQuantityInput(newItem, elem);
  createDeleteButton(newItem, elem);

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice();

  calculatePriceButton.addEventListener('click', getTotalPrice); 
  var num = 2;
  createItemNode.onclick = createNewItem(num);
  num++;
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem(i);
  }
};
