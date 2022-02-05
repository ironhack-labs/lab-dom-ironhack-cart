// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelectorAll('.product');
  const totalValueElement = document.querySelector('#total-value span');
  let total = 0;
  for (let i = 0; i < singleProduct.length; i++) {
    total += updateSubtotal(singleProduct[i]);
  }

  totalValueElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove();
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct(name) {
  const cart = document.querySelector(`#cart tbody`);
  const product = `<tr class="product">
  <td class="name">
    <span>${
      name.currentTarget.parentNode.parentNode.querySelector('#name').value
    }</span>
  </td>
  <td class="price">$<span>${
    name.currentTarget.parentNode.parentNode.querySelector('#price').value
  }</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove" onclick='removeProduct(event)'>Remove</button>
  </td>
</tr>`;
  cart.insertAdjacentHTML('beforeend', product);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtn = document.querySelectorAll('.btn-remove');
  const addBtn = document.getElementById('create');
  calculatePricesBtn.addEventListener('click', calculateAll);
  addBtn.addEventListener('click', createProduct);

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

  //... your code goes here
});
