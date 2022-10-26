// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  
  quantity.value = Math.max(quantity.value, 0);
  const subtotalCalculated = price.innerHTML * quantity.value;
  subtotal.innerText = subtotalCalculated;

  return subtotalCalculated;
}

// ITERATION 2 & 3
function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let totalAmmount = 0;
  for (let i = 0; i < allProducts.length; i++) {
    const universalSubtotal = updateSubtotal(allProducts[i]);
    totalAmmount += universalSubtotal;
  }
  const total = document.querySelector('#total-value span');
  total.innerText = totalAmmount;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const newNameInput = document.querySelector('.create-product input[type=text]');
  const newPriceInput = document.querySelector('.create-product input[type=number]');
  const lastOfProducts = document.querySelector('.product:last-of-type');

  newPriceInput.value = Math.max(newPriceInput.value, 0);

  let newProduct = document.createElement('tr');
  newProduct.className = 'product'
  newProduct.innerHTML = `<td class="name"> 
                            <span>${newNameInput.value}</span>
                          </td>
                          <td class="price">$<span>${newPriceInput.value}</span></td>
                          <td class="quantity">
                            <input type="number" value="0" min="0" placeholder="Quantity" />
                          </td>
                          <td class="subtotal">$<span>0</span></td>
                          <td class="action">
                            <button class="btn btn-remove">Remove</button>
                          </td>`
  lastOfProducts.insertAdjacentElement('afterend', newProduct);
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  newNameInput.value = "";
  newPriceInput.value = "";  
}

// BUTTONS
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  const removeBtnsArr = [...removeBtns];
  removeBtnsArr.forEach((b) => { b.addEventListener('click', removeProduct)});
  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
})