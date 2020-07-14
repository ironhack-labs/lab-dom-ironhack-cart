// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal;
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
  let totalPrice = 0
  allProducts.forEach(product => {
    let subtotal = updateSubtotal(product);
    totalPrice += subtotal;
  }
    );

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode; // we are now on the "tr" level in the html
  console.log('The target in remove is:', target);
  target.parentNode.removeChild(target); // we are removing the target from its parent element
  calculateAll(); //We re calculate the total
}

// ITERATION 5

function createProduct() {
  // Getting the inputs value of product name and price
  let productName = document.querySelector('.create-product #new-product-name');
  let productPrice = document.querySelector('.create-product #new-product-price');
  // Putting them in a new <tr></tr>
  let newTr = document.createElement("tr");
  newTr.innerHTML =`<td class="name">
    <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
  document.querySelector('tbody').appendChild(newTr);
  // Adding the class to the <tr></tr>
  newTr.classList.add('product');
  // Adding the event listener on click on remove button
  let newdeleteBtn = newTr.querySelector('.btn-remove');
  newdeleteBtn.addEventListener('click', removeProduct);
  // Clearing the input fields
  productName.value = "";
  productPrice.value = 0;


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove button loop and add event listener on click
  const deleteBtnsList = document.querySelectorAll('.btn-remove')
  deleteBtnsList.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', removeProduct);
  })

  //Add a click event handler to the "Create Product" that will 
  //take a function named createProduct as a callback.
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
