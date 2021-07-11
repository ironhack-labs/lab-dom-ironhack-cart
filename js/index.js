// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  const subtotalTotal= (Number(price)*Number(quantity)).toFixed(2);
  subtotal.innerHTML = subtotalTotal;
  return subtotalTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  //... your code goes here
  let total = 0;
  const products = document.querySelectorAll('.product');
  const totalprice= document.querySelector('#total-value span')
  products.forEach(product => {
    total += updateSubtotal(product);
    totalprice.innerHTML = total; 
  });

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {

  //... your code goes here
  let name = document.querySelector('.create-product-name')
  let price = document.querySelector('.create-project-price')
  let tbody = document.querySelector('#cart tbody')

  tbody.innerHTML += `<tr class="product">
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
</tr>`

const removeBtn = document.querySelectorAll('.btn-remove');
removeBtn.forEach(button => {
  button.addEventListener('click', removeProduct);
});
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
