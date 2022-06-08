// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalBox = product.querySelector('.subtotal span');

  let subtotal = price * quantity;

  subtotalBox.textContent = subtotal;

  return subtotal;
}

function calculateAll() {
  
  // ITERATION 2 & 3
    const products = document.getElementsByClassName('product');

    const totalPrice = document.querySelector('#total-value span');

    let total = 0;

    Array.from(products).forEach(product => {      
      total += updateSubtotal(product)      
    });
  
    totalPrice.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const parent = target.closest('.product');
  parent.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputName = document.querySelector('input[type="text"]').value;
  const inputPrice = document.querySelector('input[placeholder="Product Price"]').value;

  const newProduct = document.createElement('tr');
  const productName = document.createElement('td');
  const productPrice = document.createElement('td');
  const productQuantity = document.createElement('td');
  const productSubtotal = document.createElement('td');
  const productRemoveBtn = document.createElement('td');

  newProduct.classList.add('product');
  productName.classList.add('name');
  productPrice.classList.add('price');
  productPrice.textContent = '$';
  productQuantity.classList.add('quantity');
  productSubtotal.classList.add('subtotal');
  productSubtotal.textContent = '$';
  productRemoveBtn.classList.add('action');
    
  const tablebody = document.querySelector('tbody');

  tablebody.appendChild(newProduct);
  newProduct.appendChild(productName);
  newProduct.appendChild(productPrice);
  newProduct.appendChild(productQuantity);
  newProduct.appendChild(productSubtotal);
  newProduct.appendChild(productRemoveBtn);

  let spanName = document.createElement('span');
  let spanPrice = document.createElement('span');
  const inputQuantity = document.createElement('input');
  setAttributes(inputQuantity,{"type" : "number", "value" : "0", "min" : "0", "placeholder" : "Quantity"});

  function setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

  const spanSubtotal = document.createElement('span');
  spanSubtotal.textContent = 0;
  const buttonRemove = document.createElement('button');    
  buttonRemove.classList.add('btn','btn-remove');
  buttonRemove.textContent = 'Remove';

  productName.appendChild(spanName);
  productPrice.appendChild(spanPrice);
  productQuantity.appendChild(inputQuantity);
  productSubtotal.appendChild(spanSubtotal);
  productRemoveBtn.appendChild(buttonRemove)

  spanName.textContent = inputName;
  spanPrice.textContent = inputPrice;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.action button');
  removeBtn.forEach(btn => btn.addEventListener('click', removeProduct));
  
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
  })  

