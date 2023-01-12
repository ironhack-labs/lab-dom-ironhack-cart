function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');
  let subTotalPrice = price.innerHTML * quantity.value;
  subtotal.innerHTML = subTotalPrice;
  console.log(subTotalPrice)
  return subTotalPrice;
}

function calculateAll() {
  let total = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);}
  document.querySelector('#total-value span').innerHTML = total; 
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.closest('.product').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


const removeProductBtn = document.getElementsByClassName('btn');
for(let i = 0; i< removeProductBtn.length; i++){
  removeProductBtn[i].addEventListener('click', removeProduct);
}

const createProductBtn = document.getElementById('create');
createProductBtn.addEventListener('click', createProduct);


function createProduct() {
  const productName = document.querySelector('.create-product input[placeholder="Product Name"]').value;
  const productPrice = document.querySelector('.create-product input[placeholder="Product Price"]').value;

  const productRow = document.createElement('tr');
  productRow.classList.add('product');
  productRow.innerHTML = `
    <td>${productName}</td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" min="1" value="1" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>${productPrice}</span></td>
    <td>
      <button class="btn btn-remove remove-product" >Remove</button>
    </td>
  `;

  const tbody = document.querySelector('tbody');
  tbody.appendChild(productRow);

  const removeProductBtn = productRow.querySelector('.remove-product');
  removeProductBtn.addEventListener('click', removeProduct);

  document.querySelector('.create-product input[placeholder="Product Name"]').value = "";
  document.querySelector('.create-product input[placeholder="Product Price"]').value = "";

  calculateAll();
}