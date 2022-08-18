// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  
  subtotal.innerText = price.innerText * quantity.value;;
  return subtotal.innerText;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    totalPrice += Number(updateSubtotal(allProducts[i]));
  }
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  total.innerText = totalPrice;
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
  const productContainer = document.getElementById('product-container');
  const newProductNameInput = document.getElementById('new-product-name');
  const newProductPriceInput = document.getElementById('new-product-price');
  
  if (newProductNameInput.value && newProductPriceInput.value > 0) {
    const newProduct = document.createElement('tr');
    const newProductName = document.createElement('td');
    const newProductPrice = document.createElement('td');
    const newProductQuantity = document.createElement('td');
    const newProductQuantityInput = document.createElement('input');
    const newProductSubtotal = document.createElement('td');
    const newProductAction = document.createElement('td');
    const newProductRemoveBtn = document.createElement('button');
  
    newProduct.classList.add('product');
    newProductName.classList.add('name');
    newProductPrice.classList.add('price');
    newProductQuantity.classList.add('quantity');
    newProductQuantityInput.setAttribute('type', 'number');
    newProductQuantityInput.setAttribute('value', '0');
    newProductQuantityInput.setAttribute('min', '0');
    newProductQuantityInput.setAttribute('placeholder', 'Quantity');
    newProductSubtotal.classList.add('subtotal');
    newProductAction.classList.add('action');
    newProductRemoveBtn.classList.add('btn', 'btn-remove');
  
    productContainer.appendChild(newProduct);
  
    newProduct.appendChild(newProductName);
    newProduct.appendChild(newProductPrice);
    newProduct.appendChild(newProductQuantity);
    newProduct.appendChild(newProductSubtotal);
    newProduct.appendChild(newProductAction);
  
    newProductName.innerHTML = `<span>${newProductNameInput.value}</span>`;
    newProductPrice.innerHTML = `$<span>${newProductPriceInput.value}</span>`;
    newProductQuantity.appendChild(newProductQuantityInput);
    newProductSubtotal.innerHTML = `$<span>0</span>`;
    newProductAction.appendChild(newProductRemoveBtn);
    newProductRemoveBtn.innerText = 'Remove';
  
    newProductRemoveBtn.addEventListener('click', removeProduct);

    newProductNameInput.value = '';
    newProductPriceInput.value = 0;
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
