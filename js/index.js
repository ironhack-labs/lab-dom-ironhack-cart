// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').valueAsNumber;
    let subtotalPrice = price * quantity;
    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.innerText = Number(subtotalPrice.toFixed(2))
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = [...document.getElementsByClassName('product')];
  let total = 0;
  for (let product of allProducts) {
    let unitPrice = updateSubtotal(product);
    total += unitPrice;
  }
  const totalspan = document.querySelector('#total-value span');
  totalspan.innerHTML = Number(total.toFixed(2));
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
