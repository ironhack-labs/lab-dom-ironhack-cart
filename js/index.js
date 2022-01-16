// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const total = parseFloat(price.innerText) * parseFloat(quantity.value)
  const subtotal = product.querySelector(".subtotal span")

  subtotal.innerText = total

  return total

  
  //... your code goes here
}





function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.querySelectorAll(".product")
  let finalTotal = 0 

  for (let i = 0; i < multipleProducts.length; i++) {
    finalTotal += updateSubtotal(multipleProducts[i])
  }


  // ITERATION 3
  document.querySelector("#total-value span").innerText = finalTotal

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
