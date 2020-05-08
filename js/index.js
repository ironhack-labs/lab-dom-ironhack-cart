// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  const priceProduct = parseFloat(price.innerHTML);
  let quantityProduct = parseFloat(quantity.value);
  if (typeof quantityProduct !== 'number' || quantityProduct < 0){
    alert('Enter a valid quanity');
  }else {
    let subtotalPrice = +(priceProduct*quantityProduct).toFixed(2);
    let subtotal = product.querySelector('.subtotal span');
    subtotal.innerHTML = subtotalPrice;
    console.log('Calculating subtotal, yey!');
    return subtotalPrice;
  }
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2  
  const products = document.querySelectorAll('.product');
  let total = 0;
  for (let i=0; i<products.length; i++){
    let subtot = updateSubtotal(products[i]);
    total += subtot;
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parentTable = document.querySelector('tbody');
  let products = target.closest('.product');
  parentTable.removeChild(products);
}

// ITERATION 5

function createProduct() {
  let newProduct = document.createElement('tr');
  newProduct.setAttribute('class', 'product');

  const createElement = document.querySelector('tfoot');
  let nameNewProduct = createElement.getElementsByTagName('input')[0].value;
  let priceNewProduct = createElement.getElementsByTagName('input')[1].value;

  newProduct.innerHTML=`
  <td class="name">
    <span>${nameNewProduct}</span>
  </td>
  <td class="price">$<span>${priceNewProduct}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;
  let parentTable = document.querySelector('tbody');
  parentTable.appendChild(newProduct);
  createElement.getElementsByTagName('input')[0].value = '';
  createElement.getElementsByTagName('input')[1].value = 0;


}

window.addEventListener('click', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let i=0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct);
  }
  const createProdBtn = document.getElementById('create');
  createProdBtn.addEventListener('click', createProduct);
});