// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  const subtotalValue = priceValue * quantityValue;
  subtotal.innerText = subtotalValue;
  return subtotalValue;
}

  function calculateAll() {
    const products = document.getElementsByClassName('product');
    let totalPrice = 0;
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const subtotal = updateSubtotal(product);
      totalPrice += subtotal;
    }
  
    const totalValue = document.querySelector('#total-value span');
    totalValue.textContent = totalPrice;
  }



//Bonus ITERATION 4

 function removeProduct(event) {
    const target = event.currentTarget;
    const productRow = target.parentNode.parentNode;
    const tbody = document.querySelector('#cart tbody');
  
    tbody.removeChild(productRow);
  
    // Recalculate total after removing product
    calculateAll();
  }
  
  const removeButtons = document.querySelectorAll('.btn-remove');
  
  removeButtons.forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
  
// ITERATION 5 - Not finished

function createProduct() {
  //... your code goes here
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  
});
