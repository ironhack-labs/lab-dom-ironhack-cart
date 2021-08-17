// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price > span').innerText;
  const quantity = product.querySelector('.quantity > input').value;
  const subTotal = price*quantity;
  let subTotalText = product.querySelector('.subtotal > span');
  subTotalText.innerHTML = subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // ... your code goes here
  const allProducts = document.getElementsByClassName('product')
  for (product of allProducts) {
    updateSubtotal(product)
  }

  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector('#total-value > span');
  const subTotals = document.querySelectorAll('.subtotal > span');
  let totalSum = 0;
  for (subTotal of subTotals) {
    totalSum += Number(subTotal.innerText);
  }
  totalValue.innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product >td:first-child> input').value;
  const unitPrice = Number(document.querySelector('.create-product >td:nth-child(2)> input').value);
  const unitPriceFixed = unitPrice.toFixed(2);
  const tBody = document.querySelector('tbody')
  const newProduct = document.createElement('tr')
  newProduct.className = 'product';
  newProduct.innerHTML = `<td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${unitPriceFixed}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>`
  tBody.appendChild(newProduct)
  //set default
  document.querySelector('.create-product >td:first-child> input').value = '';
  document.querySelector('.create-product >td:nth-child(2)> input').value =0;
  //reset removeBtns
  const removeBtns = document.querySelectorAll('.btn-remove');
  for (removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct)
  }
}

//reset removeBtns

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn-remove');
  for (removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct)
  }
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct)
  //... your code goes here
});
