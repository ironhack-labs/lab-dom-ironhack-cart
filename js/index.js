// cart data
var productList = [
  { name: '- select -', price: 0 },
  { name: 'shoes', price: 35 },
  { name: 'shirt', price: 21 },
  { name: 'hat', price: 33 },
  { name: 'gloves', price: 8 }
];

// shopping cart
var shoppingCart = [
  { name: 'shoes', price: 25, quantity: 1, total: 25 },
  { name: 'shirt', price: 21, quantity: 1, total: 25 }
];

// cart constructor function
var Cart = function(name, price, quantity, total) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.total = total;
};

// form data
var formItem = {};
var formQty = 0;

// populate select box - uses array of cart items.. will be used on add new item form
function loadSelectBox() {
  let selElement = document.getElementById('selProductName');
  for (let item of productList) {
    selElement.options[selElement.options.length] = new Option(item.name);
  }
}

// check form for changes and load cart object
function selectBoxChange() {
  var selectElement = document.getElementById('selProductName').value;
  var prodQty = document.getElementById('txtproductQty');
  let priceTotal = document.getElementById('lblTotal');

  prodQty.value = '';
  priceTotal.innerHTML = 'Total';

  var priceLabel = document.getElementById('txtProductPrice');
  var [{ price: thePrice }] = productList.filter(element => element.name === selectElement);
  priceLabel.innerHTML = thePrice;
}

// updates total on new item form
var onQuantityChange = document.getElementById('txtproductQty');
if (onQuantityChange) {
  onQuantityChange.addEventListener('input', function(e) {
    formQty = onQuantityChange.value;
    txtProductQtyCalc(formQty);
  });
}

// calculate form
var txtProductQtyCalc = function(qty) {
  let name = document.getElementById('selProductName').value;
  let productQuantity = parseInt(qty);
  let priceAmount = parseInt(document.getElementById('txtProductPrice').innerHTML);
  let priceTotal = document.getElementById('lblTotal');
  let total = 0;

  if (productQuantity && priceAmount) {
    total = priceAmount * productQuantity;
    priceTotal.innerHTML = +total;
  } else {
    console.log('nothing to add');
  }
  if (total) {
    formItem = new Cart(name, priceAmount, productQuantity, total);
  }
};

// load to cart
var addToCart = function(event) {
  if (Object.keys(formItem).length) {
    shoppingCart.push(formItem);
  } else {
    console.log('Error insuficcient data...');
  }
  loadCartData();
  clearForm();
};

//clear Form
function clearForm() {
  let selectElement = document.getElementById('selProductName');
  let productQuantity = document.getElementById('txtproductQty');
  let priceAmount = document.getElementById('txtProductPrice');
  let priceTotal = document.getElementById('lblTotal');
  selectElement.selectedIndex = 0;
  formItem = {};
  productQuantity.value = '';
  priceAmount.innerHTML = '';
  priceTotal.innerHTML = 'Total';
}

// manage delete click event
var deleteItemFromCart = function(e) {
  let rootParent = e.parentNode.parentNode;
  let buttonParent = e.parentNode;
  rootParent.removeChild(buttonParent);
  shoppingCart.splice(buttonParent.id, 1);
  loadCartData();
};

// load cart
function loadCartData() {
  // load container, wipe all children in div container..
  let rootContainer = document.getElementById('cart-container');
  while (rootContainer.firstChild) {
    rootContainer.removeChild(rootContainer.firstChild);
  }
  let parentContainer = document.getElementById('cart-container');
  shoppingCart.map((object, index) => {
    // create element
    let divContainer = document.createElement('div');
    divContainer.innerHTML = `
       <div id=${index}>
         <label class="cart-label">${object.name}:</label>
         <span>$</span><label class="cart-label">${object.price}</label>
         <label class="cart-label">Qty:</label>
         <input class="cart-input" id="cartItemQty" value="${object.quantity || 1}"></input>
         <span>$</span><label class="cart-label" id="cartItemTotal">${object.total}</label>
         <button onclick="deleteItemFromCart(event.target)" class="button">Delete</button>
       </div>
     `;
    parentContainer.append(divContainer);
  });
}

// dynamic event listerns...
document.addEventListener('input', function(e) {
  if (e.target.id === 'cartItemQty') {
    var cartElements = e.target.parentElement.children;
    var cartElementTotal = +e.target.value * +cartElements[2].innerHTML;
    cartElements[6].innerHTML = cartElementTotal;
    // upate shoppingCard array
    shoppingCart[e.target.parentElement.id].quantity = +e.target.value 
    shoppingCart[e.target.parentElement.id].total = cartElementTotal
  }
});

var lblTotalEvent = document.getElementById('lblTotal');
lblTotalEvent.onclick(e){
  console.log(e)
}

// onload
window.onload = function() {
  // clear boxes
  clearForm();
  // load select box
  loadSelectBox();
  // load Cart Data
  loadCartData();
};
