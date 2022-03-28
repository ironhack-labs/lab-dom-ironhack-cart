// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = price.textContent * quantity.value

  //... your code goes here
}

function calculateAll() {

  // ITERATION 2
  //... your code goes here

  const product = document.getElementsByClassName('product')

  for (let i = 0; i < product.length; i++) {

    updateSubtotal(product[i])

  }


  // ITERATION 3
  //... your code goes here

  let totalButtonValue = 0
  const subtotal = document.querySelectorAll('.subtotal span')
  for (let i = 0; i < subtotal.length; i++) {

    totalButtonValue += subtotal[i].textContent * 1

  }
  const sumOfTotals = document.querySelector('#total-value span')

  sumOfTotals.innerHTML = ""
  sumOfTotals.innerHTML += totalButtonValue

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  document.getElementById("tableBody").deleteRow(target);
  calculateAll()
}

// ITERATION 5

function createProduct() {

  let name = document.getElementById('name').value
  let tableBodyNode = document.getElementById('tableContainer').getElementsByTagName('tbody')[0];

  let newRow = tableBodyNode.insertRow(tableBodyNode.rows.length);

  let newCell = newRow.insertCell()
  newCell.innerHTML = name

  let newText = newCell.textContent
  newCell.appendChild(newText)


  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

window.addEventListener('load', () => {
  const deleteProductsBtn = document.querySelectorAll('.btn-remove')
  deleteProductsBtn.forEach(buttons => {
    buttons.addEventListener('click', removeProduct);
  });

  //... your code goes here
});

window.addEventListener('load', () => {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  //... your code goes here
});