// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText

  const quantity = product.querySelector('.quantity input').value
  const subTotal = price * quantity;

  let subTotalText = product.querySelector('.subtotal  span');

  subTotalText.innerText = subTotal;

  //.. your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // ... your code goes here
  const allProducts = document.getElementsByClassName('product')

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i])
  }

  // }

  // ITERATION 3
  //... your code goes here
  let allSubTotals = document.querySelectorAll('.subtotal span')

  let sum = 0

  for (let i = 0; i < allSubTotals.length; i++) {
    sum += parseInt(allSubTotals[i].innerText)
  }

  const totalPrice = document.getElementById('total-value')

  totalPrice.innerText = `Total: $${sum}`
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
