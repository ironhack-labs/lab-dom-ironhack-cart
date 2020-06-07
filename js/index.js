// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  console.log(quantity)
  //... your code goes here

  let subtotalValue = price * quantity
  console.log(subtotalValue)
  product.querySelector('.subtotal span').innerHTML = subtotalValue
  return subtotalValue

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0

  const products = document.querySelectorAll('.product')
  products.forEach(function (elm) {
    total += updateSubtotal(elm)
  })

  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const tableRef = document.getElementById('cart').getElementsByTagName('tbody')[0];

  const newRow = tableRef.insertRow();
  newRow.className = 'product';

  const nameTag = document.createElement('span');
  nameTag.innerText = document.querySelector('.createName').value;
  const productName = newRow.insertCell();
  productName.className = 'name';
  productName.appendChild(nameTag);
  
  const priceTag = document.createElement('span')
  priceTag.innerText = document.querySelector('.createProductPrice').value;
  const productPrice = newRow.insertCell();
  productPrice.appendChild(document.createTextNode('$'));
  productPrice.appendChild(priceTag);
  productPrice.className = 'price';

  const quantityTag = document.createElement('input');
  // type="number" value="0" min="0" placeholder="Quantity
  quantityTag.type = 'number';
  quantityTag.value = '0';
  quantityTag.min = '0';
  quantityTag.placeholder = 'Quantity';
  const productQuantity = newRow.insertCell();
  productQuantity.appendChild(quantityTag);
  productQuantity.className = 'quantity';

  const subtotalTag = document.createElement('span');
  subtotalTag.innerText = '0';
  const productSubtotal = newRow.insertCell();
  productSubtotal.appendChild(document.createTextNode('$'));
  productSubtotal.appendChild(subtotalTag);
  productSubtotal.className = 'subtotal';


  const removeBtn = document.createElement('button');
  removeBtn.className = 'btn btn-remove';
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', removeProduct);
  const productActions = newRow.insertCell();
  productActions.appendChild(removeBtn);
  productActions.className = 'action';



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove')

  removeBtn.forEach(function (elm) {
    elm.addEventListener('click', removeProduct)

  })

  const createBtn = document.querySelector('#create')

  createBtn.addEventListener('click', createProduct)


  //... your code goes here
});
