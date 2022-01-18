// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {

  let price = Number(product.querySelector('.price span').innerHTML)
  let quantity = product.querySelector('.quantity input').value
  let subtotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotal
  console.log(subtotal)
  return subtotal
}

function calculateAll() {
  // ITERATION 2
  
  const products = document.getElementsByClassName('product')
  let totalValue = 0
  for (let prod of products){
    totalValue += updateSubtotal(prod);
  }

  // ITERATION 3

 document.querySelector('#total-value span').innerText = totalValue
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = target.parentNode.parentNode
  const parent = row.parentNode
  console.log('The parent whose child is removed', parent, "intermediary parent is", row );
  parent.removeChild(row)
  
calculateAll()


}

// ITERATION 5


function createProduct (event){
const createRow = document.querySelector('create-product');
let newProdNameInput = createRow.querySelector('input[type=text]');
let newProdNameValue = newProdNameInput.value;
let newProdPriceInput = createRow.querySelector('input[type=number]');
let newProdPriceValue = Number(newProdPriceInput.valueAsNumber);

const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;
// clear the input fields in the creation form.}

newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {

const removeBtns = document.querySelectorAll(".btn-remove")
for (let removeBtn of removeBtns) {
  removeBtn.addEventListener('click', removeProduct)
}



  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createBtn = document.getElementById('create')
   if (createBtn) {
  createBtn.addEventListener('click', createProduct);
}
});
