// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const total = Number(price * quantity);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = total;
  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProductChilds = document.getElementsByClassName('product');
  let finalTotal = 0;
  for (let i = 0; i < allProductChilds.length; i++) {
    finalTotal += updateSubtotal(allProductChilds[i]);

    let finalTotalInjection = document.querySelector('#total-value span');
    finalTotalInjection.innerHTML = finalTotal;
  }

  // ITERATION 3
  // DONE AND MERGE IN ITERATION 2
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
