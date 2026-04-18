// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const result = Number(quantity) * price
  //console.log(price, quantity, result);
  subtotal.innerHTML = result;
  return result;
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
  const subtotalPrice = [];
  //console.log(allProducts);

  for (let i=0; i < allProducts.length; i++) {
    subtotalPrice[i] = updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalPrice = subtotalPrice.reduce((sum,el) => sum += (el || 0),0);
  //console.log(totalPrice);
  const totalPriceEl = document.querySelector('#total-value span');
  totalPriceEl.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const targetTR = target.parentNode.parentNode;
  //console.log("targetTR:", targetTR);
  targetTR.parentNode.removeChild(targetTR);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // Get Product data from Inputs and store them
  const productDetails = document.querySelectorAll('.create-product input');
  console.log(productDetails);
  let name = productDetails[0].value;
  let price = Number(productDetails[1].value);
  //console.log(name, price);

  // Create new Row/tr
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  // console.log(newRow.classList);
  // console.log(newRow.className);

  // Product Name Cell
  const pNameTD = document.createElement('td');
  pNameTD.classList.add('name');
  pNameTD.appendChild(document.createElement('span'));
  pNameTD.firstChild.innerHTML = name;
  newRow.appendChild(pNameTD);

  // Unit Price Cell
  const uPriceTD = document.createElement('td');
  uPriceTD.classList.add('price');
  uPriceTD.append("$");
  uPriceTD.appendChild(document.createElement('span'));
  uPriceTD.firstElementChild.innerHTML = price;
  newRow.appendChild(uPriceTD);

  // Quantity Cell
  const quanTD = document.createElement('td');
  quanTD.classList.add('quantity');
  quanTD.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />';
  newRow.appendChild(quanTD);

  // Subtotal Cell
  const subTD = document.createElement('td');
  subTD.classList.add('subtotal');
  subTD.innerHTML = '$<span>0</span>';
  newRow.appendChild(subTD);

  // Action Cell & Button Event Listener
  const actionTD = document.createElement('td');
  const actionBtn = document.createElement('button');
  actionTD.classList.add('action');
  actionBtn.classList.add('btn','btn-remove');
  actionBtn.innerHTML = 'Remove';
  actionBtn.addEventListener('click', removeProduct);
  actionTD.appendChild(actionBtn);
  newRow.appendChild(actionTD);

  // Append to the Table
  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newRow);

  // Clear Inputs
  productDetails[0].value = "";
  productDetails[1].value = "";

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');
  //console.log(removeBtns);
  for(let i=0; i<removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
