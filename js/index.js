// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  
  let subTotal = Number(price) * Number(quantity);
  
  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  let totalPrice = 0;

  let products = document.querySelectorAll('.product');

  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  document.querySelector('#total-value span').innerText = Number(totalPrice);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  
  let productTarget = target.parentNode;

  productTarget.remove()

  calculateAll()
}

// ITERATION 5
function createProduct() {
  // nope...
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

const removeBtn = document.querySelectorAll('.btn-remove');
  for(i = 0; i < removeBtn.length; i++) {
    removeBtn[i].onclick = function(event) {
      removeProduct(event);
    }
  }




