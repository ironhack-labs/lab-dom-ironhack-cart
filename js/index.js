// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = +product.querySelector('.price span').innerHTML;
  const quantity = +product.querySelector('.quantity input').value;

  const totalPrice = price * quantity;

  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = totalPrice;
  return totalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const allProducts = document.querySelectorAll('.product');

  let total = 0;

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here

  const totalHtml = document.querySelector('#total-value span');

  totalHtml.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );

  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const newProduct = event.target.parentNode.parentNode;

  const productName = newProduct.querySelector('#product-name').value;
  const productPrice = newProduct.querySelector('#product-price').value;

  const productsList = document.querySelector('#product-list');

  console.log(productsList);

  const node = `
  
    <tr class="product">
      <td class="name">
          <span>${productName}</span>
      </td>
      <td class="price">$<span>${Number(productPrice).toFixed(2)}</span></td>
      <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
 
  `;

  productsList.insertAdjacentHTML('beforeend', node);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach((product) => {
    product.addEventListener('click', removeProduct);
  });

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
