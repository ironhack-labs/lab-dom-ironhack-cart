// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const totalPrice = quantity * price;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = totalPrice.toFixed(2);
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
    totalPrice += Number(products[i].querySelector('.subtotal span').innerText);
  }
  document.getElementById('total-value').innerText = totalPrice.toFixed(2);
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

}

// ITERATION 5

const createProductButton = document.getElementById('create');
createProductButton.addEventListener ('click', createProduct);

function createProduct() {
  const name = (product.querySelector('.nameone').innerText);
  const productprice = Number(document.querySelector('.productpriceone').value);
  const productquantity = Number(document.querySelector('.quantityone').value);
  const productsubtotal = productprice * productquantity;

  addRow (name, productprice, productquantity, productsubtotal);
}

  function addRow(name, productprice, productquantity, productsubtotal) {
    const tableone = document.getElementsByClassName('product');
    let newRow = table.insertRow ();
    newRow.classList.add ('product');

    let cell1 = newRow.insertCell (0);
    let cell2 = newRow.insertCell (1);
    let cell3 = newRow.insertCell (2);
    let cell4 = newRow.insertCell (3);
    let cell5 = newRow.insertCell (4);
    cell1.innerHTML = name;
    cell2.innerHTML = productprice
    cell3.innerHTML = productquantity
    cell4.innerHTML = productsubtotal
    cell5.innerHTML = '<button class="remove"; onclick="removeRow(event)">Remove</button>';
  }

function removeRow(event) {
  const row = event.target.closest('tr');
  row.remove();
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});

