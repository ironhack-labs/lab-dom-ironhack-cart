// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  let subTotal = product.querySelector('.subtotal span')
  
  const pricequnt = price * quantity
  
  subTotal.innerHTML = pricequnt

  return pricequnt
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 42
  //... your code goes here
  
  let allProducts = document.getElementsByClassName("product")
  
  /* for(let i = 0; i < allProducts.length; i++){
    updateSubtotal(allProducts[i])
  } */
  // ITERATION 3
  //... your code goes here

  let total = 0
  for(let i = 0; i < allProducts.length; i++){
    total += updateSubtotal(allProducts[i])
  }
  document.querySelector('#total-value span').innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  /* const productRemoved = document.getElementsByClassName('product')
  const removeButton = document.getElementsByClassName('btn-remove')
  productRemoved.removeChild(removeButton) */
  let parent = target.parentNode.parentNode
  parent.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButton = document.getElementsByClassName('btn-remove')
  for(let i = 0; i < removeButton.length; i++){
  removeButton[i].addEventListener('click', removeProduct)
  }
});
