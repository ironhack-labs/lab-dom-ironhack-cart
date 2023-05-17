// ITERATION 1

function updateSubtotal(productElement, subtotalElement) {
  //... your code goes here
  const price = productElement.querySelector('.price span');
  const priceValue = Number(price.innerText);
  const quantity = productElement.querySelector('.quantity input');
  const quantityValue = Number(quantity.value);
  const subTotal = priceValue * quantityValue;
  subtotalElement.innerText = subTotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    const productElement = allProducts[i];
    const subtotalElement = productElement.querySelector('.subtotal > span');
    updateSubtotal(productElement, subtotalElement);
    const subtotalValue = Number(subtotalElement.innerText);
    totalPrice += subtotalValue;
  // ITERATION 3
  //... your code goes here
}
  const totalOverwriter = document.querySelector('#total-value span');
  totalOverwriter.innerText = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode;
  const productContainer = productRow.parentNode;
  productContainer.removeChild(productRow);

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
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});
