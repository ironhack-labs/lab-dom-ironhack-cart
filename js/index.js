// ITERATION 1



function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input').value;
  let priceValue = price.innerText
  let subtotal = product.querySelector('.subtotal span');
  let totalSubtotal = priceValue * quantity;
  subtotal.innerHTML = totalSubtotal
  return totalSubtotal;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  let totalValue = 0
  const products = document.getElementsByClassName('product')
  for(let i = 0; i < products.length; i++) {
   totalValue += updateSubtotal(products[i])
  }
  let totalPrice = document.querySelector('#total-value span')
  
  totalPrice.innerHTML = totalValue


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
