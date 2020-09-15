
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`).innerText;
  const quantity = product.querySelector(`.quantity input`).value;
  const newSubtotalElement = product.querySelector(`.subtotal span`)
  console.log(price);
  console.log(quantity);
  newSubtotalElement.innerText = price * quantity;
  return price * quantity
}

function calculateAll() {

  const allProducts = document.querySelectorAll(`.product`)
  let total = 0
  allProducts.forEach((product) => {
    let subtotal = updateSubtotal(product)
    total += subtotal
  })
  console.log(allProducts);
  newTotal = document.querySelector(`#total-value span`).innerText=total
  
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
