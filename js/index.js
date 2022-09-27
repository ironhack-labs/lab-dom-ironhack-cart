// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span') ;
  const quantity = product.querySelector('.quantity input').value
  const subtotalPrice = price.innerHTML * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalPrice  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach((eachProduct)=>{
    updateSubtotal(eachProduct)
  })
  

  // ITERATION 3

  // const totalPrice = updateSubtotal(product)
  console.log(totalPrice)

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
