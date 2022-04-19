// ITERATION 1

function updateSubtotal(product) {
  // Still trying to figure it out
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.product input')

  const plusQuantity = quantity.value
  const realPrice = price.value

  let subTotalClass = plusQuantity * realPrice
  let subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = subTotalClass

  return subTotalClass

  
}

function calculateAll() {
  // ITERATION 2 
  /* for(let i = 0; i < product.getElementsByClassName('name').length){
    product.getElementsByClassName('name')[i]
    

  } */
  updateSubtotal(getElementsByClassName('name')[1] + getElementsByClassName('name')[0])

  // ITERATION 3
  calculateAll(updateSubtotal)
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
