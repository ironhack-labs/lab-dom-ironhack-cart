// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  console.log('Calculating subtotal, yey!');
  let value = quantity.value * price.innerHTML;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = value;
  return value;
}
//<td class="subtotal">$<span>0</span></td>

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
}

// ITERATION 2
let totalPrice = document.getElementsByClassName('products');
let startCount = 0; /* tem que definir zero para começar a conta */
for (let i = 0; i < totalPrice.length; i++) {
  updateSubtotal(totalPrice[i]); // acho que está errado, perguntar para o Xico
  console.log(totalPrice[i]); // o i é para que o loop conte cada um dos elementos
  let newSubtotal = totalPrice[i].querySelector('.subtotal span').innerHTML;
  startCount += Number(newSubtotal);
}

// ITERATION 3
//... your code goes here*/

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
