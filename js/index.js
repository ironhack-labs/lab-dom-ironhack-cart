// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceSpan = product.querySelector('.price span');
  const price = Number(priceSpan.innerText);

  console.log('price', price)

  const quantityInput = product.querySelector('.quantity input');
  const quantity = Number(quantityInput.value);

  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

const products = document.getElementsByClassName('product');
let total = 0;

  [...products].forEach(product => {
    total += updateSubtotal(product)
  });
  document.querySelector('#total-value span').innerText = total;
  return total

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;
  console.log(event.currentTarget);
  target.remove(target);
  console.log('The target in remove is:', target);
  //... your code goes here

calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
const newProductName = document.querySelector('.addProduct input').value;
const newProductPrice = document.querySelector('.addProduct :nth-child(2) input').value;
const products = document.querySelector('tbody');
const newProduct = document.createElement('tr');
  newProduct.className = 'product';
  newProduct.innerHTML = `<td class="name"><span>${newProductName}</span></td>
  <td class="price">$<span>${newProductPrice}</span></td> 
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>`;
products.append(newProduct);
remove();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.querySelector('.btn-create');
  createBtn.addEventListener('click', createProduct);

  //... your code goes here
  remove();
});

function remove() {
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  [...removeBtn].forEach(button => {
    button.addEventListener('click', removeProduct);
  })
}