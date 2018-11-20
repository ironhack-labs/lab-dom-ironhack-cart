

function deleteItem(event){
 var btn = event.target;
 var item = btn.parentNode;
 var container = item.parent;
 container.removeChild(item);
}

// function getPriceByProduct(itemNode){
//   var result=0;
//   var price = document.querySelector(itemNode).innerText; 
//   var quantity = document.querySelector('.itemUnits input[name="units"]').value;
//   result += price * quantity;
//   updatePriceByProduct(result,'.total-item-price span');
//   return result;
// }

// function updatePriceByProduct(productPrice, index){
//   document.querySelector(index).innerText = productPrice;
// }

function getTotalPrice() { 
  //cargo en una lista todos los productos que hay que son una item line
  var items = document.getElementsByClassName("item-line");
  
  for (var i = 0; i<items.length; i++){
    var totalDomPrice = 0;
    var item = items[i];
    var price = item.querySelector(".item-price").innerText;
    var units = item.querySelector('.item-units input[name="units"]').value;
    console.log(price);
    console.log(item.querySelector('.item-units input[name="units"]').value);
    totalDomPrice += price * units;
    console.log(totalDomPrice);
    item.querySelector('.total-item-price span').innerText = totalDomPrice;
  };
    
  return totalDomPrice;
}

// function createQuantityInput(item, elem){
//   document.querySelector(item).appendChild('<div class="item-units'+ elem +'"><label for="Units">QTY</label><input type="text" name="units"></div>');

// }

// function createDeleteButton(item,elem){
//   document.querySelector(item).appendChild('<div><button name="deleteButton" class="btn btn-delete" id="delete'+elem+'">Delete</button> </div>');
// }


// function createItemNode(item,elem){
//   document.querySelector(item).appendChild('<div class="item-line item'+elem+'"></div>');
  
// }

// function createNewItemRow(itemName, itemUnitPrice){
//   document.appendChild('<div><span class="item-name">'+itemName+'</span></div>')
//   document.appendChild('<div><span class="item-price0">'+itemUnitPrice+'25</span></div>');
// }

// function createNewItem(elem){
//   var newItem = createItemNode(elem);
//   createNewItemRow(newItem, elem);
//   createQuantityInput(newItem, elem);
//   createDeleteButton(newItem, elem);

// }

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  //calculatePriceButton.onclick = getTotalPrice();

  calculatePriceButton.addEventListener('click', getTotalPrice); 
  // var num = 2;
  // createItemNode.onclick = createNewItem(num);
  // num++;
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem(i);
  }
};
