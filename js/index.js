// ITERATION 1

function updateSubtotal(product) {
  let price =product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal =price*quantity;
  product.querySelector('.subtotal').innerText = subTotal;
  return subTotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');

  const groupOfProducts = document.querySelectorAll('.product');
  let total = 0;
  groupOfProducts.forEach(productInTheList => {
    total += updateSubtotal(productInTheList);
  });
  document.getElementById('total-value').innerText = `$${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5
document.getElementById('create').addEventListener('click', createProduct);
function createProduct() {
  let createdName = document.querySelector('.create-product td input').value;
  let createdPrice =document.querySelector('.create-product td input').value;
  console.log(`you want to create ${createdName} and price it at ${createdPrice}`);  
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', removeProduct);
  })
  //... your code goes here
});
