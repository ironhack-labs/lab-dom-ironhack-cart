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

  const resultado = prices.reduce(function (acc, price) {
    const total = acc + price;
    return total;
  }, 0)

  document.querySelector("#total-value span").innerHTML = resultado;

  return resultado;
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

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove Products

  const removeProductsbtn = document.querySelectorAll('.btn-remove');
  //adding the click event listener 
  [...removeProductsbtn].forEach(btn =>
    btn.addEventListener('click', removeProduct));


  //... your code goes here
});