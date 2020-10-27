// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  let subtotalText = subtotal.toFixed(2);
  product.querySelector('.subtotal span').innerText = subtotalText;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = 0
  const lineItems = document.querySelectorAll(".product");
  for (i = 0; i < lineItems.length; i++) {
    totalPrice += updateSubtotal(lineItems[i]);
  }
  let totalText = totalPrice.toFixed(2);
  console.log(totalText);
  document.querySelector('#total-value span').innerText = totalText;
  return totalPrice;
}

// ITERATION 3
//... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const line = event.target.parentNode.parentNode.parentNode;
  line.removeChild(event.target.parentNode.parentNode);
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  console.log('creating')
  const newProductName = document.querySelector('#newProductName').value;
  const newProductPrice = document.querySelector('#newProductPrice').value;
  console.log(newProductName + ' ' + newProductPrice);
  document.querySelector('#newProductName').value = '';
  document.querySelector('#newProductPrice').value = '';
  const newProductStr = `<tbody>
  <tr class="product">
    <td class="name">
      <span>${newProductName}</span>
    </td>
    <td class="price">$<span>${newProductPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`
  console.log(newProductStr)
  const listElement = document.createElement('tbody')
  listElement.innerHTML = newProductStr
  const table = document.querySelector('#cart')
  table.appendChild(listElement)


  //... your code goes here
}

window.addEventListener('load', () => {
  const deleteButtons = document.querySelectorAll('.btn-remove');
  for (i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', removeProduct);
  }
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click',createProduct)

  const changedQuantity = document.querySelectorAll('.quantity input')
  for (i = 0; i < changedQuantity.length; i++) {
    changedQuantity[i].addEventListener('blur',calculateAll)
  }

  //... your code goes here
});
