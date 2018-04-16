function deleteItem(e){

}

function getPriceByProduct(itemNode)  {
  return parseInt(itemNode.slice(1));
}

function updatePriceByProduct(productPrice, index){
  return productPrice * index;
}

function getTotalPrice(arrOfPricesPerItem) {
  return arrOfPricesPerItem.reduce((accum, curr) => accum + curr, 0);
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

function createNewItem(){

}

window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');
  
  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  // Create a click event for the Calculate Prices button

  let button = document.getElementsByClassName('btn-success')[0]; // access button
  let tPriceNode = document.getElementById('total-price'); // access total price in html

  button.onclick = function() {
    let children = document.getElementsByClassName('items-price'); // define an array of children to remove
    let parents = document.getElementsByClassName('parent'); // define an array of parents to remove/appendChild
    let pArr = Array.prototype.slice.call(parents); // convert HTML Collection into an Array
    let cArr = Array.prototype.slice.call(children); // convert HTML Collection into an Array
    let node, input, updated, text, span, subtotal;
    let totalPrice = 0;

    for (let i = 0; i < pArr.length; i++) {
      node = document.getElementsByClassName('unit-price')[i].innerHTML; // access unit price node
      input = document.getElementsByTagName('input')[i]; // get the users input
      updated = updatePriceByProduct(getPriceByProduct(node), input.value); // multiply item-price * qty
      text = document.createTextNode('$' + updated.toString()); // convert product into textNode
      span = document.createElement('span'); // create span element
      span.setAttribute('class', 'items-price'); // set class attibute to span
      pArr[i].removeChild(cArr[i]); // remove outdated item price
      pArr[i].appendChild(span); // append span element to div
      span.appendChild(text); // append updated price to span
      subtotal = parseInt(span.innerHTML.slice(1)); // get subtotal. Number type.
      totalPrice += subtotal; // adds subtotals
    }

    tPriceNode.innerHTML = '$' + totalPrice.toString(); // updates total price.
  }

};

