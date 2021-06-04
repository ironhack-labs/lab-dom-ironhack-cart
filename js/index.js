// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = +product.querySelector('.price span').textContent;
  const quantity = +product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const total = price * quantity;

  subtotal.textContent = total;
  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((elem) => {
    total += updateSubtotal(elem);
  });
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here

  // esto es ASI !!? xd
  target.parentNode.removeChild(target);
  calculateAll();
}

// ITERATION 5

document
  .querySelector('.create-product .btn')
  .addEventListener('click', createProduct);

function createProduct() {
  //... your code goes here
  const tbody = document.querySelector('tbody');
  const newName = document.querySelector(
    '.create-product input[type=text]'
  ).value;
  const newPrice = document.querySelector(
    '.create-product input[type=number]'
  ).value;

  const productDefault = `<tr class="product">
          <td class="name">
            <span>${newName}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

  tbody.insertAdjacentHTML('beforeend', productDefault);

  buttonsOperative();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

function buttonsOperative() {
  const buttons = document.querySelectorAll('.btn-remove');

  buttons.forEach(
    (button) =>
      button.addEventListener('click', (e) => {
        removeProduct(e);
      }),
    calculateAll()
  );
}
buttonsOperative();
