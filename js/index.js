// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotalPrice
  return subtotalPrice
}

function calculateAll() {

  // ITERATION 2

  let products = document.getElementsByClassName('product');
  let subtotalCalculation = [...products].map(product => updateSubtotal(product));

  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = subtotalCalculation.reduce((acc, curr) => acc + curr);

}
// ITERATION 4

function removeProduct(event) {
  const productDeleteButton = event.currentTarget;
  const parentList = productDeleteButton.parentNode.parentNode.parentNode
  const rowElement = productDeleteButton.parentNode.parentNode
  return parentList.removeChild(rowElement)
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const unitPrice = document.querySelector('.create-product input[type="number"]');

  if (nameInput && unitPrice) {
    const newProduct = document.createElement('tr');
    newProduct.className = 'product';
    newProduct.innerHTML = `<td class="name">
                      <span>${nameInput.value}</span>
                    </td>
                    <td class="price">$<span>${unitPrice.value}</span></td>
                    <td class="quantity">
                      <input type="number" value="0" min="0" placeholder="Quantity" />
                    </td>
                    <td class="subtotal">$<span>0</span></td>
                    <td class="action">
                      <button class="btn btn-remove">Remove</button>
                    </td>`;
    document.querySelector('tbody').appendChild(newProduct);
    newProduct
      .querySelector('.btn-remove')
      .addEventListener('click', removeProduct);
  }
  document.querySelector('.create-product input[type="text"]').value = '';
  document.querySelector('.create-product input[type="number"]').value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const productList = document.getElementsByClassName('btn-remove')
  Array.from([...productList]).forEach(product => {
    return product.addEventListener('click', function (e) {
      removeProduct(e)
    })
  })

  const createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', function (e) {
    createProduct(e)
  })
});
