// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!")

  //... your code goes here
  let sumSubTotal = 0
  product.forEach((el) => {
    const quantity = el.querySelector(".quantity > input").value
    let price = el.querySelector(".price > span").innerText

    if (price !== "Free item") {
      let subTotal = quantity * price
      el.querySelector(".subtotal > span").innerText = subTotal
      sumSubTotal += subTotal
    } else {
      let subTotal = quantity * 0
      sumSubTotal += subTotal
    }
  })

  return sumSubTotal.toFixed(2)
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
    calculateAll()
  }, 300)
}

// ITERATION 5
function newItemValues() {
  const newItemInfo = [...document.querySelectorAll(".create-product input")]
  return newItemInfo.map((el) => el.value)
}

function nameCell() {
  const itemName = newItemValues()[0]
  const spanTag = document.createElement("span")
  const nameCell = document.createElement("td")
  nameCell.className = "name"

  if (!itemName) {
    alert(`Please, insert an item name`)
  } else {
    spanTag.innerText = itemName
    nameCell.appendChild(spanTag)
    return nameCell
  }
}

function priceCell() {
  const itemPrice = newItemValues()[1]
  const spanTag = document.createElement("span")
  const priceCell = document.createElement("td")
  priceCell.classList = "price"
  if (itemPrice === "0") {
    //alert(`Please, insert an item price`)
    spanTag.innerText = "Free item"
    priceCell.appendChild(spanTag)
    return priceCell
  } else {
    spanTag.innerText = Math.abs(itemPrice)
    priceCell.innerText = "$"
    priceCell.appendChild(spanTag)
    return priceCell
  }
}

function quantityCell() {
  const quantityCell = document.createElement("td")
  quantityCell.className = "quantity"

  const quantityInput = document.createElement("input")
  quantityInput.min = "0"
  quantityInput.placeholder = "Quantity"
  quantityInput.type = "number"
  quantityInput.setAttribute("value", "0")

  quantityCell.appendChild(quantityInput)
  return quantityCell
}

function subtotalCell() {
  const itemPrice = newItemValues()[1]
  const subtotalCell = document.createElement("td")
  const spanTag = document.createElement("span")

  if (itemPrice !== "0") {
    subtotalCell.className = "subtotal"
    subtotalCell.innerText = "$"
    spanTag.innerText = "0"
    subtotalCell.appendChild(spanTag)
    return subtotalCell
  } else {
    subtotalCell.innerText = ""
    spanTag.innerText = "Free item"
    subtotalCell.appendChild(spanTag)
    return subtotalCell
  }
}

function actionCell() {
  const actionCell = document.createElement("td")
  actionCell.className = "action"

  const removeBtn = document.createElement("button")
  removeBtn.className = "btn btn-remove"
  removeBtn.innerText = "Remove"
  removeBtn.addEventListener("click", removeProduct)

  actionCell.appendChild(removeBtn)
  return actionCell
}

function newRow() {
  const itemsTable = document.querySelector("#cart tbody")
  const newRow = document.createElement("tr")
  newRow.className = "product"

  newRow.appendChild(nameCell())
  newRow.appendChild(priceCell())
  newRow.appendChild(quantityCell())
  newRow.appendChild(subtotalCell())
  newRow.appendChild(actionCell())

  itemsTable.appendChild(newRow)

  return itemsTable
}

function inputsReset() {
  const inputs = [...document.querySelectorAll(".create-product input")]
  inputs[0].value = ""
  inputs[1].value = "0"
}

function createProduct() {
  //... your code goes here
  newRow()
  inputsReset()
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate")
  calculatePricesBtn.addEventListener("click", calculateAll)

  //... your code goes here
  const removeItemBtn = [...document.querySelectorAll(".btn-remove")]
  removeItemBtn.forEach((el) => {
    el.addEventListener("click", removeProduct)
  })

  const insertItemBtn = document.getElementById("create")
  insertItemBtn.addEventListener("click", createProduct)
})
