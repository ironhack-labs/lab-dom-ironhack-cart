const cart = document.querySelector('#cart tbody')

// ITERATION 1

function updateSubtotal(product, index) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = parseFloat(price.innerHTML) // Convertimos a número
  const quantityValue = quantity.value
  const subtotalValue = quantityValue * priceValue

  subtotal.innerHTML = subtotalValue

  return(subtotalValue) // RETORNAR VALOR TOTAL
}

function calculateAll() {

  // ITERATION 2
  let newValue = 0 // NUEVO VALOR TOTAL
  let singleProduct = document.querySelectorAll('.product');

  singleProduct.forEach((product, index) => {
    let newPrice = updateSubtotal(product, index);
    newValue += newPrice // DEFINIR VALOR TOTAL
  })

  console.log(newValue) // CONSOLE ESTE VALOR

  // const singleProduct = document.getElementsByClassName('product');
  // for(let product of singleProduct) {
  //   updateSubtotal(product);
  // }
  
  
  // ITERATION 3
  const total = document.querySelector('#total-value span')
  total.innerHTML = newValue

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;  
  const elementToRemove = target.parentNode.parentNode

  cart.removeChild(elementToRemove) // Eliminamos el elemento
  calculateAll() // Volvemos a calcular el total
}

// ITERATION 5

function createProduct() {
  let productName = document.getElementById('new-name')
  let productPrice = document.getElementById('new-price')

  if(productName.value !== "" && productPrice.value !== "0") {
    let newRow = document.createElement("tr")
    newRow.classList.add('product')
    newRow.innerHTML = `<td class="name">
      <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${parseFloat(productPrice.value).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
    cart.appendChild(newRow)
    
    console.log(productName.value, parseFloat(productPrice.value))
  }

  // Resetear valores
  productName.value = ""
  productPrice.value = "0"

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Delete buttons events
  const deleteBtns = document.querySelectorAll('.btn-remove');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct)
  })

  // Create product event
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
