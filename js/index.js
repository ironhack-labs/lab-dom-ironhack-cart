// ITERATION 1


function updateSubtotal(product) {
const price = product.querySelector('.price span').innerHTML;
const quantity = product.querySelector('.quantity')
const quantityValue= quantity.querySelector('input').value;
const subtotal = price * quantityValue;
const subtotalField = product.querySelector('.subtotal span');
subtotalField.innerHTML = subtotal;
return subtotal;
}

function calculateAll() {
let totalValue = document.querySelector('#total-value span')
const productToPass = document.getElementsByClassName('product');
let sumOfSubtotals = 0;
for (let i = 0; i < productToPass.length; i++) {
sumOfSubtotals += updateSubtotal(productToPass[i])
totalValue.innerHTML = sumOfSubtotals;
}

 /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode.parentNode;
  parent.removeChild(target.parentNode.parentNode)
  calculateAll()
}
  //... your code goes here
/*
function testRow() {
  const newRow = document.getElementById('cart');
  newRow.insertRow(-1)
  console.log(newRow)
}
testRow()*/

// ITERATION 5

function createProduct(event) {
  const targetName = document.querySelector('.create-product').querySelector('input[type="text"]')
  let nameValue = targetName.value;
  let priceInput = document.querySelector('.create-product').querySelector('input[type="number"]')
  let priceValue = parseFloat(priceInput.value).toFixed(2)
  console.log(nameValue + priceValue)
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode.parentNode.parentNode;
  const tableRows = document.getElementsByTagName('tbody')[0];
  let newRow = tableRows.insertRow(-1)
  newRow.innerHTML = `<tr class="product">
  <td class="name">
    <span>${nameValue}</span>
  </td>
  <td class="price">$<span>${priceValue}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
 
</tr>`;

  console.log(tableRows);
  //tableRows.classList.add('product')
  calculateAll();
  nameValue = ''
  priceValue = ''
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  removeBtn.forEach(function (button) {
    button.addEventListener('click', removeProduct)
    console.log(removeBtn)
  })

  const addBtn = document.querySelector('#create');
   addBtn.addEventListener('click', createProduct)

  //... your code goes here
});
