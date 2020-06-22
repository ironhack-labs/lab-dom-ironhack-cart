// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;       // get price
  const quantity = product.querySelector('.quantity input').value;    // get quantity

  const subTotalPrice = (price * quantity).toFixed(2);                // store subtotal in variable (to two decimals to better represent cents)

  const subTotal = product.querySelector('.subtotal span');           // get subtotal value in table

  subTotal.innerText = subTotalPrice;                                 // update value with calculated subtotal

  return subTotal.innerText;                                          // return subtotal for later use
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product');             // get list of all products

  for (let i = 0; i < products.length; i++) {                         // itterate over all products in list and call updateSubtotal function
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  let allSubTotals = 0.00;

  for (let i = 0; i < products.length; i++) {                         // itterate over all products in list and call updateSubtotal function
    const subTotal = products[i].querySelector('.subtotal span');     
    allSubTotals += parseFloat(subTotal.innerText);                   // then, add that subTotal to temp var 'allSubTotals' (using parseFloat to convert str to float)
  }
  
  const total = document.querySelector('#total-value span');          // get total value in DOM

  total.innerText = allSubTotals.toFixed(2);                          // update value with value of 'allSubTotals'


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const product = (target.parentNode).parentNode;                     // assign parent's parent (product) to variable
  const table = product.parentNode;                                   // assign product table (product's parent) to variable

  const total = document.querySelector('#total-value span');
  const productTotal = product.querySelector('.subtotal span')        // get total and subtract subtotal of product about to remove
  total.innerText -= parseFloat(productTotal.innerText)

  table.removeChild(product);                                         // remove product (child) from table (parent)


}

// ITERATION 5

function createProduct() {
  const name = document.getElementById('new-name').value;                           // set name input to variable
  const price = parseFloat(document.getElementById('new-price').value).toFixed(2);  // set price input to variable

  if (name && price) {                                                              // check if form isn't empty
    const newRow = document.createElement('tr');                                    // create new row
    newRow.classList.add('product');                                                // add 'product' class to row
    newRow.innerHTML =                                                              // add proper HTML to new product (including 'name' and 'price' using template literals)
        `<td class="name">
          <span>${name}</span>
        </td>
        <td class="price">$<span>${price}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>`
    
    document.querySelector('tbody').appendChild(newRow);                            // append child to the table

  }

  document.getElementById('new-name').value = '';                                   // reset form
  document.getElementById('new-price').value = 0.00;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn btn-remove');             // get list of remove buttons
  for (let i = 0; i < removeBtns.length; i++) {                                     // loop over list
    removeBtns[i].addEventListener('click', removeProduct);                         // add click event for each button
  }

  const createProductBtn = document.getElementById('create');                       // get button
  createProductBtn.addEventListener('click', createProduct);                        // add click

});
