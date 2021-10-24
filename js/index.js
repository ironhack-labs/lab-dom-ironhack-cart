// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelectorAll('.price span')[0].textContent
  const quantity = product.querySelectorAll('.quantity input')[0].value


    const sum = price*quantity
    const subtotal = product.querySelectorAll('.subtotal span')[0]

    subtotal.textContent = sum
  return sum


}

function calculateAll() {



  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let products = 0;
  let allItems = document.querySelectorAll('#cart .product');
  allItems.forEach(item => {
    products += updateSubtotal(item)
    
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerHTML = products;
  


  /* At the end of the calculateAll() function, reuse the total value you just calculated in the previous iteration 
  and update the corresponding DOM element. Calculate the total price for the products in your cart by summing all of the subtotals 
  returned by updateSubtotal() when it was called with each product. */
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
