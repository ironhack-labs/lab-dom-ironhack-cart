// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let total = product.querySelector('.subtotal span')

  let prodTotal = quantity.value * price.innerHTML;

  total.innerText = prodTotal;

  return prodTotal;
}

function calculateAll() {
  // ITERATION 2
  let products = document.querySelectorAll('.product');
  
  let productsArr = Array.from(products);

  function total() { 
      const reducer = (sum, item) => {
      return sum + updateSubtotal(item)
    }

    return productsArr.reduce(reducer, 0);
  }
  // ITERATION 3
  let totalValue = document.getElementById('total-value');
  totalValue.firstElementChild.innerText = total()
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
