// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').innerHTML)
  let quantity = Number(product.querySelector('.quantity input').value)
  let subtotal = price * quantity;
  let subtotalDOM = product.querySelector('.subtotal span');
  subtotalDOM.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach( singleProduct => {total += updateSubtotal(singleProduct)} );
  document.querySelector('#total-value span').innerHTML = total;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct(newProduct) {
  const productName = newProduct.querySelector('input[type="text"]').value
  const productPrice = Number(newProduct.querySelector('input[type="number"]').value).toFixed(2)

  document.querySelector('tbody').innerHTML += `        <tr class="product">
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${productPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;
        const removeButtons = document.querySelectorAll('.btn-remove');
        removeButtons.forEach( button => {
          button.addEventListener('click', ev => {removeProduct(ev)})
        });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach( button => {
    button.addEventListener('click', ev => {removeProduct(ev)})
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', ev => {createProduct(ev.currentTarget.parentElement.parentElement)})
});
