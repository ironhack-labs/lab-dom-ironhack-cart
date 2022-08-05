function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = price * quantity;
  return (price * quantity);
}

function calculateAll() {
  let total = 0;
  let totalValue = document.querySelector('#total-value span');
  const products = document.getElementsByClassName('product');
  for (const product of products)
    total += updateSubtotal(product);
  totalValue.textContent = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode;
  document.querySelector('tbody').removeChild(parent.parentNode);
  calculateAll();
}

function createProduct() {
  let name = document.querySelector('tfoot .create-product input[type="text"]').value;
  let price = document.querySelector('tfoot .create-product input[type="number"]').value;
  let newProduct = document.createElement('tr');
  newProduct.className = 'product'; 
  newProduct.innerHTML = `
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
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  document.querySelector('tbody').appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (const btn of removeBtns){
    btn.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
