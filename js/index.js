// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = price.innerHTML * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

  //... your code goes here


  function calculateAll() {
    // ITERATION 2
    const products = document.getElementsByClassName('product');
    let total = 0;
    for (i = 0; i < products.length; i++) {
      const totalProduct = updateSubtotal(products[i]);
      total += totalProduct;
    }
  

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;
}
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  
    const target = event.currentTarget;
  
  
  
     const parent = target.parentNode;
     const toRemove = parent.parentNode;
     toRemove.parentNode.removeChild(toRemove);
   
   
     const subtotalCurrentProduct = toRemove.querySelector('.subtotal span');
     const subtotalPrice = subtotalCurrentProduct.innerHTML;
     const totalPrice = document.querySelector('#total-value span');
     totalPrice.innerHTML -= subtotalPrice;
   
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

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
