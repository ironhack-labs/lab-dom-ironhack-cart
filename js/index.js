// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here

  //capture the price and quantity values, and convert to a number
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  //Get the subtotal value
  const subTotal = Number(price) * parseFloat(quantity)

  //Render the subtotal value in the element with class ".subTotal"
  const subTotalElement = product.querySelector(".subtotal span")
  //modify inner text
  subTotalElement.innerHTML = subTotal;
  return subTotal;
} 

function calculateAll(){ 
  // ITERATION 2
  //... your code goes here
  
  //call the function updateSubtotal with every tr .product DOM node in the table cart 
  // get cart item elements by .getElementByClassName
  const cartItemElements = document.getElementsByClassName('product');

  let totalValue = 0;

  //iterate through all cart item elements
  for(let cartItemElement of cartItemElements) {
    totalValue += updateSubtotal(cartItemElement);
  }

  // ITERATION 3
  //... your code goes here

  //Calculate the total price for the products in your cart by summing all of the subtotals returned by updateSubtotal() when it was called with each product.
  document.querySelector('#total-value span').innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  ///access parentNode of current target
  //Step 1) I need to delete the child associated to the current target

  // Step 1 answer: target.parentNode

  // Step 2) chain parent node again to target whole Row of remove button
  
  const productRow = target.parentNode.parentNode;

  ///Step3) get parent of full table
  const productTable = productRow.parentNode;

  productTable.removeChild(productRow);

  //Step 4) calculate total left over prices
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //Add a `click` event handler to the "Create Product" that will take a function named `createProduct` as a callback.

const createProductRow = document.querySelector(".create-product");

//new product name
const newProductNameInputValue = createProductRow.querySelector("input").value;

//new product price as a Number with 2 decimal value
const newProductPrice = Number(newProductPriceInputValue.value).toFixed(2)

//new product value
const newProductPriceInputValue = createProductRow.querySelector("input[type='number']")

//creat new row to add incoming values
const newProductRow = document.createElement("tr")
newProductRow.className = "product"
newProductRow.innerHTML = `<tr class="product">
<td class="name">
  <span>${newProductNameInputValue}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`;

//add new element to the table
const productTableBody = document.querySelector("tbody")

productTableBody.appendChild(newProductRow);

//remove works for new product
const newProductRemoveButton = newProductRow.querySelector(".btn-remove");
newProductRemoveButton.addEventListener("click", removeProduct);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  ///****remove product - each item has a button with class button remove- START****
  /// rertrieve all the buttons found for product remove on html page
  // ----->document.getElementsByClassName("btn-remove")

  // then label it: targeted all remove buttons
  //------> const productRemoveButtons = document.getElementsByClassName("btn-remove")

  //then loop through the collection of remove buttons (FOR OF OR FOR LOOP)
  
  // ---->const productRemoveButtons = document.getElementsByClassName("btn-remove")
  // for (const removeButton of productRemoveButtons) {

  // }

  //add a click event listener to each button, creating a click event for each button
  //will pass the remove product function remove Product as a call back function
  const productRemoveButtons = document.getElementsByClassName("btn-remove");
  for (const removeButton of productRemoveButtons) {
    removeButton.addEventListener("click", removeProduct)
  }

  const productCreateButton = document.getElementById("create");
  productCreateButton.addEventListener("click", createProduct);
});

