// Event for window load and new reload
const newEvent = addEventListener('DOMContentLoaded', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Creating new products
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);

  //Remove Products
  const removeProductsBtn = document.querySelectorAll('.btn-remove');
  //adding the click event listener 
  [...removeProductsBtn].forEach(btn =>
    btn.addEventListener('click', removeProduct));

});

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // ITERATION 1 updateSubtotal

  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input ').value;

  const subtotal = parseFloat(price) * parseFloat(quantity)
  product.querySelector(".subtotal").innerHTML = subtotal;

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2 calculateAll()

  const products = document.querySelectorAll('.product');
  const prices = [...products].map(product => updateSubtotal(product));

  // ITERATION 3  Total

  const result = prices.reduce(function (acc, price) {
    const total = acc + price;
    return total;
  }, 0)

  document.querySelector("#total-value span").innerHTML = result;

  return result;
}

//Bonus Iterations

// ITERATION 4 Removing a product

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //removal of the corresponding product from the cart.
  const targetProduct = target.parentElement.parentElement;
  const cartProduct = document.querySelector('#cart tbody');
  cartProduct.removeChild(targetProduct);
  //price gets updated when you remove products from cart.
  calculateAll();
}

// ITERATION 5 Creating new products

function createProduct() {

  //Checking form values
  const newProduct = document.querySelector('.create-product');
  const newInput = newProduct.querySelectorAll('input');
  const nameNewProduct = newInput[0].value;
  const priceNewProduct = newInput[1].value;

  //Clone Product Row
  productRow = document.querySelector('.product');
  productNewRow = productRow.cloneNode(true);

  //Creating New Product Row
  productNewRow.querySelector('.name span').innerHTML = nameNewProduct;

  productNewRow.querySelector('.price span').innerHTML = priceNewProduct;

  productNewRow.querySelector('.quantity input').value = 0;

  productNewRow.querySelector('.subtotal').innerHTML = 0;

  //Display New Product Row
  productRow.parentElement.appendChild(productNewRow);

  //Updating addEventListener
  //productNewRow.newEvent;
  //newEvent;
  //newEvent();
  //newEvent()();
  //window.newEvent;

  //Reset form
  newInput[0].value = '';
  newInput[1].value = 0;

}

window.newEvent;