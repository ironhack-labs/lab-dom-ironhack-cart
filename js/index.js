// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let total = 0;
  
  for (let product of products) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  const totalContainer = document.getElementById('total-value');
  totalContainer.querySelector('span').innerHTML = total;

}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
}

// ITERATION 5
function createProduct() {
  const name = document.querySelectorAll('.create-product input')[0].value;
  const price = Number.parseFloat(document.querySelectorAll('.create-product input')[1].value).toFixed(2);

  if (name && price) {
    const newRow = document.createElement('tr');
    newRow.classList.add('product');
    newRow.innerHTML =  `
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;
    document.querySelector('tbody').appendChild(newRow);

    document.querySelectorAll('.create-product input')[0].value = '';
    document.querySelectorAll('.create-product input')[1].value = 0;
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let btn of removeBtns) {
    btn.addEventListener('click', removeProduct);
  } 

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
