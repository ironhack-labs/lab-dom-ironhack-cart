// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseInt(product.querySelector('.quantity input').value);
  let subTotal = price * quantity;
  console.log(subTotal);
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let total = 0;
  const singleProduct = document.querySelectorAll('.product');
  singleProduct.forEach(product => {
    total += updateSubtotal(product);
  })

  document.querySelector("#total-value span").innerHTML = total;

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
