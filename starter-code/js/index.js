// Iteration 1 & 3 
function retrieveUnitPrice(itemNum){
  let unitPriceCollection = document.querySelectorAll('.products .row .unit-price');
  let unitPrice = unitPriceCollection[itemNum].innerHTML;
  return parseFloat(unitPrice);
};

function retrieveItemQuantity(itemNum){
  let itemQuantityCollection = document.querySelectorAll('.products .row .quantity');
  let unitQuantity = itemQuantityCollection[itemNum].value;

  if (!unitQuantity){
    unitQuantity = 0;
  }
  return parseInt(unitQuantity);
};

function calcPricePerProduct(itemNum){
  let price = retrieveUnitPrice(itemNum);
  let quantity  = retrieveItemQuantity(itemNum);
  let totalPriceProduct =  (price * quantity).toFixed(2);
  return totalPriceProduct;
};

function getTotalPrice(){
  let totalPriceCollection = document.querySelectorAll('.products .row .total-price');
  let cartTotalPrice = document.getElementById('cart-total-price');
  let cartTotal = 0;
  
  for (i = 0; i < totalPriceCollection.length; i++){
    let totalPrice = calcPricePerProduct(i);
    totalPriceCollection[i].innerHTML = totalPrice;
    cartTotal += parseFloat(calcPricePerProduct(i));
  };
  cartTotalPrice.innerHTML = cartTotal.toFixed(2);
};

// Iteration 2 & 5
function createNewItemRow(name, price){
  let products = document.getElementById('products');
  let newItem = document.createElement('div');
  newItem.classList.add('row');
  newItem.innerHTML = `
                      <span class='unit-name'>${name}</span>
                      <p>$<span class='unit-price'>${price}</span></p>
                      <div>
                          <label for=units-form>QTY</label>
                          <input name='units-form' type='text' class='quantity'>
                      </div>
                      <div>
                          <p>$<span class='total-price'>0.00</span></p>
                      </div>
                      <div>
                          <button type='button' class='btn btn-delete'>Delete</button>
                      </div>
                     `;
  products.appendChild(newItem);
};

function clearInput(){
  let inputCollection = document.getElementsByClassName('create-input');

  for (i = 0; i < inputCollection.length; i++){
    let input = inputCollection[i];
    input.value = '';
  };
};

function createNewItem(){
  let inputProduct = document.getElementById('product-name').value;
  let inputPrice = parseFloat(document.getElementById('product-price').value);
  let price = inputPrice.toFixed(2);

  createNewItemRow(inputProduct, price);
  window.onload();
  clearInput();
};

// Iteration 4
function deleteItem(e){
  let buttonClicked = e.currentTarget;
  let productsContainer = document.getElementById('products');
  let product = buttonClicked.parentElement.parentElement;
  productsContainer.removeChild(product);

  getTotalPrice();
};

// Run functions with events
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  };
};