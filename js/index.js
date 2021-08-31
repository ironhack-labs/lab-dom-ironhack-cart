// ITERATION 1
function updateSubtotal(product) {
  const price = product. querySelector('.price span' )
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector(`.subtotal span`)
  let priceNum = parseFloat(price.innerHTML)
  let quantityNum = parseFloat(quantity.value)
  let subtotalNum = priceNum*quantityNum
  subtotal.innerHTML = `${subtotalNum}`
console.log(subtotalNum)
}

  // ITERATION 2
  function calculateAll() {
    // ITERATION 2
    const totalCart = document.getElementsByClassName('product');
    let total = 0;
    for (i = 0; i < totalCart.length; i++) {
      const totalProduct = updateSubtotal(totalCart[i]);
      total += totalProduct;
    }

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;
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
