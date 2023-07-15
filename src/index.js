// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const priceElement = product.querySelector('td.price > span');
  const price = Number(priceElement.textContent);
  console.log(price);


 
  const quantityElement = product.querySelector('td.quantity > input');
  const quantityValue = Number(quantityElement.value);
  console.log(quantityValue);

  const subtotal = price * quantityValue //hago la multiplicación
  console.log(subtotal);

  const subtotalElement = product.querySelector('td.subtotal > span');
  subtotalElement.textContent = subtotal.toFixed(2);
  
  return subtotal
}

function calculateAll() {


  // ITERATION 2
  const multipleProducts = document.getElementsByClassName('product');
  Array.from(multipleProducts).forEach(product => updateSubtotal(product));
 

  
  // ITERATION 3 
  
  let totalPrice = 0; 

  Array.from(multipleProducts).forEach(subtotalPrice => totalPrice += updateSubtotal(subtotalPrice));


  const totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.textContent = totalPrice.toFixed(2);
 
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.closest('tr').remove();
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const itemTable = document.getElementById('cart');
  const itemTableBody = document.querySelector('tbody');

  const productNameInput = document.querySelector('tr.create-product > td > input');
  const productNameValue = productNameInput.value;

  const productPriceInput = document.querySelector('tr.create-product > td + td > input');
  const productPriceValue = Number(productPriceInput.value);
  
  if (productNameValue && productPriceValue) {
   
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  
  const productNameCell = document.createElement('td');
  productNameCell.classList.add('name');
  const productNameCellElement = document.createElement('span');
  productNameCellElement.textContent = productNameValue;

  const productPriceCell = document.createElement('td');
  productPriceCell.classList.add('price');
  productPriceCell.textContent = "$";
  const productPriceCellElement = document.createElement('span');
  productPriceCellElement.textContent = productPriceValue.toFixed(2);

  const productQuantityCell = document.createElement('td');
  productQuantityCell.classList.add('quantity');
  
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.min = 0;
  quantityInput.placeholder = 'Quantity';

  const productSubtotalCell = document.createElement('td');
  productSubtotalCell.classList.add('subtotal');
  productSubtotalCell.textContent = "$";

  const productSubtotalCellElement = document.createElement('span');
  productSubtotalCellElement.textContent = 0;
 

  const productActionCell = document.createElement('td');
  productActionCell.classList.add('action');
  const productActionBtn = document.createElement('button');
  productActionBtn.classList.add('btn', 'btn-remove')
  productActionBtn.textContent = 'Remove';
  productActionBtn.addEventListener('click', removeProduct);

  productPriceCell.appendChild(productPriceCellElement)
  productNameCell.appendChild(productNameCellElement)
  productActionCell.appendChild(productActionBtn);
  productSubtotalCell.appendChild(productSubtotalCellElement); 
  productQuantityCell.appendChild(quantityInput);
  newRow.append(productNameCell, productPriceCell, productQuantityCell, productSubtotalCell, productActionCell)
  itemTableBody.appendChild(newRow)

  productNameInput.value = "";
  productPriceInput.value = "";

  }



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.getElementsByClassName('btn-remove');
  Array.from(removeBtn).forEach(button => {
    button.addEventListener('click', removeProduct)
  });

  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct)

});