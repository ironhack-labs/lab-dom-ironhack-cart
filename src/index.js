// ITERATION 1

function updateSubtotal(product) {
  const value = console.log("Calculating subtotal, yey!")
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value

  let finalPrice = price * quantity

  let subtotal = product.querySelector(".subtotal span")

  subtotal.innerHTML = finalPrice
  return finalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product")
  updateSubtotal(singleProduct)
  // end of test

  // ITERATION 2
  let multiProducts = [...document.getElementsByClassName("product")]
  multiProducts.forEach((element) => updateSubtotal(element))

  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log("The target in remove is:", target)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate")
  calculatePricesBtn.addEventListener("click", calculateAll)

  //... your code goes here
})
