// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = Number(price.innerText);
  const quantityValue = Number(quantity.value);
    const totalAmount  = priceValue* quantityValue;
    const subtotal = product.querySelector('.subtotal span');
    subtotal.innerText = totalAmount;
    return totalAmount;
  
}

  
function calculateAll() {
  const products = document.querySelectorAll('.product');  
  
  products.forEach(singleProduct => {
    updateSubtotal(singleProduct);
  });

  let totalValue = 0;
  products.forEach(singleProduct => {
    const subtotalElement = singleProduct.querySelector('.subtotal span');
    totalValue += Number(subtotalElement.innerText);
  });

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = totalValue;  

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const productRow = target.parentNode.parentNode;
  const tbody = productRow.parentNode;             
  tbody.removeChild(productRow);  
calculateAll();
}
// ITERATION 5








function createProduct() {
   const createRow = document.querySelector('.create-product');
  const nameInput  = createRow.querySelector( 'input[type="text"]');
  const priceInput =   createRow.querySelector('input[type="number"]');

  const productName =  nameInput.value;
  const productPrice = Number(priceInput.value).toFixed(2);

  const newProductRow = document.createElement('tr');
  newProductRow.className = 'product';

  newProductRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
     </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td  class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td  class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  const  removeBtn =  newProductRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  const tbody =  document.querySelector('#cart tbody');
  tbody.appendChild (newProductRow);

  nameInput.value  =  '' ;
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});