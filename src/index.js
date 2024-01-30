let totalPrices = []
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

  // totalPrices.splice(index, 1, subtotalValue)
  totalPrices.push(subtotalValue)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  totalPrices = [] // Reiniciar totalPrices cada vez que se calcula el total

  // ITERATION 2
  let singleProduct = document.querySelectorAll('.product');
  singleProduct.forEach((product, index) => {
    updateSubtotal(product, index);
  })

  // const singleProduct = document.getElementsByClassName('product');
  // for(let product of singleProduct) {
  //   updateSubtotal(product);
  // }
  
  
  // ITERATION 3
  const total = document.querySelector('#total-value span')
  total.innerHTML = totalPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log(totalPrices)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  
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
