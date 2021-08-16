// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  let productPrice = price.innerHTML
  let productQuantity = quantity.value

  let subtotal = productPrice * productQuantity

  let productSubtotal = product.querySelector('.subtotal span')
  productSubtotal.innerText = subtotal

  return subtotal
}

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);



  // ITERATION 2

  let total = 0;

  let totalPrice = document.querySelectorAll('.product')


  totalPrice.forEach(product => {
    updateSubtotal(product)


  // ITERATION 3


  total = total + updateSubtotal(product)
  document.querySelector('h2 span').innerHTML = total
  })

  }


// ITERATION 4




// ITERATION 5

function createProduct() {

  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
