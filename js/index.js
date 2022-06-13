// ITERATION 1

function updateSubtotal(products) {
  products.forEach(function (newProduct) {
    const price = newProduct.querySelector('.price span');
    const priceValue = price.innerHTML;

    const quantity = newProduct.querySelector('.quantity input');
    const quantityValue = quantity.value;

    const subtotal = newProduct.querySelector('.subtotal span');
    const subTotalPrice = priceValue * quantityValue;

    subtotal.innerText = subTotalPrice;
    return subTotalPrice;
  });
}

function calculateAll() {
  //?code in the following two lines is added just for testing purposes.
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');

  updateSubtotal(allProducts);

  // ITERATION 3
  //... your code goes here
  let total = 0;
  for (product of allProducts) {
    total += updateSubtotal(allProducts);
  }

  const showTotalPrice = document.querySelector('#total-value span');
  showTotalPrice.textContent = total;
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
