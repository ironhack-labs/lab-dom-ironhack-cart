// ITERATION 1
//usar innerText by Pedro
function updateSubtotal(product) {
  const price = product.querySelector (`.price span`).innerText;
  const quantity = product.querySelector (`quantity input`).value;
  const total = price * quantity;
  product.querySelector(`.total span`).innerText = subTotal;
  return subTotal
  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); // dificil funcionar 
  const allProducts = document.getElementsByClassName (`product`);
  const calculateTotal = document.querySelector (`#total-value span`);

  let total = 0;

  for (let i =0; i < allProducts.length; i++) {
    total += updateSubtotal (allProducts[i]);
  }
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
});
