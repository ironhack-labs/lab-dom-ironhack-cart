// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity
  let sub = product.querySelector('.subtotal span')
  sub.innerText = subtotal
  return subtotal
}

function calculateAll() {
  
 /* window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });
  

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  */

  // end of test

  // ITERATION 2
  let total = 0

    const products = document.querySelectorAll('.product')
   products.forEach(function (elm) {
     total += updateSubtotal(elm)
   })

  // ITERATION 3
  const totalContainer = document.getElementById('total-value');
  totalContainer.querySelector('span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  console.log('Item removed, yey!');
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
}

// ITERATION 5







window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
   for (let btn of removeBtns) {
     btn.addEventListener('click', removeProduct);
   }

});
