// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value
  let resultado = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = resultado

}

function updateTotal(num) {
  const total = document.querySelector('h2 span')
  total.innerHTML = num
}

function calculateAll() {
 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);




  // ITERATION 2

  const products = document.querySelectorAll('.product');

  products.forEach(subtotal => {
    updateSubtotal(subtotal)

  });

  // ITERATION 3
  //... your code goes here

  const productSubtotal = document.querySelectorAll('.subtotal span')
  newTotal = 0
  productSubtotal.forEach(subtotal => {
    newTotal += parseFloat(subtotal.textContent)
  });
  updateTotal(newTotal)
}




// // Make sure the price gets updated accordingly when you remove products from the shopping cart.


//   const removeProduct = document.querySelectorAll('.product').forEach(
//     function (calculatePricesBtn) {
//       calculatePricesBtn.onclick = function (remove) {
//         remove.removeProduct(calculatePricesBtn)
//       }

//     }
//   )


// }



// // ITERATION 4   PRODUCT ROW
// // 💡 Tip: To access the element an event was fired on, you can reference event.currentTarget.
// // To remove a node from the DOM, you need to access its parent node and call removeChild on it.
// // You can access the parent of a DOM node from its property parentNode.


function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode
  // target.parentElement.remove()


  target.parentNode.removeChild(target)
   calculateAll()

  console.log('The target in remove is:', target)
}

// The two inputs inside of tfoot represent the name for the new product and the unit price, 
// respectively.
// The "Create Product" button should add a new product to the cart when triggered.

// Add a click event handler to the "Create Product" that will take a function
// named createProduct as a callback.

// In createProduct you should target the name and unit price input DOM nodes, 
// extract their values, add a new row to the table with the product name and unitary price, 
// as well as the quantity input and "Remove" button, and ensure that all of the functionality
// works as expected.

// Remember, the new product should look undistinguished and behave like any of the products 
// previously included in the cart.As such, one should be able to calculate its subtotal when 
// the "Calculate All" button is clicked, and remove the product.

// When the product creation is finalized, please, clear the input fields in the creation form.



// ITERATION 5
// INPUT CON VALUE, LO DEMÁS CON TEXTCONTENT!!!!!!!!

function createProduct() {

const newProduct = document.querySelector('.create-product .name').value
const newPrices = document.querySelector('.create-product .price').value

}

const button = document.querySelector('#create')
button.addEventListener("click", createProduct)
console.log(button)



window.addEventListener('load', () => {
 const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

   const removeBtn = document.querySelectorAll('.btn-remove')
     removeBtn.forEach(element => {
      
       element.addEventListener("click", removeProduct)
     })
 })



