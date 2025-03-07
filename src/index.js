// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = document.querySelector('.price span');
  const quantityValue = document.querySelector('.quantity input').value;
  
  const priceValue = price.innerHTML;
  const multiplicationPrice = quantityValue*priceValue;

  const subtotal = document.querySelector('.subtotal span');
  subtotal.textContent= multiplicationPrice;

}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const productsRow = [...document.getElementsByClassName("product")];
  let totalPriceValue = 0;
  
  productsRow.forEach((row) => {
    const price = row.querySelector('.price span');
    const quantityValue = row.querySelector('.quantity input').value;
    const priceValue = price.innerHTML;
    const multiplicationPrice = quantityValue*priceValue;

    const subtotal = row.querySelector('.subtotal span');
    subtotal.textContent= multiplicationPrice;

    totalPriceValue += multiplicationPrice;
  });
    // ITERATION 3
    //... your code goes here
  totalPrice = document.querySelector('#total-value span');
  totalPrice.textContent=totalPriceValue;
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
