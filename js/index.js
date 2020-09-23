// ITERATION 1

function updateSubtotal(product) {
let unitPriceValue = product.querySelector('.price span').textContent
let quantityValue = product.querySelector('.quantity input').value
let subtotal = unitPriceValue * quantityValue;

product.querySelector(".subtotal span").innerText = subtotal;

return subtotal;
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

  const products = Array.from(document.querySelectorAll("tr.product"));
  console.log(products)

  let total = 0;

  products.forEach(product => {
    let finalValue = updateSubtotal(product);
    total += finalValue
  })

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerText = total;

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
