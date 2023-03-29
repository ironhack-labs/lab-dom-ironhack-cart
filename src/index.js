// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value

  let newProduct = price * quantity
  console.log(newProduct)
  product.querySelector(".subtotal span").innerText = newProduct
  return newProduct
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProducts = document.querySelectorAll(".product")
  console.log(multipleProducts)

  let total = 0

  multipleProducts.forEach(product => { 

    total += updateSubtotal(product)
    console.log(total)

  })

  // ITERATION 3

  document.querySelector("#total-value span").innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  //console.log(event.currentTarget.parentNode.previousSibling.previousSibling.lastChild.innerText)

  document.querySelector("#total-value span").innerHTML -= event.currentTarget.parentNode.previousSibling.previousSibling.lastChild.innerText
  
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);

  target.remove()
}

// ITERATION 5

function createProduct() {

const newTr = document.createElement("tr")
newTr.classList.add("product")

const newTdName = document.createElement("td")
newTdName.classList.add("name")

const newSpanName = document.createElement("span")
const productName = document.querySelector(".create-product input").value
newSpanName.innerText = productName

const newTdPrice = document.createElement("td")
newTdPrice.classList.add("price")
newTdPrice.innerText = "$"

const newSpanPrice = document.createElement("span")
newSpanPrice.innerText = document.querySelector(".new-price").value

const newTdQuantity = document.createElement("td")
newTdQuantity.classList.add("quantity")

const newInput = document.createElement("input")
newInput.type = "number"
newInput.value = "0"
newInput.min = "0"
newInput.placeholder = "Quantity"

const newTdSubtotal = document.createElement("td")
newTdSubtotal.classList.add("subtotal")
newTdSubtotal.innerText = "$"

const newSpanSubtotal = document.createElement("span")
newSpanSubtotal.innerText = "0"

const newTdAction = document.createElement("td")
newTdAction.classList.add("action")

const newButton = document.createElement("button")
newButton.classList.add("btn")
newButton.classList.add("btn-remove")
newButton.innerText = "Remove"
newButton.addEventListener("click", removeProduct)

newTr.appendChild(newTdName).appendChild(newSpanName)
newTr.appendChild(newTdPrice).appendChild(newSpanPrice)
newTr.appendChild(newTdQuantity).appendChild(newInput)
newTr.appendChild(newTdSubtotal).appendChild(newSpanSubtotal)
newTr.appendChild(newTdAction).appendChild(newButton)

document.querySelector("tbody").appendChild(newTr)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove")
  removeBtn.forEach(element => {
    element.addEventListener("click", removeProduct)
  })

  const createProductBtn = document.getElementById("create")
  createProductBtn.addEventListener("click", createProduct)
});
