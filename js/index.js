// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subTotal = parseFloat(price) * parseInt(quantity)
  
  product.querySelector('.subtotal span').innerText = subTotal

  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product')

  let total = 0
  allProducts.forEach(singleProduct => {
    total += updateSubtotal(singleProduct)
  })
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const button = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const parentProduct = button.parentElement.parentElement;
  parentProduct.remove()
}

// ITERATION 5

function createProduct() {
  let tbody = document.querySelector('tbody');
  let newProductName = document.querySelector(
    '.create-product input[type="text"]'
  ).value;
  let newProducPrice = document.querySelector(
    '.create-product input[type="number"]'
  ).value;
  let tr = document.createElement('tr');
  tr.classList.add('product');
  let tdName = document.createElement('td');
  tdName.classList.add('name');
  let spanName = document.createElement('span');
  tdName.appendChild(spanName);
  tr.appendChild(tdName);
  let tdPrice = document.createElement('td');
  tdPrice.classList.add('price');
  tdPrice.innerText = '$';
  let spanPrice = document.createElement('span');
  tdPrice.appendChild(spanPrice);
  tr.appendChild(tdPrice);
  let tdQuantity = document.createElement('td');
  tdQuantity.classList.add('quantity');
  let inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.value = 0;
  inputQuantity.min = 0;
  inputQuantity.placeholder = 'Quantity';
  tdQuantity.appendChild(inputQuantity);
  tr.appendChild(tdQuantity);
  let tdSubtotal = document.createElement('td');
  tdSubtotal.classList.add('subtotal');
  tdSubtotal.innerText = '$';
  let spanSubtotal = document.createElement('span');
  spanSubtotal.innerText = 0;
  tdSubtotal.appendChild(spanSubtotal);
  tr.appendChild(tdSubtotal);
  let tdAction = document.createElement('td');
  tdAction.classList.add('action');
  let actionButton = document.createElement('button');
  actionButton.classList.add('btn', 'btn-remove');
  actionButton.innerText = 'Remove';
  tdAction.appendChild(actionButton);
  tr.appendChild(tdAction);
  tr.querySelector('.name span').innerText = newProductName;
  tr.querySelector('.price span').innerText = newProducPrice;
  tbody.appendChild(tr);
  addRemoveBtnEvtListener();
}

/*window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.product .btn-remove')
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
  //... your code goes here
});*/


window.addEventListener('load', () => {
  addCalculatePricesBtnEvtListener();
  addRemoveBtnEvtListener();
  addCreateProductBtnEvtListener();
});
const addCalculatePricesBtnEvtListener = () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
};
const addRemoveBtnEvtListener = () => {
  const deleteProductBtns = document.querySelectorAll('.action .btn-remove');
  deleteProductBtns.forEach((removeBtn) =>
    removeBtn.addEventListener('click', removeProduct)
  );
};
const addCreateProductBtnEvtListener = () => {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
};