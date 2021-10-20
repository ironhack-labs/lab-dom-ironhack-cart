// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  let subtotalCalc = Number(price.innerHTML * quantity.value)
  subtotal.innerHTML = subtotalCalc;
  return subtotalCalc;
}

function calculateAll() {
  const products = [...document.querySelectorAll('.product')];
  const totalElement = document.querySelector('#total-value span');

  let grandTotal = 0;
  products.forEach(product => {
    grandTotal += updateSubtotal(product);
  });

  totalElement.innerHTML = grandTotal;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('.product').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const theTBody = document.querySelector('tbody');
  const productDetInput = document.querySelectorAll('.create-product input');
  const newTR = document.createElement('tr');
  newTR.setAttribute('class', 'product');

  newTR.innerHTML = `
      <td class="name">
        <span>${productDetInput[0].value}</span>
        </td>
      <td class="price">$<span>${productDetInput[1].value}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>`
  
  theTBody.appendChild(newTR);
  newTR.getElementsByClassName('btn-remove')[0].onclick = removeProduct;
  productDetInput.forEach(item => {
    item.value = '';
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const theRemoveButtons = [...document.getElementsByClassName('btn-remove')];
  theRemoveButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  })

  const theCreateButton = document.getElementById('create');
  theCreateButton.addEventListener('click', createProduct);
});