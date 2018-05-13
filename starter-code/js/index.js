function deleteItem(e){  
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
  getTotalPrice();
}

function getTotalPrice() {
  var products = document.getElementsByClassName("item-container");  
  var cartTotalPrice = document.querySelector("#cart-total-price span");
  cartTotalPrice.innerText = 0;

  for (var i = 0; i < products.length; i++) {          
    products[i].querySelector(".total-price span").innerText = Number(Number(products[i].querySelector(".unit-price span").innerText) * Number(products[i].querySelector(".qty-input").value));    
    cartTotalPrice.innerText = Number(cartTotalPrice.innerText) + Number(products[i].querySelector(".total-price span").innerText);
  }
}

function createNewItem(btn){
  var newItem = document.createElement('div');
  var itemName = btn.parentNode.querySelector('#name-input').value;
  var itemPrice = btn.parentNode.querySelector('#quantity-input').value;

  btn.parentNode.querySelector('#name-input').value = '';
  btn.parentNode.querySelector('#quantity-input').value = 0;
  
  newItem.setAttribute('class', 'item-container');
  newItem.innerHTML = '<div class="item-name"><span>IronBubble-head</span></div>  <div class="unit-price">$<span>25.00</span></div>  <div>    <label>QTY</label>    <input type="number" name="quantity" class="qty-input">  </div>  <div class="total-price">$<span>0.00</span></div>  <div><button class="btn-delete">Delete</button></div>';  
  newItem.querySelector('.item-name span').innerText = itemName;
  newItem.querySelector('.unit-price span').innerText = itemPrice;

  document.getElementById("cart").appendChild(newItem);

  updateDeleteButtons();
}

function updateDeleteButtons() {
  var deleteButtons = document.getElementsByClassName('btn-delete');  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');  

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = function() { createNewItem(this); }

  updateDeleteButtons();
};