// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span').innerHTML 
    const quantity = product.querySelector('.quantity input').value
    let subtotal = product.querySelector('.subtotal span')
    subtotal.innerHTML = price * quantity
    return price * quantity
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
let total = 0;
  // ITERATION 2
  let allProducts = document.querySelectorAll('.product')
  for(let i= 0; i< allProducts.length; i++){
    total += updateSubtotal(allProducts[i])
  }
  

  // ITERATION 3
  let totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML = total
  return totalValue
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
//let body = document.querySelector('body')
//let item = document.querySelector('.product')
//body.removeChild(item)
target.parentElement.parentElement.remove()
let priceRmv=document.querySelector('.price span')
priceRmv.remove()
  
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
  let removeBtn = document.querySelectorAll('.btn-remove')
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct)
  }

  //... your code goes here
});
