// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerHTML = price*quantity;
  return price*quantity;
}

function calculateAll() {
  let total = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  const productName = document.getElementById('name-input').value;
  const productPrice = document.getElementById('price-input').value;

  document.querySelector('tbody').innerHTML += `
        <tr class="product">
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${productPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity">
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createNewProductBtn = document.getElementById('create');
  createNewProductBtn.addEventListener('click', createProduct);

});
