function deleteItem(e){
  let body = document.getElementsByTagName('body')[0];
  let productRowContainer = e.currentTarget.parentNode.parentNode;

  body.removeChild(productRowContainer);

  getTotalPrice();
}

function getPriceByProduct(itemNode){

  return itemNode.querySelector('.item-price').textContent;
}

function updatePriceByProduct(productPrice, index){

  let input = document.getElementsByClassName('quantity')[index];
  let quantity = Math.round(input.value);
  let objTotalPrice = document.getElementsByClassName('item-total-price')[index];
  
  let totalPrice = productPrice * quantity;

  input.value = quantity;
  objTotalPrice.textContent = totalPrice.toFixed(2);

  return totalPrice;

}

function getTotalPrice() {

  let objProductRow = document.querySelectorAll('.container.product-row');
  let objPriceAddition = document.getElementById('price-addition');

  let productPrice, 
      additionPrice = 0;
  
  for (let i = 0; i < objProductRow.length; i++) {

     productPrice = getPriceByProduct(objProductRow[i]);     
     additionPrice += updatePriceByProduct(productPrice, i);
  }

  objPriceAddition.textContent = additionPrice.toFixed(2);
}

function createQuantityInput(){
  let input = document.createElement('input');
  
  input.type = "number";
  input.value = 0;
  input.classList.add('quantity');

  return input;
}

function createDeleteButton(){

  let button = document.createElement('button');
  let buttonText = document.createTextNode('Delete');

  button.appendChild(buttonText);

  button.classList.add('btn', 'btn-delete');

  button.onclick = deleteItem;


  return button;
}

function createQuantityNode(){
  
  let newProductRow = getLastProductRow();
  let div = document.createElement("div");
  let label = document.createElement("label");
  let labelText = document.createTextNode('QTY');

  newProductRow.appendChild(div);
  div.appendChild(label);
  label.appendChild(labelText);

  return div;
}

function createItemNode(dataType, itemData){

  let newProductRow = getLastProductRow();
  
  let div = document.createElement("div");
  let span, text, input, button;

  switch(dataType) {

    case 'item-name':
    case 'item-price':
    case 'item-total-price':  

        span = document.createElement("span");
        text = document.createTextNode(itemData);

        newProductRow.appendChild(div);
        div.appendChild(span);
        span.classList.add(dataType);
        span.appendChild(text);
      
    break;

    case 'item-quantity':

     div = createQuantityNode();
     input = createQuantityInput();

     div.appendChild(input);

    break;

    case 'item-delete-button':
      
      newProductRow.appendChild(div);

      button = createDeleteButton();
      
      div.appendChild(button);
    

    break;

  }

}

function createNewItemRow(itemName, itemUnitPrice){
  
  let lastProductRow = getLastProductRow();

  let newProductRow = `<div class="container product-row"></div>`;
  lastProductRow.insertAdjacentHTML("afterend", newProductRow);

  newProductRow = getLastProductRow();


  createItemNode('item-name', itemName);
  createItemNode('item-price', parseFloat(itemUnitPrice).toFixed(2));
  createItemNode('item-quantity')
  createItemNode('item-total-price', parseFloat(0).toFixed(2));
  createItemNode('item-delete-button');


}

function getLastProductRow() {

  let productRows = document.getElementsByClassName('product-row');
  let lastProductRow = productRows[productRows.length - 1];

  return lastProductRow;
}

function createNewItem(){

  let inputProductName = document.getElementById('new-product-name');
  let inputProductPrice = document.getElementById('new-product-price');

  let validated = true;

  if(inputProductName.value.trim() == '') {
    validated = false;
    inputProductName.classList.add('error');
  }

  if(inputProductPrice.value <= 0) {
    validated = false;
    inputProductPrice.classList.add('error');
  }

  if(validated == false) return;

  let newProductName = inputProductName.value.trim();
  let newProductPrice = inputProductPrice.value;

  createNewItemRow(newProductName, newProductPrice);

  inputProductName.classList.remove('error');
  inputProductName.value = '';
  inputProductPrice.classList.remove('error');
  inputProductPrice.value = '';
 
}

window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');
 
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  for(let i = 0; i<deleteButtons.length; i++){
    
    deleteButtons[i].onclick = deleteItem;
  }
};
