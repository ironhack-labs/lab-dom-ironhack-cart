// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let priceNode = product.querySelector('.price span')
  let quantityNode = product.querySelector('.quantity input')
  let price = priceNode.textContent
  let quantity = quantityNode.value

  let subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = price * quantity



}

document.querySelector('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  const singleProduct = document.querySelectorAll('.product');
  singleProduct.forEach(product => {
    console.log('Calculating subtotal, yey!');
    updateSubtotal(product)
  })


  let totalValueNode = document.querySelector('#total-value span')
  let totalValue = totalValueNode.innerText * 0

  singleProduct.forEach(product => {

    singleSubtotalNode = product.querySelector('.subtotal span')
    singleSubtotal = singleSubtotalNode.textContent * 1
    totalValue += singleSubtotal * 1
  });

  totalValueNode.textContent = totalValue

}
calculateAll()
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let productsNode = document.querySelectorAll('.product')
  productsNode.forEach(singleProduct => {
    if (target === singleProduct.querySelector('.btn-remove')) {
      singleProduct.remove()
    }
  });





  //... your code goes here
}

window.addEventListener('load', () => {
  const removeBtnNode = document.querySelectorAll('.btn-remove');
  removeBtnNode.forEach(removeButton => {
    removeButton.addEventListener('click', removeProduct);
  });


  //... your code goes here
});

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
