function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity;
  
  return price * quantity;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  
  let totalFinal = 0;
  for(let i = 0; i < allProducts.length; i++) {
    totalFinal += updateSubtotal(allProducts[i]);  
  }
  
  let total = document.querySelector('#total-value span');
  total.innerHTML = totalFinal; 
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const parent = document.querySelector('tbody');
  const product = target.parentNode.parentNode;
  parent.removeChild(product);
}

// ITERATION 5
function createProduct() {
  const newProdForm = document.querySelector('.create-product');
  const newProdNameInput = newProdForm.querySelector('#new-product-name');
  const newProdNameValue = newProdNameInput.value;
  console.log(newProdNameValue);

  const newProdPriceInput = newProdForm.querySelector('#new-product-value');
  const newProdPriceValue = newProdPriceInput.value;
  console.log(newProdPriceValue);

  const tr = document.createElement('tr');
  tr.className = 'product';

  const trContent = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$ <span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$ <span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
  tr.innerHTML = trContent;
  const tbody = document.querySelector('tbody');
  tbody.appendChild(tr)

  const btnRemove = tr.querySelector('.btn-remove');
  btnRemove.addEventListener('click', removeProduct);

  newProdNameValue.value = ''
  newProdPriceValue.value = ''
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btnRemove = document.querySelectorAll('.btn-remove');
  for(let removeBtn of btnRemove) {
    removeBtn.addEventListener('click', removeProduct);  
  }

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);  
});
