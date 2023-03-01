// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value
  const totalPrice = price.innerHTML * quantity
  const subtotalDisplay = product.querySelector('.subtotal span').innerHTML = totalPrice
  
  return subtotalDisplay
 
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 const allProduct = document.getElementsByClassName('product');
 let TotalProduct = 0;
 [...allProduct].forEach((element) => {
   TotalProduct += updateSubtotal((element))  
  })

  const totalPrice = document.getElementById("total-value").querySelector('span').innerHTML = TotalProduct
console.log(TotalProduct)
  // ITERATION 3

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
