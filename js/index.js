// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

const price = product.querySelector('.price span')
const quantity = product.querySelector('.quantity input')
const subtotal = product.querySelector(".subtotal span")

let precio = price.textContent
let cantidad = quantity.value
let total = precio * cantidad
subtotal.textContent = total

return total
}

function calculateAll() {
  // ITERATION 2
  const listProduct = document.querySelectorAll(".product")
  let total = 0
  listProduct.forEach(e => {
    let sum = updateSubtotal(e)
    total += sum
  })
  // ITERATION 3
  const totalValue = document.querySelector("#total-value span")
  totalValue.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const removeButtons = document.querySelectorAll(".btn-remove")
  removeButtons.forEach(button =>{
    if(button === event.target){
      button.parentNode.parentNode.remove()
    }
  })
  
}

// ITERATION 5

function createProduct() {
  const tbody = document.querySelector("tbody")
  const inputNumber = document.querySelector("input:first-child")
  const inputText = document.querySelector("input:last-child")
  const createProduct = document.getElementById("create")
  
  createProduct.addEventListener("click", ()=>{
    let price = inputNumber.value
    let nombre = inputText.textContent
    let product = document.createElement("tr")
    console.log(product, nombre, price)
    product.innerHTML = `<td class="name">
    <span>${nombre}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
  
  tbody.appendChild(product)
  })


 
  
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  addEventListener("click", removeProduct)
  createProduct()
});
