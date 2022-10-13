// ITERATION 1
let calculate = document.getElementById('calculate');
calculate.addEventListener('click', () => {
  calculateAll();
});

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!', product);
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity > input');
  let subtotal = price * quantity.value;
  // console.log(subtotal)
  let finalSubtotal = product.querySelector('.subtotal span');
  finalSubtotal.innerText = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  console.log(products);
  // let result = updateSubtotal(products);
  // end of test

  // ITERATION 2
  products.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  let subtotalPrice = (() => {
    let sum = 0;
    products.forEach((product) => {
      let subtotal = product.querySelector('.subtotal span').innerText;
      sum += Math.floor(subtotal);
    });
    return sum;
  })();
  let finalTotal = document.querySelector('#total-value span');
  console.log(finalTotal);
  finalTotal.innerText = subtotalPrice;
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
