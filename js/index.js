// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalElm = product.querySelector('.subtotal span');
  subtotalElm.innerText = subtotal;
  return subtotal;
}

// ITERATION 2

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }

// ITERATION 3

  const total = document.querySelector('.total-value span');
  let totalValue = 0;
  totalValue = allProducts.forEach((price) => {
    totalValue += price;
    return totalValue;
  });
  total.innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const removeButtons = document.getElementsByClassName('btn-remove');
  removeButtons.forEach(() => {
    removeButtons.addEventListener('click', (removeProduct) => {
      allProducts.remove();
    });
  });
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
