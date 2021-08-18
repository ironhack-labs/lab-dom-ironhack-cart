// ITERATION 1
function updateSubtotal(product) {
  // alert("Calculate Prices clicked!");
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);
  // console.log(price);
  const subTotalPrice = quantity * price;
  return (product.querySelector(
    '.subtotal span'
  ).innerText = `${subTotalPrice}`);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multiProducts = document.getElementsByClassName('product');
  let finalTotal = 0;

  for (let product of multiProducts) {
    updateSubtotal(product);
    const subtotals = parseInt(
      product.querySelector('.subtotal span').innerText
    );
    finalTotal += subtotals;
    // console.log(finalTotal);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = finalTotal;
}

// ITERATION 4
function removeProduct(event) {  
  const target = event.currentTarget.parentNode.parentNode;
  // const target = document.querySelector('.product');
  console.log('The target in remove. is:', target);
  target.parentNode.removeChild(target);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  let productText = document.querySelector('.create-product input[type="text"]').value;
  let productNumber = document.querySelector('.create-product input[type="number"]').value;
  let productTable = document.querySelector('tbody');
  // let tableSection = document.querySelector('.product');
  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  productTable.appendChild(newRow);
  newRow.innerHTML = ` <tr class="product">
  <td class="name">
    <span>${productText}</span>
  </td>
  <td class="price">$<span>${productNumber}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
  calculateAll();
  removeButton();
  removeInputs();
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // Create Button
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
  removeButton();
});

function removeButton() {
  // Remove Button
  const removeButtons = document.querySelectorAll('.btn-remove');
  // console.log(removeButtons);
  for (let button of removeButtons) {
    console.log(button);
    button.addEventListener('click', removeProduct);
  }
}

function removeInputs() {
  document.querySelector('.create-product input[type="text"]').value = '';
  document.querySelector('.create-product input[type="number"]').value = 0;
}
