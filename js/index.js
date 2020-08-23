// ITERATION 1
function updateSubtotal(product) {

  // Select targets and get the info
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  
  // Calculate subtotal price value
  const subtotalValue = price * quantity
  
  // Change subtotal value of the element
  subtotal.innerText = subtotalValue

  return subtotalValue

}

function calculateAll() {

  // ITERATION 2 AND 3
  const allProducts = document.querySelectorAll('.product')

  let subtotalSum = 0
  
  // Calculate the sum of subtotal product values
  allProducts.forEach(element => subtotalSum += updateSubtotal(element))

  const totalValueCart = document.querySelector('#total-value span')

  totalValueCart.innerText = subtotalSum

}

// ITERATION 4
function removeProduct(event) {

  const target = event.currentTarget;

  // Select table target
  const tableBody = document.querySelector('tbody')

  // Select direct parent node row of the button
  const buttonParentNode = target.parentNode

  // Select parent node of the button
  const rowParentNodeOfButton = buttonParentNode.parentNode

  // Remove row 
  tableBody.removeChild(rowParentNodeOfButton)

  // Update total price
  calculateAll()

}

// ITERATION 5
function createProduct() {

  // Target new product and price
  let newProduct = document.querySelector('.create-product input[type=text]').value
  const newProductPrice = document.querySelector('.create-product input[type=number]').value


  // Validation
  if (newProduct === '' && newProductPrice) {
    alert("Tienes que añadir un producto y precio.")
  } else {

    // Create new row
    const newTableRow = document.createElement('tr')
    newTableRow.setAttribute('class', 'product')

    // Fulfill row
    const newProductRow = `<td class="name">
            <span>${newProduct}</span>
          </td>
          <td class="price">$<span>${newProductPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`


    newTableRow.innerHTML = newProductRow

    // Add new product on HTML
    document.querySelector('tbody').appendChild(newTableRow)

    // Clear input fields
    document.querySelector('.create-product input[type=text]').value = ''
    document.querySelector('.create-product input[type=number]').value = 0

    // Add click event listener to each button
    const removeBtn = document.querySelectorAll('.btn-remove')

    removeBtn.forEach(element => element.addEventListener('click', removeProduct))
  }  
   
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.querySelector('#calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // BONUS - Iteration 4
  // Select button's target and operate in each one
  const removeBtn = document.querySelectorAll('.btn-remove')

  removeBtn.forEach(element => element.addEventListener('click', removeProduct))


  // BONUS - Iterarion 5
  const createProductBtn = document.querySelector('#create')

  createProductBtn.addEventListener('click', createProduct)

});
