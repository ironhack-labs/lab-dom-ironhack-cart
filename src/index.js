// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span").innerText
  const quantity = product.querySelector(".quantity input").value

  let subtotal = product.querySelector(".subtotal span")

  subtotal.innerText = price * quantity

  return subtotal

  console.log('Calculating subtotal, yey!');


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.querySelectorAll('.product');

  for (let i = 0; i < products.length; i++) {
    const singleProduct = products[i]
    let subtotals = document.querySelectorAll(".subtotal span")
    subtotals = updateSubtotal(singleProduct)
  }


  //... your code goes here

  // ITERATION 3


  let totalValue = 0
  let subtotals = document.querySelectorAll(".subtotal span")

  for (let i = 0; i < subtotals.length; i++) {
    let subtotal = Number(subtotals[i].innerText)
    totalValue += subtotal
  }

  let total = document.querySelector("#total-value span")
  total.innerText = totalValue
  //console.log({ totalValue })
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
