const cl = (...p) => console.log(...p)

const aProduct = document.querySelectorAll('.product')
const allProducts = document.getElementsByClassName('product');
// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalAmt = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  
  return subtotalAmt.innerHTML = subtotal;
}

// ITERATION 2,3
function calculateAll() { 
  const products = [...allProducts]
  const subTotals = products.map(e => updateSubtotal(e)).reduce((acc, num)=> acc + num ,0)
  const totalAmt = document.querySelector('#total-value span');
  
  return totalAmt.innerHTML = subTotals;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  let row = target.parentNode.parentNode
  row.remove()
  row.value = 0
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removePricesBtn = document.getElementsByClassName('btn-remove');
  for(i = 0; i < removePricesBtn.length; i++){
    removePricesBtn[i].addEventListener('click', removeProduct)
  }

});





// // ITERATION 4



// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });
// The two inputs inside of tfoot represent the name for the new product and the unit price, respectively. The "Create Product" button should add a new product to the cart when triggered.

// Add a click event handler to the "Create Product" that will take a function named createProduct as a callback.

// In createProduct you should target the name and unit price input DOM nodes, extract their values, add a new row to the table with the product name and unitary price, as well as the quantity input and "Remove" button, and ensure that all of the functionality works as expected.

// Remember, the new product should look undistinguished and behave like any of the products previously included in the cart. As such, one should be able to calculate its subtotal when the "Calculate All" button is clicked, and remove the product.

// When the product creation is finalized, please, clear the input fields in the creation form.