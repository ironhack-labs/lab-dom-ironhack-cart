// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElem = product.querySelector('.price span').innerHTML;
  const quantElem = product.querySelector(".quantity input").value;
  const subElem = product.querySelector('.subtotal span');
 
  let subTotal = priceElem * quantElem;

  return subElem.innerHTML = subTotal; 
}

function calculateAll() {
  // ITERATION 2
  const allProduct = document.getElementsByClassName('product');
  
  const totalSum = [...allProduct]
      .filter(product => product.hasChildNodes())
      .map(node => updateSubtotal(node))
      .reduce((acc, cv) => acc + cv);
  
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const btn = event.target.parentNode.parentNode;  

  btn.innerHTML = '';
  
  
  calculateAll()
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  const newProductElem = document.querySelector('#new-product');
  const newPriceElem = document.querySelector('#new-price');

  const tableBodyElem = document.querySelector('tbody');
  
  const newTr = document.createElement('tr');
  newTr.classList = 'product';

  const newProductLine = `
  <td class="name">
    <span>${newProductElem.innerHTML}</span>
  </td>
  <td class="price">$<span>${newPriceElem.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `
  newTr.innerHTML = newProductLine;
  tableBodyElem.appendChild(newTr);
  
  addEventListener.removeProductBtn();

  newProductElem.value = "";
  newPriceElem.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll(".btn-remove");
  [...removeProductBtn].map(node => node.addEventListener('click', (e) => {
      removeProduct(e)}));

  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct);
});
