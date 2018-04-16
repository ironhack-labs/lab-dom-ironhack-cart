function deleteItem(e){

}

function getPriceByProduct(itemNode)  {
  return parseInt(itemNode.slice(1));
}

function updatePriceByProduct(productPrice, index){
  return productPrice * index;
}

function getTotalPrice() {

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
  let node = document.getElementById('unit-price').innerHTML; // access unit price node
  let button = document.getElementsByClassName('btn-success')[0]; // access button

  button.onclick = function(){
    let input = document.getElementsByTagName('input')[0]; // get the users input
    let updated = updatePriceByProduct(getPriceByProduct(node), input.value); // multiply item-price * qty
    let text = document.createTextNode('$' + updated.toString() + '.00'); // convert product into textNode
    let child = document.getElementById('items-price'); // define child to remove
    let parent = document.getElementById('parent'); // define parent to remove/appendChild
    let span = document.createElement('span'); // create span element
    span.setAttribute('id', 'items-price'); // set id attibute to span
    parent.removeChild(child); // remove outdated item price
    parent.appendChild(span); // append span element to div
    span.appendChild(text); // append updated price to span
  }

};

