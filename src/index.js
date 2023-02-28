// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {

  // ITERATION 2
  const productsSubtotal = document.querySelectorAll('.product');
  let sum = 0;
  for (let i = 0; i < productsSubtotal.length; i++) {
    sum += updateSubtotal(productsSubtotal[i]);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = sum;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createName = document.querySelector('.product-name').value;
  const createPrice = document.querySelector('.product-price').value;
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
<td class="name">
  <span>${createName}</span>
</td>
<td class="price">$<span>${createPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</>
</td>
`;
  document.querySelector('tbody').appendChild(newRow);

  const removeBtn = newRow.querySelector('.btn.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  document.querySelector('.product-name').value = "";
  document.querySelector('.product-price').value = 0;


}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  for (i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});


