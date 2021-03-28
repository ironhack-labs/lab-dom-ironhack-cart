// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = document.querySelector ('.price span')
  const quantity = document.querySelector ('.quantity input')
  console.log(price, quantity)

  const priceValue = price.innerHTML

  const quantityValue = quantity.value 

  console.log(quantityValue, priceValue)
  
   const subTotal = priceValue * quantityValue

   console.log(subTotal)

   const subTotaProduct = document.querySelector ('.subtotal span')

   subTotaProduct.innerHTML = subTotal

   return subTotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

   const allProducts = document.querySelectorAll('.product')

   let total = 0

   allProducts.forEach(element => {
    total += updateSubtotal (element)
  

   });

  // ITERATION 3
  let allSubtotal = document.querySelector('#total-value span')

  allSubtotal.innerHTML = total

 
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
