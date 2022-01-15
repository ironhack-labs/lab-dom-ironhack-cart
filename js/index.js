// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')

  const getSubtotal = price * quantity
  subtotal.innerText = getSubtotal
  return getSubtotal
  
}

function calculateAll() {
 
  // ITERATION 2

  const listOfProducts = document.querySelectorAll('.product')
    listOfProducts.forEach(eachProduct => {
      updateSubtotal(eachProduct)
      
    })  

  // ITERATION 3 
  // const total = document.querySelector('#total-value span')
  //   total.forEach(eachSubtotal => {
  //     calculateAll(eachSubtotal)

  //    })
  
  

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
