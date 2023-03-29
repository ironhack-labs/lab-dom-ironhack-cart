function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector(".quantity input")
  const subtotal = parseInt(price.innerText) * parseInt(quantity.value)
  const subTotalElement = product.querySelector(".subtotal span")
  subTotalElement.innerText = subtotal
  return subtotal
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0
  products.forEach(product =>{
    total += updateSubtotal(product)
  })
  const totalValueElement = document.getElementById("total-value")
  totalValueElement.innerText = total
  return total
}

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove()
}

function createProduct(event) {
  let target = event.currentTarget.parentNode.parentNode
  if(!target.querySelector("input").value){
    target.querySelector("input").style.border = "2px solid red"
    return;
  }
  target.querySelector("input").style.border = "none"
  let newProduct = document.createElement("tr")
  newProduct.classList.add("product")

  let nameTd = document.createElement("td")
  nameTd.classList.add("name")
  let nameSpan = document.createElement("span")
  nameSpan.innerText = target.querySelector("input").value
  nameTd.appendChild(nameSpan)

  let priceTd = document.createElement("td")
  priceTd.classList.add("price")
  let priceSpan = document.createElement("span")
  priceSpan.innerText = target.querySelector('input[type="number"]').value + ".00"
  priceTd.innerText = "$"
  priceTd.appendChild(priceSpan)
  
  let quantityTd = document.createElement("td")
  quantityTd.classList.add("quantity")
  let quantityInput = document.createElement("input")
  quantityInput.type = "number"
  quantityInput.min = 0
  quantityInput.value = 0
  quantityInput.placeholder = "Quantity"
  quantityTd.appendChild(quantityInput)

  let subtotalTd = document.createElement("td")
  subtotalTd.classList.add("subtotal")
  let subtotalSpan = document.createElement("span")
  subtotalTd.innerText = "$"
  subtotalSpan.innerText = "0"
  subtotalTd.appendChild(subtotalSpan)

  let removeButtonTd = document.createElement("td")
  removeButtonTd.classList.add("action")
  let removeButton = document.createElement("button")
  removeButton.classList.add("btn")
  removeButton.classList.add("btn-remove")
  removeButton.innerText = "Remove"
  removeButtonTd.appendChild(removeButton)
  removeButton.addEventListener("click", function(event){
    removeProduct(event)
  })

  newProduct.appendChild(nameTd)
  newProduct.appendChild(priceTd)
  newProduct.appendChild(quantityTd)
  newProduct.appendChild(subtotalTd)
  newProduct.appendChild(removeButtonTd)

  document.getElementsByTagName("tbody")[0].appendChild(newProduct)

  target.querySelectorAll("input").forEach(input => input.value = "")
  console.log(target)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll("button.btn-remove")
  removeButtons.forEach(button => {
    button.addEventListener("click", function(event){
      removeProduct(event)
    })
  })
  const createProductBtn = document.getElementById("create")
  createProductBtn.addEventListener("click", (event) =>{
    createProduct(event)
  })
});