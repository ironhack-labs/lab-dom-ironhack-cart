// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const comboPriceQty = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = comboPriceQty;
  return comboPriceQty;
}

// they want us to use the innerText as its aware of rendered appearance of text
//  can extract the value from an input by accessing an the input element's value property.


  // ITERATION 2

  function calculateAll() {
    const allProducts = document.getElementsByClassName('product');
    let total = 0;
    for (i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
    }

    let totalPrice = document.querySelector('#total-value span').innerHTML
   

  // ITERATION 3
  //... your code goes here
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
