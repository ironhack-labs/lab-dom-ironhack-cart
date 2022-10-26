// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  //... your code goes here
  const quantity = product.querySelector('.quantity input')

  const priceNumber = price.innerHTML
  const quantityValue = quantity.value

  let subTotal1 = (priceNumber*quantityValue)

  /* console.log(priceNumber)
  console.log(quantityValue)
  console.log(subTotal1)  */

  const subTotal = product.querySelector(".subtotal span")
  subTotal.innerHTML = subTotal1

  return subTotal1
}
//console.log(updateSubtotal(document.querySelector('.product')))

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  let some = document.querySelectorAll('.product')
  console.log(some)

  let total = 0
  for (let i=0; i<some.length; i++){
    total += updateSubtotal(some[i])
  }
  console.log(total)

  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector('#total-value span') 
  totalValue.innerText = total
  console.log(total)
  return total
}
console.log(calculateAll())

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
