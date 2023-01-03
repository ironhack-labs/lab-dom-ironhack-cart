// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  const subtotalPrice = +price * quantity;
  subtotal.innerText = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here

  const products = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let product of products) {
    totalPrice += updateSubtotal(product);
  }
  const total = document.querySelector('#total-value span');
  total.innerText = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const tBody = target.parentNode.parentNode.parentNode;
  const productRemoved = target.parentNode.parentNode;
  tBody.removeChild(productRemoved);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const newName = document.querySelectorAll('.create-product input')[0];
  const newPrice = document.querySelectorAll('.create-product input')[1];
  const trTag = document.createElement('tr')
  trTag.innerHTML =
    `<td class="name">
      <span>${newName.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
  trTag.classList.add('product')
  const tBody = document.querySelector('tbody');
  tBody.appendChild(trTag);
  const newBtnRemove = trTag.querySelector('.btn-remove');
  newBtnRemove.addEventListener('click', removeProduct);
  newName.value = '';
  newPrice.value = '0';
}

window.addEventListener('load', () => {
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(button => button.addEventListener('click', removeProduct));
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
