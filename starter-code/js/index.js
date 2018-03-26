function deleteItem(e){

  //we declare a variable for our button's grandparent
  // ('product' class)
  var parent = e.currentTarget.parentNode.parentNode

  //we perform a loop - while firstChild of 'product'
  //exits we keep removing firstChildren 
  //so that the loop ends when 'product' doesn't
  //have children
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  //We initialize getTotalPrice to recount
  //the global sum with a new list of items
  getTotalPrice()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}
getTotalPrice = function() {
  //We declare our variables here because we weren't
  //able to initialize the function in global with parameters
  var products = document.getElementsByClassName('product')
  var price = document.getElementsByClassName('price')
  var quantity = document.getElementsByClassName('quantity')
  var totals = document.getElementsByClassName('total')
  var sumAddress = document.getElementById('sum')
  var sum = 0

  // We do a loop for all articles 
  //for as many quantity fields as there are out there
  for ( i = 0 ; i < products.length ; i++){

    //we declare variable values for a particular article
    console.log(price[i])
    var itemPrice = parseFloat(price[i].innerHTML.slice(1))  
    var itemQuantity = parseFloat(quantity[i].value)

    // we calculate the sum for an item and
    // assign it to the DOM object's inner HTML
    totals[i].innerHTML = '$' + (itemQuantity * itemPrice).toFixed(2)
    // we count sum for all articles
    sum += itemQuantity * itemPrice
  }
  //We use toFixed here because the function 
  //can be initialized from the level of deleteItem
  
  //We use different variables for storing value
  //and for object itself, because they are different
  //data types (our DOM works on strings)
  sumAddress.innerHTML = '$' + sum.toFixed(2)
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
  var parent = e.currentTarget.parentNode.parentNode
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  calculatePriceButton.onclick = getTotalPrice
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
