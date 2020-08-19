// ITERATION 1

function updateSubtotal(product) {
  // Step 1 get the values of the product price and quantity
  // Step 2 make sure the values are numbers, because we want to calculate with them
  const price = Number(product.querySelector('.price span').innerHTML);

  const quantity = product.querySelector('.quantity input').value;


  // decline a variable with the calulation
  const subTotal = price * quantity;


  //change the dom bei putting out the calculated sum
  product.querySelector('.subtotal span').innerHTML = subTotal;

  //return the calculation result of subTotal
  return subTotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach(function (product) {
    total += updateSubtotal(product);
  });

  // ITERATION 3

  //... your code goes here */

  document.querySelector('#total-value span').innerHTML = total;

}




// ITERATION 4

function removeProduct(event) {
  // not happy with this solution, since the html might change
  const target = event.currentTarget.parentElement.parentElement;

  target.parentNode.removeChild(target);

}

// ITERATION 5

function createProduct() {
  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;

  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
  <td class="name">
    <span> ${productName} </span>
  </td>
  <td class="price">$<span>${productPrice}.00</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  document.querySelector('tbody').appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove').forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
  const newProduct = document.getElementById('create');
  newProduct.addEventListener('click', createProduct);

});