// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  console.log(price)
  const quantity = product.querySelector('.quantity input').value;

  //console.log(typeof(product.querySelector('.price.span')))
  //console.log(typeof(product.querySelector('.quantity.span')))
  
  let prodsubtotal = price * quantity
  //console.log(typeof(prodsubtotal))
  //console.log(prodsubtotal)
  //console.log(prodsub)

  product.querySelector('.subtotal span').innerHTML = prodsubtotal
  return prodsubtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let calculateTotal = 0;
  const eachSubtotal = document.querySelectorAll(".product")
  eachSubtotal.forEach(function (elm) {
    calculateTotal += updateSubtotal(elm)
  })
  console.log(calculateTotal)

  // ITERATION 3
  //... your code goes here

  document.querySelector("#total-value span").innerHTML = calculateTotal
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
