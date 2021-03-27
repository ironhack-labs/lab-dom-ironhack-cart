// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  // console.log(price, quantity); // test
  const priceValue = price.innerHTML
  const quantityValue = quantity.value
  // console.log(priceValue, quantityValue) // test
  const subtotal = priceValue*quantityValue
   // console.log(`The subtotal is ${subTotal}`) // test
   // Set subtotal price to the corresponding DOM element with argument product
  const subTotalProduct = product.querySelector('.subtotal span')
  // redifining subtotal
  subTotalProduct.innerText = subtotal
  // console.log(subtotal) // test
  return subtotal // returning subtotal for calculateAll function
}


function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product') // defining all products
  total = 0 // defining total
  allProducts.forEach(product => { // loop for each product 
    updateSubtotal(product) // using updateSubtotal() function for calculating subtotal for each one
    // ITERATION 3
    total = total + updateSubtotal(product) // calculating total with subtotal defined in updateSubtotal() function
    document.querySelector('#total-value span').innerHTML = total // replacing in HTML total text
    // console.log(total) // test
  })
}


// ITERATION 4
function removeProduct(event) {
  // console.log("Hello") // Test
  const target = event.currentTarget;
  // console.log('The target in remove is:', target)
}


// ITERATION 5
// New function for adding the new product name and the new product price into a new row
function addEntry(newProductName, newProductPrice) {
  // console.log("We are trying to add a new row") // Test

  const rowEntry = document.createElement("tr") // Creating a row in the DOM for the new products
  rowEntry.classList.add('product'); // Adding the same class to this row than the other products

  const rowEntryName = document.createElement("td") // Creating a td into the row for the product name
  rowEntryName.classList.add('name') // Adding the same class to this td than the other products
  rowEntryName.innerHTML = `<span>${newProductName}<span>` // Adding the new product name in the same style than the other products

  const rowEntryPrice = document.createElement("td") // Creating a td into the row for the product price
  rowEntryPrice.classList.add('price') // Adding the same class to this td than the other products
  rowEntryPrice.innerHTML = `$<span>${newProductPrice}</span>` // Adding the new product price in the same style than the other products

  const rowEntryQuantity = document.createElement("td") // Creating a td into the row for the quantity
  rowEntryQuantity.classList.add('quantity') // Adding the same class to this td than the other products
  rowEntryQuantity.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />` // Adding the same HTML than the other products

  const rowEntrySubtotal = document.createElement("td") // Creating a td into the row for the subtotal
  rowEntrySubtotal.classList.add('subtotal') // Adding the same class to this td than the other products
  rowEntrySubtotal.innerHTML = `$<span>0</span>` // Adding the same HTML than the other products

  const rowEntryAction = document.createElement("td") // Creating a td into the row for the action
  rowEntryAction.classList.add('action') // Adding the same class to this td than the other products
  rowEntryAction.innerHTML = `<button class="btn btn-remove">Remove</button>` // Adding the same HTML than the other products

  rowEntry.appendChild(rowEntryName) // adding the element just created into the row as a child (inside the row)
  rowEntry.appendChild(rowEntryPrice)
  rowEntry.appendChild(rowEntryQuantity)
  rowEntry.appendChild(rowEntrySubtotal)
  rowEntry.appendChild(rowEntryAction)

  const entryRowElement = document.querySelector("tbody") // Defining where we are going to insert the new products row
  entryRowElement.appendChild(rowEntry) // Inserting the created row for the new products into the tbody (just defined before)


  removeBtn ()
}
// Defining the creating button
document.querySelector('#create').onclick = function createProduct() {
  // console.log("Create Button Clicked")
// Defining the new product name
const newProductName = document.querySelector(".create-product input[type=text]")
// console.log(newProductName)
// Defining the new product price 
const newProductPrice = document.querySelector(".create-product input[type=number]")
// console.log(newProductPrice)
// Call a new function for adding the new product name and the new product price into a new row
addEntry(newProductName.value, newProductPrice.value) 

newProductName.value = "" // back to nothing after sending to new function
newProductPrice.value = 0 // back to zero after sending to new function
}


function removeBtn () { // New function for removing the products 
  const removeButtons = document.querySelectorAll('.btn-remove') // Defining what button to use for removing the products
  removeButtons.forEach(singleRemoveButton => { // For each button
    singleRemoveButton.onclick = e => { // Defining an event
            e.currentTarget.parentElement.parentElement.remove() // Removing the parent-parent: two times parentElement because the tr is inside the td where the button stands
            calculateAll() // recall calculateAll in order to update the total
          }
})
}


window.addEventListener('load', () => { 
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeBtn () // I prefered to set the function appart 
})
  