

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement=product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");
  const subtotalElement= product.querySelector(".subtotal span");

  const price=Number(priceElement.innerText);
  const quantity=Number(quantityElement.value);
  const subtotal= price*quantity;
  subtotalElement.innerText =subtotal;
  
  return subtotal;
  
}

function calculateAll() {
const allProducts = document.querySelectorAll('.product');
  let totalValue = 0;

  allProducts.forEach((product) => {
    totalValue += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerText = totalValue;
}


function removeProduct(event) {
const target = event.currentTarget;
  const row = target.parentNode.parentNode;

  row.remove();
  calculateAll();
}


function createProduct() {
  const createRow = document.querySelector('.create-product');
  const newNameInput = createRow.querySelector('input[type="text"]');
  const newPriceInput = createRow.querySelector('input[type="number"]');

  const newProductRow = document.createElement('tr');
  newProductRow.className = 'product'; 
 
  newProductRow.innerHTML = `
    <td class="name"><span>${newNameInput.value}</span></td>
    <td class="price">$<span>${Number(newPriceInput.value).toFixed(2)}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;
const removeBtn = newProductRow.querySelector('.btn-remove');

  removeBtn.addEventListener('click', removeProduct);

  const parent = document.querySelector('#cart tbody');
  parent.appendChild(newProductRow);
  newNameInput.value = '';
  newPriceInput.value = 0;



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  });
});


