// Gets all the product elements we need to manipulate in arrays WITH THE SAME ORDER (INDEX)
let unitPriceArr = document.querySelectorAll('.unit-price')
let quantityInputArr = document.querySelectorAll('input[type="number"]')
let totalSingleArr = document.querySelectorAll('.total-single')
let deleteButtons = document.querySelectorAll('.btn-delete')
let products = document.querySelectorAll('.product')

const getArrays = () => {
  unitPriceArr = document.querySelectorAll('.unit-price')
  quantityInputArr = document.querySelectorAll('input[type="number"]')
  totalSingleArr = document.querySelectorAll('.total-single')
  products = document.querySelectorAll('.product')
  deleteButtons = document.querySelectorAll('.btn-delete')
}

/*****************************************/
/************ ITERATIONS 1-3 ************/
/*****************************************/

// Gets the Calculate Prices button
const calculatePricesButton = document.querySelector('#calc-prices-button')

// Gets the span where we will print the global total price
const globalTotalEl = document.querySelector('#global-total')

// Adds the event listener on the Calculate Prices button
calculatePricesButton.onclick = () => {
  getArrays()

  // The starting global total price will be 0, and we will be adding the single total prices as we get them
  let globalTotal = 0
  // Iterating an array of products, since unitPriceArr, quantityInputArr and totalSingleArr have the same length, it doesn't matter which one we choose
  for (let i = 0; i < unitPriceArr.length; i++) {
    // Multiplies each unit times each quantity
    const priceTimesQty = unitPriceArr[i].dataset.unitPrice * quantityInputArr[i].value

    // Saves the single total the data-total-single attr
    totalSingleArr[i].dataset.totalSingle = priceTimesQty
    // Displays the total inside the correct total single span
    totalSingleArr[i].innerHTML = `$${priceTimesQty}.00`

    // Adds the data-total-single attr we set before to the global total, but first, we need to convert it to a number with parseFloat
    globalTotal += parseFloat(totalSingleArr[i].dataset.totalSingle)
  }
  // Displays the correct global total price
  globalTotalEl.innerHTML = `$${globalTotal}.00`
}

/*****************************************/
/************** ITERATION 4 **************/
/*****************************************/
const productsContainer = document.querySelector('.all-products')

products.forEach((product, i) => {
  deleteButtons[i].onclick = () => {
    productsContainer.removeChild(products[i])
  }
})

// const deleteProduct = e => {
//   productsContainer.removeChild(e.currentTarget)
// }

// document.querySelectorAll('.btn-danger').onclick = e => {
//   productsContainer.removeChild(e.target)
//   console.log('deleteado alv')
// }

// document.querySelectorAll('.btn-danger').forEach(deleteButton => {
//   deleteButton.onclick = e => {
//     productsContainer.removeChild(e.target)
//     console.log('deleteado alv')
//   }
// })

/*****************************************/
/************** ITERATION 5 **************/
/*****************************************/
const newProductName = document.querySelector('#new-product-name')
const newProductPrice = document.querySelector('#new-product-price')
const newProductButton = document.querySelector('#new-product-button')

newProductButton.onclick = () => {
  const newProduct = document.createElement('div')

  const newProductContent = `
    <!-- Product name -->
    <div>
      <span>${newProductName.value}</span>
    </div>
    <!-- Cost of the unit -->
    <div>
      <span class="unit-price" data-unit-price="${newProductPrice.value}">$${newProductPrice.value}.00</span>
    </div>
    <!-- How many units will the user buy -->
    <div>
      <label for="qty">QTY</label>
      <input type="number" id="qty" class="quantity" />
    </div>
    <!-- Total price for the product -->
    <div>
      <span class="total-single" data-total-single="0">$0.00</span>
    </div>
    <!-- Delete Button -->
    <div>
      <button class="btn btn-delete">Delete</button>
    </div>
  `

  newProduct.classList.add('product')
  newProduct.innerHTML = newProductContent

  productsContainer.appendChild(newProduct)

  newProductName.value = ''
  newProductPrice.value = ''

  getArrays()
}
