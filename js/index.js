// ITERATION 1

let rowData;

function updateSubtotal(product) {
  console.log('Calculating subtotal, yay!');

    let price = product.querySelector('.price span');
    let quantity = product.querySelector('.quantity input');

    price = price.innerHTML;
    quantity = quantity.value;

    let subtotal = product.querySelector('.subtotal span');
    let total = price * quantity;
    subtotal.innerHTML = total;
  return total;

}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct); 
  // // end of test

  // ITERATION 2
  let cartRows = document.querySelectorAll('#cart .product');
  console.log(cartRows);
  let total = 0;
  for (let row of cartRows) {
    total += updateSubtotal(row);
  }

  // ITERATION 3
  let totalHTML = document.querySelector('#total-value span');
  totalHTML.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  target.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  console.log('Tried to create project');
  let pName = document.querySelector('.create-product input[type="text"]');
  let pPrice = document.querySelector('.create-product input[type="number"]');

  rowData.querySelector('.name span').innerHTML = pName.value;
  rowData.querySelector('.price span').innerHTML = pPrice.value;

  pName.value = '';
  pPrice.value = 0;

  let productList = document.querySelector('#cart tbody');
  let newRow = productList.appendChild(rowData);
  let newBtn = newRow.getElementsByClassName('btn-remove')[0];
  newBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  for (btn of document.getElementsByClassName('btn-remove')) {
    btn.addEventListener('click', removeProduct);
  }

  document.getElementById('create').addEventListener('click', createProduct);

  // cloned before the user can delete it
  rowData = document.getElementsByClassName('product')[0].cloneNode(true);
});
