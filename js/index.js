// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!")

  //... your code goes here
  let sumSubTotal = 0
  product.forEach((el) => {
    const quantity = parseFloat(el.querySelector(".quantity > input").value)
    const price = parseFloat(el.querySelector(".price > span").innerText)

    const subTotal = quantity * price

    el.querySelector(".subtotal > span").innerText = subTotal

    sumSubTotal += subTotal
  })

  return sumSubTotal
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
  const total = updateSubtotal(allProducts)

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector("#total-value > span")
  totalValue.innerText = total.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log("The target in remove is:", target)
  //... your code goes here
  const theSelectedRow = target.parentNode.parentNode.parentNode
  target.parentNode.parentNode.setAttribute("class", "deleted-item")
  setTimeout(() => {
    theSelectedRow.removeChild(target.parentNode.parentNode)
  }, 300)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate")
  calculatePricesBtn.addEventListener("click", calculateAll)

  //... your code goes here
  const removeItemBtn = [...document.querySelectorAll(".btn-remove")]
  removeItemBtn.forEach((el) => {
    el.addEventListener("click", removeProduct)
  })
})
