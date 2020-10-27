// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal').innerText = subtotal;
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total = 0;
  const listOfProd = document.querySelectorAll('.product');

  listOfProd.forEach(element => {
    total += updateSubtotal(element);
  });

  const totalValue = document.querySelectorAll('#total-value span');
  totalValue[0].innerText = total;
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.remove();
  console.log('The target in remove is:', target);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', removeProduct);
  })

  //... your code goes here
});
