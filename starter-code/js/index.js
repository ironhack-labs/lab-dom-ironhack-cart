
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

// CALCULATE TOTAL PRICE
var rows = document.getElementsByClassName("item"); // I access all the elements inside 'item'

var cartTotalPrice = document.getElementById('cart-total-price');

function getTotalPrice(){
  
  var totalPrice = 0; // the value where the loop starts with

  for(var i = 0; i < rows.length; i++){ // to loop in all the rows
    
    // number() = makes the input a number - rows[i] to access the elements inside with that class - 
    var itemPrice = Number(rows[i].getElementsByClassName("item-price")[0].innerHTML);
    
    // .value because it's a number
    var quantity = Number(rows[i].getElementsByClassName('quantity')[0].value);
    
    // to add the number to the total everytime it loops 
    totalPrice += itemPrice * quantity;

    cartTotalPrice.innerHTML = totalPrice; // to change the number in the 'total price' text
  }
  return totalPrice;
}

// UPDATE PRICE FOR EVERY PRODUCT 
function calculatePrice(){
  
  var finalPrice = 0; 

  for(var i = 0; i < rows.length; i++){ 
    
    var price = Number(rows[i].querySelector(".item-price").innerHTML);
    
    var quantity = Number(rows[i].querySelector(".quantity").value);
    
    rows[i].querySelector('.price-total').innerHTML = price * quantity; // accesing the total price for every row

    finalPrice = rows[i].querySelector('.price-total').innerHTML; // changing the final price

  }
  getTotalPrice(); // in the same function I update the price and change the total price text
}

// DELETING A PRODUCT
var deleteButtons = document.getElementsByClassName('btn-delete');

function deleteItem(e){ // e for event function 
  for(var i = 0; i < deleteButtons.length; i++){ 
  deleteButtons[i].addEventListener('click', deleteProduct); // I call the function that I write after
}
}

deleteItem();

function deleteProduct(e){
  var buttonClicked = event.currentTarget; // current target refers at what I'm looping when I call it up
  buttonClicked.parentElement.parentElement.remove(); // until I get to its actual parent element
 }

// CREATING AN ITEM

function createNewItem (){
  var createItemButton = document.getElementById('list-items'); // look up
  var newItemName = document.getElementById("item").value; // ids inside the new inputs html file
  var newItemPrice = document.getElementById("price").value;
  var newItemDiv = document.createElement('div'); // to create a new element
  newItemDiv.classList.add('item');
  newItemDiv.innerHTML = 
  `<div class="item-name">
        <p>${newItemName}</p>
      </div>
      <div>
          <p>$<span class="item-price">${newItemPrice}</span></p>
      </div>
      <div class="qty">QTY<input class="quantity" type='number' onchange="calculatePrice();"></div>
      <div>
        <p>$<span class="price-total">0.00</span></p>
      </div>
      <div>
        <p class="btn btn-delete">Delete</p>
      </div>`

    createItemButton.appendChild(newItemDiv); // so the new div appears in the website
    deleteItem();
}


