// ITERATION 1

function updateSubtotal(product) {
  console.log(product)
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = price.innerHTML*quantity.value
  product.querySelector('.subtotal span').innerHTML = subtotal
  
  return subtotal
}

function calculateAll() {
  let allProducts = document.getElementsByClassName('product')
  console.log(allProducts) 
  let total = 0 
  for(let i=0; i < allProducts.length; i++){
    console.log("allProducts[i]",allProducts[i])
    total += updateSubtotal(allProducts[i])
  }
  document.querySelector('#total-value span').innerHTML = total
  console.log(total)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  calculateAll();
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
