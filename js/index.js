// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');

  //const cal= (quantity.value) * Number(price.innerText)
  //subTotal.innerText= cal;

  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  const subTotalValue = priceValue * quantityValue;

  subTotal.innerText = subTotalValue.toFixed(2);

  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalValue = 0;

  const allProducts = document.querySelectorAll('.product');

  /*allProducts.forEach(element => {
  subTotalValue=updateSubtotal(element)
  sum += subTotalValue
  
});*/

  for (let product of allProducts) {
    totalValue += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;

  parent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");

  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product ';
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
            <button class="btn btn-remove">Remove</button>
          </td>
  
  `
const parent=document.querySelector('#cart tbody')

parent.appendChild(newTableRow)

const removeBtn =newTableRow.querySelector('.btn-remove')
removeBtn.addEventListener('click',removeProduct)

newProdNameValue.value= '';
newProdPriceValue.value= 0



}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let btn of removeBtn) {
    btn.addEventListener('click', removeProduct);
  }

  const createBtn= document.getElementById('create')

  if (createBtn){
    createBtn.addEventListener('click',createProduct)

  }


  //... your code goes here
});
