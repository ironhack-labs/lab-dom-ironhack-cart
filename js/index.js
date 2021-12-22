// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  // console.log(price);

  let quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);

  let subtotal = document.querySelector('.subtotal span');
  // console.log(subtotal);

  subtotal.value = quantity * price;

  return Number(
    (product.querySelector('.subtotal span').textContent = subtotal.value)
  );
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;

  allProducts.forEach((elem) => {
    updateSubtotal(elem);

    totalPrice += updateSubtotal(elem);
    document.querySelector('#total-value span').textContent = totalPrice;
  });
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
