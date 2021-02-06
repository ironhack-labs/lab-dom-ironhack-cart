// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = parseInt(price)*quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal
}


function calculateAll() {
  let eachProduct = 0
  const multipleProducts = document.getElementsByClassName('product');
  for(let i = 0; i<multipleProducts.length; i++){
    eachProduct += updateSubtotal(multipleProducts[i])
  }
  document.querySelector('#total-value span').innerHTML = eachProduct;

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

});
