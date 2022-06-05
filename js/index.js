// ITERATION 1
const button1 = document.querySelector('#calculate')
button1.onClick = calculateAll
function updateSubtotal(product) {
  alert('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent
  console.log(price)
  const quantity = product.querySelector('.quantity input').value
  console.log(quantity)
  const calcSubtotal = price * quantity;
  console.log(calcSubtotal)
  product.querySelector('.subtotal span').innerHTML = calcSubtotal

  return calcSubtotal;


}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  const calc = document.querySelectorAll('.product')
  console.log(calc)
  let calcTotal = 0
  calc.forEach(product => {
    calcTotal = calcTotal + updateSubtotal(product)
  })

  // ITERATION 3
  let total = document.querySelector('#total-value span').innerHTML = calcTotal
  console.log(total)


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const buttonRemove = event.target;
  buttonRemove.parentNode.parentNode.remove();

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
