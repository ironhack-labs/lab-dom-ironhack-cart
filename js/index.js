// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const subtotalNum = price.innerText * quantity.value;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotalNum.toFixed(2);

  return subtotalNum; 
}

function calculateAll() {
  let totalValueNum = 0; 

  const allProducts = document.querySelectorAll('.product'); 
  allProducts.forEach(product => {
    updateSubtotal(product);
    totalValueNum += updateSubtotal(product);
  })

  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerText = totalValueNum.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.closest('.product');
  
  product.parentNode.removeChild(product); 
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const product = document.querySelectorAll('.create-product input')[0];
  const amount = document.querySelectorAll('.create-product input')[1];

  if (product.value.trim() && amount.value > 0) {
    const tableBody = document.querySelector('tbody'); 
    
    tableBody.innerHTML += `<tr class="product">
      <td class="name">
        <span>${product.value}</span>
      </td>
      <td class="price">$<span>${Number(amount.value).toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`; 

    addRemoveFunctionToBtns(); 
    product.value = ''; 
    amount.value = 0;  
  }
}

// Event Listeners 

function addRemoveFunctionToBtns() {
  const allRemoveBtn = document.querySelectorAll(".btn.btn-remove");

  allRemoveBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
      removeProduct(event);
    })
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  addRemoveFunctionToBtns(); 

  const createProdBtn = document.querySelector('#create');
  createProdBtn.addEventListener('click', createProduct);
});
