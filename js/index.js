// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").textContent)
  const quantity = Number(product.querySelector(".quantity input").value)
  const subtotal = price * quantity
  product.querySelector(".subtotal").innerText = `$${subtotal.toFixed(2)}`
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product")
  let total = 0
  products.forEach((product) => {
    updateSubtotal(product)
    total += updateSubtotal(product)
  })
  document.querySelector("#total-value span").innerText = total.toFixed(2)
  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const tableBody = document.querySelector("table tbody")
  const productRow = document.createElement("tr")
  productRow.classList.add("product")
  const inputName = document.querySelector("#name") 
  const inputPrice = document.querySelector("#price")
  const name = inputName.value
  const price = inputPrice.value
  productRow.classList.add(".product")
  productRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
  tableBody.appendChild(productRow)
  productRow.querySelector(".btn-remove").addEventListener("click", removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll(".btn-remove")
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct)
  })
  const createBtn = document.querySelector("#create")
  createBtn.addEventListener("click", createProduct) 
});
