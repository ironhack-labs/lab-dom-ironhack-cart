// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity= product.querySelector('.quantity input').value;
  let subtotal= product.querySelector('.subtotal span')
  let sum = price*quantity;
  subtotal.innerText= sum;
  return sum
}

function calculateAll() {
  let products = document.getElementsByClassName('product')
  let arrProducts = [...products]
  let totalPrice = document.querySelector('#total-value span');
  let total = 0 
  arrProducts.forEach((product)=>{
    total += updateSubtotal(product) 
  })
  totalPrice.innerHTML = total
  console.log(totalPrice)
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
