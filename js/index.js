// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  console.log(quantity)
  //... your code goes here

  let subtotalValue = price * quantity 
  console.log(subtotalValue)
  product.querySelector('.subtotal span').innerHTML = subtotalValue
  return subtotalValue

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0

  const products =document.querySelectorAll('.product')
  products.forEach(function (elm) {
   total += updateSubtotal(elm)
  })
  
  // ITERATION 3
  //... your code goes here
  
  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove')

  removeBtn.forEach(function(elm) {
    elm.addEventListener('click', removeProduct)

  })

  const createBtn = document.querySelector('#create')

  createBtn.addEventListener('click', createProduct)


  //... your code goes here
});
