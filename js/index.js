window.onload = () => {
  makeRemoveWork()
}

// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const updatedSubtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = updatedSubtotal;
  return updatedSubtotal;

}

function calculateAll() {
  // ITERATION 2

  let products = document.querySelectorAll(".product")
  let total = 0

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i])
  }

  // ITERATION 3

  document.querySelector("#total-value span").innerText = total

}

// ITERATION 4

function makeRemoveWork() {
  let removeButtons = document.getElementsByClassName("btn-remove")

  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }
}


function removeProduct(event) {

  const target = event.currentTarget
  target.parentNode.parentNode.remove()
  calculateAll()
  //... your code goes here
}

// ITERATION 5

let createButton = document.getElementById("create")
createButton.addEventListener("click", createProduct)

function createProduct() {
  let productName = document.querySelector(".create-product input[type=text]").value
  let productPrice = document.querySelector(".create-product input[type=number]").value

  let tableBody = document.querySelector("tbody")
  let newRow = document.createElement("tr")
  tableBody.appendChild(newRow)
  newRow.classList.add("product")

  newRow.innerHTML = `<td class="name"><span>${productName}</span></td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

  makeRemoveWork()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
