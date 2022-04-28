// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  let result = Number(price.innerText) * Number(quantity.value);
  
  subtotal.textContent = result
  return subtotal.innerText

  /* 
  ---modo de kain---
  const price = product.querySelector('.price span');
  const cuantity = product.querySelector('.quantity input');
  const priceValue = parseFloat(price.innerText)
  const quantityValue = quantity.valueAsNumber;

  const subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subtotalValue;
  return subtotalValue;
  */
}


function calculateAll() {
  // ITERATION 2
  let sum = 0;
  const allProducts = document.querySelectorAll('.product')
  
  allProducts.forEach(element => {
   let testing =  updateSubtotal(element)
    sum += Number(testing)
  })
  /* 
  ---modo da kain---
  const products = document.getElementsByClassName('product');
  let totalValue = 0
  for (let product of products) {
    totalValue += updateSubtotal(product)
  }
  */

  // ITERATION 3
  let totalNum = document.querySelector('#total-value > span')
  totalNum.textContent = sum
  /* 
  ---modo de kain---
  document.querySelector('#total-value span').innerHTML = totalValue
  */
  
}

// ITERATION 4
function removeProduct(event) {
  //---modo de kain---
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  const parent = row.parentNode

  parent.removeChild(row);

  calculateAll()

/*
  ---mi codigo que solo borraba los que no fueron creados---
  const target = event.currentTarget;
  console.log('testing');
  target.parentNode.parentNode.remove()
*/
}


// ITERATION 5

//---modo de kain---

function createProduct() {
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);
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
  const parent = document.querySelector('#cart tbody');
  parent.appendChild(newTableRow);
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;

  /*
  ---mi codigo que si funciona pero deja el lab en rojo---

  const createBtn = document.querySelector('#create');
  const tbody = document.querySelector('tbody');
  const price = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]');
  const testing = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]')
  
  createBtn.addEventListener('click', createProduct = () => {
    tbody.innerHTML += `
    <tr class="product">
      <td class="name">
        <span>${testing.value}</span>
      </td>
     <td class="price">$<span>${price.value}</span></td>
     <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
     </td>
     <td class="subtotal">$<span>0</span></td>
     <td class="action">
      <button class="btn btn-remove">Remove</button>
     </td>
    </tr>`
  })
  */
}
createProduct()

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  const removeBotton = document.querySelectorAll('.btn-remove')
  removeBotton.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
  
});

