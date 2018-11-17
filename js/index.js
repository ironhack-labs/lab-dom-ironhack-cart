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
  { name: 'shoes', price: 25, quantity: 0, total: 25 },
  { name: 'shirt', price: 21, quantity: 0, total: 25 }
];

// cart constructor function
var Cart = function(item, price, quantity, total) {
  this.item = item;
  this.price = price;
  this.quantity = quantity;
  this.total = total;
};

// form data
var formItem = {};
var formQty = 0;

// product control elements
var txtProductPrice = document.getElementById('txtProductPrice');
var txtproductQty = document.getElementById('txtproductQty');
var lblTotal = document.getElementById('lblTotal');
var btnAddCart = document.getElementById('btnAddCart');

// populate select box
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

txtproductQty.addEventListener('input', function(e){
  formQty = txtproductQty.value;
  console.log(formQty)
});

// calculate form
var txtProductQtyCalc = function(event) {
  let selectElement = document.getElementById('selProductName').value;
  let productQuantity = +document.getElementById('txtproductQty').value;
  let priceAmount = +document.getElementById('txtProductPrice').innerHTML;
  let priceTotal = document.getElementById('lblTotal');
  let total = 0;

  if (productQuantity && priceAmount) {
    total = priceAmount * productQuantity;
    priceTotal.innerHTML = +total;
  } else {
    console.log('invalid data selected');
  }

  if (total) {
    formItem = new Cart(selectElement, productQuantity, priceAmount, total);
  } else {
    console.log('nothing to add');
  }
};

// load to cart
var onClickEvent = function(event) {
  if (Object.keys(formItem).length) {
    shoppingCart.push(formItem);
  } else {
    console.log('Error insuficcient data...');
  }
  clearForm();
  loadCartData();
};

//clear Form
function clearForm() {
  let selectElement = document.getElementById('selProductName');
  let productQuantity = document.getElementById('txtproductQty');
  let priceAmount = document.getElementById('txtProductPrice');
  let priceTotal = document.getElementById('lblTotal');
  selectElement.selectedIndex = 0;
  productQuantity.value = '';
  priceAmount.innerHTML = '';
  priceTotal.innerHTML = 'Total';
}

var deleteItemFromCart = function(event) {
  console.log(event.parentNode.id);
};

// load cart
function loadCartData() {
  let parentContainer = document.getElementById('cart-container');
  shoppingCart.map((object, index) => {
    // create element
    let divContainer = document.createElement('div');
    console.log(divContainer.childNodes);
    divContainer.innerHTML = `
       <div id=${index}>
         <label class="cart-label">${object.name}</label>
         <label class="cart-label">$${object.price}</label>
         <label class="cart-label">Quantity</label>
         <input class="cart-input" value="${object.quantity}"></input>
         <label class="cart-label">${object.total}</label>
         <button onclick="deleteItemFromCart(event.target)" class="button">Delete</button>
       </div>
     `;
    parentContainer.append(divContainer);
  });
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
