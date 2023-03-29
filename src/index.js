// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector(".quantity input")
  const subtotal = parseInt(price.innerText) * parseInt(quantity.value)
  const subTotalElement = product.querySelector(".subtotal span")
  subTotalElement.innerText = subtotal
  return subtotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = 0
  products.forEach(product =>{
    updateSubtotal(product)
    total += updateSubtotal(product)
  })
  const totalValueElement = document.getElementById("total-value")
  totalValueElement.innerText = total
  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove()
}

// ITERATION 5

function createProduct(event) {
  let target = event.currentTarget.parentNode.parentNode
  if(!target.querySelector("input").value) return

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
  // <tr class="product">
  //   <td class="name">
  //     <span>Ironhack Rubber Duck</span>
  //   </td>
  //   <td class="price">$<span>25.00</span></td>
  //   <td class="quantity">
  //     <input type="number" value="0" min="0" placeholder="Quantity" />
  //   </td>
  //   <td class="subtotal">$<span>0</span></td>
  //   <td class="action">
  //     <button class="btn btn-remove">Remove</button>
  //   </td>
  // </tr>

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