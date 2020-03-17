const product = document.querySelectorAll(".product")
let removeBtn = document.querySelectorAll(".btn-remove")
const table = document.querySelector("tbody")
const createBtn = document.querySelector("#create")

function updateSubtotal() {
  const price = document.querySelectorAll(".price span")
  const subtotal = document.querySelectorAll(".subtotal span")

  let accumulator = 0
  ;[...price].map(($price, i) => {
    let unit = document.querySelectorAll("input[type='number']")

    unit = [...unit][i].value
    let partial = Number($price.innerHTML) * unit
    ;[...subtotal][i].innerHTML = partial

    accumulator += partial
  })

  return accumulator
}

function calculateAll() {
  const total = document.querySelector("#total-value span")
  let totalSum = updateSubtotal()

  total.innerHTML = totalSum
}

window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate")

  $calculateTrigger.addEventListener("click", calculateAll)
})
;[...removeBtn].map(elem =>
  elem.addEventListener(
    "click",
    function(e) {
      productRemoveListener(e)
    },
    false
  )
)

createBtn.addEventListener(
  "click",
  function() {
    createProduct()
  },
  false
)

function productRemoveListener(event) {
  let currentProduct = event.target.parentNode.parentNode
  table.removeChild(currentProduct)
  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  let productName = document.querySelector(".create-product input[type='text']")

  let productPrice = document.querySelector(
    ".create-product input[type='number']"
  )

  if (productName.value != "" && productPrice.value != 0) {
    table.innerHTML += `
<tr class="product">
        <td class="name">
          <span>${productName.value}</span>
        </td>
        <td class="price">$<span>${productPrice.value}</span></td>
        <td class="quantity">
          <input type="number"
            value="0"
            min="0"
            placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>
`

    removeBtn = document.querySelectorAll(".btn-remove")
    ;[...removeBtn].map(elem =>
      elem.addEventListener(
        "click",
        function(e) {
          productRemoveListener(e)
        },
        false
      )
    )
  }

  productName.value = ""
  productPrice.value = 0
}
