// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').innerText;

    const quantity = product.querySelector('.quantity input').value;

    const sum = price*quantity

    product.querySelector('.subtotal span').innerText = sum;

return sum;
}

  // ITERATION 2

function calculateAll() {
  
const products = document.querySelectorAll('.product');
let totalPrice = 0;

products.forEach(element => {
console.log(element);
  totalPrice += updateSubtotal(element);
});

document.querySelector('#total-value span').innerText = totalPrice;

console.log(totalPrice);

}
 



  // ITERATION 3
  //... your code goes here


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
