// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value
  const subtotal = product.querySelector(".subtotal span")

  const subtotalValue = price * quantity;
  subtotal.innerHTML = subtotalValue;

  return subtotalValue;

}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2

  let total = 0

  const products = document.querySelectorAll('.product')
  products.forEach((product) => {
    total += updateSubtotal(product)
  })



  // ITERATION 3
  let totalDOM = document.querySelector("#total-value span");
  console.log(totalDOM)
  totalDOM.innerHTML = total;
  console.log(totalDOM.innerHTML)
  return total
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
  let removeButtons = querySelectorAll(".btn-remove")
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (removeProduct)
  })
});
