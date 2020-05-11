// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity;
  console.log('Calculating subtotal, yey!');
}

// ITERATION 2
function calculateAll() {
  const collection = document.querySelectorAll('.product');
  for (let i = 0; i < collection.length; i++) {
    document.querySelectorAll(".subtotal span").innerHTML =  updateSubtotal(collection[i])
  }
}

// ITERATION 3
document.querySelector("#total-value span").innerHTML = calculateAll()
//prints "$undefined"

// BONUS -----------------------------------------------------------
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
