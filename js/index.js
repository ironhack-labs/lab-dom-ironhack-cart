// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!")

  //... your code goes here
  product.forEach((el) => {
    const quantity = parseFloat(el.querySelector(".quantity > input").value)
    const price = parseFloat(el.querySelector(".price > span").innerText)

    const subTotal = quantity * price

    el.querySelector(".subtotal > span").innerText = subTotal
  })
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product")
  // updateSubtotal(singleProduct)
  // end of test

  // ITERATION 2
  //... your code goes here
  const productsQuery = document.querySelectorAll(".product")
  const allProducts = [...productsQuery]
  updateSubtotal(allProducts)

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log("The target in remove is:", target)
  //... your code goes here
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
