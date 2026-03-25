// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const subtotal = product.querySelector('.subtotal span');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  subtotal.innerText = price.innerText * quantity.value;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  const allproducts = document.querySelectorAll('.product');
  allproducts.forEach((product) => {
    updateSubtotal(product);
  } );
  const total = document.querySelector('#total-value span');
  let totalValue = 0;
  allproducts.forEach((product) => {
    const subtotal = product.querySelector('.subtotal span');
    totalValue += Number(subtotal.innerText);
  });
  total.innerText = totalValue; 
  


  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {  
  //... your code goes here
  const target = event.currentTarget;
  const productRow = target.closest('.product');
  productRow.remove();  
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input[type="text"]');
  const productPrice = document.querySelector('.create-product input[type="number"]');
  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  tbody.appendChild(newRow);
  productName.value = '';
  productPrice.value = '0';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
  //... your code goes here

window.addEventListener('load', () => {
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

});

window.addEventListener('load', () => {
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
}); 
