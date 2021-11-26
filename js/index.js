/*jshint esversion:8 */
// ITERATION 1

function updateSubtotal(product) {


  
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  if (quantity.value === "") {
    return 0;
  }
  let subtotal = product.querySelector('.subtotal span');
  let res = (parseInt(price.innerHTML) * parseInt(quantity.value));
  subtotal.innerHTML = res;
  return res;
}

function calculateAll() {


  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll(".product");
  products.forEach(element => {
    updateSubtotal(element);
  });

  
  // ITERATION 3
  let sumAll = 0;
  products.forEach(element => {
    sumAll += updateSubtotal(element);
  });
  let total = document.querySelector("#total-value span");
  total.innerHTML = sumAll;
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let tableRow = target.parentNode.parentNode;
  tableRow.remove();

  let total = document.querySelector("#total-value span");
  total.innerHTML -= tableRow.querySelector('.subtotal span').innerHTML;

  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let name = document.querySelector('.create-product input[type=text]');
  let unitPrice = document.querySelector('.create-product input[type=number]');

  let newRow = document.createElement('tr');
  let rowNameTd = document.createElement('td');
  let rowUniPriceTd = document.createElement('td');
  let rowQuantityTd = document.createElement('td');
  let rowSubtotalTd = document.createElement('td');
  let rowBtnTd = document.createElement('td');

  rowNameTd.innerHTML = `<span>${name.value}</span>`;
  rowUniPriceTd.innerHTML = `$<span>${unitPrice.value}.00</span>`;
  rowQuantityTd.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />';
  rowSubtotalTd.innerHTML = '$<span>0</span>';
  rowBtnTd.innerHTML = '<button class="btn btn-remove">Remove</button>';

  newRow.setAttribute('class', 'product');
  rowNameTd.setAttribute('class', 'name');
  rowUniPriceTd.setAttribute('class', 'price');
  rowQuantityTd.setAttribute('class', 'quantity');
  rowSubtotalTd.setAttribute('class', 'subtotal');
  rowBtnTd.setAttribute('class', 'action');
  
  rowBtnTd.firstChild.addEventListener('click', removeProduct);

  newRow.appendChild(rowNameTd);
  newRow.appendChild(rowUniPriceTd);
  newRow.appendChild(rowQuantityTd);
  newRow.appendChild(rowSubtotalTd);
  newRow.appendChild(rowBtnTd);

  document.querySelector('tbody').appendChild(newRow);

  name.value = '';
  unitPrice.value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const createBtn = document.querySelector('#create');
  calculatePricesBtn.addEventListener('click', calculateAll);
  createBtn.addEventListener('click', createProduct);
  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');

  for(let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].onclick = removeProduct;
  }
  
});
