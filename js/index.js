// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;

    const priceSubtotal = price * quantity

    const subtotal = product.querySelector('.subtotal span');

    subtotal.innerHTML = priceSubtotal;

    return priceSubtotal;
  }


  // ITERATION 2
  function calculateAll() {
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  let totalPrice = 0;
  const allItems = document.querySelectorAll('#cart .product')
  allItems.forEach(item =>{
    totalPrice += updateSubtotal(item)
  });

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span')
  total.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here


});
