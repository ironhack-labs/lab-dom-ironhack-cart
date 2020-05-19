// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value
  let result = price * quantity
  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = result
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  // ITERATION 3
  //... your code goes here
  let acumTotal = 0
  const products = [...document.getElementsByClassName('product')];
  products.forEach(el => updateSubtotal(el))
  const subTotals = [...document.querySelectorAll('.subtotal span')]
  acumTotal = subTotals.reduce((acc, elem) => {
    acc += Number(elem.innerText)
    return acc
  }, 0)
  let totalNode = document.querySelector('#total-value span')
  totalNode.innerHTML = acumTotal
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.remove()
 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.getElementsByClassName('btn btn-remove')
  for (let i = 0; i < removeBtn.length; i ++){
    removeBtn[i].addEventListener('click', removeProduct, false)
  }
});
