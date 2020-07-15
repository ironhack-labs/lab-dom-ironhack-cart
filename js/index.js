// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  console.log(price)
  console.log(quantity)
  let multiplyAmounts = price*quantity
  console.log(multiplyAmounts)
  let totalAmount =product.querySelector('.subtotal span')
  totalAmount.innerHTML = multiplyAmounts
  console.log(totalAmount)
}

  //... your code goes here


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let product = document.querySelectorAll('.product')
  product.forEach((product)=>{
    updateSubtotal(product)
    console.log(product)
    
  })

  //... your code goes here

  // ITERATION 3
  let total = document.getElementById('total-value span')
  console.log(total)
 
}

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
