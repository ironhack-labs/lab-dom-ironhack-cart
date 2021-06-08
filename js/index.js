

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const total = price * quantity

  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = total;

  return total;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test


  const allProducts = document.querySelectorAll('.product');
  const allProductsArr = [...allProducts];

  if (!allProductsArr.length) return;

  const sumTotal = allProductsArr.map(product => updateSubtotal(product)).reduce((a, c) => a + c);
  console.log(sumTotal);

  document.querySelector('#total-value span').innerText = sumTotal;


}



function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
  calculateAll();


}

// ITERATION 5
// This is most likely the worst way to do this, but it works

function createProduct() {
  const table = document.querySelector('#cart tbody');
  const tableRow = document.createElement('tr');
  tableRow.classList.add("product")

  const productInput = document.querySelectorAll('.create-product input');

  //first cell
  const productName = document.createElement('td');
  productName.classList.add("name");
  const spanName = document.createElement('span');
  spanName.innerText = productInput[0].value
  productName.append(spanName);
  tableRow.append(productName);

  //Second cell
  const productPrice = document.createElement('td');
  productPrice.classList.add("price");
  const spanPrice = document.createElement('span');
  spanPrice.innerText = productInput[1].value;
  console.log(productInput[1].value);
  productPrice.innerHTML += "$";
  productPrice.append(spanPrice);
  tableRow.append(productPrice);

  //Third cell
  const quantityCell = document.createElement('td');
  quantityCell.classList.add("quantity");
  const inputQuantity = document.createElement('input');
  inputQuantity.type = "number";
  inputQuantity.setAttribute('value', 0)
  inputQuantity.min = "0";
  inputQuantity.placeholder = "Quantity";
  quantityCell.append(inputQuantity);
  tableRow.append(quantityCell);

  //Forth cell
  const subTotalCell = document.createElement('td');
  subTotalCell.classList.add("subtotal");
  subTotalCell.innerHTML += "$";
  const spanSubTotal = document.createElement('span');
  spanSubTotal.innerText = "0";
  subTotalCell.append(spanSubTotal);
  tableRow.append(subTotalCell);

  //Fifth cell
  const actionCell = document.createElement('td');
  actionCell.classList.add("subtotal");
  const buttonAction = document.createElement('button');
  buttonAction.classList.add("btn");
  buttonAction.classList.add("btn-remove");
  buttonAction.innerText = "Remove";
  buttonAction.addEventListener('click', removeProduct);
  actionCell.append(buttonAction);
  tableRow.append(actionCell);

  table.append(tableRow);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  const removeBtnArr = [...removeBtn];
  removeBtnArr.forEach(button => button.addEventListener('click', removeProduct));

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);


});
