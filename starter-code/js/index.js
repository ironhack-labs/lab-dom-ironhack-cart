var item = new item();
var deleteBtn    = document.getElementById('deleteBtn');
var calcPriceBtn = document.getElementById('calc-prices-button');



function item() {

  this.quantity = 0;
  this.price = 0;
}

function deleteItem(e){

 var element = e.currentTarget.parentElement;
 element.remove();
  
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    var items = document.getElementsByClassName('item');
    var count = 0;
    var unitPrice = 0;
    var qty = 0;

    console.log(items)

    for (var i = 0; i < items.length; i++) {
      var unitPrice = parseFloat(items[i].getElementsByClassName('unit-price')[0].innerHTML);
      var qty = parseFloat(items[i].getElementsByClassName('quantity')[0].value);
      items[i].getElementsByClassName('total-price')[0].innerHTML = parseFloat(unitPrice) * parseFloat(qty);
      
      count += parseFloat(unitPrice) * parseFloat(qty);
      console.log(count)
    }

    
    document.getElementById('total-cart').innerHTML = count;
  
}



function createDeleteButton(){
  var button = document.createElement('button');
  button.setAttribute("class", "btn-delete");
  button.innerHTML = 'Delete';
  return button
}


function createNewItemRow(itemName, itemUnitPrice){
  
 var itemDiv = document.createElement('div');	
 itemDiv.setAttribute("class", "item");

 var itemSpan = document.createElement('span');
 itemSpan.setAttribute("class", "itemName");
 itemSpan.innerHTML = itemName;

 itemDiv.appendChild(itemSpan);

 var dollarSpan = document.createElement('span');
 dollarSpan.innerHTML = '$';

 itemDiv.appendChild(dollarSpan);

 var itemPrice = document.createElement('span');
 itemPrice.setAttribute("class", "unit-price");
 itemPrice.innerHTML = itemUnitPrice;

 itemDiv.appendChild(itemPrice);

 var QTYSpan = document.createElement('span');
 QTYSpan.innerHTML = 'QTY';
 
 itemDiv.appendChild(QTYSpan);

 var QTYInput = document.createElement('input');
 QTYInput.setAttribute("class", "quantity");

 itemDiv.appendChild(QTYInput);

 var totalSpan = document.createElement('span');
 totalSpan.innerHTML = 'Total: $';

 itemDiv.appendChild(totalSpan);

 var totalPriceSpan= document.createElement('span');
 totalPriceSpan.setAttribute("class", "total-price");
 totalPriceSpan.innerHTML = "0.00" ;
 
 itemDiv.appendChild(totalPriceSpan);

 itemDiv.appendChild(createDeleteButton());


 return itemDiv;
}

function createNewItem(){


  var cart = document.getElementById('cart');
  var inputName = document.getElementById('nameInput').value;
  var inputPrice = document.getElementById('priceInput').value;
  console.log(inputName);

  cart.appendChild(createNewItemRow(inputName, inputPrice));
  deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
 
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('create-btn');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
 
    deleteButtons[i].onclick = deleteItem;
  }
};

// $(document).ready(function(){
//   $('.create-btn').click(createNewItemRow('hol', 2))
// })
