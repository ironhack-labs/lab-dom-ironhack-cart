// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = +product.querySelector('.price span').innerHtml;
  const quantity = +product.querySelector('.quantity input').value;
  const totalProduct = `${(price * quantity).toFixed(2)}`;
  const subtotal = product.querySelector('.subtotal span').innerHtml = totalProduct;
  return +totalProduct;
}
  // ITERATION 2
  //... your code goes here
  function calculateAll() {  
    let subTotals = 0
    const allProducts = document.querySelectorAll('.product')
    allProducts.forEach(element => {
      subTotals += updateSubtotal(element)
    });
  // ITERATION 3
  //... your code goes here
  const priceTotal = document.querySelector('#total-value span')
  priceTotal.innerHTML = subTotals
  return subTotals
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
