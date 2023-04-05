// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  let subtotal  = Number(price.innerText * quantity.value)
  const total = product.querySelector('.subtotal span')
  
  total.innerText = subtotal

  return subtotal

}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll(`.product`);
  const totalPrice = document.querySelector(`#total-value span`)
  let total = 0

  products.forEach(element => {
     total += updateSubtotal(element)
  });

  // ITERATION 3
  //... your code goes here
  totalPrice.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const romoveBtn = document.querySelectorAll('.btn-remove');
  romoveBtn.forEach((currBtn) => {
    return currBtn.addEventListener('click', removeProduct);
  })

});
