// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const calculateSubtotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = calculateSubtotal
  return calculateSubtotal
}


// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2
// ITERATION 3

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  const products = [...allProducts]
  let total = 0;
  products.forEach((el) => {
    total = total + updateSubtotal(el);
  });
  document.querySelector("#total-value span").innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove()
  return calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.getElementsByClassName('btn-remove')
  const removeBtnArr = [...removeButton]
  for (let btn in removeBtnArr) {
    console.log(btn)
    removeBtnArr[btn].addEventListener('click', removeProduct)
  }
});