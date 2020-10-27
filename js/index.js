// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  let subTotalHTML = product.querySelector('.subtotal span');
  subTotalHTML.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  let total = 0;
  let newProducts = document.getElementsByClassName('product');
  console.log(newProducts);
  for (let newProduct of newProducts) {
    total += updateSubtotal(newProduct);
  }
  let finalTotalDisplay = document.querySelector('#total-value span');
  finalTotalDisplay.innerText = total;
}

function removeProduct(event) {

  const target = event.currentTarget;
  const parent = event.target.parentNode.parentNode;
  parent.remove(event.target);
}

// ITERATION 5
document.getElementById('create').addEventListener('click', createProduct);
function createProduct() {
    let table = document.querySelector('tbody')
    let row = document.querySelector('.product');
    let rowClone = row.cloneNode(true);
    table.appendChild(rowClone);

    let rowCloneName = rowClone.querySelector('.name span')
    let nameInput = document.querySelector('.create-product td input').value;
    rowCloneName.innerHTML = `<span>${nameInput}</span>`

    let rowClonePrice = rowClone.querySelector('.price span')
    let numberInput = document.querySelector('.input-field-number input').value;
    let numberInputDecimal = parseFloat(numberInput).toFixed(2)
    rowClonePrice.innerHTML = `<span>${numberInputDecimal}</span>`
    
    document.querySelector('.input-form input').value = ''
  }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }
});
