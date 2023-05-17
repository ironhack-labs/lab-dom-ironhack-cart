// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = Number(price.innerText);
  const quantityValue = Number(quantity.value);
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = (priceValue * quantityValue)
  return priceValue * quantityValue
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test


let totalValue = 0
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach((eachProduct) => {
  totalValue += updateSubtotal(eachProduct) 
  })
const total = document.querySelector('#total-value span');
total.innerText = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target)
  console.log('The target in remove is:', target);
  target.closest('tr').remove()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((element) => {
    element.addEventListener('click', removeProduct);
  })

  //... your code goes here
});
