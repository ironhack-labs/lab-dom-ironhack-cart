// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');

    const priceValue = parseFloat(price.innerHTML); 
    const quantityValue = parseInt(quantity.value);

    const subtotalValue = priceValue * quantityValue;

    const subtotal = product.querySelector('.subtotal span');
    subtotal.innerHTML = subtotalValue;

  return subtotalValue;

}


 // ITERATION 2
  //... your code goes here

function calculateAll() {

  const products = document.getElementsByClassName('product');
  let total = 0

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  const totalElement = document.querySelector('#total-value span')
  totalElement.innerHTML = total;

} 

  // ITERATION 3
  //... your code goes here

  let total = 0

  const products = document.querySelectorAll('product');
  products.forEach(product => {
    total += updateSubtotal(product);
  });

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach (button => {
    addEventListener('click',removeeproduct);
  });


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
