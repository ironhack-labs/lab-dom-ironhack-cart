// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const newPrice = price.innerHTML
  const newQuantity = quantity.value
  let calculate = newPrice * newQuantity
  let subtotal = product.querySelector('.subtotal span');
console.log(price)
  subtotal.innerText = calculate
return calculate

  
  //console.log('Calculating subtotal, yey!');

}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  let total = 0;
  const allProducts = document.getElementsByClassName('product');
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }
  let totalPrice = document.querySelector('#total-value span')

  totalPrice.innerHTML = total
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
