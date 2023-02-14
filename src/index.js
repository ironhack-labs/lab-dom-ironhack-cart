function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value ;
  let subtotal = product.querySelector('.subtotal span');
  let valueSubtotal = (price*quantity).toFixed(2)
  subtotal.innerHTML = valueSubtotal;
  return valueSubtotal;
}

function calculateAll() {
  let valueTotal = 0;
  const singleProduct = document.querySelectorAll('.product');
  singleProduct.forEach(product => valueTotal += parseFloat(updateSubtotal(product)));
  const total = document.querySelector('#total-value span');
  total.innerHTML = valueTotal.toFixed(2);
}

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
}

function createProduct() {
  const bodyTable = document.querySelector('tbody');
  const productName = document.querySelector('.product-name input').value;
  const productValue = document.querySelector('.product-price input').value;
  bodyTable.innerHTML += `<tr class="product">
                      <td class="name">
                        <span>${productName}</span>
                      </td>
                      <td class="price">$<span>${parseFloat(productValue).toFixed(2)}</span></td>
                      <td class="quantity">
                        <input type="number" value="0" min="0" placeholder="Quantity" />
                      </td>
                      <td class="subtotal">$<span>0</span></td>
                      <td class="action">
                        <button class="btn btn-remove">Remove</button>
                      </td>
                    </tr>`;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(element => element.addEventListener('click', removeProduct));
  

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
