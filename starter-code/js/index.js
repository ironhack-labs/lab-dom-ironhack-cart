function deleteItem(e){
  console.log(e.currentTarget);
  e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  //Given a product-wrapper div, get product price and quantity, then multiply it, assign it to total, and return it
  let price = itemNode.getElementsByClassName('price');
  console.log(price);
  let quantity = itemNode.getElementsByClassName('quantity');
  console.log(quantity);
  let total = parseFloat(price[0].innerText) * parseInt(quantity[0].value);
  itemNode.getElementsByClassName('total')[0].innerText = total; 
  return total;
}

// function updatePriceByProduct(productPrice, index){
  // index.getElementsByClassName('price').outerText = productPrice;
// }

function getTotalPrice() {

  //Get all products in the form of an htmlCollection (not an array, so we must iterate manually with a for loop)
  let productCollection = document.getElementsByClassName('product-wrapper');
  
  //Create storage for the total price
  let totalPrice = 0;

  //Iterate through the collection and use our getPriceByProduct method to add (price for each product * quantity of each product) to the totalPrice
  for(var i = 0; i < productCollection.length; i++){
    console.log(productCollection[i]);
    console.log(i);
    totalPrice += getPriceByProduct(productCollection[i]);

  }
  
  //Update the h2 span total price with the value of totalPrice
  document.querySelector('#final').textContent = totalPrice;
  
}

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

function createNewItem(){
  

  //Store the new item layout in newItem

  let newItemName = document.querySelector('.item').value;
  let newItemPrice = document.querySelector('.item-price').value;
  let newItemHTML = `<div class="product-wrapper">
    <div><span>${newItemName}</span></div>
    <div>$<span class="price">${newItemPrice}</span></div>
    <div>
      <label>
        QTY
        <input class="quantity" type="text" name="qty" value="0">
      </label>
    </div>
    <div>$<span class="total">0.00</span></div>
    <div><button class="btn btn-delete">Delete</button></div>
  </div>`

  //Append the newItem HTML to the DOM before the .create-wrapper div
  document.querySelector('.create-wrapper').insertAdjacentHTML('beforebegin', newItemHTML);

  //Get new delete button and add the deleteItem event on click
  var deleteButtons = document.getElementsByClassName('btn-delete');
  deleteButtons[deleteButtons.length - 1].onclick = deleteItem;
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
