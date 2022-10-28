// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector('.quantity input');

  let total = price.innerText * quantity.value;
  
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = total;

  return total;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  
  let totalValue=0
    for (let i = 0; i < allProducts.length; i++) {
      totalValue += updateSubtotal(allProducts[i]);
  }
  
  // ITERATION 3
  let totalText = document.querySelector('#total-value span')

  totalText.innerText = totalValue
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
