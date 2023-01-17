// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent; // getting the price from table
  const quantity = product.querySelector('.quantity input').value; // getting quantity filled in by user from table
  let subtotal = product.querySelector('.subtotal span'); // linking variable subtotal to it cell in table
  subtotal.innerHTML = price * quantity; // calculating quantity * price to get subtotal
  return subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  console.log(singleProduct)
  updateSubtotal(singleProduct);
  // end of test */
 

  // ITERATION 2
  //... your code goes here
  let productList = document.getElementsByClassName('product'); // get HTMLCollection with el Product rows
  let productListArr =[...productList]; // create an array from the HTMLCollection
  let subtotalHolder = 0; //create variable to hold the subtotal, once I loop with forEach
  let total = 0; // create variable to hold the sum of subtotals
  productListArr.forEach((element) => { //forEach loop and getting the subtotal from updateSubtotal function
    updateSubtotal(element);
    subtotalHolder = Number(updateSubtotal(element));
    total += subtotalHolder;
    console.log(subtotalHolder);
    console.log(total)
  });
    // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total; //print the Total: ---
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; // defining the target to remove (Remove button)
  const tbody = document.querySelector('tbody'); // variable which is parent of the whole row that is going to be removed
  console.log('The target in remove is:', target);
  console.log(target.parentNode.nodeName)
  tbody.removeChild(target.parentNode.parentNode); // removing the whole row using .parentNode property

  calculateAll(); // execute the function again to calculate total after removing product
}

// ITERATION 5

function createProduct() {
  //... your code goes here // My Code (not working, Product Name and Price not printing)
  let newProductName = document.querySelector('.create-product td input[type="text"]').value; // get new product name value from input
  console.log(newProductName); 
  let newProductPrice = document.querySelector('#new-product-price input[type="number"]').value; // get new product price value from input
  console.log(newProductPrice); 

  let tbody = document.querySelector('tbody');
  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

tbody.appendChild(newRow);
console.log(newRow)

const removeButton = newRow.querySelector('.btn-remove');
removeButton.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeButtons = [...document.getElementsByClassName('btn btn-remove')]; //get an array of all Remove buttons
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct)
  }) 
  const createButton = document.getElementById('create'); //get the button "Create"
  createButton.addEventListener('click', createProduct); //add click event to button Create
});
