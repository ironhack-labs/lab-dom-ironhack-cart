// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').valueAsNumber
  const subtotal = +price * quantity
  const getSubtotal = product.querySelector('.subtotal span')
  getSubtotal.innerText = `${subtotal}`
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
   const allProducts = document.getElementsByClassName('product')
   const productsList = [...allProducts]                              //create a new array to use "for of method later"
   let total = 0;

   for (const product of productsList) {
     total += updateSubtotal(product)                               //add to a previous method
   }
  // ITERATION 3
  //... your code goes here
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  const parent = target.parentNode.parentNode

  parent.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
