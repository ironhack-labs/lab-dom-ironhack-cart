// ITERATION 1

function updateSubtotal(product) {
    
    //... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  console.log('Calculating subtotal, yey!');
  const multiplication = price.innerHTML * quantity.value
  console.log(multiplication)
  const subtotal = product.querySelector('.subtotal span')
  return subtotal.innerHTML = multiplication
}
  
   
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct)
  // end of test
  let shoppingValue = 0
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach(elm => {
    shoppingValue += updateSubtotal(elm)
  })
  console.log(shoppingValue)

  // ITERATION 3
  //... your code goes here
  const calculateTotal = document.querySelector('#total-value span')
  calculateTotal.innerHTML = shoppingValue
}

// ITERATION 4

function removeProduct(event) {

  //... your code goes here
  const target = event.currentTarget.parentNode;
  target.parentNode.removeChild(target)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  alert ('hola')
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const removeButton = document.querySelectorAll('.action')
  removeButton.forEach(function (eachButton) {
    eachButton.onclick = function () {
      removeProduct(event)
    }
  })
  const createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct);

});
