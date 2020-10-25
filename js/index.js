// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML

  const quantity = product.querySelector('.quantity input').value


  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = price * quantity
  return subtotal
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.querySelectorAll('.product')
  let sumTotal = 0
  
  products.forEach(function (product) {
    let aux = updateSubtotal(product)
    sumTotal += parseInt(aux.innerText)
  })

  // ITERATION 3

  const totalPrice = document.querySelector('#total-value span')
  totalPrice.innerText = sumTotal

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


  const buttons = document.querySelectorAll('.btn')
  
  buttons.forEach(function (eachButton) {
    eachButton.onclick = function (removeProduct) {
      
  

    }
  })


  //... your code goes here
});
