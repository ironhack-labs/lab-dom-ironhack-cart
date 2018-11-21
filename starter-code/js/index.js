

function deleteItem(e){
 //guardo el botón que ha generado el evento
 var btn = e.currentTarget;
 //su padre es el div del botón
 var button = btn.parentNode;
 //su padre es el item
 var item = button.parentNode;
 //saco el contenedor de todos los items
 var container = item.parentNode;
 //borro el hijo que ha generado el evento
 container.removeChild(item);
}


function getTotalPrice() { 
  //cargo en una lista todos los productos que hay que son una item line
  var items = document.getElementsByClassName("item-line");
  //precio de todos los items
  var totalPrice = 0;
  //recorro el array de todos los elementos con la clase item-line
  for (var i = 0; i<items.length; i++){
    //calculo el precio de cada item
    var totalItemPrice = 0;
    var item = items[i];
    var price = item.querySelector(".item-price").innerText;
    var units = item.querySelector('.item-units input[name="units"]').value;

    totalItemPrice += price * units;
    
    totalPrice += totalItemPrice;
        
    item.querySelector('.total-item-price span').innerText = totalItemPrice + '€';
    
  };
  
  document.querySelector('.total-price h1').innerText = 'Total Price ' + totalPrice + '€';  
  return totalPrice;
}

function createQuantityInput(item){
  var quantityDiv = document.createElement('div');
  quantityDiv.classList.add('item-units');
  var quantityLabel = document.createElement('label');
  quantityLabel.htmlFor = 'Units';
  quantityLabel.innerText = 'QTY';
  quantityLabel.value = document.getElementById('new-item-price').value;
  var quantityInput = document.createElement('input');
  quantityInput.name = 'units';
  quantityInput.type = 'text';
  
  quantityDiv.appendChild(quantityLabel);
  quantityDiv.appendChild(quantityInput);
  
  item.appendChild(quantityDiv);
  

  //<div class="total-item-price"><span>0€</span></div>
  var total = document.createElement('div');
  total.classList.add('total-item-price');
  var totalSpan = document.createElement('span');
  totalSpan.innerText = '0€';
  total.appendChild(totalSpan);

  item.appendChild(total);
}

function createDeleteButton(item){
  var deleteBtnDiv = document.createElement('div');
  var deleteBtn = document.createElement('button');
  deleteBtn.name = 'deleteButton';
  deleteBtn.classList.add('btn');
  deleteBtn.classList.add('btn-delete');
  deleteBtn.innerText = 'Delete';
  deleteBtnDiv.appendChild(deleteBtn);
  item.appendChild(deleteBtnDiv);
}


function createItemNode(){
  var container = document.querySelector('.items');
  
  var item = document.createElement('div');
  item.classList.add('item-line');
  
  return container.appendChild(item);
}


function createNewItemRow(item){
  //saco los valores de los input
  var itemName = document.getElementById('new-item-name').value;
  var itemPrice = document.getElementById('new-item-price').value;
  
 
  var itemNameDiv = document.createElement('div'); 
  var itemNameSpan = document.createElement('span');
  itemNameSpan.classList.add('item-name');
  itemNameSpan.innerText = itemName;
   
  itemNameDiv.appendChild(itemNameSpan);
  item.appendChild(itemNameDiv);

    
  var itemPriceDiv = document.createElement('div'); 
  var itemPriceSpan = document.createElement('span');
  itemPriceSpan.classList.add('item-price'); 
  itemPriceSpan.innerText = itemPrice;
  
  itemPriceDiv.appendChild(itemPriceSpan);
  item.appendChild(itemPriceDiv);
    
}

function createNewItem(){

  var newItem = createItemNode();
  
  createNewItemRow(newItem);

  createQuantityInput(newItem);

  createDeleteButton(newItem);

  console.log(newItem);

}

window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
 
  calculatePriceButton.addEventListener('click', getTotalPrice); 
  
  createItemButton.addEventListener('click',createNewItem);
  
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener('click',deleteItem);
  }
};
