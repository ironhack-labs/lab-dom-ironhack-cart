
function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value
  const productPrice = price * quantity

  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerHTML = productPrice
  return productPrice
}

function calculateAll() {
  debugger
  let arrayOfProducts = [ ... document.querySelectorAll(".product")]
  let totalPrice = 0
  for (value of arrayOfProducts) {
    totalPrice += updateSubtotal(value)
  }
  let elemTotalPrice = document.querySelector("#total-value span")
  elemTotalPrice.innerHTML = totalPrice
}

function removeProduct(event) {
  const chilcProductToDelete = event.currentTarget.parentNode.parentNode
  chilcProductToDelete.parentNode.removeChild(chilcProductToDelete);
  calculateAll()
}

function createProduct() {
  const arrayOfNewProductInputs = [ ... document.querySelectorAll(".create-product input")]
  const valueProductName = arrayOfNewProductInputs[0].value
  const valueProductPrice = arrayOfNewProductInputs[1].value

  const table = document.querySelector("tbody")

  const newProductRow = `
  <tr class="product">
    <td class="name">
      <span>${valueProductName}</span>
    </td>
    <td class="price">$<span>${valueProductPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

  table.insertAdjacentHTML('beforeend', newProductRow)

  const arrayOfremoveBtns = [ ... document.querySelectorAll(".btn-remove")]
  const newRemoveButton = arrayOfremoveBtns[arrayOfremoveBtns.length -1]
  newRemoveButton.addEventListener('click', removeProduct)

  arrayOfNewProductInputs[0].value = ""
  arrayOfNewProductInputs[1].value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createNewProduct = document.querySelector("#create")
  createNewProduct.addEventListener('click', createProduct)
  
  const arrayOfremoveBtns = [ ... document.querySelectorAll(".btn-remove")]
  arrayOfremoveBtns.forEach(butn => butn.addEventListener('click', removeProduct))


});
