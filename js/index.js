document.addEventListener('DOMContentLoaded', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span');
    const priceValue = parseFloat(price.innerText)

    const quantity = product.querySelector('.quantity input')
    const quantityValue = parseInt(quantity.value)

    const subtotalPrice = priceValue * quantityValue

    const subtotal = product.querySelector('.subtotal span')
    subtotal.innerText = subtotalPrice.toFixed(2)

    return parseFloat(subtotal.innerText) 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = Array.from(document.querySelectorAll('.product'));
  // const allProducts = document.querySelectorAll('.product');
  // for (let product of allProducts){
  //   updateSubtotal(product);
  //   console.log(allProducts)
  // } RECORRER TODAS LAS VARIABLE

  const total = allProducts.reduce((total, product) => {
    return total + updateSubtotal(product)
  }, 0)

  const totalSum = document.querySelector('#total-value span');
  totalSum.innerText = total.toFixed(2)
  
  console.log(totalSum)



  // end of test

  // ITERATION 2

  
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

