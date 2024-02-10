// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const calculate = product.querySelector('.subtotal span');

  calculate.innerHTML = price * quantity;

  return calculate.innerHTML;

}

function calculateAll() {
  
  const products = document.querySelectorAll(".product");
  const total = document.querySelector('#total-value span');

  let subtotals = 0;

  products.forEach(product => {
    subtotals += Number(updateSubtotal(product));
  });

  total.innerHTML = subtotals;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode.parentNode;
  product.removeChild(target.parentNode.parentNode)
  calculateAll();
}

// ITERATION 5

function createProduct() {
    const inputs = document.querySelectorAll('.create-product input');
    const body = document.querySelector('tbody');

    const name = inputs[0].value;
    const price = inputs[1].value;

    const product =
    `
    <tr class="product">
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
        </tr>
    `;

    body.insertAdjacentHTML('beforeend', product);
    removeFunctionality();

    inputs.forEach(input => {
        input.value = '';
    });

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  removeFunctionality();

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});

function removeFunctionality(){
    const removeButtons = document.querySelectorAll(".btn-remove");

    removeButtons.forEach(button => {
        button.addEventListener("click", removeProduct);
    });
}