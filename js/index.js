// ITERATION 1

function updateSubtotal(product) {
  const unitPrice = +product.querySelector('.price span').innerText;
  const quantity = +product.querySelector('.quantity input').value;

  product.querySelector('.subtotal span').innerText = unitPrice * quantity;
  //... your code goes here
  return unitPrice * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');

  let total = 0;

  for(const product of allProducts){
    total += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //... your code goes here
  target.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const name = document.querySelector('.create-product input[type="text"]');
  const price = document.querySelector('.create-product input[type="number"]');
  const table = document.querySelector('#cart tbody');
  const newProduct = document.createElement('tr').innerHTML = `
  <tr class="product">
    <td class="name">
      <span>Ironhack Beach Towel</span>
    </td>
    <td class="price">$<span>12.50</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;

  newProduct.querySelector('.name span').innerText = name.value;  
  newProduct.querySelector('.price span').innerText = price.value;  
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  table.appendChild(newProduct);
  
  name.value = '';
  price.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  for(const btn of removeButtons) {
    btn.addEventListener('click',removeProduct);
  }

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click',createProduct);
});
