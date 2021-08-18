// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const price2 = price.innerHTML
  const quantity2 = quantity.value
  const subTotal =  product.querySelector('.subtotal span')
  const subTotal2 = price2*quantity2
  subTotal.innerHTML = subTotal2
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  let totalsum = 0
  // ITERATION 2
  let subtotal = document.querySelectorAll('.product')

  products.forEach((singleProduct) => {
    subtotal = updateSubtotal((singleproduct)
    total += subtotal
    )
  })
    
  }

  // ITERATION 3
 const total = document.querySelector("#total-value span");
 total.innerHTML = totalsum
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
