// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const priceValue = price.textContent
  const quantityValue = quantity.value
  const subtotalValue = quantityValue * priceValue
  const subtotal = product.querySelector(".subtotal span")

  subtotal.textContent = subtotalValue
  return subtotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalValue = 0
  const products = document.querySelectorAll(".product")
  products.forEach(product => {
    totalValue += updateSubtotal(product)
  })
  // ITERATION 3
  //... your code goes here
  const totalValueNode = document.querySelector("#total-value span")
  totalValueNode.textContent = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const totalValueNode = document.querySelector("#total-value span")
  let totalValue = parseInt(totalValueNode.textContent)
  const subtotal = parseInt(target.parentNode.parentNode.querySelector(".subtotal span").textContent)
  console.log(totalValue, subtotal)
  totalValue -= subtotal
  totalValueNode.textContent = totalValue
  document.querySelector("tbody").removeChild(target.parentNode.parentNode)
}

// ITERATION 5

function createProduct() {
  //... your code goes here

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(".btn-remove")
  removeButtons.forEach(button => {
    button.addEventListener("click", removeProduct)
  })

});
