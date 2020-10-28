// ITERATION 1
console.log(document.querySelector('.product'));
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // creating 2 variables for the multiplication, accessing the concerning contents
  const price = product.querySelector('.price span').innerHTML;
  console.log(price)
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity)
  // Calculate the subtotal
  let priceSubtotal = price * quantity;
  console.log(priceSubtotal)
  // Find the place where subtotal is stored and update it
  product.querySelector('.subtotal span').innerHTML = priceSubtotal;
  console.log("subtotal is right now "+ priceSubtotal)
// return subtotal for further usage of this function
  return priceSubtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test
// call updateSubtotal on every item
  // ITERATION 2
  let priceTotal = 0;
let allProducts = document.getElementsByClassName('product');
console.log(allProducts)
// add up all the subtotals
for (let i=0; i<allProducts.length; i++) {
  priceTotal += updateSubtotal(allProducts[i]);
console.log(priceTotal)
}

  // ITERATION 3
  // Set the total priceTotal
  document.querySelector('h2 span').innerHTML = priceTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("createProduct clicked");
  // In createProduct you should target the name and unit price input DOM nodes, extract their values, add a new row to the table with the product name and unitary price, as well as the quantity input and "Remove" button, and ensure that all of the functionality works as expected.
  // Create the new node to insert
// let newNode = document.createElement("span")

// // Get a reference to the parent node
// let parentDiv = document.getElementById("childElement").parentNode

// // Begin test case [ 1 ] : Existing childElement (all works correctly)
// let sp2 = document.getElementById("childElement")
// parentDiv.insertBefore(newNode, sp2)
// // End test case [ 1 ]
let newName = document.querySelector('.create-product input').value;
let newPrice = document.querySelector('.create-product td:nth-child(2) input ').value;
console.log("newName input = " + newName)
let newProduct = `<tr class="product">
<td class="name">
  <span>${newName}</span>
</td>
<td class="price">$<span>${newPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`
let productTable = document.querySelector("tbody");
productTable.insertAdjacentHTML('beforeend', newProduct)

// // <div id="one">one</div>
// var d1 = document.getElementById('one');
// d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// // At this point, the new structure is:
// // <div id="one">one</div><div id="two">two</div>'
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // Add a click event handler to the "Create Product" that will take a function named createProduct as a callback.
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
});
