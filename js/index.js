// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal;
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let products = document.querySelectorAll('.product');
  let updatedsubtotals = [...products].map(x => x = updateSubtotal(x));
  const reducer = (acc, val) => acc + val;
  let total = updatedsubtotals.reduce(reducer);
  document.querySelector('#total-value span').innerHTML = total
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove();
  calculateAll();
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProductName = document.querySelector(".create-product input[type='text']").value;
  let newPrice = document.querySelector(".create-product input[type='number']").value;
  const parentElement = document.querySelector('tbody');
  let newProduct = document.createElement('tr');

  newProduct.innerHTML = `<td class="name">
  <span> ${newProductName} </span >
</td >
<td class="price">$<span>${newPrice}</span></td>
<td class="quantity">
<input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
<button class="btn btn-remove">Remove</button>
</td>`;
  parentElement.appendChild(newProduct);
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(function (x) {
    x.addEventListener('click', removeProduct)
  });
  let createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct)

});
