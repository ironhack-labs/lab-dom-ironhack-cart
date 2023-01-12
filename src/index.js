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
  /* const singleProduct = document.querySelector(".product")
  updateSubtotal(singleProduct) */

  // ITERATION 2 & 3
  let cartValue = 0 // returning value
  let multiProducts = [...document.getElementsByClassName("product")] // all products in an array

  multiProducts.forEach((element) => {
    updateSubtotal(element), (cartValue += updateSubtotal(element)) // loop to update subtotal and total cart value
  })

  document.querySelector("#total-value span").innerHTML = `${cartValue}` // place value into DOM
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
