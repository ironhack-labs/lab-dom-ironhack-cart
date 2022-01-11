// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = parseFloat(price) * parseFloat(quantity);
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  const products = [...document.querySelectorAll('.product')];
  let total = 0;

  products.forEach(function (singleProduct) {
    let subTotalProduct = updateSubtotal(singleProduct);
    total += subTotalProduct;
  });

  // ITERATION 2
  //this is the previous step

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productToBeRemoved = target.closest('tr');
  const cartTableBody = document.querySelector('#cart tbody');
  cartTableBody.removeChild(productToBeRemoved);
  // //... your code goes here

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const newItem = document.createElement('tr');
  newItem.setAttribute('class', 'product');
  newItem.innerHTML = ` <td class="name">
   <span>${productName}</span>
 </td>
   <td class="price">$<span>${productPrice}15.00</span></td>
   <td class="quantity">
     <input type="number" value="0" min="0" placeholder="Quantity" />
   </td>
   <td class="subtotal">$<span>0</span></td>
   <td class="action">
     <button class="btn btn-remove">Remove</button>
   </td>`;
  console.log(newItem);
  const cartBody = document.querySelector('tbody');
  cartBody.appendChild(newItem);

  const removeBtns = [...document.querySelectorAll('.btn-remove')];
  removeBtns.forEach((eachBtn) => {
    eachBtn.addEventListener('click', removeProduct);
  });
  document.getElementById('productName').value = '';
  document.getElementById('productPrice').value = '0';

  calculateAll();

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = [...document.querySelectorAll('.btn-remove')];
  removeBtns.forEach((eachBtn) => {
    eachBtn.addEventListener('click', removeProduct);
  });
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  //... your code goes here
});
