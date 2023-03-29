// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const priceInner = price.innerHTML
  const quantityInner = quantity.value
  let subtotal = priceInner * quantityInner
  const priceBox = product.querySelector(".subtotal")
  priceBox.innerText = `$${subtotal}`
  return subtotal
}

function calculateAll() {
  //ITERATION 2
  // sum of all products and quantities
  let subtotalSum = 0

  // runs each product through function above
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => {
    return subtotalSum += updateSubtotal(product)
  })
  
  // ITERATION 3
  //updates Total in DOM with subtotalSum
  const depictTotalValue = document.querySelector("#total-value span")
  //.querySelector("span")
  depictTotalValue.innerText = subtotalSum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
  calculateAll()

}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector(".product-name-input").value
  let unitPriceInput = document.querySelector(".product-price-input").value
  const productTable = document.querySelector(".product-table")

  let newProduct = `<tr class="product">
    <td class="name">
      <span>${nameInput}</span>
    </td>
    <td class="price">$<span>${unitPriceInput}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

  productTable.innerHTML += newProduct

  const allRemoveButtons = document.querySelectorAll(".btn-remove")
  allRemoveButtons.forEach(removeButton => {
    removeButton.addEventListener("click",removeProduct)
  })


  document.querySelector(".product-name-input").value = ""
  document.querySelector(".product-price-input").value = ""

  
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
  const allRemoveButtons = document.querySelectorAll(".btn-remove")
  allRemoveButtons.forEach(removeButton => {
    removeButton.addEventListener("click",removeProduct)
  })


  const createButton = document.querySelector("#create")
  createButton.addEventListener("click", createProduct)
});
