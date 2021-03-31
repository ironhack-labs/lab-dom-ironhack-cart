// ITERATION 1

function updateSubtotal(product) {
  /* console.log('Calculating subtotal, yey!'); */
  const price= product.querySelector(`.price span`)
  const quantity= product.querySelector(`.quantity input`)
  const subtotal= (price.innerText)*(quantity.value)
  product.querySelector(`.subtotal span`).innerText = subtotal
  return subtotal
  
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelectorAll('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName(`product`)
  const allProducts = [...products]
  let counter = 0
  allProducts.forEach((element)=>{
    updateSubtotal(element)
    counter += Number(element.querySelector(`.subtotal span`).innerText)
  })
  // ITERATION 3
  
  let total = document.querySelector(`#total-value span`)
  total.innerText = counter
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const products = document.getElementsByClassName(`product`)
  console.log (products)
  products.innerHTML = ``
  console.log (products)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll(`.btn-remove`)
  const allRemoveBtn = [...removeBtn]
  allRemoveBtn.forEach((element)=>{
    element.addEventListener(`click`, removeProduct)
  })
  //... your code goes here
});
