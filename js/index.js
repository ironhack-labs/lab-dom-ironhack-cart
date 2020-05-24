// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerText
    const quantity = product.querySelector('.quantity input').value;
    const subTotal = price * quantity 
    product.querySelector('.subtotal span').innerText = subTotal ;
    return subTotal
}
// ITERARION 2, 3
function calculateAll() {
  const anyProduct = document.querySelectorAll('.product');
  let subtotal = 0; 
  [...anyProduct].forEach(product => {
    subtotal += updateSubtotal(product)});
  document.querySelector('#total-value span').innerText = subtotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  const elementToRemove = target.parentElement.parentElement;
  const parent = elementToRemove.parentElement;
  parent.removeChild(elementToRemove);
}

// ITERATION 5

function createElement(tag, attributes, children, onClick) {
  const element = document.createElement(tag);
  if (attributes) {
    Object.entries(attributes).forEach(values => element.setAttribute(values[0], values[1]));
  }
  if (children) {
    children.forEach(child => element.appendChild(child));
  }
  if (onClick) {
    element.addEventListener('click', onClick);
  }
  return element
}

function createRow (name, price) {
// create row with class = product

const row = createElement('tr', { class: 'product' });

// Create column with name

const nameSpan = createElement('span', undefined, [document.createTextNode(name)]);
const nameTd = createElement('td', {class: 'name'}, [nameSpan]);
row.appendChild(nameTd);

// Create column with price

const priceSpan = createElement('span', undefined, [document.createTextNode(price)]);
const priceTd = createElement('td', {class: 'price'}, [document.createTextNode('$'), priceSpan]);
row.appendChild(priceTd);

// Create column with quantity input 
const inputAttributes = {
  type: 'number',
  value: 0,
  min: 0,
  placeholder: 'Quantity'
} 
const quantityInput = createElement('input', inputAttributes);
const quantityTd = createElement('td', {class: 'quantity'}, [quantityInput]);
row.appendChild(quantityTd);

// create column with subtotal

const subtotalSpan = createElement('span', undefined, [document.createTextNode('0')]);
const subtotalTd = createElement('td', {class: 'subtotal'}, [document.createTextNode('$'), subtotalSpan]);
row.appendChild(subtotalTd);

// create column with action

const actionSpan = createElement('button', { class: 'btn btn-remove' }, [document.createTextNode('Remove')], removeProduct);
const actionTd = createElement('td', { class: 'action' }, [actionSpan]);
row.appendChild(actionTd);

return row
}


function createProduct() {
  const name = document.querySelector('.create-product td input[type=text]').value;
  const price = document.querySelector('.create-product td input[type=number]').value;
  const row = createRow(name, price);
  document.querySelector('tbody').appendChild(row);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeAnyProduct = document.querySelectorAll('.btn-remove');
  [...removeAnyProduct].forEach(button => button.addEventListener('click', removeProduct));

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);
});
