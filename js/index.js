// ITERATION 1


function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  
  //... your code goes here
  let price = product.querySelector('.price span').innerText
  //console.log(price)
  let quantity = product.querySelector('.quantity input').value
  //console.log(quantity)
  let subtotalMath = (price * quantity)
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subtotalMath
  return subtotalMath
  
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  //console.log(singleProduct)
  // end of test

  // ITERATION 2
  //... your code goes here
  let allProducts = document.querySelectorAll('.product')
  let totalAllProducts = 0
  allProducts.forEach((elem) => {
    updateSubtotal(elem)
    totalAllProducts += updateSubtotal(elem)
    //console.log(elem)
  })
  // ITERATION 3
  //... your code goes here
  let totalPrice = document.querySelector('#total-value span')
  totalPrice.innerText = totalAllProducts

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log(event.target.parentNode.parentNode)
  //... your code goes here
  //event.currentTarget
  //removeChild
  //parentNode
  let bigParent = event.target.parentNode.parentNode
  bigParent.parentNode.removeChild(bigParent)

  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtns = document.querySelectorAll('.btn-remove')
  removeBtns.forEach((elem) => {
    elem.addEventListener('click', (rem) => {
      removeProduct(rem)
    })
  })
});
