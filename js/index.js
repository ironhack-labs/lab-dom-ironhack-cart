

function updateSubtotal(product) {
  console.log(product)
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subTotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subTotal
  return subTotal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
    let totalPrice = 0
    const cartHTML = document.getElementsByClassName('product')
    const arrayProducts = [...cartHTML]

    arrayProducts.forEach(product => totalPrice += updateSubtotal(product));

    // ITERATION 3
    //... your code goes here
    document.getElementById('total-value').children[0].innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const removeButton = event.currentTarget
  const product = removeButton.parentNode.parentNode
  product.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

 const removeButtons = document.getElementsByClassName('btn-remove')
 
 for (let button of removeButtons) {
    button.addEventListener('click',removeProduct)
 }
});
