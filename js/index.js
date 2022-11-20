// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;

  const subTotalElem = product.querySelector('.subtotal span');
  subTotalElem.innerHTML = subTotal;

  return subTotal;
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
  const totalHtml = document.querySelector('#total-value span');
  let grandTotal = 0;

  products.forEach((product) => {
    grandTotal += +updateSubtotal(product);
  });

  totalHtml.innerHTML = grandTotal;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const productToRemove = target.parentNode.parentNode;
  productToRemove.parentNode.removeChild(productToRemove);

  calculateAll();
  // const htmlToRemove = target.parentNode.removeChild(target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const html = document.querySelector('.create-product');
  const productName = html.querySelectorAll('input')[0].value;
  const productPrice = +html.querySelectorAll('input')[1].value;
  const tbody = document.querySelector('tbody');
  const template = document.createElement('template');

  const newHtml = `
  <tr class="product">
    <td class="name">
      <span>${[productName]}</span>
    </td>
    <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;
  template.innerHTML = newHtml;
  tbody.appendChild(template.content);
  
  const btnRemove = document.querySelectorAll('.btn-remove');
  btnRemove[btnRemove.length - 1].addEventListener(
    'click',
    removeProduct,
    false
  );
  html.querySelectorAll('input')[0].value = '';
  html.querySelectorAll('input')[1].value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  const btnCreate = document.querySelector('.btn-create');

  removeBtns.forEach((btn) => {
    btn.addEventListener('click', removeProduct, false);
  });

  btnCreate.addEventListener('click', createProduct, false);
  //... your code goes here
});
