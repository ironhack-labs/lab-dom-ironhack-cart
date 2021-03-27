// Calculate Subotal

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity)
  let subtotal = product.querySelector('.subtotal span');
  let newSub = quantity * price;
  subtotal.innerText = newSub;
  return newSub; // <- !!IMPORTANT!! If you don't return the subtotal for each item, you can't calculate the subtotal in calculateAll, ad nothing is returned, yet the innerText changes. Confuses a lot of people
}

// Calculate Total

function calculateAll() {
  let totalSub = 0;
  let products = document.querySelectorAll('.product');   // <-- This is going to return an array, so if you don't target them individually, you're going to be banging your head wondering why the subtotal keeps saying NaN on the page
  products.forEach(product => totalSub += updateSubtotal(product))    // <-- Runs the array, calculating subtotal and adding to total when called.
  let total = document.querySelector('#total-value span');      // <-- applies total to #total-value
  total.innerText = totalSub;
}


// Create Button, adds row to bottom

function createProduct() {                                               // <- adds a new table row, accessing the values of the inputs to use as properties
  let newName = document.querySelector('#n input').value;
  let newPrice = document.querySelector('#p input').value;
  let tBody = document.querySelector('tbody')
  tBody.innerHTML += `
  <tr class="product">
    <td class="name">
      <span>${newName}</span>
    </td>
    <td class="price">$ <span>${newPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `
}


//Calculates Total, adds subtotals to table rows when fired

window.addEventListener('load', () => {
  let calculate = document.querySelector('#calculate');
  calculate.addEventListener('click', calculateAll) //<- fires calculateAll, which runs updateSubtotal on each product to update their innerText, then calculates the total and adds it below the button
})
//New Product
const newProduct = document.querySelector('#create');

newProduct.addEventListener('click', createProduct)

//Remove Button
const removeButtons = document.querySelectorAll('.btn-remove'); // <- collects array of all buttons in the class

removeButtons.forEach((removeButton) => removeButton.addEventListener('click', () => {  // <- Adds event listeners to each remove button added after new product is added above
  removeButton.parentElement.parentElement.remove()
}))
