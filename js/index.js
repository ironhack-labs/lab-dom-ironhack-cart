





function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');


  const totalPrice = price.innerHTML * quantity.value

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = totalPrice

  return totalPrice


}



function calculateAll() {

  const allProducts = document.querySelectorAll('.product')

  let sum = 0

  for (let i = 0; i < allProducts.length; i++) {
    sum += updateSubtotal(allProducts[i])
  }

  const totalName = document.querySelector('#total-value span')

  totalName.innerText = sum

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
